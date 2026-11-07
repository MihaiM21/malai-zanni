const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 8080;
const LEADERBOARD_FILE = path.join(__dirname, 'leaderboard.json');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.json': 'application/json; charset=utf-8',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.svg': 'image/svg+xml'
};

const DEFAULT_SCORES = [
  // ANDI LA IESC (CORPUL V)
  { id: 'seed-andi-1', name: 'Andi [IESC Master]', game: 'andi', meters: 2480, coins: 185, date: '2026-11-06 18:30' },
  { id: 'seed-andi-2', name: 'Decanul IESC', game: 'andi', meters: 1940, coins: 142, date: '2026-11-06 17:15' },
  { id: 'seed-andi-3', name: 'Prof. de SDA', game: 'andi', meters: 1420, coins: 96, date: '2026-11-06 16:40' },
  { id: 'seed-andi-4', name: 'Student Restanțier', game: 'andi', meters: 980, coins: 68, date: '2026-11-06 15:10' },
  { id: 'seed-andi-5', name: 'Portarul Corp V', game: 'andi', meters: 650, coins: 45, date: '2026-11-06 14:00' },
  { id: 'seed-andi-6', name: 'Poliția Brașov', game: 'andi', meters: 410, coins: 28, date: '2026-11-06 12:20' },

  // MĂLAI RUNNER - SUBWAY
  { id: 'seed-sub-1', name: 'Marius Mălai', game: 'subway', meters: 3120, coins: 240, date: '2026-11-06 17:50' },
  { id: 'seed-sub-2', name: 'Zannidache', game: 'subway', meters: 2850, coins: 215, date: '2026-11-06 16:20' },
  { id: 'seed-sub-3', name: 'Speedy_Bucharest', game: 'subway', meters: 1760, coins: 130, date: '2026-11-06 15:45' },
  { id: 'seed-sub-4', name: 'Metroul Pantelimon', game: 'subway', meters: 1150, coins: 82, date: '2026-11-06 13:10' },
  { id: 'seed-sub-5', name: 'Inspector RATB', game: 'subway', meters: 720, coins: 50, date: '2026-11-06 11:05' },

  // MĂLAI RUNNER - TEMPLE RUN
  { id: 'seed-tmp-1', name: 'Zanni Campionul', game: 'temple', meters: 2940, coins: 195, date: '2026-11-06 18:10' },
  { id: 'seed-tmp-2', name: 'Marius Cazador', game: 'temple', meters: 2210, coins: 160, date: '2026-11-06 16:55' },
  { id: 'seed-tmp-3', name: 'Aventurier Carpați', game: 'temple', meters: 1580, coins: 110, date: '2026-11-06 14:30' },
  { id: 'seed-tmp-4', name: 'Explorator Brașov', game: 'temple', meters: 890, coins: 65, date: '2026-11-06 12:00' }
];

function getLeaderboard() {
  try {
    if (!fs.existsSync(LEADERBOARD_FILE)) {
      fs.writeFileSync(LEADERBOARD_FILE, JSON.stringify(DEFAULT_SCORES, null, 2), 'utf8');
      return DEFAULT_SCORES;
    }
    const data = fs.readFileSync(LEADERBOARD_FILE, 'utf8');
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : DEFAULT_SCORES;
  } catch (e) {
    console.error('Error reading leaderboard file:', e);
    return DEFAULT_SCORES;
  }
}

function saveLeaderboard(list) {
  try {
    fs.writeFileSync(LEADERBOARD_FILE, JSON.stringify(list, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.error('Error saving leaderboard file:', e);
    return false;
  }
}

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // API ROUTE: GET /api/leaderboard
  if (req.method === 'GET' && pathname === '/api/leaderboard') {
    const list = getLeaderboard();
    const gameFilter = parsedUrl.query.game;
    const sortBy = parsedUrl.query.sort || 'meters'; // 'meters' or 'coins'
    
    let filtered = list;
    if (gameFilter && gameFilter !== 'all') {
      filtered = filtered.filter(item => item.game === gameFilter);
    }

    if (sortBy === 'coins') {
      filtered.sort((a, b) => (b.coins || 0) - (a.coins || 0) || (b.meters || 0) - (a.meters || 0));
    } else {
      filtered.sort((a, b) => (b.meters || 0) - (a.meters || 0) || (b.coins || 0) - (a.coins || 0));
    }

    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ success: true, scores: filtered }));
    return;
  }

  // API ROUTE: POST /api/leaderboard
  if (req.method === 'POST' && pathname === '/api/leaderboard') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      if (body.length > 100000) req.destroy(); // Prevent flood
    });

    req.on('end', () => {
      try {
        const payload = JSON.parse(body || '{}');
        let name = (payload.name || 'ANONIM').toString().trim().replace(/[<>]/g, '');
        if (!name) name = 'ANONIM';
        if (name.length > 20) name = name.substring(0, 20);

        const game = ['andi', 'subway', 'temple'].includes(payload.game) ? payload.game : 'subway';
        const meters = Math.max(0, parseInt(payload.meters, 10) || 0);
        const coins = Math.max(0, parseInt(payload.coins, 10) || 0);

        const now = new Date();
        const dateStr = now.toISOString().replace('T', ' ').substring(0, 16);

        const newEntry = {
          id: 'score_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
          name,
          game,
          meters,
          coins,
          date: dateStr
        };

        const list = getLeaderboard();
        list.push(newEntry);
        saveLeaderboard(list);

        // Calculate rank in this game
        const gameScores = list.filter(i => i.game === game);
        const rankMeters = gameScores.filter(i => (i.meters || 0) > meters).length + 1;
        const rankCoins = gameScores.filter(i => (i.coins || 0) > coins).length + 1;

        res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({
          success: true,
          entry: newEntry,
          rankMeters,
          rankCoins,
          totalInGame: gameScores.length
        }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, error: 'Invalid JSON payload' }));
      }
    });
    return;
  }

  // STATIC FILE SERVING
  let reqUrl = pathname;
  if (reqUrl === '/') reqUrl = '/index.html';

  const filePath = path.join(__dirname, reqUrl);
  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Server Error: ' + err.code);
      }
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Content-Length': content.length,
        'Accept-Ranges': 'bytes'
      });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  // Pre-seed leaderboard if missing
  getLeaderboard();
});

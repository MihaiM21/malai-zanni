const fs = require('fs');
const path = require('path');

const mB64 = fs.readFileSync(path.join(__dirname, 'assets', 'marius.png')).toString('base64');
const zB64 = fs.readFileSync(path.join(__dirname, 'assets', 'zanni.png')).toString('base64');

const content = `window.CHARACTER_ASSETS = {
  marius: "data:image/png;base64,${mB64}",
  zanni: "data:image/png;base64,${zB64}"
};
`;

fs.writeFileSync(path.join(__dirname, 'assets', 'textures.js'), content, 'utf8');
console.log('Successfully wrote assets/textures.js! Total length:', content.length);

# 🏃 MĂLAI RUNNER: Subway Surfers & Temple Run 🐆
**Endless Runner 3D Web Game (2 Moduri de Joc Distincte)**

Un joc complet 3D construit de la zero în Three.js și HTML5/CSS3/JavaScript, optimizat pentru 60 FPS atât pe Desktop cât și pe Dispozitive Mobile.

---

## 🎮 Diferențele dintre cele 2 Moduri de Joc

### 1. 🚇 MODUL SUBWAY SURFERS („Goana Urbană”)
- **Sistem de Coloane Fixe**: 3 benzi paralele de metrou (`Stânga - Centru - Dreapta`).
- **Comenzi**: Schimbare discretă de bandă cu `A` / `D` sau `←` / `→` (salt direct între cele 3 coloane).
- **Decor**: Șine de tren, vagoane de metrou albastre, bariere rutiere roșu-alb, conuri de trafic și clădiri urbane neon.
- **Muzică**: Beat alert Trap / Electro cu 808 kick și hi-hats.

### 2. 🗿 MODUL TEMPLE RUN („Templul Străbun”)
- **UN SINGUR DRUM CONTINUU**: Fără 3 coloane! Este o singură potecă îngustă de piatră sculptată, suspendată peste o prăpastie fără fund.
- **Control Analogic Fin pe Lățimea Drumului**:
  - Te miști lin la stânga și la dreapta pe suprafața drumului (`Ține apăsat A / D` sau `← / →` sau drag cu degetul pe ecran).
  - **Atenție la Margini**: Dacă virezi prea mult în exterior (`X > 2.6`), personajul **cade de pe marginea drumului în prăpastie**!
- **Viraje la 90 de Grade la Intersecții (Cornering)**:
  - Drumul cotește brusc la 90° spre stânga sau spre dreapta!
  - Când ajungi la viraj, apare o săgeată mare verde sculptată în dale (`↩️ VIREAZĂ ACUM!`).
  - Apasă `A` / `←` sau `D` / `→` (sau swipe) exact la colț pentru a lua curba la 90° cu rotire dinamică de cameră!
  - Dacă mergi înainte și ratezi virajul, cazi în abis!
- **Obstacole pe tot Drumul**:
  - Goluri în podea (prăpăstii rupte în piatră) peste care trebuie să sari.
  - Trunchiuri groase de copac și rădăcini peste care trebuie să sari.
  - Arcade joase de piatră pe sub care trebuie să aluneci (`S` / `↓`).
- **Colectabile**: Idoli de smarald (💎) plasați în curbe line de-a lungul drumului, necesitând virare fină pentru a fi culeși.
- **Muzică**: Percuții tribale africane/Taiko și tobe adânci de junglă.

---

## 🎭 Personaje & Asemănare cu Pozele
- **Marius Matei**:
  - Sacou bleumarin croit elegant (*navy blazer*).
  - Guler înalt alb (*white turtleneck*) modelat 3D.
  - Portretul real decupat HD cu zâmbetul cald și tunsoarea din poză.
- **Zannidache**:
  - Părul emblematic 3D bicolour (jumătate blond decolorat, jumătate negru intens).
  - Lanț gros cubanez de aur + lanț masiv de argint în jurul gâtului.
  - Tatuaje faciale (*MCMXCI*, hexagramă pe tâmplă, *under* pe pomete) și tatuaje de gât.
- **Selector de Stil Grafic**:
  - `3D Stylized Pro`: Model 3D articulat, cu unghi dinamic 3/4 pentru a vedea fața în timp ce aleargă.
  - `✨ 2.5D HD Foto-Cutout`: Decupaj din fotografiile reale în format billboard animat, 100% fidel pozelor!

---

## 🕹️ Controale
| Mod Joc | Mișcare Orizontală | Săritură | Alunecare | Viraj 90° la Intersecție |
| :--- | :--- | :--- | :--- | :--- |
| **Subway Surfers** | `A` / `D` (schimbă banda) | `W` / `↑` / `Space` | `S` / `↓` | N/A |
| **Temple Run** | Ține apăsat `A` / `D` (ghidare fină) | `W` / `↑` / `Space` | `S` / `↓` | `A` / `D` sau Swipe la colț |

---

## 🚀 Cum se pornește
Deschide direct fișierul `index.html` în browser sau pornește serverul local:

```bash
cd d:\Programming\malai-zanni
node server.js
```
Apoi accesează: **`http://localhost:8080/`**

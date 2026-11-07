# 🕹️ MĂLAI CLUB: Retro Arcade & Runners
**Colecție Retro-Arcade 3D (Stil Minimalist Puddle Club)**

Aplicație completă retro-arcade construită de la zero în Three.js și HTML5/CSS3/JavaScript, cu o paletă minimalistă **Pool Blue (`#72E6FF`)**, **Arcade Ink (`#182644`)** și **Bubblegum Pink (`#FF5276`)**, fără elemente generice (zero glassmorphism sau degradé-uri mov).

---

## 🕹️ Cartușe / Jocuri Disponibile în Hub

### 1. 🏃 Cartridge 01: MĂLAI RUNNER (Subway Surfers & Temple Run)
- **Subway Surfers**: 3 benzi paralele de metrou (`Stânga - Centru - Dreapta`), vagoane de metrou, bariere rutiere, monede de aur și mălai.
- **Temple Run**: O singură potecă îngustă suspendată peste abis, ghidare analogică fină, viraje la 90° la intersecții cu rotire de cameră, și idoli de smarald.
- Personaje: **Marius Matei** (costum bleumarin, guler înalt alb) & **Zannidache** (tatuaje faciale, păr bicolor, lanțuri de aur).

---

### 2. 🚓 Cartridge 02: ANDI LA IESC - CORPUL V (Marea Evadare)
- **Gameplay Urmărire pe Holurile Facultății IESC (UniTBv Brașov - Corpul V)**:
  - **Andi** sprintează pe gresia lustruită a Corpului V cu sacul de mălai și subiectele de examen în spate!
  - **Poliția (3D Police Cruiser)** a intrat direct pe holurile etajului 1 printre laboratoare, cu **sirenele roșu-albastru aprinse la 14Hz** și reflectoare în ecou pe pereți.
  - **Decor Autentic Corpul V IESC (Str. Mihai Viteazul 5)**:
    - Săli și laboratoare de calculatoare cu plăcuțe specifice: `LAB V.I.1 CALCULATOARE`, `AMFITEATRUL V.I.2`, `LAB V.I.3 REȚELE`, `DECANAT IESC`, `SECRETARIAT`.
    - Lambriu lavabil albastru UniTBv, tavan casetat cu neoane lungi fluorescente și jgheaburi cu cabluri de rețea.
    - Aviziere pe pereți cu liste de restanțe („SDA - Colocviu: Andi PICAT”), orare și anunțuri de licență.
  - **Obstacole Universitare Specifice**:
    - **Bănci de hol din lemn cu ghiozdane și cursuri de calculatoare** (Sari peste ele cu `W` / `Space`).
    - **Cabluri de rețea UTP suspendate & Banner IESC** (Alunecă pe sub ele cu `S` / `↓`).
    - **Faimoasele automate de cafea de 2 lei de la Corpul V** (Blocaj complet de bandă - schimbă banda rapid).
    - **Cărucioare de curățenie cu mop & con galben „Podea Umedă Corpul V”** (Sari peste ele).
    - **Credite ECTS & Mălai (`🎓`)** colectabile de pe hol.
  - **Suport Foto Drop-In**:
    - Sistemul este 100% pregătit pentru fotografii reale cu Andi! Adaugă `assets/andi.png` sau setează `window.CHARACTER_ASSETS.andi` și fața lui reală va fi decupată și aplicată instant.

---

### 3. 🥊 Cartridge 03: MĂLAI ARENA (În Lucru)
- Dueluri comice 1 la 1 între celebrități, replici vocale legendare și atacuri speciale cu mălai.

---

## 🎮 Controale
| Acțiune | Tastatură Desktop | Dispozitive Mobile / Touch |
| :--- | :--- | :--- |
| **Schimbare Bandă (Stânga / Dreapta)** | `A` / `D` sau `←` / `→` | Swipe Stânga / Dreapta sau Butoane Touch |
| **Săritură (Jump)** | `W` / `↑` / `Space` | Swipe Sus sau Buton Salt |
| **Alunecare (Slide)** | `S` / `↓` | Swipe Jos sau Buton Alunecare |
| **Pauză** | `Escape` | Buton Pauză (dreapta-sus) |

---

## 🚀 Cum se pornește
Pornește serverul local din terminal:
```bash
node server.js
```
Apoi deschide în browser:
👉 **`http://localhost:8080/`**

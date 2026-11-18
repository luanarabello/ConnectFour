# Connect Four

**Connect Four** is a classic strategy and turn-based board game built in **React**.
Drop the colored tokens strategically, **take advantage of hidden bonus slots for extra turns**, and be the first to align **4 tokens** horizontally, vertically, or diagonally before the turn timer runs out.

---

## Gameplay & Mechanics

- **Two Game Modes:** Play solo against an automated **Robot** opponent or compete locally in **2 Players** mode with customizable player nicknames.
- **Drop & Stack Mechanics:** Select any column using the top arrows to drop a token into the lowest available row.
- **Turn Timer:** Each player has a **10-second countdown** per move. If the timer reaches zero, the turn automatically passes to the opponent.
- **Win & Draw Detection:** Automatically detects 4-in-a-row victories in any direction (vertical, horizontal, and both diagonals) as well as full-board draws, with a quick **Play Again** option.
> ⭐ **Special Bonus Slots:** At the start of each match, **5 hidden special slots** are randomly placed across the board. Landing a token on one grants an **extra turn** immediately.
---

## Key Features

- **Randomized Token Colors:** Each match randomly assigns two distinct token designs from 6 available SVG colors (`cian`, `green`, `orange`, `pink`, `red`, and `yellow`).
- **Live Turn Indicator & Control Panel:** Displays both players' nicknames, assigned token icons, an active-turn arrow indicator, and the live 10-second turn timer.
- **Turn-Locked Controls:** Input is automatically disabled during the Robot's turn and after a match ends to prevent invalid moves.

---

## Tech Stack

- **React 19.1.0** (`react`, `react-dom`)
- **Create React App** (`react-scripts` 5.0.1)
- **JavaScript (ES6+) / JSX**
- **CSS3 & SVG**

---

## Authors

- **Luana Rabello (@luanarabello)**
- **Maria Capitão (@mariagcpcapitao)**

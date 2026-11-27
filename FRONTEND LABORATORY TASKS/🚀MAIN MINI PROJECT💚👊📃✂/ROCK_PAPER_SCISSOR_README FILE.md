<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:000000,50:ff1493,100:000000&height=240&section=header&text=Rock%20Paper%20Scissors&fontSize=50&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=%E2%9C%8A%20%20%E2%9C%8B%20%20%E2%9C%8C%EF%B8%8F%20%20Play%20Against%20the%20Computer&descAlignY=60&descSize=20" width="100%"/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=FF1493&center=true&vCenter=true&width=650&lines=Hi%2C+I%27m+Anurag+Prajapati+%F0%9F%91%8B;A+Game+Built+With+HTML+%2B+CSS+%2B+JavaScript;Neon+Pink+%F0%9F%92%97+%26+Black+%F0%9F%96%A4+Theme;Can+You+Beat+the+Computer%3F+%F0%9F%8E%AE" alt="Typing SVG" />

<br/>

![HTML5](https://img.shields.io/badge/HTML5-000000?style=for-the-badge&logo=html5&logoColor=ff1493)
![CSS3](https://img.shields.io/badge/CSS3-000000?style=for-the-badge&logo=css3&logoColor=ff69b4)
![JavaScript](https://img.shields.io/badge/JavaScript-000000?style=for-the-badge&logo=javascript&logoColor=ff1493)
![Game](https://img.shields.io/badge/Type-Game-ff1493?style=for-the-badge&labelColor=000000)
![Library](https://img.shields.io/badge/Libraries-None-ff69b4?style=for-the-badge&labelColor=000000)
![Made with Love](https://img.shields.io/badge/Made%20with-%F0%9F%92%97-ff1493?style=for-the-badge&labelColor=000000)

<br/>

### ✊ &nbsp;&nbsp; ✋ &nbsp;&nbsp; ✌️

</div>

---

## 💗 About The Game

Hey! Main **Anurag Prajapati** hoon 👋

**Rock Paper Scissors** ek classic game hai jo maine **sirf HTML, CSS aur JavaScript** se banaya hai, bina kisi framework ya library ke. Aap computer ke against khelte ho, computer **random choice** karta hai, aur result **Win 🎉 / Lose 😢 / Draw 🤝** ke roop me scoreboard par live dikhta hai.

> 🖤 *"Simple game, powerful concepts."* — Anurag

---

## 📑 Table of Contents

- [Preview](#-preview)
- [Features](#-features)
- [Game Rules](#-game-rules)
- [How The Game Works](#-how-the-game-works)
- [Code Highlights](#-code-highlights)
- [Folder Structure](#-folder-structure)
- [How to Run](#-how-to-run)
- [Tech Stack](#-tech-stack)
- [Concepts Used](#-concepts-used)
- [What I Learned](#-what-i-learned)
- [Future Improvements](#-future-improvements)
- [About the Author](#-about-the-author)

---

## 🎬 Preview

Game ka layout kuch aisa dikhta hai:

```text
┌──────────────────────────────────────┐
│            ✊  ✋  ✌️                  │
│        ROCK PAPER SCISSORS           │
│        PLAY AGAINST COMPUTER         │
│                                      │
│   ┌───────┐  ┌───────┐  ┌─────────┐  │
│   │  YOU  │  │ DRAW  │  │COMPUTER │  │
│   │   3   │  │   1   │  │    2    │  │
│   └───────┘  └───────┘  └─────────┘  │
│                                      │
│      ✋   VS   ✊                      │
│     YOU       COMPUTER               │
│                                      │
│          You Win! 🎉                 │
│                                      │
│       (✊)    (✋)    (✌️)            │
│                                      │
│          [ Reset Score ]             │
│       Created by Anurag 💗           │
└──────────────────────────────────────┘
```

> 📸 **Tip:** Apna asli screenshot lekar `screenshot.png` naam se is folder me daalo, phir niche wali line se README me dikha sakte ho:
> `![Game Screenshot](screenshot.png)`

---

## ✨ Features

| | Feature | Detail |
|:-:|:--------|:-------|
| 🎮 | **Play vs Computer** | Computer har baar random choice karta hai |
| 📊 | **Live Scoreboard** | YOU, DRAW aur COMPUTER ka score alag-alag |
| 🎯 | **Instant Result** | Win, Lose ya Draw message turant dikhta hai |
| 🎨 | **Color-coded Result** | Jeet = 💚 hara, Haar = ❤️ laal, Draw = 💗 pink |
| ✨ | **Pop Animation** | Har round me emojis halka sa pop hote hain |
| 💡 | **Neon Glow UI** | Pink glowing card, buttons aur scoreboard |
| 🖱️ | **Hover Effects** | Button par mouse le jao to bada hoke glow karta hai |
| 🔄 | **Reset Button** | Ek click me poora score zero |
| 📱 | **Responsive** | Mobile aur desktop dono par sahi dikhta hai |
| 🪶 | **Lightweight** | Sirf ek `.html` file, koi library ya internet nahi chahiye |

---

## 📜 Game Rules

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#1a0010','primaryTextColor':'#ffffff','primaryBorderColor':'#ff1493','lineColor':'#ff69b4','fontFamily':'Arial'}}}%%
flowchart LR
    R(["✊ Rock"]) -- "beats" --> S(["✌️ Scissors"])
    S -- "beats" --> P(["✋ Paper"])
    P -- "beats" --> R

    style R fill:#1a0010,stroke:#ff1493,color:#ff69b4,stroke-width:3px
    style S fill:#1a0010,stroke:#ff1493,color:#ff69b4,stroke-width:3px
    style P fill:#1a0010,stroke:#ff1493,color:#ff69b4,stroke-width:3px
```

| Aap ✔️ | Computer 🤖 | Result |
|:------:|:-----------:|:------:|
| ✊ Rock | ✌️ Scissors | 🎉 **You Win** |
| ✋ Paper | ✊ Rock | 🎉 **You Win** |
| ✌️ Scissors | ✋ Paper | 🎉 **You Win** |
| ✊ Rock | ✋ Paper | 😢 **You Lose** |
| ✋ Paper | ✌️ Scissors | 😢 **You Lose** |
| ✌️ Scissors | ✊ Rock | 😢 **You Lose** |
| Same choice | Same choice | 🤝 **Draw** |

---

## 🔄 How The Game Works

### 1️⃣ Poora Game Flow

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#1a0010','primaryTextColor':'#ffffff','primaryBorderColor':'#ff1493','lineColor':'#ff69b4','fontFamily':'Arial'}}}%%
flowchart TD
    A([🎮 Game Starts]) --> B[Player clicks ✊ ✋ or ✌️]
    B --> C["play(userChoice) runs"]
    C --> D["Computer picks random number 0, 1 or 2"]
    D --> E["Number becomes rock, paper or scissors"]
    E --> F{Same choice?}
    F -- Yes --> G["🤝 Draw: draw++"]
    F -- No --> H{Player beats computer?}
    H -- Yes --> I["🎉 Win: you++"]
    H -- No --> J["😢 Lose: comp++"]
    G --> K["showResult() updates screen"]
    I --> K
    J --> K
    K --> L["Emojis, message and scoreboard updated"]
    L --> B

    style A fill:#ff1493,stroke:#ffffff,color:#ffffff,stroke-width:2px
    style F fill:#000000,stroke:#ff69b4,color:#ff69b4
    style H fill:#000000,stroke:#ff69b4,color:#ff69b4
    style I fill:#0f3d24,stroke:#4ade80,color:#4ade80
    style J fill:#3d0f0f,stroke:#ff6b6b,color:#ff6b6b
    style G fill:#1a0010,stroke:#ff69b4,color:#ff69b4
    style K fill:#ff69b4,stroke:#ffffff,color:#000000
```

### 2️⃣ Click Se Result Tak (Sequence)

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#1a0010','primaryTextColor':'#ffffff','primaryBorderColor':'#ff1493','lineColor':'#ff69b4','actorBkg':'#1a0010','actorBorder':'#ff1493','actorTextColor':'#ff69b4','signalColor':'#ff69b4','signalTextColor':'#ffffff','noteBkgColor':'#ff1493','noteTextColor':'#ffffff','fontFamily':'Arial'}}}%%
sequenceDiagram
    actor U as 👤 Player
    participant B as 🔘 Button
    participant P as ⚙️ play()
    participant S as 🖥️ showResult()
    participant D as 📄 Screen (DOM)

    U->>B: Clicks ✊ Rock
    B->>P: onclick calls play("rock")
    P->>P: Math.random() picks computer choice
    P->>P: Compare with if / else if / else
    P->>S: Send userChoice, compChoice, result
    S->>D: Update emojis (innerText)
    S->>D: Update message and color
    S->>D: Update scoreboard
    D-->>U: Result visible instantly ✨
```

### 3️⃣ Computer Ka Choice Fair Hai (1/3 Chance)

```mermaid
%%{init: {'theme':'base','themeVariables':{'pie1':'#ff1493','pie2':'#ff69b4','pie3':'#7a0a45','pieTitleTextColor':'#ff69b4','pieSectionTextColor':'#ffffff','pieLegendTextColor':'#ff69b4','pieStrokeColor':'#000000','pieOuterStrokeColor':'#ff1493','fontFamily':'Arial'}}}%%
pie showData title Computer Choice Probability
    "✊ Rock" : 33
    "✋ Paper" : 33
    "✌️ Scissors" : 34
```

### 4️⃣ Game States

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#1a0010','primaryTextColor':'#ffffff','primaryBorderColor':'#ff1493','lineColor':'#ff69b4','fontFamily':'Arial'}}}%%
stateDiagram-v2
    [*] --> Ready: Page loads
    Ready --> Win: Player beats computer
    Ready --> Lose: Computer beats player
    Ready --> Draw: Same choice
    Win --> Win: Play again
    Win --> Lose: Play again
    Win --> Draw: Play again
    Lose --> Win: Play again
    Lose --> Lose: Play again
    Lose --> Draw: Play again
    Draw --> Win: Play again
    Draw --> Lose: Play again
    Draw --> Draw: Play again
    Win --> Ready: Reset Score
    Lose --> Ready: Reset Score
    Draw --> Ready: Reset Score
```

---

## 💡 Code Highlights

### 🎲 Computer Ka Random Choice

```javascript
let randomNumber = Math.floor(Math.random() * 3);   // 0, 1 ya 2
let compChoice = choices[randomNumber];             // rock, paper ya scissors
```

### 🏆 Jeetne Ke Rules

```javascript
if (userChoice === compChoice) {
    result = "draw";
    draw++;
}
else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
) {
    result = "win";
    you++;
}
else {
    result = "lose";
    comp++;
}
```

### 🎨 CSS Variables (Poori Theme Ek Jagah Se)

```css
:root {
    --bg: #000000;
    --card: #151515;
    --pink: #ff1493;
    --pink-light: #ff69b4;
}
```

### ✨ Neon Glow Effect

```css
.game {
    border: 1px solid var(--pink);
    box-shadow: 0 0 25px rgba(255, 20, 147, 0.4);
}
```

---

## 📂 Folder Structure

```bash
📦 rock-paper-scissors
 ┣ 📜 rock-paper-scissors.html   # 🎮 Poora game (HTML + CSS + JS)
 ┗ 📜 README.md                  # 📖 You are here
```

---

## 🚀 How to Run

**Option 1: Direct (Sabse easy)**

1. Repository **download** ya **clone** karo
2. `rock-paper-scissors.html` par **double-click** karo
3. Browser me game khul jayega, bas khelo! 🎉

**Option 2: Git Clone**

```bash
git clone https://github.com/YOUR_USERNAME/rock-paper-scissors.git
cd rock-paper-scissors
```

Phir `rock-paper-scissors.html` ko browser me open karo.

**Option 3: VS Code Live Server**

1. VS Code me folder open karo
2. **Live Server** extension install karo
3. File par right-click → **Open with Live Server**

**Option 4: GitHub Pages (Online Game Link)** 🌐

1. Repo ki file ka naam `index.html` rakh do
2. **Settings → Pages** me jao
3. Branch **main** chuno aur **Save** karo
4. Kuch minute baad game ka live link mil jayega:
   `https://YOUR_USERNAME.github.io/rock-paper-scissors/`

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Use |
|:----------:|:----|
| ![HTML5](https://img.shields.io/badge/HTML5-ff1493?style=for-the-badge&logo=html5&logoColor=white) | Game ka structure (buttons, scoreboard, arena) |
| ![CSS3](https://img.shields.io/badge/CSS3-ff69b4?style=for-the-badge&logo=css3&logoColor=white) | Neon design, Flexbox, Grid, animations |
| ![JavaScript](https://img.shields.io/badge/JavaScript-000000?style=for-the-badge&logo=javascript&logoColor=ff1493) | Game logic, random choice, score update |

</div>

---

## 🧠 Concepts Used

| Concept | Kahan use hua |
|:--------|:--------------|
| `Math.random()` aur `Math.floor()` | Computer ka random choice |
| Arrays | `choices = ["rock", "paper", "scissors"]` |
| Objects | `emoji = { rock: "✊", ... }` |
| `if / else if / else` | Win, Lose, Draw decide karna |
| `&&` aur `\|\|` operators | Jeetne ke rules jodna |
| Functions | `play()`, `showResult()`, `resetGame()` |
| DOM Manipulation | `getElementById`, `innerText`, `classList` |
| Events | `onclick` se button click pakadna |
| CSS Variables | Poori theme ek jagah se control |
| Flexbox aur Grid | Layout aur scoreboard |
| `box-shadow` aur `text-shadow` | Neon glow effect |
| `transition` aur `@keyframes` | Hover aur pop animation |

---

## 📚 What I Learned

- 🎯 **Event handling**: button click par function chalana
- 🎲 **Random numbers**: `Math.random()` se fair choice banana
- 🧩 **Logic building**: win, lose aur draw ke rules code me likhna
- 🖥️ **DOM manipulation**: JavaScript se screen ka text aur color badalna
- 🎨 **CSS design**: gradients, glow effect, animations, CSS variables
- 🔁 **Reflow trick**: `offsetWidth` se animation dobara chalana
- 🐛 **Thinking in edge cases**: draw, reset aur baar-baar click

---

## 🔮 Future Improvements

- [ ] 🏅 Best of 5 round mode
- [ ] 💾 Score ko `localStorage` me save karna
- [ ] 🔊 Click aur win/lose sound effects
- [ ] ⌨️ Keyboard keys (R, P, S) se khelna
- [ ] 🧠 Smart computer jo pattern pakde
- [ ] 🦎 Rock Paper Scissors **Lizard Spock** mode
- [ ] 🌙 Dark / Light theme toggle
- [ ] 🏆 High score tracker

---

## 👨‍💻 About the Author

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=26&pause=1200&color=FF1493&center=true&vCenter=true&width=500&lines=Anurag+Prajapati;Web+Developer+in+Making+%F0%9F%9A%80;Learning+%7C+Building+%7C+Growing" alt="Author" />

**Anurag Prajapati**

> 💗 Passionate beginner developer jo HTML, CSS aur JavaScript se creative projects aur games banana pasand karta hai.

[![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=ff1493)](https://github.com/YOUR_USERNAME)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-000000?style=for-the-badge&logo=linkedin&logoColor=ff69b4)](https://linkedin.com/in/YOUR_LINKEDIN)
[![Email](https://img.shields.io/badge/Email-000000?style=for-the-badge&logo=gmail&logoColor=ff1493)](mailto:YOUR_EMAIL@gmail.com)

</div>

---

## ⭐ Show Your Support

Agar ye game pasand aaya to:

- ⭐ Repository ko **Star** karo
- 🍴 **Fork** karke apna version banao
- 📢 Doston ke saath **share** karo aur unhe haraao 😎

---

<div align="center">

**Made with 💗 and ☕ by [Anurag Prajapati](https://github.com/YOUR_USERNAME)**

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:000000,50:ff1493,100:000000&height=120&section=footer" width="100%"/>

</div>

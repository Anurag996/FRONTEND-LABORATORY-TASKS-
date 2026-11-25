<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:000000,50:ff1493,100:000000&height=220&section=header&text=Anurag%27s%20JS%20Mini%20Projects&fontSize=44&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Digital%20Clock%20%7C%20Calculator%20%7C%20Counter&descAlignY=58&descSize=18" width="100%"/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=FF1493&center=true&vCenter=true&width=600&lines=Hi%2C+I%27m+Anurag+Prajapati+%F0%9F%91%8B;3+Projects.+Pure+HTML+%2B+CSS+%2B+JavaScript.;Pink+%F0%9F%92%97+%26+Black+%F0%9F%96%A4+Vibes+Only." alt="Typing SVG" />

<br/>

![HTML5](https://img.shields.io/badge/HTML5-000000?style=for-the-badge&logo=html5&logoColor=ff1493)
![CSS3](https://img.shields.io/badge/CSS3-000000?style=for-the-badge&logo=css3&logoColor=ff69b4)
![JavaScript](https://img.shields.io/badge/JavaScript-000000?style=for-the-badge&logo=javascript&logoColor=ff1493)
![Projects](https://img.shields.io/badge/Projects-3-ff1493?style=for-the-badge&labelColor=000000)
![Made with Love](https://img.shields.io/badge/Made%20with-%F0%9F%92%97-ff69b4?style=for-the-badge&labelColor=000000)
![License](https://img.shields.io/badge/License-MIT-ff1493?style=for-the-badge&labelColor=000000)

</div>

---

## 💗 About This Repository

Hey! Main **Anurag Prajapati** hoon 👋

Ye repository mere **3 beginner-friendly JavaScript projects** ka collection hai. Teeno projects **bina kisi framework ya library ke**, sirf **HTML, CSS aur JavaScript** se banaye gaye hain. Har project ek single `.html` file hai, bas open karo aur chalao! 🚀

> 🖤 *"Small projects, big learning."* — Anurag

---

## 📑 Table of Contents

- [Projects Overview](#-projects-overview)
- [Project Architecture](#-project-architecture)
- [1. Digital Clock](#-1-digital-clock)
- [2. Calculator](#-2-calculator)
- [3. Counter App](#-3-counter-app)
- [Folder Structure](#-folder-structure)
- [How to Run](#-how-to-run)
- [Tech Stack](#-tech-stack)
- [What I Learned](#-what-i-learned)
- [Future Improvements](#-future-improvements)
- [About the Author](#-about-the-author)

---

## 🎀 Projects Overview

| # | Project | Description | Theme | File |
|:-:|:--------|:------------|:-----:|:-----|
| 1 | 🕒 **Digital Clock** | Live 12-hour clock with AM/PM and full date | 💗 Pink & Black | `DIGITALCLOCK.html` |
| 2 | 🧮 **Calculator** | Basic calculator with safe expression evaluation | 🌟 Gold & Black | `CALCULATOR.html` |
| 3 | 🔢 **Counter App** | Increment, decrement and reset counter | 🌟 Gold & Black | `COUNTER.html` |

---

## 🧩 Project Architecture

Teeno projects ek hi simple pattern follow karte hain: **HTML (structure) → CSS (style) → JavaScript (logic)**.

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#1a0010','primaryTextColor':'#ffffff','primaryBorderColor':'#ff1493','lineColor':'#ff69b4','secondaryColor':'#000000','tertiaryColor':'#000000','fontFamily':'Arial'}}}%%
flowchart TD
    A([👨‍💻 Anurag's JS Mini Projects]) --> B[🕒 Digital Clock]
    A --> C[🧮 Calculator]
    A --> D[🔢 Counter App]

    B --> B1[HTML: Layout]
    B --> B2[CSS: Neon Pink Glow]
    B --> B3[JS: Date + setInterval]

    C --> C1[HTML: Button Grid]
    C --> C2[CSS: Gold Theme]
    C --> C3[JS: Safe Evaluate]

    D --> D1[HTML: Count + Buttons]
    D --> D2[CSS: Card Design]
    D --> D3[JS: State Variable]

    style A fill:#ff1493,stroke:#ffffff,color:#ffffff,stroke-width:2px
    style B fill:#1a0010,stroke:#ff1493,color:#ff69b4,stroke-width:2px
    style C fill:#1a0010,stroke:#ff1493,color:#ff69b4,stroke-width:2px
    style D fill:#1a0010,stroke:#ff1493,color:#ff69b4,stroke-width:2px
```

---

## 🕒 1. Digital Clock

<div align="center">

![Status](https://img.shields.io/badge/Status-Completed-ff1493?style=flat-square&labelColor=000000)
![Type](https://img.shields.io/badge/Type-Live%20Clock-ff69b4?style=flat-square&labelColor=000000)

</div>

Ek **neon pink glow** wala live digital clock jo har second update hota hai aur current date bhi dikhata hai.

### ✨ Features

- ⏱️ Live time update **har 1 second** me
- 🌗 **24-hour → 12-hour** format conversion
- 🔤 **AM / PM** indicator
- 0️⃣ Single digit ke aage **zero padding** (`07:05:09`)
- 📅 Full date, **Indian format** (`en-IN`) me, jaise: *Wednesday, 25 November 2026*
- 💗 Pink **neon glow** text-shadow effect
- 📱 Responsive viewport support

### 🔄 How It Works

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#1a0010','primaryTextColor':'#ffffff','primaryBorderColor':'#ff1493','lineColor':'#ff69b4','fontFamily':'Arial'}}}%%
flowchart LR
    A([Page Load]) --> B[updateClock called]
    B --> C[new Date]
    C --> D[Get hours, minutes, seconds]
    D --> E{hours >= 12?}
    E -- Yes --> F[PM]
    E -- No --> G[AM]
    F --> H[Convert to 12-hour format]
    G --> H
    H --> I[padStart zero padding]
    I --> J[Show time in #clock]
    J --> K[Show date in #date]
    K --> L[[setInterval waits 1 sec]]
    L --> B

    style A fill:#ff1493,stroke:#fff,color:#fff
    style E fill:#000,stroke:#ff69b4,color:#ff69b4
    style L fill:#ff69b4,stroke:#fff,color:#000
```

### 💡 Code Highlight

```javascript
let period = hours >= 12 ? "PM" : "AM";
hours = hours % 12;
if (hours === 0) hours = 12;

hours = String(hours).padStart(2, '0');
```

---

## 🧮 2. Calculator

<div align="center">

![Status](https://img.shields.io/badge/Status-Completed-ff1493?style=flat-square&labelColor=000000)
![Type](https://img.shields.io/badge/Type-Utility-ff69b4?style=flat-square&labelColor=000000)

</div>

Ek stylish **gold & black calculator** jo basic arithmetic operations perform karta hai, aur **input validation** ke saath safe hai.

### ✨ Features

- ➕ ➖ ✖️ ➗ Addition, Subtraction, Multiplication, Division
- ⚡ **Percentage (%)** support
- 🧹 **AC** button: poora display clear
- ⌫ **DEL** button: last character delete
- 0️⃣ **00** button aur decimal point support
- 🛡️ **Regex validation**: sirf valid calculator characters allowed
- ❌ Invalid ya infinite result par **"Error"** message
- 🔢 Floating-point fix: `toFixed(10)` se clean result (e.g. `0.1 + 0.2 = 0.3`)

### 🔄 How It Works

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#1a0010','primaryTextColor':'#ffffff','primaryBorderColor':'#ff1493','lineColor':'#ff69b4','fontFamily':'Arial'}}}%%
flowchart TD
    A([User clicks buttons]) --> B[appendValue adds to display]
    B --> C{Button pressed?}
    C -- AC --> D[clearDisplay]
    C -- DEL --> E[deleteLast]
    C -- Number / Operator --> B
    C -- Equals --> F[calculate]

    F --> G{Display empty?}
    G -- Yes --> H([Return])
    G -- No --> I{Passes regex check?}
    I -- No --> J[Show Error]
    I -- Yes --> K[Evaluate expression]
    K --> L{Result finite?}
    L -- No --> J
    L -- Yes --> M[Round to 10 decimals]
    M --> N([Show Result])

    style A fill:#ff1493,stroke:#fff,color:#fff
    style J fill:#000,stroke:#ff0000,color:#ff6b6b
    style N fill:#ff69b4,stroke:#fff,color:#000
    style I fill:#000,stroke:#ff69b4,color:#ff69b4
    style L fill:#000,stroke:#ff69b4,color:#ff69b4
```

### 💡 Code Highlight

```javascript
// Only valid calculator characters are allowed
if (!/^[0-9+\-*/%.() ]+$/.test(expression)) {
    throw new Error("Invalid");
}
```

---

## 🔢 3. Counter App

<div align="center">

![Status](https://img.shields.io/badge/Status-Completed-ff1493?style=flat-square&labelColor=000000)
![Type](https://img.shields.io/badge/Type-State%20Demo-ff69b4?style=flat-square&labelColor=000000)

</div>

Ek simple lekin powerful **counter application** jo JavaScript me **state management** ka basic concept samjhata hai.

### ✨ Features

- ➕ **Increment**: count badhao
- ➖ **Decrement**: count ghatao
- 🔄 **Reset**: wapas `0` par
- 🚫 Count **0 se neeche nahi jaata** (negative protection)
- 🎨 Clean card UI with glowing box-shadow

### 🔄 State Diagram

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#1a0010','primaryTextColor':'#ffffff','primaryBorderColor':'#ff1493','lineColor':'#ff69b4','fontFamily':'Arial'}}}%%
stateDiagram-v2
    [*] --> Zero: App starts
    Zero --> Positive: increment()
    Positive --> Positive: increment()
    Positive --> Positive: decrement() if count > 1
    Positive --> Zero: decrement() if count == 1
    Positive --> Zero: reset()
    Zero --> Zero: decrement() blocked
    Zero --> Zero: reset()
```

### 💡 Code Highlight

```javascript
function decrement() {
    if (count > 0) {   // negative protection
        count--;
        display.innerText = count;
    }
}
```

---

## 📂 Folder Structure

```bash
📦 anurag-js-mini-projects
 ┣ 📜 DIGITALCLOCK.html   # 🕒 Live Digital Clock
 ┣ 📜 CALCULATOR.html     # 🧮 Basic Calculator
 ┣ 📜 COUNTER.html        # 🔢 Counter App
 ┗ 📜 README.md           # 📖 You are here
```

---

## 🚀 How to Run

**Option 1: Direct (Sabse easy)**

1. Repository **download** ya **clone** karo
2. Jo project chalana hai, uski `.html` file par **double-click** karo
3. Browser me khul jayega, bas enjoy karo! 🎉

**Option 2: Git Clone**

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

Phir kisi bhi `.html` file ko browser me open karo.

**Option 3: VS Code Live Server**

1. VS Code me folder open karo
2. **Live Server** extension install karo
3. File par right-click → **Open with Live Server**

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Use |
|:----------:|:----|
| ![HTML5](https://img.shields.io/badge/HTML5-ff1493?style=for-the-badge&logo=html5&logoColor=white) | Structure of pages |
| ![CSS3](https://img.shields.io/badge/CSS3-ff69b4?style=for-the-badge&logo=css3&logoColor=white) | Styling, Flexbox, Grid, gradients, glow effects |
| ![JavaScript](https://img.shields.io/badge/JavaScript-000000?style=for-the-badge&logo=javascript&logoColor=ff1493) | Logic, DOM manipulation, timers |

</div>

---

## 📚 What I Learned

- 🎯 **DOM Manipulation**: `getElementById`, `innerText`
- ⏰ **Timers**: `setInterval()` se live updates
- 📅 **Date API** aur `toLocaleDateString()` formatting
- 🧠 **State management** with simple variables
- 🛡️ **Input validation** using Regular Expressions
- 🎨 **CSS**: Flexbox, Grid, gradients, `box-shadow`, `text-shadow`
- 🐛 **Edge cases**: negative count, empty input, invalid expressions

---

## 🔮 Future Improvements

- [ ] 🌙 Dark / Light theme toggle
- [ ] ⌨️ Keyboard support in Calculator
- [ ] 🕰️ 12h / 24h format switch in Clock
- [ ] 🌍 Multiple timezone support
- [ ] 💾 Counter value ko `localStorage` me save karna
- [ ] 📜 Calculator history feature
- [ ] 🔊 Sound effects on button click

---

## 👨‍💻 About the Author

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=26&pause=1200&color=FF1493&center=true&vCenter=true&width=500&lines=Anurag+Prajapati;Web+Developer+in+Making+%F0%9F%9A%80;Learning+%7C+Building+%7C+Growing" alt="Author" />

**Anurag Prajapati**

> 💗 Passionate beginner developer jo HTML, CSS aur JavaScript se creative projects banana pasand karta hai.

[![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=ff1493)](https://github.com/YOUR_USERNAME)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-000000?style=for-the-badge&logo=linkedin&logoColor=ff69b4)](https://linkedin.com/in/YOUR_LINKEDIN)
[![Email](https://img.shields.io/badge/Email-000000?style=for-the-badge&logo=gmail&logoColor=ff1493)](mailto:YOUR_EMAIL@gmail.com)

</div>

---

## ⭐ Show Your Support

Agar ye projects pasand aaye ho to:

- ⭐ Repository ko **Star** karo
- 🍴 **Fork** karke apna version banao
- 📢 Doston ke saath **share** karo

---

<div align="center">

**Made with 💗 and ☕ by [Anurag Prajapati](https://github.com/YOUR_USERNAME)**

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:000000,50:ff1493,100:000000&height=120&section=footer" width="100%"/>

</div>

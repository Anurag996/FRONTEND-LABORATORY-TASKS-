<div align="center">

<img src="https://capsule-render.vercel.app/api?type=venom&color=0:0f0c29,40:8b5cf6,75:06b6d4,100:ff1493&height=250&section=header&text=Contact%20Form&fontSize=58&fontColor=ffffff&animation=twinkling&fontAlignY=40&desc=Task%2014%20%7C%20React%20useState%20Hook&descAlignY=62&descSize=20" width="100%"/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=A78BFA&center=true&vCenter=true&width=700&lines=Hi%2C+I%27m+Anurag+Prajapati+%F0%9F%91%8B;Controlled+Form+using+React+useState;Type+%E2%86%92+State+%E2%86%92+Re-render+%E2%86%92+Submit+%E2%9C%A8;Task+14+%7C+React+Learning+Journey+%E2%9A%9B%EF%B8%8F" alt="Typing SVG" />

<br/>

![React](https://img.shields.io/badge/React-0f0c29?style=for-the-badge&logo=react&logoColor=06b6d4)
![Hooks](https://img.shields.io/badge/Hook-useState-8b5cf6?style=for-the-badge&labelColor=0f0c29)
![JSX](https://img.shields.io/badge/JSX-ff1493?style=for-the-badge&logo=javascript&logoColor=white&labelColor=0f0c29)
![CSS3](https://img.shields.io/badge/CSS3-06b6d4?style=for-the-badge&logo=css3&logoColor=white&labelColor=0f0c29)
![Vite](https://img.shields.io/badge/Vite-a78bfa?style=for-the-badge&logo=vite&logoColor=white&labelColor=0f0c29)
![Task](https://img.shields.io/badge/Task-14-ff1493?style=for-the-badge&labelColor=0f0c29)

</div>

---

## 💜 About This Task

Hey! Main **Anurag Prajapati** hoon 👋

Ye **Task 14** hai meri React learning journey ka. Isme maine ek **Contact Us form** banaya hai jo **`useState` Hook** se kaam karta hai. User jo bhi type karta hai wo React ki **state** me save hota hai, aur **Submit** karne par screen par **Submitted Details** card dikhta hai.

> 💙 *"State change hoti hai, React screen khud update kar deta hai."* — Anurag

---

## 📑 Table of Contents

- [Features](#-features)
- [Component Structure](#-component-structure)
- [State Variables](#-state-variables)
- [How It Works](#-how-it-works)
- [Code Highlights](#-code-highlights)
- [Folder Structure](#-folder-structure)
- [How to Run](#-how-to-run)
- [Concepts Used](#-concepts-used)
- [What I Learned](#-what-i-learned)
- [Future Improvements](#-future-improvements)
- [About the Author](#-about-the-author)

---

## ✨ Features

| | Feature | Detail |
|:-:|:--------|:-------|
| 📝 | **Contact Form** | Name, Email aur Message ke 3 fields |
| 🎛️ | **Controlled Inputs** | Har input ki value React state se control hoti hai |
| ⚡ | **Live State Update** | Har key dabane par state turant update |
| ✅ | **Built-in Validation** | `required` aur `type="email"` se khali ya galat email nahi jayega |
| 🚫 | **No Page Reload** | `e.preventDefault()` se form refresh nahi hota |
| 🧹 | **Auto Reset** | Submit ke baad teeno fields khali ho jate hain |
| 🪄 | **Conditional Rendering** | Submit ke baad hi **Submitted Details** card dikhta hai |
| 💜 | **Neon Styled UI** | Custom CSS ke saath modern look |

---

## 🧩 Component Structure

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#1b1440','primaryTextColor':'#ffffff','primaryBorderColor':'#8b5cf6','lineColor':'#06b6d4','fontFamily':'Arial'}}}%%
flowchart TD
    A(["index.html - div id root"]) --> B["main.jsx - ReactDOM.createRoot"]
    B --> C["React.StrictMode"]
    C --> D["App.jsx"]
    D --> E["Form.jsx - useState lives here"]
    D --> F["footer - Designed with love by Anurag"]
    E --> G["Contact form: name, email, message"]
    E --> H["Result card - only after submit"]

    style A fill:#0f0c29,stroke:#06b6d4,color:#06b6d4,stroke-width:2px
    style B fill:#1b1440,stroke:#8b5cf6,color:#c4b5fd
    style C fill:#1b1440,stroke:#8b5cf6,color:#c4b5fd
    style D fill:#8b5cf6,stroke:#ffffff,color:#ffffff,stroke-width:2px
    style E fill:#ff1493,stroke:#ffffff,color:#ffffff,stroke-width:2px
    style F fill:#1b1440,stroke:#06b6d4,color:#67e8f9
    style G fill:#0e3a4a,stroke:#06b6d4,color:#67e8f9
    style H fill:#0e3a4a,stroke:#4ade80,color:#4ade80
```

---

## 🗃️ State Variables

`Form.jsx` ke andar **4 state variables** hain:

| State | Setter | Initial Value | Kaam |
|:------|:-------|:-------------:|:-----|
| `name` | `setName` | `""` | Name input ki value |
| `email` | `setEmail` | `""` | Email input ki value |
| `message` | `setMessage` | `""` | Message textarea ki value |
| `submittedData` | `setSubmittedData` | `null` | Submit ke baad ka data (card dikhane ke liye) |

---

## 🔄 How It Works

### 1️⃣ Poora Data Flow

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#1b1440','primaryTextColor':'#ffffff','primaryBorderColor':'#8b5cf6','lineColor':'#06b6d4','fontFamily':'Arial'}}}%%
flowchart LR
    A(["User types in input"]) --> B["onChange fires"]
    B --> C["setName / setEmail / setMessage"]
    C --> D["State updates"]
    D --> E["React re-renders Form"]
    E --> F["Input shows new value"]
    F --> A
    F --> G(["User clicks Submit"])
    G --> H["handleSubmit runs"]
    H --> I["e.preventDefault - no reload"]
    I --> J["setSubmittedData with name, email, message"]
    J --> K["Clear all 3 inputs"]
    K --> L(["Result card appears"])

    style A fill:#8b5cf6,stroke:#fff,color:#fff
    style G fill:#ff1493,stroke:#fff,color:#fff
    style L fill:#0f3d24,stroke:#4ade80,color:#4ade80,stroke-width:2px
    style I fill:#0e3a4a,stroke:#06b6d4,color:#67e8f9
```

### 2️⃣ Sequence Diagram

```mermaid
%%{init: {'theme':'base','themeVariables':{'actorBkg':'#1b1440','actorBorder':'#8b5cf6','actorTextColor':'#c4b5fd','signalColor':'#06b6d4','signalTextColor':'#ffffff','noteBkgColor':'#8b5cf6','noteTextColor':'#ffffff','fontFamily':'Arial'}}}%%
sequenceDiagram
    actor U as 👤 User
    participant I as 📝 Input
    participant S as 🧠 useState
    participant R as ⚛️ React
    participant C as 🪄 Result Card

    U->>I: Types "Anurag"
    I->>S: onChange calls setName
    S->>R: State changed
    R-->>I: Re-render with new value
    U->>I: Clicks Submit
    I->>S: handleSubmit sets submittedData
    S->>S: Reset name, email, message to empty
    S->>R: State changed
    R->>C: submittedData is not null, so show card
    C-->>U: Submitted Details visible ✨
```

### 3️⃣ Form States

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#1b1440','primaryTextColor':'#ffffff','primaryBorderColor':'#8b5cf6','lineColor':'#06b6d4','fontFamily':'Arial'}}}%%
stateDiagram-v2
    [*] --> EmptyForm: Page loads, submittedData is null
    EmptyForm --> Typing: User types in a field
    Typing --> Typing: Every keystroke updates state
    Typing --> Submitted: Submit clicked, form valid
    Submitted --> EmptyForm: Inputs auto-cleared
    Submitted --> Typing: User starts a new message
```

---

## 💡 Code Highlights

### 🧠 useState Se State Banana

```jsx
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [submittedData, setSubmittedData] = useState(null);
```

### 🎛️ Controlled Input (value + onChange)

```jsx
<input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
/>
```

### 🚫 Form Submit Handle Karna

```jsx
const handleSubmit = (e) => {
    e.preventDefault();                       // page reload roko

    setSubmittedData({ name, email, message }); // data save karo

    setName("");                              // inputs khali karo
    setEmail("");
    setMessage("");
};
```

### 🪄 Conditional Rendering

```jsx
{submittedData && (
    <div className="result">
        <h2>Submitted Details</h2>
        <p><b>Name:</b> {submittedData.name}</p>
    </div>
)}
```

---

## 📂 Folder Structure

```bash
📦 task-14-react-usestate
 ┣ 📂 src
 ┃ ┣ 📜 main.jsx     # ⚛️ App ko root me render karta hai
 ┃ ┣ 📜 App.jsx      # 🏠 Form + footer
 ┃ ┣ 📜 Form.jsx     # 📝 useState wala contact form
 ┃ ┗ 📜 App.css      # 🎨 Styling
 ┣ 📜 index.html
 ┣ 📜 package.json
 ┗ 📜 README.md      # 📖 You are here
```

---

## 🚀 How to Run

```bash
# 1. Repository clone karo
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 2. Project folder me jao
cd task-14-react-usestate

# 3. Dependencies install karo
npm install

# 4. Project chalao
npm run dev
```

Terminal me jo link aaye (jaise `http://localhost:5173`), use browser me open karo. 🎉

---

## 🧠 Concepts Used

| Concept | Kahan use hua |
|:--------|:--------------|
| `useState` Hook | Name, email, message aur submittedData ki state |
| Controlled Components | `value={name}` + `onChange` |
| Event Handling | `onChange`, `onSubmit` |
| `e.preventDefault()` | Form submit par page reload rokna |
| Conditional Rendering | `{submittedData && (...)}` |
| JSX | HTML jaisa code JavaScript ke andar |
| Components | `App` aur `Form` alag components |
| Import / Export | `export default Form` |
| `React.StrictMode` | Development me extra checks |
| HTML5 Validation | `required`, `type="email"` |

---

## 📚 What I Learned

- ⚛️ **State** kya hoti hai aur **`useState`** kaise kaam karta hai
- 🎛️ **Controlled input** me value React ke paas hoti hai, browser ke paas nahi
- 🔁 State badalte hi React **component ko dobara render** karta hai
- 🚫 `preventDefault()` kyun zaroori hai
- 🪄 `&&` se **conditional rendering** kaise hoti hai
- 🧹 Form submit ke baad state ko **reset** kaise karte hain
- 🧩 Ek bade UI ko chhote **components** me todna

---

## 🔮 Future Improvements

- [ ] ✅ Custom validation messages
- [ ] 🔢 Message ke liye character counter
- [ ] 📦 Teeno states ko ek **object state** me jodna
- [ ] 💾 Submitted data `localStorage` me save karna
- [ ] 🌐 Backend ya API se data bhejna
- [ ] 🎉 Submit hone par success animation
- [ ] 📜 Saare messages ki list dikhana

---

## 👨‍💻 About the Author

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=26&pause=1200&color=A78BFA&center=true&vCenter=true&width=500&lines=Anurag+Prajapati;React+Learner+%E2%9A%9B%EF%B8%8F;Learning+%7C+Building+%7C+Growing" alt="Author" />

**Anurag Prajapati**

> 💜 Passionate beginner developer jo React aur modern web development seekh raha hai.

[![GitHub](https://img.shields.io/badge/GitHub-0f0c29?style=for-the-badge&logo=github&logoColor=a78bfa)](https://github.com/YOUR_USERNAME)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0f0c29?style=for-the-badge&logo=linkedin&logoColor=06b6d4)](https://linkedin.com/in/YOUR_LINKEDIN)
[![Email](https://img.shields.io/badge/Email-0f0c29?style=for-the-badge&logo=gmail&logoColor=ff1493)](mailto:YOUR_EMAIL@gmail.com)

</div>

---

## ⭐ Show Your Support

- ⭐ Repository ko **Star** karo
- 🍴 **Fork** karke apna version banao
- 📢 Doston ke saath **share** karo

---

<div align="center">

**Designed with 💜 by [Anurag Prajapati](https://github.com/YOUR_USERNAME)**

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,40:8b5cf6,75:06b6d4,100:ff1493&height=120&section=footer" width="100%"/>

</div>

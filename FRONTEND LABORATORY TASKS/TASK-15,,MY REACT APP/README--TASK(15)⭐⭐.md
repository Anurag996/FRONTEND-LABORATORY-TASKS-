<div align="center">

<img src="https://capsule-render.vercel.app/api?type=cylinder&color=0:1a0f00,40:ff7a18,75:14b8a6,100:ff1493&height=250&section=header&text=React%20Router&fontSize=58&fontColor=ffffff&animation=fadeIn&fontAlignY=40&desc=Task%2015%20%7C%20Client%20Side%20Routing&descAlignY=62&descSize=20" width="100%"/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=FF9F43&center=true&vCenter=true&width=720&lines=Hi%2C+I%27m+Anurag+Prajapati+%F0%9F%91%8B;Multi-page+Website+without+Page+Reload;Home+%E2%86%92+About+%E2%86%92+Blog+%F0%9F%9A%80;Task+15+%7C+React+Learning+Journey+%E2%9A%9B%EF%B8%8F" alt="Typing SVG" />

<br/>

![React](https://img.shields.io/badge/React-1a0f00?style=for-the-badge&logo=react&logoColor=14b8a6)
![React Router](https://img.shields.io/badge/React%20Router-ff7a18?style=for-the-badge&logo=reactrouter&logoColor=white&labelColor=1a0f00)
![JSX](https://img.shields.io/badge/JSX-14b8a6?style=for-the-badge&logo=javascript&logoColor=white&labelColor=1a0f00)
![CSS3](https://img.shields.io/badge/CSS3-ff1493?style=for-the-badge&logo=css3&logoColor=white&labelColor=1a0f00)
![Vite](https://img.shields.io/badge/Vite-ffb347?style=for-the-badge&logo=vite&logoColor=white&labelColor=1a0f00)
![Task](https://img.shields.io/badge/Task-15-ff7a18?style=for-the-badge&labelColor=1a0f00)

</div>

---

## 🧡 About This Task

Hey! Main **Anurag Prajapati** hoon 👋

Ye **Task 15** hai meri React learning journey ka. Isme maine **React Router** se ek **multi-page website** banayi hai: **Home**, **About** aur **Blog**. Pages ke beech jaane par **browser reload nahi hota**, sirf screen ka content badalta hai. Isi ko **Client Side Routing** kehte hain.

> 🧡 *"Ek HTML page, kai React pages."* — Anurag

---

## 📑 Table of Contents

- [Features](#-features)
- [Routes Table](#-routes-table)
- [Component Structure](#-component-structure)
- [How Routing Works](#-how-routing-works)
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
| 🧭 | **Navbar** | Logo aur 3 links: Home, About, Blog |
| 📄 | **3 Pages** | Home, About aur Blog alag components me |
| ⚡ | **No Page Reload** | Page badalne par browser refresh nahi hota |
| 🎯 | **Active Link Highlight** | `NavLink` current page ke link ko apne aap `active` class deta hai |
| 🔗 | **Clean URLs** | `/`, `/about`, `/blog` |
| 📰 | **Blog Cards** | Blog page par 2 blog cards |
| 🦶 | **Common Footer** | Har page par same footer |
| 🧩 | **Reusable Layout** | Navbar aur footer ek baar likhe, har page par dikhte hain |

---

## 🗺️ Routes Table

| URL | Component | File | Page |
|:----|:----------|:-----|:-----|
| `/` | `Home` | `Home.jsx` | 🏠 Welcome page |
| `/about` | `About` | `About.jsx` | ℹ️ About Us page |
| `/blog` | `Blog` | `Blog.jsx` | 📰 Blog page with 2 cards |

---

## 🧩 Component Structure

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#2a1800','primaryTextColor':'#ffffff','primaryBorderColor':'#ff7a18','lineColor':'#14b8a6','fontFamily':'Arial'}}}%%
flowchart TD
    A(["index.html - div id root"]) --> B["main.jsx"]
    B --> C["React.StrictMode"]
    C --> D["BrowserRouter - watches the URL"]
    D --> E["App.jsx"]
    E --> F["nav - Navbar with NavLinks"]
    E --> G["Routes - picks one page"]
    E --> H["footer"]
    G --> I["Route / : Home.jsx"]
    G --> J["Route /about : About.jsx"]
    G --> K["Route /blog : Blog.jsx"]

    style A fill:#1a0f00,stroke:#14b8a6,color:#5eead4,stroke-width:2px
    style B fill:#2a1800,stroke:#ff7a18,color:#ffb347
    style C fill:#2a1800,stroke:#ff7a18,color:#ffb347
    style D fill:#ff7a18,stroke:#ffffff,color:#000000,stroke-width:2px
    style E fill:#14b8a6,stroke:#ffffff,color:#000000,stroke-width:2px
    style F fill:#2a1800,stroke:#ff1493,color:#ff69b4
    style G fill:#ff1493,stroke:#ffffff,color:#ffffff,stroke-width:2px
    style H fill:#2a1800,stroke:#ff1493,color:#ff69b4
    style I fill:#0b3b36,stroke:#14b8a6,color:#5eead4
    style J fill:#0b3b36,stroke:#14b8a6,color:#5eead4
    style K fill:#0b3b36,stroke:#14b8a6,color:#5eead4
```

---

## 🔄 How Routing Works

### 1️⃣ Link Click Se Page Badalne Tak

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#2a1800','primaryTextColor':'#ffffff','primaryBorderColor':'#ff7a18','lineColor':'#14b8a6','fontFamily':'Arial'}}}%%
flowchart LR
    A(["User clicks About link"]) --> B["NavLink changes the URL to /about"]
    B --> C["No page reload"]
    C --> D["BrowserRouter notices new URL"]
    D --> E["Routes checks every Route path"]
    E --> F{"Path matches /about?"}
    F -- Yes --> G["Render About component"]
    F -- No --> H["Check next Route"]
    H --> E
    G --> I(["Navbar and footer stay, only the page changes"])

    style A fill:#ff7a18,stroke:#fff,color:#000
    style C fill:#0b3b36,stroke:#14b8a6,color:#5eead4
    style F fill:#2a1800,stroke:#ff1493,color:#ff69b4
    style G fill:#14b8a6,stroke:#fff,color:#000
    style I fill:#0f3d24,stroke:#4ade80,color:#4ade80,stroke-width:2px
```

### 2️⃣ Sequence Diagram

```mermaid
%%{init: {'theme':'base','themeVariables':{'actorBkg':'#2a1800','actorBorder':'#ff7a18','actorTextColor':'#ffb347','signalColor':'#14b8a6','signalTextColor':'#ffffff','noteBkgColor':'#ff7a18','noteTextColor':'#000000','fontFamily':'Arial'}}}%%
sequenceDiagram
    actor U as 👤 User
    participant N as 🧭 NavLink
    participant B as 🌐 BrowserRouter
    participant R as 🛣️ Routes
    participant P as 📄 Blog Page

    U->>N: Clicks Blog
    N->>B: Change URL to /blog (no reload)
    B->>R: New location is /blog
    R->>R: Match path with Route list
    R->>P: Render Blog component
    P-->>U: Blog cards visible ✨
```

### 3️⃣ Normal Website vs React Router

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#2a1800','primaryTextColor':'#ffffff','primaryBorderColor':'#ff7a18','lineColor':'#14b8a6','fontFamily':'Arial'}}}%%
flowchart TB
    subgraph OLD["Normal HTML website"]
        O1["Click link"] --> O2["Browser asks server for new page"]
        O2 --> O3["Full page reload"]
    end
    subgraph NEW["React Router website"]
        N1["Click NavLink"] --> N2["JavaScript changes the URL"]
        N2 --> N3["Only the page component swaps"]
    end

    style OLD fill:#3d0f0f,stroke:#ff6b6b,color:#ff9b9b
    style NEW fill:#0b3b36,stroke:#14b8a6,color:#5eead4
```

---

## 💡 Code Highlights

### 🌐 BrowserRouter Se Poori App Ko Wrap Karna

```jsx
// main.jsx
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
```

### 🧭 NavLink (Active Class Apne Aap Lagti Hai)

```jsx
<NavLink to="/" end>Home</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/blog">Blog</NavLink>
```

> 💡 `end` isliye lagaya, kyunki `/` har URL ka hissa hai. `end` ke bina Home link hamesha active dikhta.

### 🛣️ Routes Aur Route

```jsx
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/blog" element={<Blog />} />
</Routes>
```

### 🎨 Active Link Ko Style Karne Ke Liye (CSS)

```css
.nav-links a.active {
    color: #ff7a18;
}
```

---

## 📂 Folder Structure

```bash
📦 task-15-react-router
 ┣ 📂 src
 ┃ ┣ 📜 main.jsx     # ⚛️ BrowserRouter yahan laga hai
 ┃ ┣ 📜 App.jsx      # 🧭 Navbar + Routes + Footer
 ┃ ┣ 📜 Home.jsx     # 🏠 Home page
 ┃ ┣ 📜 About.jsx    # ℹ️ About page
 ┃ ┣ 📜 Blog.jsx     # 📰 Blog page
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
cd task-15-react-router

# 3. Dependencies install karo
npm install

# 4. Agar react-router-dom install na ho
npm install react-router-dom

# 5. Project chalao
npm run dev
```

Terminal me jo link aaye (jaise `http://localhost:5173`), use browser me open karo. 🎉

---

## 🧠 Concepts Used

| Concept | Kahan use hua |
|:--------|:--------------|
| Client Side Routing | Bina reload ke pages badalna |
| `BrowserRouter` | `main.jsx` me poori app ko wrap karta hai |
| `Routes` aur `Route` | URL ke hisaab se component chunna |
| `NavLink` | Navbar links aur active class |
| `path` aur `element` | Route ka URL aur dikhne wala component |
| `end` prop | Home link ko sirf `/` par active rakhna |
| Components | Home, About, Blog, App alag components |
| Layout Sharing | Navbar aur footer har page par same |
| JSX | HTML jaisa code JavaScript ke andar |
| Import / Export | `export default` aur `import` |

---

## 📚 What I Learned

- 🧭 **Client side routing** kya hota hai aur normal website se kaise alag hai
- 🌐 **`BrowserRouter`** poori app ko URL ki jaankari deta hai
- 🛣️ **`Routes` aur `Route`** se URL ko component se jodte hain
- 🎯 **`NavLink`** me `active` class apne aap lagti hai
- 🔚 **`end` prop** ki zaroorat kyun padti hai
- 🧩 Navbar aur footer ek baar likhkar **har page par** dikhana
- 📁 Har page ke liye **alag component file** banana

---

## 🔮 Future Improvements

- [ ] 🚫 **404 Not Found** page (`path="*"`)
- [ ] 🔀 `Link` aur `useNavigate` se button se navigation
- [ ] 🆔 Dynamic route jaise `/blog/:id` aur `useParams`
- [ ] 🧱 Nested routes aur `Outlet` se common layout
- [ ] 🔒 Protected routes (login ke baad hi page dikhe)
- [ ] ⏳ Page badalte waqt loading animation
- [ ] 🌙 Dark / Light mode

---

## 👨‍💻 About the Author

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=26&pause=1200&color=FF9F43&center=true&vCenter=true&width=500&lines=Anurag+Prajapati;React+Learner+%E2%9A%9B%EF%B8%8F;Learning+%7C+Building+%7C+Growing" alt="Author" />

**Anurag Prajapati**

> 🧡 Passionate beginner developer jo React aur modern web development seekh raha hai.

[![GitHub](https://img.shields.io/badge/GitHub-1a0f00?style=for-the-badge&logo=github&logoColor=ff9f43)](https://github.com/YOUR_USERNAME)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-1a0f00?style=for-the-badge&logo=linkedin&logoColor=14b8a6)](https://linkedin.com/in/YOUR_LINKEDIN)
[![Email](https://img.shields.io/badge/Email-1a0f00?style=for-the-badge&logo=gmail&logoColor=ff1493)](mailto:YOUR_EMAIL@gmail.com)

</div>

---

## ⭐ Show Your Support

- ⭐ Repository ko **Star** karo
- 🍴 **Fork** karke apna version banao
- 📢 Doston ke saath **share** karo

---

<div align="center">

**Designed with 🧡 by [Anurag Prajapati](https://github.com/YOUR_USERNAME)**

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1a0f00,40:ff7a18,75:14b8a6,100:ff1493&height=120&section=footer" width="100%"/>

</div>

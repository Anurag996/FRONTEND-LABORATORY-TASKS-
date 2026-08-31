
# 🌐 HTML & CSS Web Design Projects

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/Web%20Design-111827?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Web Design">
  <img src="https://img.shields.io/badge/Responsive-16A34A?style=for-the-badge&logo=css3&logoColor=white" alt="Responsive">
</p>

<h2 align="center">✨ Learning HTML. Styling with CSS. Building for the Web. ✨</h2>

<p align="center">
  A practical collection of <b>HTML5 & CSS3</b> projects created to understand webpage structure,
  semantic elements, tables, CSS selectors, colors, lists, hover effects and responsive design.
</p>

---

## 👨‍💻 About Me

Hi! I'm **Anurag Prajapati**, a **B.Tech Computer Science student** interested in programming, web development and building practical projects.

This repository represents my hands-on journey of learning the fundamentals of front-end development by turning concepts into working webpages.

> 💡 **“Great websites are built one concept at a time.”**

---

# 📚 Repository Overview

This repository contains **two major practical tasks**:

| 🏷️ Task | 📌 Project | 🎯 Main Concepts |
|---|---|---|
| **Task 1** | 👨‍💻 Personal Portfolio + 📅 Academic Timetable | Semantic HTML5, structural elements & HTML tables |
| **Task 2** | 🎨 About Us + CSS Selector Styling | Element, Class, ID, Pseudo-class selectors, colors & lists |

---

# 🧩 TASK 1 — Structural Web Design

## 👨‍💻 Part A — Personal Portfolio

The Personal Portfolio webpage presents **Anurag Prajapati** as a B.Tech Computer Science student and demonstrates the use of semantic HTML5 elements.

The page contains a header, navigation menu, About section, profile image, skills, projects, contact section and footer. fileciteturn1file0L12-L21

### 🏗️ Semantic HTML5 Elements

The portfolio demonstrates:

- `<header>` — page introduction
- `<nav>` — navigation links
- `<main>` — main webpage content
- `<section>` — logically divided content
- `<figure>` — profile image container
- `<figcaption>` — image caption
- `<article>` — individual project content
- `<footer>` — closing/copyright information

The profile section uses `<figure>` and `<figcaption>`, while the project section uses separate `<article>` elements. fileciteturn1file0L24-L38 fileciteturn1file0L51-L68

### 🧭 Navigation

The portfolio provides quick navigation to:

`About` → `Skills` → `Projects` → `Contact`

fileciteturn1file0L17-L21

### 🛠️ Skills

The portfolio currently highlights:

- 🌐 HTML
- 🎨 CSS
- ☕ Java
- 🧠 Data Structures & Algorithms

fileciteturn1file0L40-L48

### 🚀 Projects

Two projects are featured:

#### 🔐 Automated Door Lock System
A project designed for automatic and secure door locking using electronic components.

#### 🌐 Personal Portfolio
A simple portfolio website created using semantic HTML5.

fileciteturn1file0L51-L67

### 🎨 Portfolio Design

The portfolio uses a clean **dark-themed design** with:

- 🖤 Black background
- ⚪ White typography
- 🧭 Centered navigation
- 📦 Card-style sections
- 🖼️ Profile image styling
- 🖱️ Navigation hover effect
- 🚀 Styled project blocks
- 📬 Dedicated contact section
- 🦶 Styled footer

The CSS defines the overall black-and-white theme, navigation, main content width and bordered sections. fileciteturn1file3L1-L7 fileciteturn1file3L29-L65

Project articles receive their own background, spacing, border and rounded-corner styling. fileciteturn1file3L105-L119

---

## 📅 Part B — Academic Timetable

The second part of Task 1 is a complete **Academic Timetable** created using HTML table structure.

The timetable represents the **Odd Semester Programme** for a **Bachelor of Technology** course. fileciteturn1file2L18-L50

### 🏫 Academic Information

- **University:** GLA University, Mathura
- **Institute:** Institute of Engineering & Technology
- **Department:** Computer Engineering & Applications
- **Programme:** Bachelor of Technology
- **Class:** 2FA (65) — Full Stack Development
- **Semester:** III
- **Session:** 2025–2026
- **Class Advisors:** Ms. Meghana M / Dr. Medha Kirti

### ⏰ Timetable Structure

The table contains:

- 🔢 Lecture numbers 1–10
- 🕐 Time slots
- 📅 Monday–Saturday schedule
- 📚 Subject codes
- 🏫 Classroom / lab details
- 👥 Group-wise practical information
- 🔗 Merged cells using `colspan`

The lecture-number and time rows define the timetable's column structure. fileciteturn1file2L54-L83

The weekly schedule is organized day-by-day from Monday through Saturday. fileciteturn1file2L86-L187

### 🎨 Timetable Styling

The timetable CSS adds a polished academic interface with:

- 📋 Full-width table
- 🔲 Collapsed borders
- 🌫️ Box shadow
- 🎨 Multiple header styles
- 🖱️ Cell hover effects
- 🔄 Alternate row backgrounds
- ⬜ Empty-cell styling
- 📱 Responsive layout

The table styling includes `border-collapse`, background colors, shadows and spacing for readable presentation. fileciteturn1file1L23-L38

Interactive hover styling is applied to subject cells, day names, lecture headers and time headers. fileciteturn1file1L107-L149

The CSS also includes a media query for screens up to `900px`, reducing padding and font sizes for smaller displays. fileciteturn1file1L156-L173

---

# 🎨 TASK 2 — CSS Selectors & Styling

Task 2 focuses on understanding how different **CSS selectors** target HTML elements and how CSS can transform a simple webpage into a visually organized interface.

The project is an **About Us** webpage containing an introduction, favourite movies, favourite cities and footer. fileciteturn2file1L12-L29 fileciteturn2file1L32-L59

---

## 🎯 CSS Selectors Demonstrated

### 1️⃣ Element Selector

Element selectors target HTML elements directly.

Examples used include:

```css
body
h1
li
footer
```

The project uses element selectors to control the overall page, heading and footer styling. fileciteturn2file0L1-L6 fileciteturn2file0L17-L20

---

### 2️⃣ ID Selector

ID selectors use `#` to target a specific element.

Examples:

```css
#top
#special-text
```

`#top` styles the main About Us header, while `#special-text` highlights an important paragraph. fileciteturn2file0L9-L15 fileciteturn2file0L36-L40

---

### 3️⃣ Class Selector

Class selectors use `.` and can be reused across multiple elements.

Examples:

```css
.tagline
.about
.movies
.cities
```

These classes create separate visual styles for the tagline, About section, movie section and city section. fileciteturn2file0L22-L33 fileciteturn2file0L42-L64

---

### 4️⃣ Pseudo-class Selector

Pseudo-classes allow styling based on an element's state or position.

This project demonstrates:

```css
:hover
:first-child
```

Movie and city items change their appearance when hovered, while the first city receives special emphasis. fileciteturn2file0L76-L90

---

# 🎬 Favourite Movies

The About Us page contains an ordered list of favourite movies:

1. 3 Idiots
2. Interstellar
3. Inception
4. Avengers: Endgame
5. Taare Zameen Par

The list is styled using **upper Roman numerals** and customized list-item spacing and colors. fileciteturn2file1L32-L41 fileciteturn2file0L49-L56

---

# 🏙️ Favourite Cities

The page also contains an unordered list of favourite cities:

- Delhi
- Mumbai
- Jaipur
- Agra
- Varanasi

The city list uses **square list markers** with separate styling from the movie list. fileciteturn2file1L44-L53 fileciteturn2file0L66-L73

---

# 🌈 CSS Color Formats

Task 2 demonstrates two important CSS color formats.

### 🔹 HEX Colors

Examples:

```text
#f4f4f4
#2c3e50
#ffffff
#c0392b
#222222
```

### 🔹 RGB Colors

Examples:

```text
rgb(255, 193, 7)
rgb(46, 125, 50)
rgb(41, 98, 255)
rgb(255, 87, 34)
```

These colors are used for backgrounds, text, sections and interactive states. fileciteturn2file0L22-L40 fileciteturn2file0L59-L85

---

# 🖱️ Interactive CSS Effects

One of the key parts of Task 2 is demonstrating CSS interaction **without JavaScript**.

### 🎬 Movies
Hovering over a movie changes its text color and cursor.

### 🏙️ Cities
Hovering over a city changes its color and cursor.

### ⭐ First City
The `:first-child` selector makes the first city bold.

fileciteturn2file0L76-L90

> ⚡ **Small CSS selectors can create surprisingly powerful UI effects.**

---

# 📁 Project Structure

```text
HTML-CSS-Web-Design/
│
├── TASK-1/
│   │
│   ├── PERSONALPORTFOLIO.html
│   ├── PERSONALPORTFOLIO.css
│   ├── PROFILE.png
│   │
│   ├── TIMETABLE.html
│   └── TIMETABLE.css
│
├── TASK-2/
│   │
│   ├── ABOUTUS.html
│   └── ABOUTUS.css
│
└── README.md
```

---

# 🧠 Concepts Covered

### HTML5
- ✅ Basic HTML document structure
- ✅ Semantic HTML5 elements
- ✅ Headings and paragraphs
- ✅ Navigation links
- ✅ Images
- ✅ `<figure>` and `<figcaption>`
- ✅ `<article>` and `<section>`
- ✅ Ordered and unordered lists
- ✅ HTML tables
- ✅ Table rows, headers and cells
- ✅ `colspan`

### CSS3
- ✅ Element selectors
- ✅ Class selectors
- ✅ ID selectors
- ✅ Pseudo-class selectors
- ✅ `:hover`
- ✅ `:first-child`
- ✅ HEX colors
- ✅ RGB colors
- ✅ Backgrounds
- ✅ Borders
- ✅ Padding & margins
- ✅ Typography
- ✅ Box shadows
- ✅ List styling
- ✅ Media queries
- ✅ Responsive design

---

# 🛠️ Technologies Used

<p>
  <img src="https://img.shields.io/badge/HTML5-Structure-orange?style=flat-square&logo=html5" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-Styling-blue?style=flat-square&logo=css3" alt="CSS3">
  <img src="https://img.shields.io/badge/VS%20Code-Editor-007ACC?style=flat-square&logo=visualstudiocode" alt="VS Code">
</p>

| Technology | Used For |
|---|---|
| 🧱 **HTML5** | Structure and semantic content |
| 🎨 **CSS3** | Styling and visual presentation |
| 🖥️ **VS Code** | Development and editing |
| 🌐 **Web Browser** | Running and testing webpages |

---

# 🚀 How to Run

### 1️⃣ Clone the repository

```bash
git clone <your-repository-url>
```

### 2️⃣ Open the project

Open the folder in **VS Code**.

### 3️⃣ Run the HTML files

Open any of these files in your browser:

```text
PERSONALPORTFOLIO.html
TIMETABLE.html
ABOUTUS.html
```

Make sure their corresponding CSS files are in the correct location.

---

# 📈 What I Learned

Working on these tasks helped me understand that good web development starts with a strong foundation.

### 💻 Technical Learning
- How semantic HTML improves webpage organization
- How tables can represent structured information
- How different CSS selectors target different elements
- How colors influence visual hierarchy
- How pseudo-classes add interaction
- How media queries improve usability on smaller screens

### 🧠 Development Mindset
- Break a large webpage into smaller sections
- Keep HTML responsible for structure
- Keep CSS responsible for presentation
- Practice concepts through real implementations
- Improve designs through iteration

---

# 🔮 Future Improvements

This project can be extended further by adding:

- 📱 More advanced responsive layouts
- ✨ CSS animations and transitions
- 🌓 Light/Dark mode
- ⚡ JavaScript interactions
- 📬 Functional contact form
- 🔗 Social media links
- 🖼️ Better project galleries
- 🌍 GitHub Pages deployment
- ♿ Improved accessibility
- 🎨 More advanced modern UI design

---

# 🏆 Learning Journey

```text
HTML Basics
     ↓
Semantic HTML5
     ↓
Tables & Lists
     ↓
CSS Fundamentals
     ↓
Selectors & Pseudo-classes
     ↓
Layouts & Styling
     ↓
Responsive Design
     ↓
🚀 Front-End Development
```

> 🌱 **“Every expert developer was once a beginner who kept writing code.”**

---

# 👨‍💻 Author

## **Anurag Prajapati**

🎓 B.Tech Computer Science Student  
💻 Aspiring Software Developer  
🌐 Web Development Learner  
🧠 DSA & Programming Enthusiast

I believe in learning through **practice, projects and consistency**.

> 🚀 **Code. Learn. Build. Improve. Repeat.**

---

# ⭐ Support

If you found this repository useful or interesting:

⭐ **Star this repository**  
🍴 **Fork it**  
👨‍💻 **Explore the code**  
🚀 **Keep learning & building**

---

<p align="center">
  <b>Made with ❤️, HTML & CSS by Anurag Prajapati</b>
</p>

<p align="center">
  <i>“The best way to learn web development is to build the web.”</i>
</p>

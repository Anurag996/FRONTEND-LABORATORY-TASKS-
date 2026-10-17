# 🚀 SpaceXplorer — Responsive Space Landing Page

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-Structure-orange?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-Animations-blue?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">
  <img src="https://img.shields.io/badge/Responsive-Design-16A34A?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Responsive Design">
</p>

<h2 align="center">✨ Exploring Space Through Creative Front-End Design ✨</h2>

<p align="center">
  A responsive space-themed landing page built using <b>HTML5, CSS3, CSS Keyframe Animations and Bootstrap</b>.
  It includes animated space objects, navigation hover effects, feature cards and a mobile-friendly layout.
</p>

---

## 👨‍💻 About Me

Hi! I'm **Anurag Prajapati**, a **B.Tech Computer Science student** interested in programming, web development and building practical projects.

This task is part of my front-end learning journey. It helped me practice CSS animations, hover transitions and responsive webpage design using Bootstrap.

> 💡 **“Every new project is another step towards becoming a better developer.”**

---

# 📚 Project Overview

**Task 4 — SpaceXplorer** is a space-themed landing page created to demonstrate engaging user interfaces with CSS animations and Bootstrap.

| 🏷️ Section | 📌 Purpose | 🎯 Main Concepts |
|---|---|---|
| **Navigation Bar** | Navigate between webpage sections | Bootstrap navbar, links and hover transitions |
| **Hero Section** | Introduce the space exploration theme | Responsive layout, heading, text and button |
| **Space Objects** | Display a planet, rocket and astronaut | CSS positioning and keyframe animations |
| **Features Section** | Present space-related information | Bootstrap grid, cards and hover effects |
| **Footer** | Display creator and closing message | Footer styling and text alignment |

---

# 🧩 TASK 4 — Animated Space Landing Page

## 🚀 SpaceXplorer Landing Page

The SpaceXplorer webpage introduces visitors to a simple space exploration theme. The page uses a black background, white text and cyan highlights to keep the design clear and readable.

The main page includes a navigation bar, a hero section, animated space objects, three feature cards and a footer.

### 🧭 Navigation Bar

The navigation bar includes the **SpaceXplorer** brand and links to:

`Home` → `About` → `Missions` → `Contact`

The navigation links use CSS transitions and an underline effect when hovered. Bootstrap's responsive navbar also provides a collapsible menu on smaller screens.

### 🌌 Hero Section

The hero section introduces the website with the heading **“Explore The Universe”**, a short description and a **“Start Exploring”** button.

It uses a two-column Bootstrap layout:

- 📝 Text and call-to-action button
- 🪐 Planet, rocket and astronaut illustration

The background is kept simple and black, without the decorative stars.

### 🪐 Space Objects

The space illustration contains three objects:

- 🪐 **Planet:** A circular shape created with CSS gradients and a glow animation
- 🚀 **Rocket:** Floats vertically and slightly changes its rotation
- 👨‍🚀 **Astronaut:** Floats vertically and changes its rotation

These objects demonstrate CSS positioning, animation and hover transitions without requiring image files.

---

# 🎞️ CSS Keyframe Animations

The project uses CSS `@keyframes` to animate the space objects.

### 1️⃣ Rocket Animation

```css
@keyframes rocketFloat {
    0%, 100% {
        transform: translateY(0) rotate(-35deg);
    }

    50% {
        transform: translateY(-22px) rotate(-28deg);
    }
}
```

The rocket moves upward and slightly changes its angle before returning to its original position.

### 2️⃣ Astronaut Animation

```css
@keyframes astronautFloat {
    0%, 100% {
        transform: translateY(0) rotate(-8deg);
    }

    50% {
        transform: translateY(-18px) rotate(8deg);
    }
}
```

The astronaut gently floats up and down while rotating slightly.

### 3️⃣ Planet Glow Animation

```css
@keyframes planetGlow {
    from {
        box-shadow: 0 0 35px #625cff44;
    }

    to {
        box-shadow: 0 0 75px #625cff99;
    }
}
```

The planet's shadow changes over time to create a subtle glowing effect.

---

# 🖱️ Hover Effects & Transitions

CSS transitions make the interface feel more interactive.

### 🧭 Navigation Links
- Change color when hovered
- Move slightly upward
- Display an animated underline

### 🚀 Rocket
- Displays a cyan shadow when hovered

### 👨‍🚀 Astronaut
- Scales up and rotates when hovered

### 🔘 Explore Button
- Changes its background and text colors
- Scales slightly on hover
- Shows a subtle cyan shadow

### 🃏 Feature Cards
- Move upward when hovered
- Change their border color
- Display a shadow for emphasis

> ⚡ **CSS transitions and transforms can add interaction without JavaScript.**

---

# 🌠 Features Section

The feature section contains three cards:

| Icon | Feature | Description |
|---|---|---|
| 🌌 | **Explore Galaxies** | Discover galaxies and the wonders of deep space. |
| 🪐 | **Discover Planets** | Learn about planets, their environments and distant worlds. |
| 🧑‍🚀 | **Space Missions** | Explore humanity's journey beyond Earth. |

Each card uses a dark background, border, rounded corners and a hover transition.

---

# 📱 Responsive Design

Bootstrap's grid system and a CSS media query help the page adapt to smaller screens.

The responsive design includes:

- 📐 Bootstrap columns for the hero section
- 📱 Collapsible navigation on mobile devices
- 🔠 Smaller heading and space-object sizes on mobile
- ↕️ Adjusted spacing for the hero and feature sections
- 📦 Feature cards arranged in a responsive grid

The mobile styles are applied using:

```css
@media (max-width: 767px) {
    .hero {
        text-align: center;
        padding: 65px 0 30px;
    }

    .space-art {
        min-height: 350px;
        margin-top: 20px;
    }
}
```

The page also includes a reduced-motion media query for visitors who prefer fewer animations.

---

# 🎨 Design & Styling

The updated page uses a simple black background while retaining the original cyan highlights and space illustration.

- 🖤 Black background
- ⚪ White text
- 🩵 Cyan headings, links and button accents
- 🪐 Gradient planet with a glow effect
- 📦 Dark feature cards with borders
- 🖱️ Hover transitions for interactive elements
- 📱 Responsive layout using Bootstrap
- ✨ No decorative stars in the background

---

# 📁 Project Structure

```text
TASK-4-SPACEXPLORER/
│
├── index.html
└── README.md
```

The HTML, CSS and Bootstrap setup are included in a single `index.html` file. Bootstrap is loaded through a CDN.

---

# 🧠 Concepts Covered

### HTML5
- ✅ Basic HTML document structure
- ✅ Navigation links and page sections
- ✅ Headings, paragraphs and buttons
- ✅ Semantic section organization
- ✅ Viewport meta tag for responsive pages

### CSS3
- ✅ Element and class selectors
- ✅ Background and text colors
- ✅ Gradients and box shadows
- ✅ CSS positioning
- ✅ Flexbox and layout alignment
- ✅ `transition` and `transform`
- ✅ `:hover` pseudo-class
- ✅ `@keyframes` animations
- ✅ Media queries
- ✅ Reduced-motion preferences
- ✅ Responsive design

### Bootstrap
- ✅ Bootstrap 5.3.3 CDN
- ✅ Responsive container and grid system
- ✅ Navbar and collapsible mobile menu
- ✅ Buttons and spacing utilities
- ✅ Responsive columns and gutters

---

# 🛠️ Technologies Used

<p>
  <img src="https://img.shields.io/badge/HTML5-Structure-orange?style=flat-square&logo=html5" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-Animations-blue?style=flat-square&logo=css3" alt="CSS3">
  <img src="https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?style=flat-square&logo=bootstrap" alt="Bootstrap">
  <img src="https://img.shields.io/badge/VS%20Code-Editor-007ACC?style=flat-square&logo=visualstudiocode" alt="VS Code">
</p>

| Technology | Used For |
|---|---|
| 🧱 **HTML5** | Webpage structure and content |
| 🎨 **CSS3** | Styling, hover effects and animations |
| 🅱️ **Bootstrap 5.3.3** | Responsive grid and navigation bar |
| 🖥️ **VS Code / Editor** | Writing and editing code |
| 🌐 **Web Browser** | Running and testing the webpage |

---

# 🚀 How to Run

### 1️⃣ Create the project file

Create a folder named `TASK-4-SPACEXPLORER` and save the webpage code as:

```text
index.html
```

### 2️⃣ Open the project

Open the folder in **VS Code** or another code editor.

### 3️⃣ Run the webpage

Open `index.html` in a web browser. You can also use the Live Server extension in VS Code.

**Note:** An internet connection is required to load Bootstrap from its CDN.

---

# 📈 What I Learned

Working on this task helped me understand how CSS animations, transitions and responsive layouts can make a webpage more engaging.

### 💻 Technical Learning
- How to create animations using `@keyframes`
- How `transform` changes an element's position and rotation
- How hover transitions improve navigation and cards
- How Bootstrap's grid helps organize page content
- How to make a navbar collapse on mobile devices
- How media queries adjust the layout for smaller screens
- How to create a planet illustration with CSS
- How to respect reduced-motion preferences

### 🧠 Development Mindset
- Divide a webpage into clear sections
- Keep the code organized and readable
- Test the design at different screen sizes
- Use animation carefully to support the design
- Improve a project step by step

---

# 🔮 Future Improvements

This project can be extended further by adding:

- 🪐 More space objects and illustrations
- 🌍 Additional space mission information
- 🖼️ Real space images from reliable sources
- 📬 A functional contact form
- 🔗 Social media links
- 🌐 GitHub Pages deployment
- ♿ More accessibility improvements
- 📱 Further responsive design refinements
- ✨ Optional interactive features

---

# 🏆 Learning Journey

```text
HTML Structure
     ↓
CSS Styling
     ↓
Hover Effects & Transitions
     ↓
CSS Keyframe Animations
     ↓
Bootstrap Grid & Navbar
     ↓
Responsive Design
     ↓
🚀 Interactive Front-End Development
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

If you found this project useful or interesting:

⭐ **Star this repository**  
🍴 **Fork it**  
👨‍💻 **Explore the code**  
🚀 **Keep learning & building**

---

<p align="center">
  <b>Made with ❤️, HTML, CSS & Bootstrap by Anurag Prajapati</b>
</p>

<p align="center">
  <i>“The best way to learn web development is to build the web.”</i>
</p>

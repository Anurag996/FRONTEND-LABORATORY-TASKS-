# 💗 VIBE STORE — Reusable React Product Cards

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19">
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/CSS3-Design-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
</p>

<p align="center">
  <b>YOUR STYLE. YOUR VIBE. YOUR COLLECTION.</b><br>
  A dark-themed product showcase built with reusable React components and props.
</p>

---

## 🌟 About the Project

**Vibe Store** is a creative ecommerce-style product showcase made using **React, JavaScript and CSS**.

The design uses a premium black background with neon-pink highlights. It displays three different products:

| Product | Description |
|---|---|
| 👟 Air Flex Sneakers | A sporty sneaker product card |
| ❤️ RCB Fan Jersey | A fan jersey inspired by Virat Kohli and Royal Challengers Bengaluru |
| ✨ Classic Bracelet | A minimal bracelet product card |

The main purpose of this task is to understand **React reusable components**. Instead of writing the same card HTML/JSX three times, we create one component named `ProductCart` and reuse it with different data through **props**.

> **Core concept:** Write once, reuse many times. Each card has the same structure, but its content changes according to the props received.

---

## 🎨 Design Features

- 🖤 Black and dark charcoal background
- 💗 Neon-pink headings, buttons and highlights
- ✨ Hero section with a bold store identity
- 🏷️ Product tags such as `BEST SELLER` and `TRENDING`
- 🖼️ Product images with hover zoom effect
- 📦 Reusable product cards
- 📱 Responsive layout for tablet and mobile screens
- 🪄 Hover lift and pink glow effects

---

## 🧰 Technologies Used

| Technology | Where it is used |
|---|---|
| React | Creating the `App` and `ProductCart` components |
| JavaScript (ES6+) | Component logic and props |
| JSX | Writing the UI structure inside React |
| CSS3 | Theme, layout, hover effects and responsiveness |
| Vite | Running the local development server and building the project |

---

## 📁 Project Folder Structure

The project uses the usual Vite + React structure. The three main source files are inside `src`.

```text
myreact_2app/
│
├── public/
│   └── (public static assets, if added)
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
└── README.md
```

### 🔍 What does each file do?

#### 1. `src/App.jsx` — The main application

This is where the main React UI is written.

It contains:

- `ProductCart` — the reusable product card component.
- `App` — the parent component that displays the page.
- Three `ProductCart` instances — sneakers, RCB fan jersey and bracelet.
- Product information passed through props: `image`, `title`, `description`, `price` and `tag`.

**In simple words:** `App.jsx` decides what appears on the webpage and what data each product card receives.

#### 2. `src/App.css` — The design and styling

This file controls how the webpage looks.

It contains styles for:

- Navbar and store logo
- Hero section and headings
- Product cards and product images
- Pink buttons, tags and hover effects
- Footer
- Responsive layout using media queries

**In simple words:** `App.css` makes the webpage attractive. JSX gives the structure; CSS gives it the look.

#### 3. `src/main.jsx` — The React entry point

This file connects React with the HTML page.

It:
1. Imports React.
2. Imports `createRoot` from `react-dom/client`.
3. Imports the main `App` component.
4. Finds the HTML element with `id="root"`.
5. Renders the React application inside that element.

**In simple words:** `main.jsx` is the starting point that loads the `App` component in the browser.

#### 4. `index.html` — The HTML starting page

This file contains the root element:

```html
<div id="root"></div>
```

It also loads `src/main.jsx` as a module. React uses this root element to display the application.

#### 5. `package.json` — Project information and commands

This file contains project details, installed packages and scripts such as:

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`

#### 6. `package-lock.json` — Dependency lock file

It records the exact dependency tree installed for the project. It helps keep installations consistent.

#### 7. `vite.config.js` — Vite configuration

This file configures Vite and enables the React plugin.

#### 8. `.gitignore` — Files Git should ignore

It lists files and folders that should not be committed to Git, such as generated dependencies or build output.

---

## 🔁 Reusable Component — The Main React Concept

### What is a reusable component?

A reusable component is a UI part that we create once and use multiple times. In this project, all products share the same card design, so we create only one `ProductCart` component.

### Component flow diagram

```text
                       App.jsx
                    Parent Component
                           |
                           |
                 Sends product data
                      using props
                           |
             +-------------+-------------+
             |             |             |
             v             v             v
         Product 1      Product 2      Product 3
          props          props          props
             |             |             |
             +-------------+-------------+
                           |
                           v
                     ProductCart
                  Reusable Component
                           |
                           v
                Same card layout is shown
                 with different product data
```

### Props used in this project

| Prop | Purpose | Example |
|---|---|---|
| `image` | Product image URL | Image URL |
| `title` | Product name | `Air Flex Sneakers` |
| `description` | Product details | `Lightweight sneakers...` |
| `price` | Product price text | `₹2,499` |
| `tag` | Small product label | `BEST SELLER` |

### Example: passing props

```jsx
<ProductCart
  image="sneakers-image-url"
  title="Air Flex Sneakers"
  description="Lightweight and stylish sneakers."
  price="₹2,499"
  tag="BEST SELLER"
/>
```

### Receiving props with destructuring

```jsx
function ProductCart({ image, title, description, price, tag }) {
  return (
    <div className="product-card">
      <span>{tag}</span>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>{price}</h3>
    </div>
  );
}
```

Here, `App` is the **parent component** and `ProductCart` is the **child component**. The parent sends data; the child receives and displays it.

---

## 🌐 How the Application Starts

```text
           You run: npm run dev
                    |
                    v
                 Vite starts
                    |
                    v
               index.html loads
                    |
                    v
                main.jsx runs
                    |
                    v
             App component renders
                    |
                    v
       ProductCart receives props/data
                    |
                    v
       Three product cards appear on page
```

---

## 💻 How to Run This Project in the Terminal

Follow these steps in order.

### Step 1 — Open the project folder

Open VS Code, then open the terminal using:

```text
Terminal → New Terminal
```

Move into the project folder. If your folder is inside Desktop → `REACT_2` → `myreact_2app`, use:

```powershell
cd "$HOME\OneDrive\Desktop\REACT_2\myreact_2app"
```

If your project is saved somewhere else, use that folder's actual path instead.

### Step 2 — Check that you are in the correct folder

Run:

```powershell
dir
```

You should see files/folders such as:

```text
src
public
index.html
package.json
vite.config.js
```

**Important:** Run the npm commands from the folder that contains `package.json`, not from its parent folder.

### Step 3 — Install the project packages

Run this once after opening or downloading the project:

```bash
npm install
```

If PowerShell shows an error that `npm.ps1` cannot be loaded, use:

```powershell
npm.cmd install
```

### Step 4 — Start the React development server

```bash
npm run dev
```

If PowerShell blocks the npm script, use:

```powershell
npm.cmd run dev
```

### Step 5 — Open the website

Vite will show a local URL in the terminal, usually:

```text
http://localhost:5173/
```

Press `Ctrl` and click the URL, or copy it into your browser.

### Step 6 — Stop the server

When you want to stop the running project, click the terminal and press:

```text
Ctrl + C
```

---

## 🧪 Other Useful Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates the production-ready build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs the project's configured Oxlint checks |

---

## 🛠️ Common Problems and Solutions

### Problem 1: `npm` is not recognised or PowerShell blocks `npm.ps1`

Try:

```powershell
npm.cmd install
npm.cmd run dev
```

### Problem 2: `Missing script: "dev"`

You may be in the wrong folder. Move to the folder containing `package.json`, then run:

```powershell
dir
npm.cmd run dev
```

### Problem 3: `Cannot find module` or packages are missing

Run:

```bash
npm install
```

Then start the project again.

### Problem 4: Product image is not loading

The product images in this practice project use online image URLs. Check your internet connection and verify that the image URL is still available. You can replace a URL with another valid image URL.

### Problem 5: The page is blank

Check these points:

- `index.html` contains `<div id="root"></div>`.
- `index.html` loads `/src/main.jsx`.
- `main.jsx` imports `App` from `./App.jsx`.
- `App.jsx` imports `./App.css`.
- Check the browser console and terminal for errors.

---

## 📚 What I Practised / Learned

- Creating functional components in React
- Reusing one component for multiple products
- Passing data from parent to child with props
- Using props destructuring in a function parameter
- Writing JSX and importing CSS
- Understanding the role of `App.jsx`, `App.css` and `main.jsx`
- Creating a responsive product grid with CSS
- Adding hover transitions and visual effects
- Running a Vite + React project through the terminal

---

## 🚀 Future Improvements

This is currently a UI and reusable-components practice task. The buttons are visual only; cart functionality has not been implemented yet.

Possible next steps:

- Add working Add to Cart functionality with React state
- Show the cart item count in the navbar
- Add quantity controls
- Add product categories and filters
- Add a product details page
- Use a product array and JavaScript `.map()` to render cards
- Connect product data to an API

---

## 👨‍💻 About the Author

<p align="center">
  <b>Anurag Prajapati</b><br>
  B.Tech Computer Science & Engineering Student<br>
  GLA University, Mathura
</p>

<p align="center">
  <a href="https://github.com/Anurag996">GitHub</a> •
  <a href="https://www.linkedin.com/in/anurag-prajapati-8ab87642a/">LinkedIn</a> •
  <a href="https://leetcode.com/u/ANURAG_2903/">LeetCode</a>
</p>

---

<p align="center">
  <b>💗 Built with React | Styled with creativity | Powered by reusable components</b><br>
  <i>One component. Different products. Endless possibilities.</i>
</p>

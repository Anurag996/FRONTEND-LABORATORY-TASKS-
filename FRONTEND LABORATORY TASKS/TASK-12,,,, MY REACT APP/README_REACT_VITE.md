<div align="center">

# ⚡ MYREACT_2APP

### Building Modern Web Experiences with React + Vite

<p>
  <img src="https://img.shields.io/badge/React-19.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-8.3.6-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES%20Modules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Oxlint-Code%20Quality-8B5CF6?style=for-the-badge" />
</p>

**A React learning project powered by Vite — fast development, modern tooling, and a clean starting point for building interactive user interfaces.**

[About](#-about-the-project) •
[Installation](#-getting-started) •
[Run](#-run-the-project) •
[Structure](#-project-structure) •
[Commands](#-available-commands) •
[Author](#-about-the-developer)

</div>

---

## 📌 About the Project

`myreact_2app` is a front-end project created with **React 19 and Vite 8**.

The project setup provides the essential foundation required to develop a React application:

- **React** is used to build the user interface with reusable components.
- **React DOM** connects React components to the browser DOM.
- **Vite** runs the local development server and builds the project for production.
- **The React Vite plugin** enables React support inside Vite.
- **Oxlint** checks the code for selected linting issues.

This repository is a starting point for learning React and developing front-end features. The exact page features depend on the components added inside the `src` folder.

## ✨ Project Highlights

| Feature / Tool | What it does |
|---|---|
| ⚛️ React 19 | Builds component-based user interfaces |
| ⚡ Vite 8 | Starts a fast local development server |
| 🔁 HMR | Updates supported changes in the browser during development |
| 🧩 React Plugin | Enables React integration with Vite |
| 🧹 Oxlint | Checks code using configured lint rules |
| 📦 npm | Installs dependencies and runs project scripts |

## 🧰 Tech Stack

<div align="center">

| Technology | Role in this project |
|---|---|
| React `19.3.1` | UI library |
| React DOM `19.3.1` | Renders React into the browser |
| Vite `8.3.6` | Development server and production build tool |
| JavaScript ES Modules | Application language and module system |
| `@vitejs/plugin-react` | React integration for Vite |
| Oxlint | Fast JavaScript / React linting |

</div>

---

## 🧠 How the Project Works

The basic application startup flow is:

```text
             YOU OPEN THE PROJECT
                       |
                       v
                npm install
                       |
                       v
           Dependencies are installed
                       |
                       v
                npm run dev
                       |
                       v
                VITE SERVER
                       |
                       v
                 index.html
                       |
                       v
                /src/main.jsx
                       |
                       v
             React application starts
                       |
                       v
            Components render in browser
                       |
                       v
              YOUR WEB APPLICATION
```

### 🔍 What happens behind the scenes?

1. **`npm install`** reads `package.json` and installs the packages required by the project.
2. **`npm run dev`** executes the `dev` script defined in `package.json`.
3. That script starts Vite's development server.
4. `index.html` provides the browser entry page and contains the `root` element.
5. The script in `index.html` loads `/src/main.jsx`.
6. `main.jsx` is the React entry point. It normally renders the main React component into the `root` element.
7. React displays the application in the browser.

> Important: `src/main.jsx` and the React components must exist in your actual project folder. Add your application code there; this README describes the supplied Vite setup, not features that have not yet been implemented.

---

## 📂 Project Structure

The supplied configuration confirms the files below. The `src` folder is referenced by `index.html`; keep your React entry files inside it.

```text
myreact_2app/
│
├── node_modules/              # Installed packages (created by npm install)
│
├── public/                    # Static files, if you add any
│
├── src/                       # React application source code
│   ├── main.jsx               # React entry point (referenced by index.html)
│   ├── App.jsx                # Main application component (create/use as needed)
│   └── index.css              # Global styles (if used)
│
├── index.html                 # Browser's main HTML page
├── package.json               # Project details, dependencies and scripts
├── package-lock.json          # Exact dependency version lock
├── vite.config.js              # Vite + React plugin configuration
├── .oxlintrc.json             # Oxlint rules
└── README.md                  # Project documentation
```

### 🗂️ What is each important file for?

| File / Folder | Explanation |
|---|---|
| `index.html` | The HTML page opened by the browser. It contains `<div id="root"></div>`, where React mounts the app. |
| `src/main.jsx` | The JavaScript entry point loaded by `index.html`. It starts the React rendering process. |
| `src/App.jsx` | A common place for the main application component and page UI. |
| `src/index.css` | A common place for global CSS styles, if imported by the app. |
| `public/` | Stores static assets that can be served directly. |
| `node_modules/` | Contains installed packages. It is generated by npm and should not be manually edited. |
| `package.json` | Defines the project name, dependencies and terminal commands. |
| `package-lock.json` | Records the resolved dependency versions for consistent installs. |
| `vite.config.js` | Configures Vite and enables the React plugin. |
| `.oxlintrc.json` | Configures Oxlint rules for React and Oxc. |
| `README.md` | Explains the project and how to run it. |

---

## 💻 Getting Started

### 1. Requirements

Install these before running the project:

- **Node.js:** Use Node.js `20.19+` or `22.12+` (or a compatible newer release) for Vite 8.
- **npm:** Installed along with Node.js.
- **VS Code:** Recommended code editor (optional).

Check whether Node.js and npm are installed:

```bash
node -v
npm -v
```

If both commands show version numbers, continue.

### 2. Open the project folder in VS Code

Open VS Code, select **File → Open Folder**, and choose the folder named:

```text
myreact_2app
```

Make sure you open the folder that contains `package.json`, not just its parent folder.

### 3. Open the VS Code terminal

Use:

```text
Terminal → New Terminal
```

Check the current folder:

```bash
dir
```

You should be able to see `package.json` in the output.

---

## 🚀 Run the Project

Run these commands in the VS Code terminal, one at a time.

### Step 1 — Install project dependencies

```bash
npm install
```

**What does it do?**

It reads `package.json` and downloads the required packages into the `node_modules` folder.

You generally need to run this after cloning the project for the first time, or when dependencies have changed.

### Step 2 — Start the development server

```bash
npm run dev
```

**What does it do?**

It runs the `dev` script from `package.json` and starts the Vite development server.

The terminal will show a local URL, usually similar to:

```text
  Local:   http://localhost:5173/
```

### Step 3 — Open the application

Press `Ctrl` and click the local URL in the terminal, or copy it into your browser:

```text
http://localhost:5173/
```

Your React application will open in the browser.

### Step 4 — Stop the server

To stop the running development server, click inside the terminal and press:

```text
Ctrl + C
```

To start it again later, open a terminal in the project folder and run:

```bash
npm run dev
```

---

## 🪟 Windows PowerShell Tip

If PowerShell displays an error saying that `npm.ps1` cannot be loaded because script execution is disabled, try the Windows command shim:

```powershell
npm.cmd install
npm.cmd run dev
```

This avoids invoking the PowerShell `npm.ps1` script. It does not require changing your system execution policy.

If the terminal says that `package.json` cannot be found, you are probably in the wrong folder. Navigate to the folder that contains `package.json`, then run the command again.

Example (adjust the path to match where you saved your project):

```powershell
cd "$HOME\OneDrive\Desktop\REACT_2\myreact_2app"
dir
npm.cmd install
npm.cmd run dev
```

If your project is directly on the Desktop instead, use its actual location. The important point is: **run npm commands from inside `myreact_2app`, where `package.json` exists.**

---

## 📜 Available Commands

These scripts are defined in the supplied `package.json`:

| Command | Purpose |
|---|---|
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates an optimized production build in `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs Oxlint on the project |

### Create a production build

```bash
npm run build
```

After a successful build, Vite generates the production files in:

```text
dist/
```

### Preview the production build

```bash
npm run preview
```

Vite starts a local preview server. Open the URL shown in the terminal.

---

## 🧩 Understanding `package.json`

The important part of the supplied `package.json` is:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.3.1",
    "react-dom": "^19.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^6.1.2",
    "oxlint": "^1.90.0",
    "vite": "^8.3.6"
  }
}
```

- `scripts` contains shortcuts that can be executed with `npm run`.
- `dependencies` contains packages needed by the application.
- `devDependencies` contains development tools such as Vite and Oxlint.
- `^` allows compatible package updates according to npm's version rules; `package-lock.json` records the resolved versions.

---

## 🧯 Common Problems & Solutions

| Problem | What to do |
|---|---|
| `npm` is not recognized | Install Node.js, restart VS Code, then check `node -v` and `npm -v`. |
| `npm.ps1 cannot be loaded` | Try `npm.cmd run dev` in PowerShell. |
| `Missing script: dev` | Check that you are in the correct project folder and that `package.json` has the `dev` script. |
| `package.json not found` | Use `cd` to enter the `myreact_2app` folder. |
| `vite is not recognized` | Run `npm install` first. |
| `Port is already in use` | Vite may offer another available local port in the terminal. Open the URL it displays. |
| Blank page / import error | Check that `src/main.jsx` exists and that imported component and CSS paths are correct. |

---

## 🎯 What I Am Learning

This project is part of my hands-on journey into modern front-end development.

- Understanding React project structure.
- Learning how React applications start and render.
- Working with components and JSX.
- Understanding the role of `package.json`.
- Running development servers with npm.
- Using Vite for faster development.
- Learning code-quality tools such as Oxlint.
- Building a foundation for interactive web applications.

## 🔮 Future Scope

As I continue learning React, I plan to explore:

- Reusable React components.
- Props and State.
- Event handling.
- Conditional rendering.
- React Hooks such as `useState` and `useEffect`.
- API integration.
- React Router.
- Responsive UI development.

---

## 👨‍💻 About the Developer

<div align="center">

# Anurag Prajapati

**B.Tech — Computer Science & Engineering**  
**GLA University, Mathura**

*Aspiring Software Developer | Java & Web Development Enthusiast*

</div>

I am a Computer Science student who enjoys learning by building projects, solving programming problems, and strengthening development fundamentals.

Currently exploring:

- ☕ Java Programming
- 🧠 Data Structures & Algorithms
- ⚛️ React.js
- 🌐 HTML, CSS & JavaScript
- 💻 Front-End and Full Stack Development

### 🌐 Connect With Me

<p align="center">
  <a href="https://github.com/Anurag996">
    <img src="https://img.shields.io/badge/GitHub-Anurag996-181717?style=for-the-badge&logo=github" />
  </a>
  <a href="https://leetcode.com/u/ANURAG_2903/">
    <img src="https://img.shields.io/badge/LeetCode-ANURAG__2903-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" />
  </a>
  <a href="https://www.linkedin.com/in/anurag-prajapati-8ab87642a/">
    <img src="https://img.shields.io/badge/LinkedIn-Anurag%20Prajapati-0A66C2?style=for-the-badge&logo=linkedin" />
  </a>
</p>

---

<div align="center">

### ⭐ Learning by Building. Improving by Practicing. Growing Every Day.

**Thanks for visiting my repository!**

</div>

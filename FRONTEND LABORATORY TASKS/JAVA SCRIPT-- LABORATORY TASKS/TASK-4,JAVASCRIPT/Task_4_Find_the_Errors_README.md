# 🌐 JavaScript Beginner Projects — Task 4

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Beginner%20Project-16A34A?style=for-the-badge&logo=github&logoColor=white" alt="Beginner Project">
</p>

<h2 align="center">✨ Find and Fix the JavaScript Errors ✨</h2>

<p align="center">
  A debugging exercise focused on invalid variable names, duplicate declarations,
  constant reassignment and printing the correct variables.
</p>

---

## 👨‍💻 About Me

Hi! I'm **Anurag Prajapati**, a **B.Tech Computer Science student** learning how to read JavaScript errors and fix them step by step.

This task demonstrates common beginner mistakes in variable declarations and assignments.

> 💡 **“Debugging is not guessing; it is understanding what the code is telling you.”**

---

# 📚 Project Overview

| 🏷️ Task | 📌 Project | 🎯 Main Concepts |
|---|---|---|
| **Task 4** | 🐞 Find the Errors | Valid identifiers, duplicate declarations, `const` and console output |

---

# 🧩 TASK 4 — Find the Errors

## 🎯 Objective

Find and correct the errors in the given JavaScript code so that the program prints the intended values.

## ❌ Code with Errors

```javascript
var 1name = "Rahul";
let city = "Mathura";
let city = "Delhi";
const subject = "JavaScript";
subject = "HTML";
console.log(name);
```

## 🔍 Errors Explained

1. **`var 1name`** — variable names cannot begin with a number.
2. **`let city` declared twice** — the same `let` variable cannot be declared twice in the same scope.
3. **`subject = "HTML"`** — a `const` variable cannot be reassigned.
4. **`console.log(name)`** — the declared variable was written as `1name`, which is invalid; after correction, `name` should be declared properly.

---

## ✅ Corrected Code

```javascript
var name = "Rahul";
let city = "Mathura";
city = "Delhi";
const subject = "JavaScript";

console.log(name);
console.log(city);
console.log(subject);
```

## 📤 Expected Output

```text
Rahul
Delhi
JavaScript
```

## ▶️ How to Run

1. Copy the corrected code into an `index.html` file inside a `<script>` tag, or save it in a `.js` file.
2. Open the HTML page in a browser.
3. Open Developer Tools and select **Console**.
4. Confirm that the three expected values appear without errors.

## 📖 What I Learned

- JavaScript variable names cannot start with a digit.
- `let` declarations cannot be repeated in the same scope.
- A `const` variable cannot be reassigned.
- The variable used in `console.log()` must match the declared variable name.
- Fixing syntax errors first makes it easier to identify other problems.

---

## 🚀 Future Improvements

- Practise more syntax-error examples.
- Learn how to read browser console messages.
- Debug errors one at a time.
- Try using `let` and `const` appropriately in new programs.

---

## 👨‍🎓 Author

**Anurag Prajapati**  
B.Tech Computer Science Student

<p align="center">⭐ Find the mistake, understand the reason, and fix it. ⭐</p>

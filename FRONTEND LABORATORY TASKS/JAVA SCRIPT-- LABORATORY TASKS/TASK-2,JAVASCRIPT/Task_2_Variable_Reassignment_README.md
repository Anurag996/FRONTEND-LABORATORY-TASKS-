# 🌐 JavaScript Beginner Projects — Task 2

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Beginner%20Project-16A34A?style=for-the-badge&logo=github&logoColor=white" alt="Beginner Project">
</p>

<h2 align="center">✨ Understanding JavaScript Variables ✨</h2>

<p align="center">
  A practical exercise demonstrating variable declaration, reassignment and
  the differences between <code>var</code>, <code>let</code> and <code>const</code>.
</p>

---

## 👨‍💻 About Me

Hi! I'm **Anurag Prajapati**, a **B.Tech Computer Science student** learning the fundamentals of JavaScript through small practical tasks.

This project helps me understand which variable declarations allow a value to be changed and which do not.

> 💡 **“Understanding the basics builds confidence for solving bigger problems.”**

---

# 📚 Project Overview

| 🏷️ Task | 📌 Project | 🎯 Main Concepts |
|---|---|---|
| **Task 2** | 🔁 Variable Reassignment | `var`, `let`, `const`, assignment and scope basics |

---

# 🧩 TASK 2 — Variable Reassignment

## 🎯 Objective

Declare variables using `var`, `let` and `const`, assign initial values, and change the values wherever JavaScript allows it.

## 🛠️ Concepts Used

- 🔤 Declaring variables
- 🔁 Reassigning values
- 🧩 Difference between `var`, `let` and `const`
- ⚠️ Avoiding reassignment of a `const` variable

## 💻 JavaScript Example

```javascript
var name = "Rahul";
name = "Anurag";

let city = "Mathura";
city = "Kanpur";

const subject = "JavaScript";
// subject = "HTML"; // This line causes an error because subject is const.

console.log(name);
console.log(city);
console.log(subject);
```

## 📤 Expected Output

```text
Anurag
Kanpur
JavaScript
```

## 🔍 Key Difference

| Keyword | Can reassign value? | Can redeclare in the same scope? |
|---|---|---|
| `var` | ✅ Yes | ✅ Yes |
| `let` | ✅ Yes | ❌ No |
| `const` | ❌ No | ❌ No |

A `const` variable must be initialized when it is declared. Reassigning it causes an error, so the invalid line is kept as a comment in the example.

## ▶️ How to Run

1. Create an `index.html` file.
2. Place the JavaScript code inside a `<script>` tag or an external `.js` file.
3. Open the page in a browser.
4. Open Developer Tools and select the **Console** tab to see the output.

## 📖 What I Learned

- `var` and `let` variables can be reassigned.
- A `const` binding cannot be reassigned.
- JavaScript keywords have different redeclaration rules.
- A single invalid assignment can stop the script from running normally.

---

## 🚀 Future Improvements

- Try the same examples with different data types.
- Test redeclaration in separate code blocks.
- Display the results on the webpage instead of only in the console.

---

## 👨‍🎓 Author

**Anurag Prajapati**  
B.Tech Computer Science Student

<p align="center">⭐ Learn the rules, practise the examples, and keep coding. ⭐</p>

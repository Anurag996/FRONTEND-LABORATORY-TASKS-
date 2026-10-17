# 🎂 Age Eligibility Checker — HTML, CSS & JavaScript

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-Structure-orange?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-Styling-blue?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-Logic-yellow?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Beginner-Project-16A34A?style=for-the-badge" alt="Beginner Project">
</p>

<h2 align="center">✨ Taking Input. Checking Conditions. Showing Results. ✨</h2>

<p align="center">
  A beginner-friendly web project that checks an entered age using <b>HTML, CSS and JavaScript</b>.
  It demonstrates user input, validation, conditional statements, alerts and dynamic page updates.
</p>

---

## 👨‍💻 About Me

Hi! I'm **Anurag Prajapati**, a **B.Tech Computer Science student** interested in programming, web development and building practical projects.

This project is part of my hands-on learning journey, where I practise JavaScript fundamentals and learn how to make a webpage interactive.

> 💡 **“Every small project makes the next concept easier to understand.”**

---

# 📚 Project Overview

The **Age Eligibility Checker** asks the user to enter their age and then displays a result based on the entered value.

| 🏷️ Feature | 📌 Description |
|---|---|
| 🧾 User Input | Takes age through JavaScript `prompt()` |
| ✅ Input Validation | Checks empty, invalid, negative and decimal values |
| 🔀 Conditional Logic | Uses `if-else` to check whether age is 18 or above |
| 🔔 Alerts | Displays messages using `alert()` |
| 🖥️ Dynamic Output | Updates the result section on the webpage |
| 🎨 User Interface | Gradient background, centered card and styled button |

> ⚠️ **Note:** This project uses 18 as its example threshold. It is a practice project, not a legal eligibility determination.

---

# 🧩 Project Features

### 🎨 1. Clean User Interface

The webpage uses a dark blue gradient background, a white content card, rounded corners and a shadow to keep the interface simple and readable.

### 🧾 2. Age Input

When the user clicks **Check Eligibility**, JavaScript opens a prompt and asks for an age.

```javascript
let age = prompt("Enter your age:");
```

### 🛡️ 3. Input Validation

The code handles cancellation and checks whether the entered value is empty, numeric, non-negative and an integer.

```javascript
age = age.trim();

if (age === "" || !Number.isFinite(Number(age)) || Number(age) < 0 || !Number.isInteger(Number(age))) {
    alert("Please enter a valid age!");
    document.getElementById("result").innerHTML = "Invalid age entered.";
    return;
}
```

### 🔀 4. Eligibility Check

After validation, an `if-else` statement checks whether the age is at least 18.

```javascript
if (age >= 18) {
    alert("You are eligible!");
} else {
    alert("You are not eligible!");
}
```

### 🖥️ 5. Result on the Webpage

The result section displays the entered age and the corresponding message without replacing the whole webpage.

```javascript
document.getElementById("result").innerHTML = "Your Age: " + age + "<br>" + message;
```

---

# 🧠 JavaScript Concepts Covered

### 1️⃣ `prompt()` — Taking Input

`prompt()` opens a small dialog box and lets the user type a value. The value returned is a string, so the project validates it before using it as an age.

### 2️⃣ `alert()` — Showing a Message

`alert()` displays a message in a dialog box. This project uses it for cancellation, invalid input and the eligibility result.

### 3️⃣ `trim()` — Removing Extra Spaces

```javascript
age = age.trim();
```

The `trim()` method removes whitespace from the beginning and end of the entered text.

### 4️⃣ `Number()` and `Number.isFinite()`

`Number()` converts a numeric string into a number. `Number.isFinite()` helps reject values that do not convert to a finite number.

### 5️⃣ `Number.isInteger()`

This checks that the entered age is a whole number, so decimal values such as `18.5` are rejected.

### 6️⃣ `if-else` Statement

The `if-else` structure selects one of two outcomes based on whether the condition is true or false.

### 7️⃣ Ternary Operator

The ternary operator provides a compact way to select a message:

```javascript
let message = age >= 18 ? "You are eligible." : "You are not eligible.";
```

### 8️⃣ DOM Manipulation

```javascript
document.getElementById("result").innerHTML = message;
```

`getElementById()` selects an element by its ID, and `innerHTML` updates the content displayed inside it.

---

# 🎨 CSS Styling Used

The CSS gives the project its appearance through:

- 🌌 Linear gradient background (`#141e30` to `#243b55`)
- 📐 Flexbox alignment to center the content
- 🧱 A white container with a maximum width of `450px`
- 🔵 Rounded corners and a box shadow
- 🔤 Arial font and heading styles
- 🖱️ Button hover effect using `transform: scale(...)`
- 📄 A dedicated result area for output

Example of the background styling:

```css
body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, #141e30, #243b55);
    display: flex;
    justify-content: center;
    align-items: center;
}
```

---

# 🔄 Program Flow

```text
Start
  |
  v
Click "Check Eligibility"
  |
  v
Enter age using prompt()
  |
  v
Was prompt cancelled?
  | Yes                 | No
  v                     v
Show cancellation     Trim and validate input
message                  |
                         v
                 Is the input valid?
                    | No       | Yes
                    v          v
              Show error    Convert age to Number
              and return        |
                                v
                         Is age >= 18?
                           | Yes     | No
                           v         v
                      Eligible   Not eligible
                           \       /
                            v     v
                       Update result
                            |
                            v
                            End
```

---

# 🧪 Example Runs

| 🧾 Input | 🎯 Expected Result |
|---|---|
| `20` | Eligible message |
| `18` | Eligible message |
| `16` | Not eligible message |
| `-2` | Invalid age message |
| `18.5` | Invalid age message |
| Empty input | Invalid age message |
| Cancel prompt | Cancellation alert; no further processing |

---

# 💻 Complete Source Code

Save the following code as **`index.html`**. It contains the HTML, CSS and JavaScript in one file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Age Eligibility Checker</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(to right, #141e30, #243b55);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }

        .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            text-align: center;
            width: 90%;
            max-width: 450px;
        }

        h1 {
            color: #243b55;
        }

        button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            background-color: #243b55;
            color: white;
            cursor: pointer;
            transition: transform 0.2s;
        }

        button:hover {
            transform: scale(1.05);
        }

        #result {
            margin-top: 20px;
            font-size: 18px;
            color: #141e30;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Age Eligibility Checker</h1>
        <p>Click the button below to check your age eligibility.</p>
        <button onclick="checkAge()">Check Eligibility</button>
        <p id="result"></p>
    </div>

    <script>
        function checkAge() {
            let age = prompt("Enter your age:");

            // Agar user prompt cancel kare to yahin ruk jao
            if (age === null) {
                alert("You cancelled the input.");
                return;
            }

            // Extra spaces hata do
            age = age.trim();

            // Input empty, non-numeric, negative ya decimal hai to invalid hai
            if (age === "" || !Number.isFinite(Number(age)) || Number(age) < 0 || !Number.isInteger(Number(age))) {
                alert("Please enter a valid age!");
                document.getElementById("result").innerHTML = "Invalid age entered.";
                return;
            }

            age = Number(age);

            if (age >= 18) {
                alert("You are eligible!");
            } else {
                alert("You are not eligible!");
            }

            let message = age >= 18 ? "You are eligible." : "You are not eligible.";

            document.getElementById("result").innerHTML = "Your Age: " + age + "<br>" + message;

            // document.write("Your age is " + age);
            // Isko uncomment karoge to poora current page replace ho jayega.
        }
    </script>
</body>
</html>
```

---

# 📁 Project Structure

```text
AGE-ELIGIBILITY-CHECKER/
│
├── index.html       # HTML, CSS and JavaScript in one file
└── README.md        # Project documentation
```

---

# 🛠️ Technologies Used

<p>
  <img src="https://img.shields.io/badge/HTML5-Structure-orange?style=flat-square&logo=html5" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-Styling-blue?style=flat-square&logo=css3" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-Interactivity-yellow?style=flat-square&logo=javascript" alt="JavaScript">
  <img src="https://img.shields.io/badge/Browser-Run%20Project-16A34A?style=flat-square&logo=googlechrome" alt="Browser">
</p>

| Technology | Used For |
|---|---|
| 🧱 **HTML5** | Page structure, heading, paragraph, button and result element |
| 🎨 **CSS3** | Gradient background, layout, card and button styling |
| ⚡ **JavaScript** | Input, validation, conditions, alerts and page updates |
| 🌐 **Web Browser** | Opening and testing the project |

---

# 🚀 How to Run

### 1️⃣ Create the file

Create a new file named `index.html` in your project folder.

### 2️⃣ Add the code

Paste the complete source code from the section above and save the file.

### 3️⃣ Open in a browser

Double-click `index.html`, or open it in a browser using your code editor.

### 4️⃣ Test different inputs

Click **Check Eligibility** and try valid ages, negative values, decimal values, empty input and the Cancel button.

---

# 🎓 What I Learned

By creating this project, I practised:

- ✅ Connecting HTML, CSS and JavaScript in a single webpage
- ✅ Taking input with `prompt()`
- ✅ Displaying messages with `alert()`
- ✅ Handling cancelled input using `null`
- ✅ Removing extra spaces with `trim()`
- ✅ Converting strings into numbers
- ✅ Validating input before processing it
- ✅ Using `if-else` and the ternary operator
- ✅ Updating webpage content with the DOM
- ✅ Styling elements and adding hover effects with CSS

> 🚀 **The main lesson: validate user input first, then apply the program logic.**

---

# 🔮 Future Improvements

Some ideas to improve this project in the future:

- 📥 Replace the prompt dialog with an input field directly on the webpage
- 📱 Improve the layout for more screen sizes
- ♿ Add clearer accessible labels and error messages
- 🎨 Add separate success and error styles
- 🔄 Add a reset button to clear the result
- 🧪 Add more test cases for unusual input values

---

# 🌱 My Learning Journey

This small project helped me practise how a webpage can take user input, validate it and respond with a result. I am continuing to strengthen my fundamentals by building simple projects and gradually adding new concepts.

> 💬 **“Consistency turns small practice sessions into real progress.”**

---

## 👨‍💻 Author

**Anurag Prajapati**  
B.Tech Computer Science Engineering Student  
Interested in Java, problem solving and web development.

---

<p align="center">
  ⭐ If you find this project useful, consider giving the repository a star!
  <br>
  <b>Keep Learning • Keep Building • Keep Growing 🚀</b>
</p>

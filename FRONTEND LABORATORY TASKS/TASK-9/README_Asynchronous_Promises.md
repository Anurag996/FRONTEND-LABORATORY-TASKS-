# ⚡ Asynchronous JavaScript & Promises

A beginner-friendly project demonstrating **asynchronous JavaScript** with a Promise and `setTimeout()`.

Click **Fetch Data** to display a loading message. After a simulated 3-second delay, the page displays the received student details.

## ✨ Features

- Fetch Data button to start the process
- Loading message while waiting
- Promise-based asynchronous operation
- Simulated server delay using `setTimeout()`
- Displays the successful response using `.then()`
- Dark background with golden styling

## 🛠️ Technologies Used

- **HTML** – page structure
- **CSS** – styling and layout
- **JavaScript** – Promise handling and asynchronous behavior

## ⚙️ How It Works

1. Click the **Fetch Data** button.
2. The `fetchData()` function runs.
3. The page displays `Loading data...`.
4. A new Promise is created.
5. `setTimeout()` waits for 3 seconds to simulate a server response.
6. `resolve(serverData)` fulfills the Promise with the data.
7. `.then()` receives the data and displays it on the page.

## 📚 JavaScript Concepts Practised

| Concept | Purpose |
|---|---|
| Function | Runs the data-fetching process |
| Promise | Represents an operation that completes later |
| `resolve()` | Sends a successful result from the Promise |
| `setTimeout()` | Adds a 3-second delay |
| `.then()` | Handles the successfully resolved Promise |
| `innerHTML` | Updates the result section on the webpage |

## ▶️ How to Run

1. Download or clone this repository.
2. Open `ASYNCHRONOUS_PROMISES.html` in a web browser.
3. Click **Fetch Data**.
4. Wait for 3 seconds to see the result.

No installation or external library is required.

## 📂 Project Structure

```text
ASYNCHRONOUS_PROMISES/
├── ASYNCHRONOUS_PROMISES.html
└── README.md
```

## 👨‍💻 Author

**Anurag Prajapati**  
B.Tech CSE Student

- GitHub: [Anurag996](https://github.com/Anurag996)
- LinkedIn: [Anurag Prajapati](https://www.linkedin.com/in/anurag-prajapati-8ab87642a/)

---

⭐ *A small project to understand how JavaScript handles operations that take time.*

**Note:** This project simulates server data fetching in the browser. It does not send a request to a real server or API.

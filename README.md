# 🚀 Toggle Feature Panel (Accordion UI)

A modern and interactive **Accordion (Toggle Feature Panel)** built using **React + Vite + Tailwind CSS**.
This project demonstrates clean UI design, reusable components, and state management using React hooks.

---

## 📌 Features

✅ Toggle individual sections
✅ Open all sections at once
✅ Close all sections at once
✅ Track active (opened) sections count
✅ Smooth animations and transitions
✅ Clean and reusable component structure
✅ Responsive and modern UI

---

## 🛠️ Tech Stack

⚛️ React (Functional Components + Hooks)
⚡ Vite (Fast build tool)
🎨 Tailwind CSS (Styling)
🎯 JavaScript (ES6+)

---

## 🧠 Core Logic

### 🔹 State Management

* Uses `useState` to manage accordion data
* Each item contains:

  ```
  {
    id,
    name,
    isOpen
  }
  ```

### 🔹 Toggle Logic

* Toggle single item:

  ```
  item.id === id ? { ...item, isOpen: !item.isOpen } : item
  ```

* Open all:

  ```
  isOpen: true
  ```

* Close all:

  ```
  isOpen: false
  ```

### 🔹 Active Count

* Counts open sections dynamically:

  ```
  data.filter(item => item.isOpen).length
  ```

---

## 🎨 UI Highlights

* Smooth expand/collapse animation
* Chevron icon rotation on toggle
* Dark theme design
* Tailwind utility-based styling

---

## 📸 Preview

> Add screenshots or GIF here (recommended for better GitHub presentation)

---

## 🚀 Future Improvements

* 🔹 Add search/filter functionality
* 🔹 Persist state using localStorage
* 🔹 Add API-based dynamic content
* 🔹 Add keyboard accessibility
* 🔹 Convert into reusable npm package

---

## 👨‍💻 Author

**Harsh Maisuriya**

* GitHub: https://github.com/Harsh-maisuriya-1910
* LinkedIn: https://www.linkedin.com/in/harsh-maisuriya-b02783276/

---

⭐ If you like this project, don't forget to give it a star!


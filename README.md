# NeoCSS – A Modern SCSS Framework by Neotec  

🚀 **NeoCSS** is a structured, scalable, and lightweight **SCSS framework** designed for real-world projects. It provides a **modular architecture, reusable UI components**, and a well-organized alternative to utility-based CSS frameworks.  

---

## ✨ Features  

👉 **7-1 SCSS Architecture** – Organized for maintainability & scalability.  
👉 **Reusable SCSS Components** – Prebuilt styles for buttons, forms, and more.  
👉 **Lightweight & Customizable** – Minimalist by default, extend as needed.  
👉 **Consistent Design System** – Variables, mixins, and functions for flexibility.  
👉 **Optimized for Real-World Projects** – Built for production-ready web apps.  

---

## 📂 Project Structure  

```
.
├── styles/          # Core SCSS files (7-1 architecture)
├── app/             # Next.js application setup
├── public/          # Static assets
├── package.json     # Dependencies & scripts
├── README.md        # Project documentation
└── ...
```  

### **Key SCSS Directories:**  
- `abstracts/` – Variables, mixins, functions, placeholders  
- `base/` – Resets, typography, animations  
- `components/` – Buttons, cards, forms, etc.  
- `layout/` – Grid, header, footer, navigation  
- `pages/` – Page-specific styles  

---

## 🚀 Getting Started  

### 1️⃣ Install NeoCSS  

```sh
git clone https://github.com/Neotec/NeoCSS.git
cd NeoCSS
npm install
```

### 2️⃣ Import SCSS in Your Project  

Inside your main entry file (`layout.js` or `_app.js` in Next.js):  

```js
import '@/styles/index.scss';
```

### 3️⃣ Customize Variables  

Modify `styles/abstracts/_variables.scss` to change colors, spacing, and more.  

---

## 📌 Best Practices  

✔ Keep components modular and reusable.  
✔ Follow the **7-1 SCSS pattern** for clean architecture.  
✔ Use **SCSS mixins & functions** for consistency.  
✔ Avoid unnecessary overrides; use the framework’s utilities first.  

---

## 🌍 Contributing  

Want to improve NeoCSS? Feel free to fork the repo, submit issues, or create PRs. 🚀  

---

## 💜 License  

NeoCSS is **open-source** under the **MIT License**.  


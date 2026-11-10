# Ayan Khan — Personal Portfolio

A clean, modern, and authentic personal portfolio built with **React 19**, **Tailwind CSS v4**, and **Vite**, powered by **Google Sans** typography and an interactive cursor spotlight system.

---

## 🎨 3-Variable Dynamic Color System

This portfolio uses a strict **3-CSS-variable system**. To change the entire color scheme of your website, open `src/index.css` and update the `:root` variables:

```css
:root {
  --color-bg: #ffffff;       /* Page background */
  --color-text: #0f172a;     /* Text and contrast elements */
  --color-accent: #0284c7;   /* Accent highlights and buttons */
}
```

All cards, borders, hover states, shadows, and subtle background tints are mathematically derived using `color-mix()` from these 3 variables. No colors are hardcoded.

---

## 🚀 Getting Started

1. Navigate to the project directory:
   ```bash
   cd Frontend
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build:
   ```bash
   npm run preview
   ```

---

## 📂 Project Structure

```
Frontend/src/
├── assets/
│   └── hero.png              # Profile portrait graphic
├── components/
│   ├── CursorFollower.jsx    # Fluid cursor tracker & interactive ring
│   ├── Navbar.jsx            # Fixed pill navbar with scroll-spy & mobile drawer
│   ├── Hero.jsx              # Hero introduction & action CTAs
│   ├── Projects.jsx          # Projects grid with category filters & cursor spotlight
│   ├── About.jsx             # Personal background & principles
│   ├── Skills.jsx            # Technical skills categorized
│   ├── Contact.jsx           # 1-click email copy & contact form
│   ├── Footer.jsx            # Copyright & back-to-top button
│   └── Icons.jsx             # SVG icons (GitHub, LinkedIn, Twitter)
├── App.jsx                   # Main layout container
├── index.css                 # 3-variable CSS root & Google Sans font
└── main.jsx                  # Application entry point
```

---

## ✏️ Customizing Your Content

- **Personal Info & Headline**: Edit [`src/components/Hero.jsx`](src/components/Hero.jsx).
- **Projects & Links**: Edit the `featuredProject` and `otherProjects` arrays in [`src/components/Projects.jsx`](src/components/Projects.jsx).
- **Skills & Tools**: Edit the `skillGroups` array in [`src/components/Skills.jsx`](src/components/Skills.jsx).
- **Contact Email & Socials**: Edit the email and social links in [`src/components/Contact.jsx`](src/components/Contact.jsx).

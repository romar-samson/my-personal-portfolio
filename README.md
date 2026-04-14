# Romar Samson - UI/UX Designer & Frontend Developer Portfolio

A high-performance, minimalist, and dynamic personal portfolio built to showcase frontend engineering and UI/UX design. The application features a custom fully-animated dark/light mode engine, high-performance radial background rendering, scroll-triggered Framer Motion interactions, and fully semantic HTML optimized perfectly for SEO and Accessibility.

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

## ✨ Key Features

- **Fluid Dark Mode System:** System-wide theming support beautifully tailored by Tailwind classes and managed efficiently at the root architectural level.
- **High-Performance Backgrounds:** Uses ultra-fast native CSS radial gradients (composited via the GPU pointer) instead of hardware-crashing blur filters to provide an organic, dynamic glowing aura.
- **Scroll Tracking Timeline:** A highly aesthetic interactive scrolling history timeline constructed via Framer Motion's `useScroll` handlers.
- **Responsive Layout:** Refined Bento grid architecture guaranteeing a seamless layout transition spanning Mobile, Tablet, and Desktop displays.

---

## 🛠️ Installation & Setup

Want to run this codebase locally so that you can view, edit, or build upon it? Follow the steps carefully below.

### 1. Clone the Repository
First, clone down the project locally to your machine pointing strictly to your repository link:
```bash
git clone https://github.com/yourusername/my-personal-portfolio.git
```
Then navigate heavily into that specific folder:
```bash
cd my-personal-portfolio
```

### 2. Install the Dependencies
Make sure you have an active installation of [Node.js](https://nodejs.org/), then download the exact library dependencies:
```bash
npm install
```

### 3. Spin up the Development Server
To launch Vite's ultra-fast hot-reloading development server, run:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) with your browser to visualize the UI. Every time you save a file, the browser will seamlessly update the interface.

### 4. Build & Preview for Production (Lighthouse Testing)
To officially pack the code into an aggressively minified bundle perfectly matched for deployment (such as Vercel or Netlify) and highly accurate Lighthouse tests, execute:
```bash
npm run build
npm run preview
```

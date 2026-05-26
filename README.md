# Sarthak Turkar - Lead AI Systems Architect Portfolio

A premium, highly interactive single-page portfolio designed for a Lead AI Systems Architect. Built with a focus on futuristic cyber-aesthetics, physics-based animations, and responsive glassmorphism.

## 🚀 Features

- **Custom Animated Cursor**: A physics-driven cursor ring that tracks movement and snaps to interactive elements.
- **3D Tilting Project Cards**: Hover over featured architectures to see them physically tilt towards your cursor with dynamic lighting glare.
- **Scroll-Linked Animations**: An experience timeline that draws itself downward as you scroll, and a global top progress bar.
- **AI-Generated Visuals**: Photorealistic abstract representations of complex AI and robotics systems.
- **Cinematic Overlays**: Subtle animated film grain and mouse-tracking background blobs.
- **Staggered Entrances**: Spring-physics staggered grid animations for certifications and about sections.

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using the new `@import "tailwindcss"` and `@theme` API)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## 💻 Running Locally

To run the portfolio in development mode on your local machine:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   *(Note: Since `basePath: '/portfolio'` is configured in `next.config.js` for GitHub Pages, you may need to access the site at `http://localhost:3000/portfolio` locally, or temporarily comment out `basePath` in `next.config.js` for easier local development at the root URL).*

## 🌍 Deployment

This repository is configured for automatic deployment to **GitHub Pages** using GitHub Actions.

1. Any push to the `main` or `master` branch will trigger the workflow defined in `.github/workflows/deploy.yml`.
2. Next.js will execute a static HTML export (`output: 'export'`).
3. The GitHub Action will upload the `out/` directory and deploy it to your GitHub Pages URL (e.g., `https://sarthakturkar75.github.io/portfolio/`).

### Note on Image Paths
Because this project is deployed to a subpath (`/portfolio/`), absolute asset paths in components (like `src="/portfolio/images/rudraa.png"`) are hardcoded to include the base path to prevent 404 errors in production.

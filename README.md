# Principe Lab Website

Web application built with **React**, **Vite**, and **Tailwind CSS** 

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build

```bash
# Production build
npm run build
```

### Preview

```bash
# Preview production build
npm run preview
```

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages using the `gh-pages` package.

### Option 1: Automated Deployment (Recommended)

1. **Install gh-pages** (if not already installed):
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push
   ```

3. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** > **Pages**
   - Set source to **Deploy from github-pages action** or **Deployments**
   - Branch: `gh-pages` (will be created automatically)

### Option 2: Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload `dist/` folder to GitHub**:
   - Create a `gh-pages` branch: `git checkout -b gh-pages`
   - Copy the `dist/` folder contents to the branch
   - Commit and push: `git push origin gh-pages`

3. **Enable GitHub Pages**:
   - Go to repository **Settings** > **Pages**
   - Source: Select `gh-pages` branch
   - Save

## Project Structure

```
principe-lab-website-new/
├── public/          # Static assets
├── src/             # Source code
│   ├── assets/      # Images, styles, fonts
│   └── components/  # React components
├── index.html       # Entry HTML
├── vite.config.ts   # Vite configuration
├── package.json     # Dependencies
└── tsconfig.json    # TypeScript config
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run lint` | Run ESLint |

## License

MIT

# Algebra Mastery - Interactive Learning Platform

A comprehensive, interactive algebra learning platform built with React, Vite, and Tailwind CSS.

## Features

- 📚 **5 Complete Lessons**: Linear Equations, Absolute Value, Quadratics, Solving Quadratics, and Complex Numbers
- 🎯 **Interactive Practice**: Practice problems with instant feedback
- 💡 **Detailed Examples**: Step-by-step solutions for every concept
- 🎨 **Beautiful UI**: Modern, responsive design with smooth animations
- 📊 **Progress Tracking**: Track your learning progress through sections
- 🎮 **Practice Mode**: Unlimited randomly generated practice problems

## Local Development

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Deploy to Vercel

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure build settings
6. Click "Deploy"

**Or use Vercel CLI:**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

1. Push your code to a GitHub repository
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**Or use Netlify CLI:**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

**Or drag-and-drop:**

1. Run `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist` folder onto the page

## Project Structure

```
algebra-app/
├── src/
│   ├── AlgebraLearning.jsx  # Main component with all lessons
│   ├── App.jsx               # App wrapper
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles with Tailwind
├── index.html                # HTML template
├── package.json              # Dependencies
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
└── postcss.config.js         # PostCSS configuration
```

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Lessons Included

1. **Linear Equation Forms**: Slope-intercept, point-slope, and standard form
2. **Absolute Value Functions**: Understanding, vertex form, and inequalities
3. **Quadratic Functions**: Introduction and form conversions
4. **Solving Quadratic Equations**: Square roots, factoring, and quadratic formula
5. **Complex & Imaginary Numbers**: Introduction, operations, and quadratic solutions

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

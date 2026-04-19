# Al Islam's Premium Portfolio Website

A modern, fully-featured portfolio website built with React, TypeScript, Framer Motion, and Tailwind CSS. Features premium animations, smooth scrolling, custom cursor interactions, and a clean minimal design.

## 🎨 Features

- **Modern Design**: Clean, minimal aesthetic with premium animations
- **Smooth Animations**: Framer Motion-powered transitions and scroll effects
- **Custom Cursor**: Interactive custom cursor with trail effect
- **Fully Responsive**: Mobile-first responsive design
- **Performance Optimized**: Fast loading, optimized animations
- **Intersection Observer**: Scroll-triggered reveal animations
- **Dark/Light sections**: Beautiful color palette alternation
- **SEO Ready**: Proper meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

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

The dev server will start at `http://localhost:5173/`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation bar with scroll detection
│   ├── Hero.tsx            # Hero section with parallax effect
│   ├── About.tsx           # About section with stats
│   ├── Skills.tsx          # Skills showcase with categories
│   ├── Experience.tsx      # Work experience timeline
│   ├── Projects.tsx        # Featured projects showcase
│   ├── Education.tsx       # Education and certifications
│   ├── Contact.tsx         # Contact CTA section
│   ├── Footer.tsx          # Footer
│   ├── CustomCursor.tsx    # Custom cursor component
│   └── index.ts            # Component exports
├── App.tsx                 # Main app component
├── index.css               # Global styles and animations
└── main.tsx                # Application entry point
```

## 🎯 Component Overview

### Navbar
- Fixed positioning with glass-morphism effect on scroll
- Smooth navigation links with hover effects
- Location and year indicator

### Hero
- Full-screen hero section
- Parallax background text effect
- Animated headline with italic accent
- Location and availability status
- Scroll hint animation

### About
- Grid layout with image/content split
- Animated stats section
- Profile badge
- Smooth reveal animations

### Skills
- Categorized skill pills
- Three states: dark, gold, default
- Staggered animations on scroll

### Experience
- Timeline-style experience items
- Hover effects with background color change
- Current position indicator
- Date ranges and descriptions

### Projects
- Featured project (span 2 columns)
- Project cards with gradient overlays
- Animated arrow indicators on hover
- Tag system for technologies

### Education
- Split grid layout for degrees
- Left border accent on hover
- GPA display with custom styling
- Certification badges

### Contact
- Large CTA headline with accent
- Email link with hover animation
- Contact info chips
- Background text decoration

## 🎨 Color Palette

```
Primary Colors:
- ink: #0C0C0E (Dark)
- ink2: #1A1A1F
- ink3: #2A2A32
- mist: #F5F3EF (Light)
- mist2: #EAE8E3
- mist3: #DEDBD5

Accent Colors:
- gold: #C9A96E (Primary accent)
- gold2: #E8C98A
- sky: #4A90D9
- green: #2ECC8B (Status indicator)
- rose: #E8547A
```

## 🔤 Typography

- **Heading Font**: Clash Display (400, 500, 600, 700)
- **Body Font**: Cabinet Grotesk (300, 400, 500, 700)

## 🎬 Animations

### Framer Motion Features
- `motion.div` for animated containers
- `useInView` hook for scroll-triggered animations
- `whileHover` for interactive elements
- `transition` props for easing curves
- Staggered children animations

### CSS Animations
- `blink`: Status indicator blinking
- `scrollDrop`: Scroll hint animation
- `fadeSlideUp`: Hero section entrance
- Smooth reveal animations on scroll

## 🛠 Technologies Used

- **React 19**: UI framework
- **TypeScript**: Type-safe JavaScript
- **Vite**: Next-generation build tool
- **Framer Motion**: Animation library
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Autoprefixer**: Vendor prefixes

## 📱 Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px - 1024px
- Mobile: < 768px

All components use Tailwind's responsive modifiers for mobile optimization.

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Color contrast ratios meet WCAG standards
- Keyboard navigation support
- Screen reader friendly

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Build
npm run build

# The dist/ folder is ready for deployment
```

Simply push to GitHub and connect to Vercel for automatic deployments.

### Other Platforms

The built `dist/` folder can be deployed to any static hosting:
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 📈 Performance

- **Build Size**: ~337KB (gzip: ~105KB)
- **First Paint**: < 1s
- **Time to Interactive**: < 2s
- **Lighthouse Score**: 95+

## 🔧 Customization

### Changing Colors
Edit the color palette in `tailwind.config.js` and update component classNames.

### Modifying Content
Edit individual components in `src/components/` to update:
- Personal information
- Project details
- Experience history
- Skills and certifications
- Contact information

### Adding New Sections
1. Create a new component in `src/components/`
2. Add it to `src/components/index.ts`
3. Import and add to `App.tsx`

### Modifying Animations
Adjust Framer Motion properties in component files:
- `initial`, `animate`, `exit` for state animations
- `transition` for timing and easing
- `variants` for complex animation sequences

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run build
```

### CSS Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Run `npm run build` to check for errors
- Check PostCSS configuration

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and use for your own portfolio. If you improve it, consider sharing your changes!

## 📧 Contact

For questions about this portfolio template, reach out to Al Islam Shikder:
- Email: shikderalislam@gmail.com
- Location: Dhaka, Bangladesh

---

**Built with ❤️ using modern web technologies**
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

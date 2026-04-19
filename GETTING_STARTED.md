# Getting Started with Your Premium Portfolio

Welcome! This is a complete, production-ready portfolio website. Here's how to get started.

## ⚡ Quick Start (30 seconds)

```bash
# 1. Install dependencies (already done!)
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:5173 in your browser
```

## 📝 Personalizing Your Portfolio

### 1. Update Personal Information

Edit each section in `src/components/`:

#### **Navbar** (`src/components/Navbar.tsx`)
- Change navigation links as needed
- Update location (BD · 2025)

#### **Hero** (`src/components/Hero.tsx`)
```tsx
// Update your name and tagline
<em className="italic font-normal text-gold">Islam</em>
Shikder

// Update description
Computer Science graduate building scalable software...

// Update location and availability
<div className="text-xs text-[#9A9AAA]">Dhaka, Bangladesh</div>
<div className="flex items-center gap-2 text-sm font-medium text-green">
  Available for opportunities
</div>
```

#### **About** (`src/components/About.tsx`)
```tsx
// Update headline, description, stats, and GPA
const stats = [
  { number: '3.70', label: 'CGPA / 4.0' },
  { number: '3+', label: 'Years Building' },
  { number: '95%', label: 'ML Accuracy' },
  { number: '5+', label: 'Certifications' },
];
```

#### **Skills** (`src/components/Skills.tsx`)
```tsx
const skillGroups = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', dark: true },
      // Update as needed
    ],
  },
  // More groups...
];
```

#### **Experience** (`src/components/Experience.tsx`)
```tsx
const experiences = [
  {
    company: 'Softbeez',
    role: 'Software Engineer',
    description: 'Your description here...',
    date: 'Mar 2024 — Now',
    current: true,
  },
  // More experiences...
];
```

#### **Projects** (`src/components/Projects.tsx`)
```tsx
const projects = [
  {
    num: '01 — Featured',
    name: 'Your Project Name',
    description: 'Project description...',
    tags: ['Technology', 'Tags'],
    icon: '🎨',
    featured: true,
  },
  // More projects...
];
```

#### **Education** (`src/components/Education.tsx`)
```tsx
const educationCards = [
  {
    year: '2018 — 2023',
    degree: 'Your Degree',
    school: 'Your School',
    description: 'Your achievements...',
    gpa: '3.70 / 4.0 GPA',
  },
  // More education...
];
```

#### **Contact** (`src/components/Contact.tsx`)
```tsx
// Update your email
<motion.a href="mailto:your.email@example.com" ...>
  your.email@example.com
</motion.a>

// Update contact info chips
const contactInfo = [
  { icon: '📱', text: 'Your Phone' },
  { icon: '💼', text: 'Your LinkedIn' },
  { icon: '📍', text: 'Your Location' },
  { icon: '🌐', text: 'Your Status' },
];
```

## 🎨 Customizing Colors

Edit the color hex values throughout the components. Common colors:

```
Dark backgrounds: #0C0C0E, #1A1A1F, #2A2A32
Light backgrounds: #F5F3EF, #EAE8E3, #DEDBD5
Accent (Gold): #C9A96E
Green (Status): #2ECC8B
Rose: #E8547A
```

Or update globally in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      ink: "#YourColor",
      gold: "#YourColor",
      // ...
    },
  },
},
```

## 🖼 Adding Images

1. Add image files to `public/` folder
2. Reference in components:

```tsx
<div className="about-img">
  <img src="/your-image.jpg" alt="Your description" />
</div>
```

## 🎬 Customizing Animations

All animations use Framer Motion. Modify in component files:

```tsx
// Adjust duration
transition={{ duration: 0.8 }}

// Change delay
transition={{ delay: 0.2 }}

// Use different easing
transition={{ ease: "easeInOut" }}

// Scale animation
whileHover={{ scale: 1.05 }}

// Rotation
whileHover={{ rotate: 5 }}
```

## 🚢 Deployment

### Option 1: Vercel (Easiest)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/portfolio
git push -u origin main

# 2. Go to vercel.com
# 3. Import your GitHub repository
# 4. Deploy automatically!
```

### Option 2: Netlify

```bash
# Build locally
npm run build

# Drag and drop `dist/` folder to netlify.com
```

### Option 3: Other Platforms

1. Run `npm run build`
2. Upload the `dist/` folder to:
   - Firebase Hosting
   - GitHub Pages
   - AWS S3
   - Any static host

## 🔍 Checking Your Work

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Check for linting issues
npm run lint
```

## 📱 Testing Responsiveness

1. Open DevTools (F12 or Cmd+Option+I)
2. Click device toggle (Ctrl+Shift+M)
3. Test on mobile, tablet, and desktop views

## 🎯 Advanced Customization

### Changing Fonts

Edit `src/index.css`:

```css
/* Current fonts */
@import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Cabinet+Grotesk:wght@300;400;500;700&display=swap');

/* Replace with your Google Fonts */
```

Then update font family:

```tsx
className="font-['Clash_Display']" // Change this
```

### Adding New Sections

1. Create `src/components/MySection.tsx`:

```tsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const MySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="my-section" ref={ref} className="py-28 px-12 bg-mist">
      {/* Your content */}
    </section>
  );
};
```

2. Add to `src/components/index.ts`:

```ts
export { MySection } from './MySection';
```

3. Import and add to `src/App.tsx`:

```tsx
import { MySection } from './components';

function App() {
  return (
    <>
      {/* Other sections */}
      <MySection />
    </>
  );
}
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Changes Not Showing
- Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- Clear browser cache

### Build Errors
```bash
# Clean reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)

## ✨ Pro Tips

1. **Use DevTools**: React DevTools extension helps debug components
2. **Lighthouse**: Run Lighthouse audit (DevTools) for performance tips
3. **Mobile First**: Test on mobile as you develop
4. **Git**: Make frequent commits as you customize
5. **Backup**: Keep original files before major changes

## 🎉 You're All Set!

Your portfolio is ready to impress. Customize it, deploy it, and share your work with the world!

Need help? Check the [README.md](./README.md) for more technical details.

Happy coding! 🚀

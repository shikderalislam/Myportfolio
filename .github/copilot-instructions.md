# Portfolio Project Guidelines

This is a modern React portfolio website built with TypeScript, Framer Motion, and Tailwind CSS.

## Project Overview

- **Type**: React + TypeScript + Vite
- **Build Tool**: Vite 8.0.8
- **Key Libraries**: Framer Motion (animations), Tailwind CSS (styling)
- **Target**: Production-ready portfolio website

## Development Commands

- `npm run dev` - Start development server (localhost:5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
  components/        # All UI components
  App.tsx           # Main component
  index.css         # Global styles
  main.tsx          # Entry point
```

## Key Technologies

- React 19.2.4
- TypeScript 6.0.2
- Vite 8.0.8
- Framer Motion 12.38.0
- Tailwind CSS 4.2.2

## Customization Areas

1. **Content**: Edit components in `src/components/` for personal information
2. **Colors**: Modify color palette in component classes (hex values)
3. **Fonts**: Change font imports in `index.css` (Clash Display, Cabinet Grotesk)
4. **Images**: Add image assets to `public/` folder
5. **Animations**: Adjust Framer Motion properties in components

## Important Notes

- All components use Framer Motion for animations
- Custom cursor implemented in CustomCursor component
- Tailwind CSS used for styling with custom color variables
- Responsive design with mobile-first approach
- CSS animations include scroll effects and reveals

## Deployment

The project is optimized for Vercel deployment. The `dist/` folder after build is production-ready.

Build size: ~337KB (gzip: ~105KB)

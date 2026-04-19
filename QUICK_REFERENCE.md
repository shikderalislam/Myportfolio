# Development Quick Reference

## 📋 CLI Commands

### Development
```bash
npm run dev              # Start dev server (http://localhost:5173)
npm run build            # Build for production
npm run preview          # Preview production build locally
npm run lint             # Run ESLint
```

### Helpful Flags
```bash
npm run dev -- --port 3000          # Use different port
npm run build -- --minify=false     # Build without minification
npm run preview -- --port 4000      # Preview on different port
```

## 🔧 Development Workflow

### 1. Start Development
```bash
npm run dev
```
This opens a dev server with:
- Hot Module Reload (HMR)
- Fast refresh
- Full TypeScript checking

### 2. Edit Files
- Edit components in `src/components/`
- Changes auto-reload in browser
- No need to restart dev server

### 3. Build for Production
```bash
npm run build
```
This:
- Compiles TypeScript
- Minifies CSS and JavaScript
- Creates optimized bundle in `dist/`

### 4. Test Production Build
```bash
npm run preview
```
Preview the production build locally before deploying.

## 📂 Important File Locations

| File | Purpose |
|------|---------|
| `src/App.tsx` | Main app component, import sections here |
| `src/components/` | All page sections |
| `src/index.css` | Global styles & animations |
| `tailwind.config.js` | Colors, fonts, breakpoints |
| `index.html` | HTML template, meta tags |
| `package.json` | Dependencies, scripts |

## 🎨 Customization Checklist

```
Content Updates:
□ Update Navbar links
□ Update Hero heading & description
□ Update About section & stats
□ Update Skills list
□ Update Experience entries
□ Update Projects showcase
□ Update Education section
□ Update Contact email
□ Update Footer text

Design Updates:
□ Add profile image to public/
□ Customize colors in components
□ Adjust animation timing
□ Change font families
□ Update meta tags in index.html

Deployment:
□ Run npm run build
□ Test with npm run preview
□ Deploy to Vercel/Netlify
```

## 🐛 Debugging Tips

### React DevTools
1. Install React DevTools extension
2. Open DevTools (F12 or Cmd+Option+I)
3. Navigate to "Components" tab
4. Inspect component props and state

### Performance
1. Open DevTools > Performance tab
2. Record a session
3. Look for long tasks (>50ms)
4. Check component render times

### Lighthouse
1. Open DevTools > Lighthouse tab
2. Select "Desktop" or "Mobile"
3. Click "Analyze page load"
4. Fix issues for better scores

## 🌍 Browser DevTools Shortcuts

| Action | Shortcut |
|--------|----------|
| Open DevTools | F12 / Cmd+Option+I |
| Hard Refresh | Ctrl+Shift+R / Cmd+Shift+R |
| Device Toggle | Ctrl+Shift+M / Cmd+Shift+M |
| Elements Tab | Ctrl+Shift+C / Cmd+Shift+C |
| Console | Ctrl+Shift+J / Cmd+Option+J |
| Performance | Ctrl+Shift+P / Cmd+Shift+P |

## 📱 Testing Checklist

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Device Testing
- [ ] Mobile (375px width)
- [ ] Tablet (768px width)
- [ ] Desktop (1440px width)
- [ ] Ultra-wide (1920px+)

### Functionality Testing
- [ ] Navigation links work
- [ ] Smooth scroll active
- [ ] Animations perform smoothly
- [ ] Hover effects visible
- [ ] Cursor custom behavior
- [ ] Contact email clickable

## 🚀 Deployment Steps

### Vercel
```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy (from project root)
vercel

# 3. Follow prompts and done!
```

### Netlify
```bash
# 1. Build locally
npm run build

# 2. Visit netlify.com
# 3. Drag and drop the dist/ folder
```

### GitHub Pages
```bash
# 1. Build locally
npm run build

# 2. Create gh-pages branch
git checkout --orphan gh-pages

# 3. Copy dist contents to root
cp -r dist/* .

# 4. Push to gh-pages branch
git add .
git commit -m "Deploy"
git push origin gh-pages

# 5. Go to repo settings > Pages
# 6. Select gh-pages branch as source
```

## 📝 Code Snippets

### Add New Skill Category
```tsx
{
  category: 'Your Category',
  skills: [
    { name: 'Skill 1', dark: true },
    { name: 'Skill 2', gold: true },
    { name: 'Skill 3', dark: false },
  ],
}
```

### Add New Experience
```tsx
{
  company: 'Company Name',
  role: 'Your Role',
  description: 'What you did...',
  date: 'Start — End',
  current: true,
}
```

### Add New Project
```tsx
{
  num: '02',
  name: 'Project Name',
  description: 'Project description...',
  tags: ['Tech1', 'Tech2'],
  icon: '🎨',
  featured: false,
}
```

### Custom Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## 🔍 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Port 5173 in use | Use `npm run dev -- --port 3000` |
| Changes not showing | Hard refresh: Ctrl+Shift+R |
| Build errors | Delete `node_modules`, run `npm install` |
| CSS not updating | Clear browser cache or hard refresh |
| Performance slow | Check for animations/heavy operations |

## 📊 Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Score | 90+ |
| First Paint | < 1s |
| Time to Interactive | < 2s |
| Bundle Size | < 400KB |
| Gzip Size | < 150KB |

## 🎯 Development Best Practices

1. **Commit Frequently**
   ```bash
   git add .
   git commit -m "Describe your change"
   ```

2. **Test Before Deploy**
   ```bash
   npm run build
   npm run preview
   ```

3. **Check Performance**
   - Run Lighthouse audit
   - Check browser console
   - Monitor network tab

4. **Keep Components DRY**
   - Reuse small components
   - Extract repeated code
   - Use proper prop drilling

5. **TypeScript Strict Mode**
   - Fix all type errors
   - Use proper interfaces
   - Avoid `any` type

## 🔗 Useful Resources

- [React Docs](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)
- [TypeScript Docs](https://www.typescriptlang.org)
- [MDN Web Docs](https://developer.mozilla.org)

## 📞 Need Help?

1. Check **GETTING_STARTED.md** for common customizations
2. Review **README.md** for technical details
3. Check **PROJECT_FEATURES.md** for features list
4. Search component files for comments
5. Check official documentation links above

---

**Happy Coding! 🚀**

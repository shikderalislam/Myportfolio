# Deployment Guide

Your portfolio is production-ready! Here are detailed deployment options.

## 🚀 Quick Deploy (Vercel - Recommended)

### Step 1: Push to GitHub

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit: Premium portfolio website"

# Create new repo on github.com and add remote
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Click "Import"
5. Deploy! (It's that simple!)

Your portfolio will be live at: `https://portfolio-YOUR_USERNAME.vercel.app`

**Auto-deploy**: Every push to main branch automatically deploys new version!

## 📦 Deploy to Netlify

### Step 1: Build Locally

```bash
npm run build
```

This creates a `dist/` folder with your production build.

### Step 2: Deploy via Drag & Drop

1. Go to [netlify.com](https://netlify.com)
2. Create account / login
3. Drag and drop `dist/` folder
4. Done! Your site is live

### Step 2 Alternative: GitHub Integration

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect GitHub
4. Select your repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

Your portfolio will be live at: `https://YOUR_SITE_NAME.netlify.app`

## 🌐 Deploy to AWS S3 + CloudFront

### Prerequisites
- AWS Account
- AWS CLI installed

### Step 1: Build
```bash
npm run build
```

### Step 2: Create S3 Bucket

```bash
aws s3 mb s3://your-portfolio-bucket --region us-east-1
```

### Step 3: Upload Files

```bash
aws s3 sync dist/ s3://your-portfolio-bucket --delete
```

### Step 4: Configure as Website

```bash
aws s3 website s3://your-portfolio-bucket \
  --index-document index.html \
  --error-document index.html
```

### Step 5: Set Bucket Policy

1. Go to AWS S3 Console
2. Select your bucket
3. Go to Permissions
4. Add this bucket policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-portfolio-bucket/*"
    }
  ]
}
```

### Step 6: Setup CloudFront (Optional, for CDN)

1. Go to AWS CloudFront
2. Create distribution
3. Set S3 bucket as origin
4. Configure HTTPS
5. Deploy

## 🐙 Deploy to GitHub Pages

### Step 1: Setup Repository

Make sure your repository is public and named `username.github.io`

### Step 2: Configure GitHub Pages

1. Go to repository Settings
2. Find "Pages" section
3. Set source to "Deploy from a branch"
4. Select `main` branch
5. Select `root` or `docs` folder

### Step 3: Build & Deploy

```bash
# Build locally
npm run build

# Create gh-pages branch
git checkout --orphan gh-pages

# Copy build to root
cp -r dist/* .

# Commit and push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

Your portfolio is live at: `https://username.github.io`

## 🔥 Deploy to Firebase Hosting

### Prerequisites
- Firebase account
- Firebase CLI: `npm install -g firebase-tools`

### Step 1: Initialize Firebase

```bash
firebase login
firebase init hosting
```

### Step 2: Configure

When prompted:
- Select your Firebase project
- Public directory: `dist`
- Single page app: Yes
- Overwrite index.html: No

### Step 3: Build & Deploy

```bash
npm run build
firebase deploy
```

Your portfolio is live at: `https://your-project.firebaseapp.com`

## 🎯 Deploy to Railway

### Step 1: Connect GitHub

1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "GitHub Repo"
4. Connect your repository

### Step 2: Configure

1. Add environment variables (if needed)
2. Set build command: `npm run build`
3. Set start command: `npm run preview` or use nginx

### Step 3: Deploy

Click "Deploy" - Railway handles everything!

## ☁️ Deploy to Your Own Server

### Prerequisites
- Linux server with Node.js
- SSH access

### Step 1: Connect to Server

```bash
ssh user@your-server.com
```

### Step 2: Setup Node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Step 3: Clone & Setup

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
npm install
npm run build
```

### Step 4: Setup Nginx

```bash
sudo apt install nginx
```

Edit `/etc/nginx/sites-available/default`:

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    
    server_name your-domain.com;
    
    root /home/user/portfolio/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Step 5: Enable & Start

```bash
sudo systemctl enable nginx
sudo systemctl start nginx
```

Visit `your-domain.com` - your portfolio is live!

## 🔐 Add Custom Domain

### For Vercel/Netlify

1. Go to project settings
2. Find "Domain" section
3. Click "Add Domain"
4. Enter your domain
5. Update DNS records at your registrar:
   - Follow their instructions
   - Usually takes 24 hours to propagate

### DNS Setup (Common)

For `example.com`, add CNAME record:
```
Name: www
Type: CNAME
Value: vercel.app (or your provider)
```

For root domain:
```
Name: @
Type: A
Value: Your provider's IP
```

## 📊 Post-Deployment Checklist

After deploying:

- [ ] Visit your live site
- [ ] Click all navigation links
- [ ] Test scroll animations
- [ ] Check on mobile device
- [ ] Verify email link works
- [ ] Run Lighthouse audit
- [ ] Check for console errors
- [ ] Test on different browsers
- [ ] Share with friends!

## 🚨 Troubleshooting Deployments

### Site Shows Blank Page
- Check browser console for errors
- Verify `dist/` folder generated properly
- Check server logs
- Rebuild: `npm run build`

### Styles Not Loading
- Clear browser cache
- Check CSS file paths
- Verify build completed
- Check for CSS errors in console

### Animations Not Smooth
- Check performance in DevTools
- Reduce animation count/complexity
- Use will-change CSS property
- Check browser compatibility

### 404 on Navigation
- Ensure SPA configured in hosting:
  - Redirect all routes to `index.html`
  - For Vercel/Netlify: auto-configured
  - For S3: configure error document

### Slow Loading
- Enable gzip compression
- Setup CDN
- Optimize images
- Check server response time

## 📈 Monitoring & Analytics

### Add Google Analytics

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create property
3. Get tracking ID
4. Add to `public/index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_ID');
</script>
```

### Monitor Performance

1. Setup Lighthouse CI
2. Enable Sentry for error tracking
3. Monitor Core Web Vitals
4. Track user interactions

## 🔄 Auto-Updates

Most platforms auto-deploy on git push:

**Vercel**: Push to main → auto-deployed
**Netlify**: Push to main → auto-deployed
**GitHub Pages**: Push to gh-pages → auto-deployed
**Firebase**: Run `firebase deploy` → deployed

## 🎉 Success!

Your portfolio is now live on the internet! 

**Next Steps:**
- [ ] Share with potential employers
- [ ] Update social media
- [ ] Monitor analytics
- [ ] Regularly update content
- [ ] Keep dependencies updated

---

**Happy Deploying! 🚀**

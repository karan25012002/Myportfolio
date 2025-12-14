# Deploy Portfolio to Vercel via GitHub

## Step 1: Clean Git Setup (Fresh Repository)

```bash
# Remove old git history
rm -rf .git

# Initialize fresh git repo
git init
git config user.name "Harendra Kumar"
git config user.email "karanaryans2501@gmail.com"

# Add all files
git add .

# First commit
git commit -m "Initial commit: Portfolio website with React, Tailwind CSS, and Framer Motion"
```

## Step 2: Create GitHub Repository

1. Go to [https://github.com/new](https://github.com/new)
2. **Repository name**: `portfolio` (or your preferred name)
3. **Description**: `Personal portfolio website built with React, Tailwind CSS, and Framer Motion`
4. **Choose**: Public (so Vercel can deploy)
5. **Do NOT initialize** with README, .gitignore, or license (we already have these)
6. Click **Create repository**

## Step 3: Push to GitHub

```bash
# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 4: Deploy to Vercel

### Option A: Using Vercel Dashboard (Easiest)

1. Go to [https://vercel.com](https://vercel.com)
2. Sign up or login with GitHub
3. Click **"New Project"**
4. Select your `portfolio` repository
5. **Framework Preset**: Select **Vite**
6. **Root Directory**: Leave as default (./)/
7. **Build Command**: Leave as default (`npm run build`)
8. **Output Directory**: Leave as default (`dist`)
9. **Environment Variables**: None needed
10. Click **Deploy**

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## Step 5: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. **Settings** → **Domains**
3. Add your custom domain
4. Follow DNS instructions for your domain provider

## Step 6: Auto-Deployment Setup

Your site will automatically redeploy whenever you push to GitHub:

```bash
# Make changes locally
git add .
git commit -m "Update portfolio"
git push origin main

# Vercel automatically builds and deploys!
```

## Important Files for Deployment

✅ **Already configured:**
- `vite.config.js` - Build configuration
- `package.json` - Dependencies and scripts
- `.gitignore` - Excludes node_modules, dist, etc.
- `vercel.json` - (Optional, but we can create)

## Create vercel.json (Optional but Recommended)

```bash
# This file optimizes Vercel deployment
```

Add to your project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "env": {
    "VITE_API_URL": "@vite_api_url"
  }
}
```

## Troubleshooting

**Build fails on Vercel?**
- Check Node version: `node --version` (should be v18+)
- Run locally: `npm run build` to test
- Check build logs in Vercel dashboard

**Port issues?**
- Vercel automatically uses port 3000, no configuration needed

**Assets not loading?**
- Ensure public folder is properly structured
- Check that image/resume paths use `/` prefix

## After Deployment

Your portfolio will be live at:
- Default: `https://portfolio-[your-name].vercel.app`
- Custom: `https://your-custom-domain.com`

Every push to GitHub automatically updates your live site! 🎉

## Quick Command Reference

```bash
# Stage changes
git add .

# Commit
git commit -m "Your message"

# Push to GitHub (triggers auto-deploy)
git push origin main

# View Vercel deployments
# Go to: https://vercel.com/dashboard
```

---

**You're all set!** Your portfolio is ready for the world. 🚀

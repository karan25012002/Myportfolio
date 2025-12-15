# GitHub & Vercel Deployment - Quick Setup

## ✅ Completed Locally:

1. ✅ Clean git repository initialized
2. ✅ .gitignore configured properly
3. ✅ vercel.json created
4. ✅ First commit ready

## 🚀 Next Steps (Complete These):

### Step 1: Create GitHub Repository
1. Go to [https://github.com/new](https://github.com/new)
2. **Repository name**: `portfolio`
3. **Description**: `Personal portfolio website built with React`
4. **Choose**: Public
5. **Do NOT** initialize with anything
6. Click **Create repository**

### Step 2: Push Code to GitHub

Copy and paste these commands in your terminal/PowerShell:

```bash
cd "c:\Users\HARENDRA KUMAR\Desktop\Portfoliyo"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

⚠️ **Replace `YOUR_USERNAME`** with your GitHub username!

### Step 3: Deploy to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Click **Sign Up** → Choose **GitHub**
3. Authorize with your GitHub account
4. Click **"New Project"**
5. Find and select your `portfolio` repository
6. **Framework**: Vite (auto-detected)
7. **Build Command**: `npm run build`
8. **Output Directory**: `dist`
9. Click **Deploy** ✨

### That's it! 🎉

Your portfolio will be live in 2-3 minutes at:
- `https://portfolio-[your-name].vercel.app`

## Making Updates

Every time you want to update your portfolio:

```bash
# Make changes in VS Code
# Then run these commands:

git add .
git commit -m "Update portfolio: add new project"
git push origin main

# Vercel automatically rebuilds and deploys!
```

## Important Notes

- Keep `.gitignore` file - it prevents uploading unnecessary files
- Don't commit `node_modules` or `dist` folder
- `vercel.json` handles deployment configuration automatically
- Your portfolio will auto-update whenever you push to GitHub

## Need Help?

Check `VERCEL_DEPLOYMENT.md` for detailed instructions and troubleshooting.

---

**Your portfolio is ready for deployment!** 🚀

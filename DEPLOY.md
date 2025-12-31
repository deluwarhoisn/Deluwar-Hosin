# 🚀 Netlify Deployment Guide

## Quick Deploy Steps

### Step 1: Prepare Your Code

Make sure your code is ready:
```bash
# Install dependencies
npm install

# Test the build locally
npm run build

# Preview the build
npm run preview
```

### Step 2: Push to GitHub

1. Initialize git (if not already done):
```bash
git init
git add .
git commit -m "Ready for deployment"
```

2. Create a repository on GitHub and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Netlify

#### Option A: Via Netlify Dashboard (Easiest)

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Sign up/Login (you can use GitHub to sign in)
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **GitHub** and authorize Netlify
5. Select your repository
6. Netlify will auto-detect settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Click **"Deploy site"**
8. Wait for deployment to complete (usually 1-2 minutes)
9. Your site will be live at: `https://random-name-12345.netlify.app`

#### Option B: Via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize and deploy:
```bash
netlify init
netlify deploy --prod
```

### Step 4: Update Your Live Link

After deployment, update your portfolio's live link:

1. Go to `src/config/projects.js`
2. Update the `liveLink` for your portfolio project:
```javascript
{
  title: 'Portfolio Website',
  // ...
  liveLink: 'https://your-site-name.netlify.app', // Your Netlify URL
  codeLink: 'https://github.com/yourusername/repo', // Your GitHub repo
}
```

### Step 5: Custom Domain (Optional)

1. In Netlify dashboard, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow the DNS configuration instructions
5. Wait for DNS propagation (can take up to 48 hours)

## Configuration Files

The project includes:
- ✅ `netlify.toml` - Netlify configuration
- ✅ `public/_redirects` - SPA routing support

These files ensure:
- Proper build settings
- React Router compatibility (if you add routing later)
- Correct redirects for single-page applications

## Troubleshooting

### Build Fails

1. Check Node version (should be 18+)
2. Make sure all dependencies are in `package.json`
3. Check build logs in Netlify dashboard

### 404 Errors on Routes

The `_redirects` file should handle this. If not:
1. Check that `public/_redirects` exists
2. Verify `netlify.toml` has redirect rules

### Images Not Loading

1. Make sure all images are in the `image/` folder
2. Check that image paths in components are correct
3. Rebuild and redeploy

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch = automatic deployment
- Pull requests = preview deployments
- You can configure branch-specific builds in Netlify settings

## Need Help?

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Community](https://answers.netlify.com/)
- Check build logs in Netlify dashboard for errors

---

**Your portfolio is now live! 🎉**


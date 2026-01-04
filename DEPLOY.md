# Firebase Deployment Guide

## 🚀 Deploy Your Portfolio to Firebase

### Prerequisites
1. **Node.js** installed on your computer
2. **Firebase CLI** installed globally
3. **Firebase account** (free)

### Step 1: Install Firebase CLI
```bash
npm install -g firebase-tools
```

### Step 2: Login to Firebase
```bash
firebase login
```

### Step 3: Initialize Firebase Project
```bash
firebase init hosting
```

**Select these options:**
- ✅ Use an existing project or create a new one
- ✅ Public directory: `dist`
- ✅ Configure as single-page app: `Yes`
- ✅ Set up automatic builds: `No`
- ✅ Overwrite index.html: `No`

### Step 4: Build and Deploy
```bash
npm run deploy
```

**Or manually:**
```bash
npm run build
firebase deploy
```

### Step 5: Your Live URL
After deployment, you'll get a URL like:
```
https://your-project-id.web.app
```

## 🔧 Alternative Deployment Options

### Option 1: Netlify (Easiest)
1. Push code to GitHub
2. Connect GitHub to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Option 2: Vercel
1. Push code to GitHub
2. Import project to Vercel
3. Auto-deploy on every push

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📝 Environment Variables (if needed)
Create `.env` file in root:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
```

## 🔄 Auto-Deploy Setup
For automatic deployment on code changes:

### GitHub Actions (Firebase)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Firebase
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm install
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: your-project-id
```

## 🌐 Custom Domain Setup
1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow DNS setup instructions
4. Wait for SSL certificate (24-48 hours)

## 📊 Analytics Setup (Optional)
Add Google Analytics to track visitors:
1. Go to Firebase Console → Analytics
2. Enable Google Analytics
3. Add tracking code to `index.html`

## 🔒 Security Rules
For enhanced security, configure hosting headers in `firebase.json`:
```json
{
  "hosting": {
    "headers": [
      {
        "source": "**",
        "headers": [
          {
            "key": "X-Content-Type-Options",
            "value": "nosniff"
          },
          {
            "key": "X-Frame-Options",
            "value": "DENY"
          }
        ]
      }
    ]
  }
}
```

## 🚨 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Fails
```bash
# Check Firebase CLI version
firebase --version

# Update Firebase CLI
npm install -g firebase-tools@latest

# Re-login
firebase logout
firebase login
```

### 404 Errors
Make sure `firebase.json` has proper rewrites for SPA:
```json
{
  "rewrites": [
    {
      "source": "**",
      "destination": "/index.html"
    }
  ]
}
```

## 📞 Support
If you face any issues:
1. Check Firebase Console logs
2. Verify build output in `dist` folder
3. Test locally with `npm run preview`

---

**Your portfolio is ready to go live! 🎉**
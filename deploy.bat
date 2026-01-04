@echo off
echo 🚀 Deploying Deluwar Hosin Portfolio to Firebase...
echo.

echo 📦 Building project...
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed! Please fix errors and try again.
    pause
    exit /b %errorlevel%
)

echo ✅ Build successful!
echo.

echo 🔥 Deploying to Firebase...
call firebase deploy

if %errorlevel% neq 0 (
    echo ❌ Deployment failed! Please check your Firebase setup.
    pause
    exit /b %errorlevel%
)

echo.
echo 🎉 Deployment successful!
echo 🌐 Your portfolio is now live!
echo.
pause
@echo off
echo ==============================================
echo Pushing Incode BD Updates to GitHub...
echo ==============================================
echo.
git add .
git commit -m "feat: complete Awwwards-caliber redesign, products, services, about with office photo, and fellowship roles"
echo.
echo [1/2] Pushing upgrade branch...
git push origin upgrade
echo.
echo ==============================================
echo Done! Now check your Vercel preview or merge into main.
echo ==============================================
pause

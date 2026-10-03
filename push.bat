@echo off
echo ==============================================
echo Pushing Incode BD to GitHub...
echo ==============================================
echo.
echo [1/2] Pushing main branch (Production)...
git push origin main
echo.
echo [2/2] Pushing upgrade branch (Preview)...
git push -u origin upgrade
echo.
echo ==============================================
echo Done! Now refresh your Vercel page.
echo ==============================================
pause

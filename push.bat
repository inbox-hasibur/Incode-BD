@echo off
echo ==============================================
echo Pushing Incode BD Updates to GitHub...
echo ==============================================
echo.
echo [1/2] Pushing upgrade branch (Preview)...
git push origin upgrade
echo.
echo [2/2] Pushing main branch (Production Live)...
git push origin main
echo.
echo ==============================================
echo Successfully Pushed to GitHub!
echo Vercel is now deploying production live.
echo ==============================================
pause

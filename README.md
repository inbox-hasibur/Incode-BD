# Incode BD — Coming Soon & Launchpad

Official launchpad web application for **Incode BD** — *"Solving Business Problems with Hardware, Software, and Aesthetics."*

## 🚀 Overview

This repository contains the ultra-modern, high-converting, single-screen launchpad built with:
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom cyber-neon theme
- **Language**: TypeScript
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🛠️ Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deploy to Vercel & Domain Setup

### 1. Push code to GitHub
```bash
git add .
git commit -m "feat: launchpad landing page with brand identity"
git push origin main
```

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
2. Select the **`Incode-BD`** repository and click **Deploy**.

### 3. Connect Custom Domain (`incodebd.com`)
1. In your Vercel project dashboard, go to **Settings** ➔ **Domains**.
2. Add `incodebd.com` and `www.incodebd.com`.
3. In your **Cloudflare** DNS dashboard for `incodebd.com`:
   - Add a `CNAME` record:
     - **Name**: `@` (or `www`)
     - **Target**: `cname.vercel-dns.com`
     - **Proxy status**: DNS only (or Proxied depending on SSL config)

### 4. Updating the Google Form Link
In [`app/page.tsx`](./app/page.tsx):
Locate the primary CTA button and update `href`:
```tsx
<a
  href="https://forms.google.com/YOUR_FORM_ID" // Replace with your actual Google Form URL
  target="_blank"
  rel="noopener noreferrer"
  id="apply-internship-cta"
  ...
>
```

---

© 2026 Incode BD. All rights reserved.

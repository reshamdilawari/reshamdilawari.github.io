# GitHub Pages Deployment Guide

## Step 1: Initialize Git Repository

Open PowerShell or Git Bash in the portfolio directory and run:

```bash
cd "D:\CV\New format\portfolio"
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. **Important:** Choose one of these options:

   **Option A: Use `reshamdilawari.github.io` (Recommended)**
   - Repository name: `reshamdilawari.github.io`
   - This will make your site available at: `https://reshamdilawari.github.io`
   - Description: "Portfolio website" (optional)
   - Visibility: Select **Public** (required for free GitHub Pages)
   - **Initialize this repository with:**
     - ☐ Add a README file (leave unchecked)
     - ☐ Add .gitignore: Select **None** (leave unchecked - you already have one)
     - ☐ Choose a license: Select **None** (leave unchecked)
   - Click "Create repository"

   **Option B: Use a different name (e.g., `portfolio`)**
   - Repository name: `portfolio` (or any name you prefer)
   - This will make your site available at: `https://reshamdilawari.github.io/portfolio/`
   - You'll need to update `next.config.mjs` to add `basePath: '/portfolio'`
   - Visibility: Select **Public**
   - **Initialize this repository with:**
     - ☐ Add a README file (leave unchecked)
     - ☐ Add .gitignore: Select **None** (leave unchecked - you already have one)
     - ☐ Choose a license: Select **None** (leave unchecked)
   - Click "Create repository"

## Step 3: Push Code to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
git branch -M main
git remote add origin https://github.com/reshamdilawari/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_REPO_NAME` with either:
- `reshamdilawari.github.io` (if using Option A)
- `portfolio` (if using Option B)

## Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Deploy from a branch**: `main` branch, `/ (root)` folder
   - OR
   - **GitHub Actions** (this should work automatically with the workflow file)
5. Click **Save**

## Step 5: Enable GitHub Actions (if needed)

1. In your repository, go to **Actions** tab
2. If you see a message about enabling workflows, click **"I understand my workflows, go ahead and enable them"**
3. The deployment workflow will run automatically on every push to `main`

## Step 6: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)
4. Once it's done, you'll see a green checkmark

## Step 7: Access Your Site

- If you used `reshamdilawari.github.io`: Visit `https://reshamdilawari.github.io`
- If you used a different name: Visit `https://reshamdilawari.github.io/YOUR_REPO_NAME/`

**Note:** It may take a few minutes for the site to be available after the first deployment.

## Optional: Setting Up a Custom Domain (e.g., reshamdilawari.io)

If you want to use a custom domain like `reshamdilawari.io` instead of `reshamdilawari.github.io`:

1. **Purchase the domain** from a registrar (e.g., Namecheap, GoDaddy, Google Domains)

2. **Configure DNS records** at your domain registrar:
   - Add an **A record** pointing to GitHub Pages IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - OR add a **CNAME record** pointing to `reshamdilawari.github.io`

3. **Add custom domain in GitHub:**
   - Go to your repository → **Settings** → **Pages**
   - Under **Custom domain**, enter: `reshamdilawari.io`
   - Check **"Enforce HTTPS"** (recommended)

4. **Update your portfolio data** (optional):
   - Update `url` in `src/data/resume.tsx` to `https://reshamdilawari.io`

**Important:** The repository name must still be `reshamdilawari.github.io` even when using a custom domain.

## Troubleshooting

### If the site shows 404:
- Wait 5-10 minutes (GitHub Pages can take time to propagate)
- Check the Actions tab to ensure the workflow completed successfully
- Verify the repository is set to **Public**

### If you used a different repository name:
- You need to update `next.config.mjs` to include `basePath: '/YOUR_REPO_NAME'`
- Then commit and push the changes

### To update your site:
Simply make changes, commit, and push:
```bash
git add .
git commit -m "Update portfolio"
git push
```
The workflow will automatically rebuild and deploy your site.

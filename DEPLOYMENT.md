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

1. **First, make sure the workflow file was pushed:**
   - Go to your repository on GitHub
   - Check if you can see `.github/workflows/deploy.yml` in the file list
   - If not, make sure you pushed all files including the `.github` folder

2. **Enable GitHub Actions:**
   - Go to your repository → **Settings** tab (top navigation bar)
   - Scroll down to **Actions** in the left sidebar (under Settings)
   - Under **Actions permissions**, select **"Allow all actions and reusable workflows"**
   - Click **Save**

3. **Go to the Actions tab (NOT Settings → Actions):**
   - Look at the **top navigation bar** of your repository (where you see Code, Issues, Pull requests, etc.)
   - Click on **"Actions"** tab (this is different from Settings → Actions)
   - You should see either:
     - A list of workflow runs (if any have run)
     - "No workflow runs found yet" message
     - A message asking to enable workflows
   - If you see "No workflow runs found", the workflow will trigger automatically on the next push

4. **Verify the workflow file exists on GitHub:**
   - In your repository, navigate to `.github/workflows/deploy.yml`
   - If you can't find it, the file wasn't pushed. Run:
     ```bash
     cd "D:\CV\New format\portfolio"
     git add .github
     git commit -m "Add GitHub Actions workflow"
     git push
     ```

5. **Manually trigger the workflow:**
   - Go to **Actions** tab in your repository
   - You should see a list of workflows on the left side
   - Look for **"Deploy to GitHub Pages"** in that list
   - If you see it, click on it, then click the **"Run workflow"** dropdown button (top right)
   - Select `main` branch and click **"Run workflow"**
   - **If you don't see "Deploy to GitHub Pages" in the list:**
     - Make sure you're on the **Actions** tab (not Settings → Actions)
     - Try refreshing the page
     - The workflow should appear automatically after the file is pushed
     - If it still doesn't appear, try making a small change and pushing again

## Step 6: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
   - If you don't see it, try pushing a small change to trigger it:
     ```bash
     git commit --allow-empty -m "Trigger workflow"
     git push
     ```
3. Click on the workflow run to see the progress
4. Wait for it to complete (usually 2-3 minutes)
5. Once it's done, you'll see a green checkmark ✓

**If Actions tab is missing or not working:**
- Make sure your repository is **Public** (required for free GitHub Pages)
- Check that you have the `.github/workflows/deploy.yml` file in your repository
- Try refreshing the page or checking in a different browser
- If still not working, you can use the alternative method below

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

## Alternative: Manual Deployment (if GitHub Actions doesn't work)

If GitHub Actions is not working, you can deploy manually:

1. **Build the site locally:**
   ```bash
   cd "D:\CV\New format\portfolio"
   npm install
   npm run build
   ```
   This creates an `out` folder with your static site.

2. **Push the `out` folder to a `gh-pages` branch:**
   ```bash
   git checkout -b gh-pages
   git add out/
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix out origin gh-pages
   ```
   Or use a tool like `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
   Then add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d out"
   ```
   Then run: `npm run deploy`

3. **Configure GitHub Pages to use `gh-pages` branch:**
   - Go to repository → **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: `gh-pages`, folder: `/ (root)`
   - Click **Save**

**Note:** The GitHub Actions method is preferred as it automatically rebuilds on every push.

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

# How to Update Your Portfolio

This guide explains how to update your portfolio website after it's been deployed to GitHub Pages.

## Quick Update Steps

1. **Make your changes** to any files in the portfolio (e.g., `src/data/resume.tsx`, `src/app/page.tsx`, etc.)

2. **Commit and push your changes:**
   ```bash
   cd "D:\CV\New format\portfolio"
   git add .
   git commit -m "Update portfolio"
   git push
   ```

3. **That's it!** The GitHub Actions workflow will automatically:
   - Build your site
   - Deploy it to GitHub Pages
   - Make it live at `https://reshamdilawari.github.io`

## What Happens Automatically

When you push changes to the `main` branch:
- GitHub Actions detects the push
- Runs the "Deploy to GitHub Pages" workflow
- Builds your Next.js site
- Deploys it to GitHub Pages
- Your site is updated (usually takes 2-3 minutes)

## Checking Deployment Status

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. You'll see the latest workflow run
4. Wait for it to complete (green checkmark ✓)
5. Your site will be updated automatically

## Common Updates

### Update Your Resume Data
Edit `src/data/resume.tsx`:
- Work experience
- Education
- Skills
- Projects
- Contact information
- Summary/about section

### Update Page Content
Edit `src/app/page.tsx` to change:
- Page structure
- Section order
- Content layout

### Update Styling
Edit CSS files or Tailwind classes in components

## Tips

- **Test locally first** (optional but recommended):
  ```bash
  npm run dev
  ```
  Visit `http://localhost:3000` to preview changes

- **Commit messages:** Use descriptive messages like:
  - "Add new project"
  - "Update work experience"
  - "Fix contact information"
  - "Update skills list"

- **Deployment time:** Usually 2-3 minutes after pushing

- **No manual deployment needed:** Everything is automatic!

## Troubleshooting

### Site not updating?
- Wait 5-10 minutes (GitHub Pages can take time to propagate)
- Check the Actions tab to ensure the workflow completed successfully
- Clear your browser cache or try an incognito window

### Workflow failed?
- Go to Actions tab → Click on the failed run
- Check the error message
- Common issues:
  - Build errors (check your code for syntax errors)
  - Missing dependencies (run `npm install` locally first)

### Need to revert changes?
```bash
git log                    # See commit history
git revert <commit-hash>   # Revert a specific commit
git push                   # Push the revert
```

## Summary

**To update your portfolio:**
1. Edit files
2. `git add .`
3. `git commit -m "Your message"`
4. `git push`
5. Wait 2-3 minutes
6. Done! ✅

Your portfolio will automatically rebuild and deploy on every push to the `main` branch.

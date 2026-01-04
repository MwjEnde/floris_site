---
description: How to update the website and push changes to GitHub
---

# Updating Your Website

Since your site is hosted on GitHub, you need to "push" your changes from your computer to GitHub for them to go live.

## 1. Make your changes
Edit your files (e.g., changing text in `src/pages/index.astro` or adding photos).

## 2. Check what changed
Open your terminal and run:
```bash
git status
```
This shows you which files have been modified.

## 3. Save (Commit) your changes
Run these commands to save your snapshot:
```bash
git add .
git commit -m "Describe what you changed here"
```
*Replace "Describe what you changed here" with a short message, e.g., "Update biography photo".*

## 4. Publish (Push) to GitHub
Send your changes to the cloud:
```bash
git push
```

## 5. Wait for Deployment
Go to your GitHub repository actions tab. You will see a yellow circle spinning. When it turns green (usually 1-2 mins), your live site is updated!

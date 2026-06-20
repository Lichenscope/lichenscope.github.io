# LichenScope — Elise Lebreton's research website

A 5-page static site (no build step, no dependencies) ready to host on GitHub Pages.

## Pages
- `index.html` — Home
- `research.html` — Research
- `publications.html` — Publications
- `cv.html` — CV
- `contact.html` — Contact

## Deploying to GitHub Pages at lichenscope.github.io

To get the exact URL `https://lichenscope.github.io/`, the **GitHub account or organization itself must be named `lichenscope`**, and the repository must be named exactly `lichenscope.github.io`.

1. Create (or sign in to) the GitHub account/organization named **lichenscope**.
2. Create a new repository named exactly: `lichenscope.github.io`
   - Public repository, no README/license/gitignore (we already have the files).
3. Upload all the files in this folder to the repository, keeping the folder structure intact (the `assets/` folder must stay alongside the `.html` files). Easiest ways:
   - **Drag-and-drop**: on the empty repo's GitHub page, click "uploading an existing file" and drag the whole contents of this folder in (you may need to do the `assets` subfolders separately, or use the method below).
   - **Git command line**:
     ```
     git init
     git remote add origin https://github.com/lichenscope/lichenscope.github.io.git
     git add .
     git commit -m "Initial site"
     git branch -M main
     git push -u origin main
     ```
4. Go to the repo's **Settings → Pages**. For a repo named `<account>.github.io`, GitHub Pages is usually enabled automatically on the `main` branch, root folder. If not, set Source to "Deploy from a branch", branch `main`, folder `/ (root)`.
5. Wait a minute or two, then visit `https://lichenscope.github.io/`.

> If you'd rather keep the site as a project inside your personal account (e.g. `github.com/your-username`) instead of creating a `lichenscope` account, the repo can be named anything (e.g. `lichenscope-site`) and the site will be served at `https://your-username.github.io/lichenscope-site/` instead — just let me know and I can adjust the internal links if needed (some currently assume the site lives at the domain root).

## Editing later
- All text lives directly in the `.html` files — open any page in a text editor and edit the visible text between tags.
- Colors, fonts and spacing are controlled from one file: `assets/css/style.css` (see the `:root` block at the top for the color palette).
- To swap the CV PDF, replace `assets/cv/Elise-Lebreton-CV.pdf` with a new file of the same name (or update the links in `index.html`, `cv.html` and `contact.html` if you rename it).
- To swap the photo, replace `assets/img/profile.jpg` with a new image of the same name.

## Notes
- No build tools, frameworks, or npm install required — it's plain HTML/CSS/JS, so GitHub Pages can serve it as-is.
- Fonts (Spectral, Work Sans, JetBrains Mono) load from Google Fonts via a CDN link in each page's `<head>`.

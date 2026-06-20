# LichenScope — Elise Lebreton's research website

A 5-page static site (no build step, no dependencies). All files are flat — no subfolders — so it's easy to upload directly through the GitHub website.

## Files
- `index.html`, `research.html`, `publications.html`, `cv.html`, `contact.html` — the 5 pages
- `style.css` — all design/colors/layout
- `main.js` — mobile menu + scroll animations
- `profile.jpg` — your photo
- `favicon.svg` — the little leaf/lichen icon in the browser tab
- `Elise-Lebreton-CV.pdf` — your CV, downloadable from the site

## Fixing the current lichenscope.github.io repo

Your repo is currently missing a few files (`profile.jpg`, `main.js`, `favicon.svg` never made it in, and `style.css`/the CV ended up at the root without the rest), which is why the site shows up unstyled. To fix it:

1. Go to your repo on github.com: `lichenscope/lichenscope.github.io`
2. Delete the file `lichenscope-site.zip` (no longer needed — click it, then the trash icon, then commit).
3. Click **Add file → Upload files**.
4. Drag in **all the files from this folder** (not a folder itself — the individual files: the 5 `.html` files, `style.css`, `main.js`, `profile.jpg`, `favicon.svg`, `Elise-Lebreton-CV.pdf`, `README.md`). This will overwrite the existing `style.css` and `Elise-Lebreton-CV.pdf` and add the missing ones.
5. Scroll down and click **Commit changes**.
6. Wait 1–2 minutes, then refresh `https://lichenscope.github.io/` (try a hard refresh / private window if you still see the old version, since browsers cache CSS aggressively).

That's it — no subfolders involved, so this kind of mix-up shouldn't happen again.

## Editing later
- All text lives directly in the `.html` files — open any page in a text editor and edit the visible text between tags.
- Colors, fonts and spacing are controlled from one file: `style.css` (see the `:root` block at the top for the color palette).
- To swap the CV PDF or photo, upload a new file with the **exact same name** (`Elise-Lebreton-CV.pdf` / `profile.jpg`) to overwrite it — no other changes needed.

## Notes
- No build tools, frameworks, or npm install required — plain HTML/CSS/JS.
- Fonts (Spectral, Work Sans, JetBrains Mono) load from Google Fonts via a CDN link in each page's `<head>`.

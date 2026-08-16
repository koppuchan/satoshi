# Satoshi Fukushima — Portfolio

A single-page portfolio built with plain HTML, CSS, and no build step.

## Development

Open [index.html](index.html) directly in a browser, or serve it locally:

```bash
python -m http.server 5173
```

Then visit `http://localhost:5173/`.

## Deploying to GitHub Pages

1. Push this repo to `git@github.com:koppuchan/satoshi.git` on the `main` branch.
2. In the repo settings, go to **Settings → Pages** and set the source to **GitHub Actions**.
3. Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which publishes the repo root straight to GitHub Pages (no build required).
4. The site will be available at `https://koppuchan.github.io/satoshi/`.

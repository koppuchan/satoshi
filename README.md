# Satoshi Fukushima — Portfolio

A single-page portfolio built with React + Vite.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploying to GitHub Pages

1. Push this repo to `git@github.com:koppuchan/satoshi.git` on the `main` branch.
2. In the repo settings, go to **Settings → Pages** and set the source to **GitHub Actions**.
3. Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages.
4. The site will be available at `https://koppuchan.github.io/satoshi/`.

`vite.config.js` is set with `base: '/satoshi/'` to match the repo name — update it if the repo is ever renamed or a custom domain is added.

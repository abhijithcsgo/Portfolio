# Abhijith C S — Portfolio

Modern single-page portfolio built with **Angular 19** and **PrimeNG 19**.

## Live site

After deployment: **https://abhijithcsgo.github.io/Portfolio/**

## Tech stack

- Angular 19 (standalone components)
- PrimeNG 19 + PrimeIcons
- Aura theme (dark / light mode)

## Run locally

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

## Build

```bash
npm run build
```

For GitHub Pages (subpath `/Portfolio/`):

```bash
npm run build -- --base-href=/Portfolio/
```

## Deploy to GitHub Pages

1. Push to the `main` branch on [github.com/abhijithcsgo/Portfolio](https://github.com/abhijithcsgo/Portfolio).
2. Wait for the **Deploy to GitHub Pages** workflow to finish (green checkmark in [Actions](https://github.com/abhijithcsgo/Portfolio/actions)).
3. **Enable Pages (one-time):** [Settings → Pages](https://github.com/abhijithcsgo/Portfolio/settings/pages)
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages` → `/ (root)` → **Save**
4. After 1–2 minutes, visit **https://abhijithcsgo.github.io/Portfolio/**

## Customize content

Edit `src/app/data/resume.data.ts` for profile, experience, projects, and skills.

## Security

See [SECURITY.md](SECURITY.md) for reporting vulnerabilities.

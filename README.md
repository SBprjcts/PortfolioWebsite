# Saif Buheis

**[sbprjcts.github.io/PortfolioWebsite](https://sbprjcts.github.io/PortfolioWebsite/)**

This is the source for my portfolio site. If you're here to look at the work rather than the markup, the live site is the better read — everything below is just how it's put together.

## About me

I'm an ML research scientist at the University of Toronto, working under Dr. Jenny Cui on applied machine learning for public-safety and epidemiological decision-making. I graduated from the University of Toronto with an HBSc in Computer Science, Geospatial Data Science, and Mathematics. Separately, I contribute to the Medical Computer Vision and Robotics Lab on a diffusion-policy pipeline for surgical robotics.

Most of my work is applied ML on messy public data — epidemic forecasting, fire risk, emergency response. The thing I actually care about isn't benchmark numbers. It's validation discipline: verifying a premise before building on it, and designing evaluations that genuinely try to break my own claims. Two of my three main projects report honest negatives as the finding, one of them after six independent tests failed to beat a one-line baseline.

Based in Toronto, and currently available for ML and SWE roles.

## What's on the site

- **Research** — physics-informed ST-GNN for COVID-19 forecasting, Toronto fire risk, emergency response delay prediction, an urban-safety series, and an Edmonton remote-sensing study
- **Projects** — Cadillac F1 Dashboard, [Resume Roaster](https://amicooked.ca), a bill categorizer, roof damage detection from drone imagery, and a student budgeting app
- **Stack** — what I actually reach for, grouped by what it's for

## About this repo

A single static page. No build step, no dependencies, no framework — open `index.html` in a browser and you're looking at the whole thing.

| File | What it is |
| --- | --- |
| `index.html` | The entire site, styles included |
| `site.js` | Nav scroll-spy, disclosure markers, click-to-play video facades |
| `assets/` | Portrait and project figures |

The videos are click-to-play facades rather than embedded iframes, so nothing loads from YouTube until you ask it to. Motion respects `prefers-reduced-motion`.

### Running it locally

```bash
git clone https://github.com/SBprjcts/PortfolioWebsite.git
cd PortfolioWebsite
python -m http.server 8000   # or just open index.html directly
```

### Deploying

Hosted on GitHub Pages from `main` / `/ (root)`. These files have to stay at the repository root — Pages only serves from `/` or `/docs`, so moving them into a subfolder breaks the site. Push to `main` and Pages rebuilds on its own.

## Get in touch

If any of this is relevant to what you're building, I'd be glad to talk.

- **saif.buheis@gmail.com**
- [linkedin.com/in/saif-buheis](https://linkedin.com/in/saif-buheis)
- [github.com/SBprjcts](https://github.com/SBprjcts)

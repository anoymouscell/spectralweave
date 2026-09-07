# SpectralWeave

Anonymous project page: https://anoymouscell.github.io/spectralweave/

## Page structure

- `index.html`: title, overview, method schematic, original abstract, and release sections.
- `styles.css`: responsive layout, typography, and color palette.
- `script.js`: overview domain filters, enlarged figure dialog, and method walkthrough.
- `assets/`: the existing overview figure and spectral icon.
- `vendor/`: retained reference styles and locally served Avenir fonts.
- `TEMPLATE_SOURCES.md`: reference template attribution.

The page uses static HTML, CSS, and JavaScript. No build step or remote runtime dependency is required. For local preview, run `python -m http.server 8765` from this directory.

## Adding materials

Replace the release labels with links when the paper, research code, video, and citation are available. Add actual result media to the animal and human result sections; the overview image is currently an illustration, not a video player. Keep `width`, `height`, descriptive alternatives, and `playsinline` / playback controls on future media.

The domain filters show the top (human) or bottom (animal) half of the current overview image using CSS. Update those rules if its composition changes. The method visualization is a schematic based on the abstract.

## Anonymous publishing

Keep the author byline anonymous. Use the following repository-local identity before committing:

```sh
git config user.name anoymouscell
git config user.email 325942126+anoymouscell@users.noreply.github.com
git config user.useConfigOnly true
git config core.hooksPath .githooks
git config commit.gpgsign false
```

The hooks check author, committer, and the active GitHub account. GitHub Pages publishes the `main` branch, repository root. Publish using `anoymouscell`.

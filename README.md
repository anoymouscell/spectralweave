# SpectralWeave

Anonymous project page: https://anoymouscell.github.io/spectralweave/

## Page structure

- `index.html`: paper title, supplied teaser, original abstract, method schematic, and release sections.
- `styles.css`: responsive layout, typography, and color palette.
- `script.js`: progressive enhancement for the enlarged teaser dialog.
- `assets/`: the supplied paper teaser and spectral icon.
- `vendor/`: retained reference styles and locally served Avenir fonts.
- `TEMPLATE_SOURCES.md`: reference template attribution.

The page uses static HTML, CSS, and JavaScript. No build step or remote runtime dependency is required. For local preview, run `python -m http.server 8765` from this directory.

## Adding materials

Replace the release labels with links when the paper, research code, video, and citation are available. The Results section has two comparison settings:

- `#test-comparisons`: comparisons on the test set; every test identity is unseen during training.
- `#image-to-3d-comparisons`: comparisons using 3D meshes generated from input images.

Mix human and animal examples within each setting; do not split results by domain. Each setting provides a full-width `.comparison-media` area. Replace its `.comparison-placeholder` paragraph with one or more `<figure>` elements containing the actual comparison videos and captions. Use native `<video controls playsinline preload="metadata">`, supply the media's real `width` and `height`, and include a fallback download link. Captions should identify the input/action and the methods in display order. No video is loaded until actual media is provided. The teaser remains a static image of mesh sequences.

The teaser is displayed in full, without cropping or color adjustments. Teal, blue, rose and ochre from the teaser inform the gradient headings. The method visualization is a schematic based on the abstract.

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

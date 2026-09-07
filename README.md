# SpectralWeave

Anonymous project page: https://anoymouscell.github.io/spectralweave/

## Page structure

- `index.html`: paper title, four-case video carousel, original abstract, method schematic, and release sections.
- `styles.css`: responsive layout, typography, and color palette.
- `script.js`: case navigation and video playback management.
- `assets/`: the supplied paper teaser and spectral icon.
- `vendor/`: retained reference styles and locally served Avenir fonts.
- `TEMPLATE_SOURCES.md`: reference template attribution.

The page uses static HTML, CSS, and JavaScript. No build step or remote runtime dependency is required. For local preview, run `python -m http.server 8765` from this directory.

The page retains its original responsive layout, with a maximum content width of 1100px and a prose width of 840px. It applies no CSS zoom. Browser page zoom (such as 75% in the browser menu) is controlled by the browser, not the website; the page cannot force that setting on refresh. In Chrome, set the site's zoom in the browser menu to save it for subsequent visits and refreshes. See [Chrome's zoom settings](https://support.google.com/chrome/answer/96810?co=GENIE.Platform%3DDesktop&hl=en).

## Adding materials

### Opening case carousel

The `#showcase` carousel sits below the paper header and directly before the abstract. It contains four independent, looping cases, with circular previous/next controls, direct selection dots, a case counter, keyboard navigation (Left/Right, Home/End) and touch swipes. Navigation wraps in both directions. The visible case autoplays muted on load and when selected. Reduced-motion preferences disable slide transitions; muted video playback remains automatic, as requested for this page.

The current videos are under `assets/videos/`, referenced by `<video data-src="">` in `#case-01` through `#case-04`:

| Case | `data-src` value |
| --- | --- |
| 01 | `assets/videos/SpectralWeave_01_HHH.mp4` |
| 02 | `assets/videos/SpectralWeave_02_HHH.mp4` |
| 03 | `assets/videos/SpectralWeave_03_AAA.mp4` |
| 04 | `assets/videos/SpectralWeave_04_HHA.mp4` |

Leave `data-src` empty until each file is ready; this shows an honest placeholder and avoids requests for nonexistent videos. The script loads a case on first selection, reveals its player when metadata is ready, and plays only the current video while the carousel is in view. Native controls allow pausing or seeking. Offscreen cases pause, and videos retain their full frame with `object-fit: contain`. Update each video's accessible label to describe the actual case and add subtitles if the video contains speech.

### Comparison results

Replace the release labels with links when the paper, research code, video, and citation are available. The Results section has two comparison settings:

- `#test-comparisons`: comparisons on the test set; every test identity is unseen during training.
- `#image-to-3d-comparisons`: comparisons using 3D meshes generated from input images.

Mix human and animal examples within each setting; do not split results by domain. Each setting provides a full-width `.comparison-media` area. Replace its `.comparison-placeholder` paragraph with one or more `<figure>` elements containing the actual comparison videos and captions. Use native `<video controls playsinline preload="metadata">`, supply the media's real `width` and `height`, and include a fallback download link. Captions should identify the input/action and the methods in display order. No video is loaded until actual media is provided.

The static teaser is no longer displayed on the page; its asset is retained for the social preview. Teal, blue, rose and ochre from the teaser inform the gradient headings. The method visualization is a schematic based on the abstract.

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

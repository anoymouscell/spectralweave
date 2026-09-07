# SpectralWeave

Anonymous project page: https://anoymouscell.github.io/spectralweave/

## Page structure

- `index.html`: paper title, three-case video carousel, supplied teaser, original abstract, method schematic, and release sections.
- `styles.css`: responsive layout, typography, and color palette.
- `script.js`: case navigation and video playback management, plus the enlarged teaser dialog.
- `assets/`: the supplied paper teaser and spectral icon.
- `vendor/`: retained reference styles and locally served Avenir fonts.
- `TEMPLATE_SOURCES.md`: reference template attribution.

The page uses static HTML, CSS, and JavaScript. No build step or remote runtime dependency is required. For local preview, run `python -m http.server 8765` from this directory.

## Adding materials

### Opening case carousel

The `#showcase` carousel sits below the paper header and before the static teaser. It contains three independent cases, with circular previous/next controls, direct selection dots, a case counter, keyboard navigation (Left/Right, Home/End) and touch swipes. Navigation wraps in both directions. Reduced-motion preferences disable slide transitions and automatic video playback.

To add the three videos, place them under `assets/videos/` and set the corresponding `<video data-src="">` in `#case-01`, `#case-02` and `#case-03`:

| Case | Suggested `data-src` value |
| --- | --- |
| 01 | `assets/videos/case-01.mp4` |
| 02 | `assets/videos/case-02.mp4` |
| 03 | `assets/videos/case-03.mp4` |

Leave `data-src` empty until each file is ready; this shows an honest placeholder and avoids requests for nonexistent videos. The script loads a case on first selection, reveals its player when metadata is ready, and plays only the current video while the carousel is in view. Native controls allow pausing or seeking, including when reduced motion disables automatic playback. Offscreen cases pause, and videos retain their full frame with `object-fit: contain`. Update each video's accessible label to describe the actual case and add subtitles if the video contains speech.

### Comparison results

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

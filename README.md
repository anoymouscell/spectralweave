# SpectralWeave

Anonymous project page: https://anoymouscell.github.io/spectralweave/

## Page structure

- `index.html`: paper title, four-case video carousel, original abstract, method schematic, and release sections.
- `styles.css`: responsive layout, typography, and color palette.
- `script.js`: case navigation and video playback management.
- `comparisons-data.js`: method names and all comparison media paths, organized by setting, set, and example.
- `comparisons.js`: comparison tables, independent set tabs, and media loading/playback.
- `assets/`: the supplied paper teaser and spectral icon.
- `vendor/`: retained reference styles and locally served Avenir fonts.
- `TEMPLATE_SOURCES.md`: reference template attribution.

The page uses static HTML, CSS, and JavaScript. No build step or remote runtime dependency is required. For local preview, run `python -m http.server 8765` from this directory.

The header, opening video, abstract, method, comparisons, and resources share one centered `.container`: a maximum width of 1280px, with 24px side margins (18px on small screens). Adjust `--content-width` and `--page-gutter` in `styles.css` to change the shared layout. Comparison media align with the container edges; gaps appear only between columns. Tables scroll horizontally on smaller screens. The page applies no CSS zoom. Browser page zoom (such as 75% in the browser menu) is controlled by the browser, not the website; the page cannot force that setting on refresh. In Chrome, set the site's zoom in the browser menu to save it for subsequent visits and refreshes. See [Chrome's zoom settings](https://support.google.com/chrome/answer/96810?co=GENIE.Platform%3DDesktop&hl=en).

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

Mix human and animal examples within each setting; do not split results by domain. Both settings have independent **Set 1 / Set 2 / Set 3** tabs, each containing four examples. The column order is:

| Setting | Columns | Media per set |
| --- | --- | --- |
| Unseen test identities | Input Mesh, Method 1–5, Ours | 4 × 7 videos |
| Image-to-3D meshes | Input Image, Input Mesh, Method 1–5, Ours | 4 images + 4 × 7 videos |

Edit **`comparisons-data.js`** to add the materials. Change the five method `label` values at the top once to update both sections; keep their `key` values unchanged. Each section contains three `sets`, each with four row objects. In a row, replace empty strings with paths relative to `index.html`:

```js
{
  "label": "Example 01: walking",
  "input_image": "assets/comparisons/image-to-3d/set-1/example-01/input.png",
  "input_mesh": "assets/comparisons/image-to-3d/set-1/example-01/input-mesh.mp4",
  "method_1": "assets/comparisons/image-to-3d/set-1/example-01/method-1.mp4",
  "method_2": "",
  "method_3": "",
  "method_4": "",
  "method_5": "",
  "ours": "assets/comparisons/image-to-3d/set-1/example-01/ours.mp4"
}
```

`input_image` is only used in the Image-to-3D setting. Update each row's `label` to describe the input/action for accessible media labels. Empty paths leave reserved square slots and make no media requests. No sample comparison results are published. Supplied images and videos retain their full frame with `object-fit: contain`. Videos autoplay muted and loop when the selected comparison set is in view, with native playback controls. Switching sets or leaving the section pauses those videos; inactive sets load only when selected and visible. The original four-case opening carousel is independent of these tables.

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

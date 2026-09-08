# SpectralWeave

Anonymous project page: https://anoymouscell.github.io/spectralweave/

## Page structure

- `index.html`: paper title, four-case video carousel, original abstract, supplied pipeline figure, and release sections.
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

- A. `#image-to-3d-comparisons`: comparisons using 3D meshes generated from input images.
- B. `#test-comparisons`: comparisons on the test set; every test identity is unseen during training.

Comparison A appears first with **Set 1 / Set 2 / Set 3**, populated with the 12 selected generation cases. Display order by fixed case ID: Set 1 = 001, 005, 010, 011 (two human, two animal); Set 2 = 002, 004, 007, 012; Set 3 = 003, 006, 008, 009 (both three human, then one animal). See `../runs/comparison_generation_selected12_v1/web_set_order_v4.json`. Case IDs and source paths are unchanged. Each row supplies the source image, rotating simplified input mesh, Animate3D, AnimateAnyMesh, TapMo, BiMotion, ActionMesh, and Ours. Comparison B has **Set 1 / Set 2**, each with four selected examples. The column order is:

| Setting | Columns | Media per set |
| --- | --- | --- |
| Unseen test identities | Input Mesh, Method 1–5, Ours | 4 × 7 videos |
| Image-to-3D meshes | Input Image, Input Mesh, Method 1–5, Ours | 4 images + 4 × 7 videos |

Edit **`comparisons-data.js`** to add the materials. Both sections have their own method labels. Keep method keys unchanged. Each set contains four row objects. In a row, replace empty strings with paths relative to `index.html`:

Both comparison sections enable `showActionText`. Each row's `action_text` stores its original prompt and is displayed above the matching media row, without the case/identity label. Display-only formatting capitalizes the first letter, separates `walkforward`, `trotright`, and `trotleft`, and hides a trailing numeric action-variant suffix (for example, `attack 3` displays as `attack`). Source prompts, media paths, and motion are unchanged by this formatting.

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

`input_image` is only used in the Image-to-3D setting. Update each row's `label` to describe the input/action for accessible media labels. Empty paths leave reserved square slots and make no media requests. Both comparison sections are fully populated. Supplied images and videos retain their full frame with `object-fit: contain`. Videos autoplay muted and loop when the selected comparison set is in view, with native playback controls. Switching sets or leaving the section pauses those videos; inactive sets load only when selected and visible. The original four-case opening carousel is independent of these tables.

Comparison A assets are under `assets/videos/comparisonB_selected12/` (folder name is historical, not the displayed section label). Input provenance: `../runs/comparison_generation_selected12_v1/generation_web_assets.json`. Input images are original model input images, not rendered previews. Static simplified inputs rotate once in 6 seconds (512px, 30fps). All 72 current result clips use `<method>_unified_white_v6.mp4`: GPU rendering at 1024px downsampled to 512px, pure white, shared texture and lighting, and one fixed orthographic scale and rotation per row. Humans use Y-up/front +Z with 8-degree elevation; animals use Z-up/front -Y, seen from the -X side with 20-degree obliqueness and 10-degree elevation, so the canonical head faces screen-right. Native-coordinate textured sequences are used, not already display-rotated meshes. TapMo's existing initial-root correction is retained and is not applied twice.

Scale is shared across all methods, based on the static rest extent with a shared maximum-pose-span safety limit. There is no per-method or per-frame zoom. One common translation-only dead-zone camera rule shifts the view only as needed to keep the entire mesh inside 94% of the frame; this changes the presentation of global translation, not the stored geometry, rotation, pose, or timing. Motion/deformation may naturally change the projected silhouette size. Camera centers and exact scales are recorded per clip. Animate3D: 16 frames/10fps; AnimateAnyMesh: 16/10; TapMo: 120/20; BiMotion: 46/10 (presentation rate, including its supplied rest frame); ActionMesh: 16/8; Ours: 45/10 except case 006 below. These clips are not the speed-adjusted hero edits. Render sources, input/texture identity checks, video hashes, full decode results, and browser checks are under `../runs/comparison_generation_selected12_v1/unified_white_v6/`. The 72 videos total approximately 15 MB. Previous assets are retained for rollback but no longer linked. The 12-case manifest remains tied to the original v12 video positions, not the later v13 regrouping.

Comparison B assets retain their existing folder, `assets/videos/comparisonA/`: 48 independent method clips
(512 × 512, 15 fps, 3 seconds) and six unique rotating input meshes reused in eight
rows (512 × 512, 30 fps, 6 seconds per full turn). Inputs are the actual simplified
static driver meshes, checked against each selected method's input vertices/faces;
they are not animation first frames. Normal rendering matches the comparison style.
Method results show the original-resolution transferred surfaces. TapMo uses the
rotation-fixed run; Human BiMotion uses the CFG-fixed variant, disclosed on the page.
Set 1: Human 036, Human 048, DT4D 038, Human 111. Set 2: DT4D 195, DT4D 154,
DT4D 077, Human 136. Source manifests, backup and installation validation are under
`../runs/comparison_ori_normal_selected8_v1/`. Updating local files does not itself
commit or deploy the public site.

The static teaser is no longer displayed on the page; its asset is retained for the social preview. Headings, navigation accents, and the favicon use a warm gold-to-olive-to-sage palette. Desktop typography uses a 52px title, 38px section headings, 19px body text, and 17px figure captions, with smaller responsive sizes on phones. The Method section displays the project owner's original 3243 × 1740 PNG at `assets/spectralweave-pipeline.png`, with no image resizing or recompression. It fills the shared container while preserving its aspect ratio. Clicking the figure opens the full-resolution image in a new tab.

Case 006 (the humanoid raccoon, a20) keeps the approved trim in `Ours_unified_white_v6.mp4`: it starts at zero-based native frame 3, matching the previously approved hero prefix removal. Frames 3–44 are retained at the unchanged 10fps (42 frames / 4.2s). Case 009 (`raccoon_4`, drink) is not trimmed. See `../runs/comparison_generation_selected12_v1/raccoon_trim_v3.json`.

Case 001 (Sun Wukong, Comparison A / Set 1 / row 1) now restores the same previously approved start at native frame 3 using `Ours_unified_white_trim3_v7.mp4`. Native frames 0–2 are removed; frames 3–44 play once at 10fps (42 frames / 4.2s). Camera, scale, white background, and the remaining poses are unchanged from the unified v6 render. The original v6 video is retained. See `../runs/comparison_generation_selected12_v1/unified_white_v6/case001_trim3_v7_validation.json` for source/output hashes and full-frame validation.

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

/* Progressive enhancement: overview and research text work without JavaScript. */
const domainButtons = [...document.querySelectorAll('[data-domain][aria-pressed]')];
const teaserWindow = document.querySelector('.teaser-window');
const teaserImage = document.querySelector('#teaser-image');
const figureDescription = document.querySelector('#figure-description');
const domainText = {
  all: ['A shared spectral motion space connects independently meshed identities while retaining each mesh’s native topology.', 'SpectralWeave overview: two human meshes and two animal meshes, each illustrated with shared motion coordinates and a sequence of poses.'],
  human: ['Human domain · The two human examples from the overview, shown with their spectral coordinates and illustrated pose sequences.', 'Human-domain overview showing two character meshes, shared spectral coordinates and illustrated pose sequences.'],
  animal: ['Animal domain · The camel and deer examples from the overview, shown with their spectral coordinates and illustrated pose sequences.', 'Animal-domain overview showing a camel and deer, shared spectral coordinates and illustrated pose sequences.']
};
document.querySelector('.domain-switch').hidden = false;
domainButtons.forEach(button => button.addEventListener('click', () => {
  const domain = button.dataset.domain;
  teaserWindow.dataset.domain = domain;
  domainButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  figureDescription.textContent = domainText[domain][0];
  teaserImage.alt = domainText[domain][1];
}));

const steps = [
  ['Represent motion in a native basis', 'Surface motion is expressed as trajectories of Laplacian coefficients. This provides a fixed-size learning space and direct decoding on the supplied vertices, without a learned mesh autoencoder.'],
  ['Why align spectral coordinates?', 'Independently computed bases assign different coordinate axes to corresponding deformations. Bounded, invertible identity adapters, constrained by pairwise functional maps, align the coefficients while preserving each reconstruction subspace.'],
  ['Generate motion in the aligned space', 'Action- and morphology-conditioned diffusion models coefficient trajectories under a consistent coordinate convention. The adapters factor mesh-dependent coordinate variation out of the generative task.'],
  ['Return to the supplied mesh', 'The target adapter and native basis decode the generated trajectories directly onto the original vertices. Geometry-aware supervision and deterministic refinement preserve local surface structure.']
];
const stepButtons = [...document.querySelectorAll('[data-step]')];
const nodes = [...document.querySelectorAll('[data-stage]')];
document.querySelector('.step-controls').hidden = false;
function selectStep(index) {
  stepButtons.forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.step) === index)));
  nodes.forEach(node => node.classList.toggle('is-active', Number(node.dataset.stage) === index));
  document.querySelector('#step-title').textContent = steps[index][0];
  document.querySelector('#step-description').textContent = steps[index][1];
}
stepButtons.forEach(button => {
  button.setAttribute('aria-label', `Step ${Number(button.dataset.step) + 1}: ${steps[Number(button.dataset.step)][0]}`);
  button.addEventListener('click', () => selectStep(Number(button.dataset.step)));
});
selectStep(1);

const dialog = document.querySelector('.figure-dialog');
const teaserLink = document.querySelector('.teaser-link');
if (typeof dialog.showModal === 'function') {
  teaserLink.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
  document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
}

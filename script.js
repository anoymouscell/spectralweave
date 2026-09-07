/* The teaser link also works without JavaScript. */
const dialog = document.querySelector('.figure-dialog');
const teaserLink = document.querySelector('.teaser-link');
if (dialog && typeof dialog.showModal === 'function') {
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

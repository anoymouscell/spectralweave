/* Independent comparison sets, with reserved media slots until files are supplied. */
comparisonData.sections.forEach(config => {
  const section = document.getElementById(config.id);
  if (!section) return;
  const tablist = section.querySelector('.comparison-tabs');
  const container = section.querySelector('.comparison-media');
  const columns = [
    ...(config.inputImage ? [{ key: 'input_image', label: 'Input Image', type: 'image' }] : []),
    { key: 'input_mesh', label: 'Input Mesh', type: 'video' },
    ...(config.methods || comparisonData.methods).map(method => ({ ...method, type: 'video' }))
  ];
  const panels = [];
  const tabs = [];
  let selected = 0;
  let inView = false;

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function canPlay(index) {
    return index === selected && inView && !document.hidden;
  }

  function updatePlayback() {
    panels.forEach((panel, index) => {
      const active = canPlay(index);
      panel.querySelectorAll('video, img').forEach(media => {
        const source = media.dataset.src.trim();
        if (!source) return;
        if (active && !media.getAttribute('src')) {
          media.src = source;
          if (media.tagName === 'VIDEO') media.load();
        }
        if (media.tagName !== 'VIDEO') return;
        if (active && media.getAttribute('src') && !media.error) media.play().catch(() => {});
        else media.pause();
      });
    });
  }

  function selectSet(index, focus = false) {
    selected = index;
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
    });
    if (focus) tabs[index].focus();
    updatePlayback();
  }

  config.sets.forEach((rows, setIndex) => {
    const panelId = `${config.id}-set-${setIndex + 1}`;
    const tab = element('button', 'comparison-tab', `Set ${setIndex + 1}`);
    tab.type = 'button';
    tab.id = `${panelId}-tab`;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panelId);
    tab.addEventListener('click', () => selectSet(setIndex));
    tab.addEventListener('keydown', event => {
      const destinations = { ArrowLeft: (setIndex + config.sets.length - 1) % config.sets.length, ArrowRight: (setIndex + 1) % config.sets.length, Home: 0, End: config.sets.length - 1 };
      if (!(event.key in destinations)) return;
      event.preventDefault();
      selectSet(destinations[event.key], true);
    });
    tabs.push(tab);
    tablist.append(tab);

    const panel = element('div', 'comparison-panel');
    panel.id = panelId;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tab.id);
    const scroller = element('div', 'comparison-scroller');
    scroller.tabIndex = 0;
    scroller.setAttribute('role', 'region');
    scroller.setAttribute('aria-label', `Set ${setIndex + 1} comparison table, scroll to see all methods`);
    const table = element('table', `comparison-table${config.inputImage ? ' has-input-image' : ''}`);
    // Preserve table semantics in browsers when rows use CSS grid for spacing.
    table.setAttribute('role', 'table');
    table.append(element('caption', 'visually-hidden', `Set ${setIndex + 1}: ${rows.length} examples. ${section.querySelector('h3').textContent}`));
    const head = element('thead');
    head.setAttribute('role', 'rowgroup');
    const headings = element('tr');
    headings.setAttribute('role', 'row');
    columns.forEach(column => {
      const th = element('th', column.key === 'ours' ? 'ours-heading' : '');
      th.scope = 'col';
      th.setAttribute('role', 'columnheader');
      th.append(element('span', '', column.label));
      headings.append(th);
    });
    head.append(headings);
    table.append(head);
    const body = element('tbody');
    body.setAttribute('role', 'rowgroup');

    rows.forEach((row, rowIndex) => {
      const tr = element('tr');
      tr.setAttribute('role', 'row');
      if (config.showActionText && row.action_text) {
        const prompt = row.action_text.trim()
          .replace(/\bwalkforward\b/gi, 'walk forward')
          .replace(/\btrotright\b/gi, 'trot right')
          .replace(/\btrotleft\b/gi, 'trot left')
          .replace(/\s+\d+\s*$/, '');
        const description = prompt.charAt(0).toUpperCase() + prompt.slice(1)
          + (/[.!?]$/.test(prompt) ? '' : '.');
        const descriptionId = `${panelId}-action-${rowIndex + 1}`;
        const actionRow = element('tr', 'comparison-action-row');
        actionRow.setAttribute('role', 'row');
        const actionCell = element('td', 'comparison-action-text', description);
        actionCell.id = descriptionId;
        actionCell.colSpan = columns.length;
        actionCell.setAttribute('role', 'cell');
        actionRow.append(actionCell);
        body.append(actionRow);
        tr.setAttribute('aria-describedby', descriptionId);
      }
      columns.forEach(column => {
        const label = `${row.label}, ${column.label}`;
        const td = element('td');
        td.setAttribute('role', 'cell');
        const slot = element('div', `comparison-slot${column.key === 'ours' ? ' is-ours' : ''}`);
        slot.dataset.example = String(rowIndex + 1);
        slot.dataset.method = column.key;
        const empty = element('span', 'comparison-empty');
        empty.setAttribute('role', 'img');
        empty.setAttribute('aria-label', `${label}: ${column.type} to be added`);
        const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        icon.setAttribute('viewBox', '0 0 32 32');
        icon.setAttribute('aria-hidden', 'true');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', column.type === 'image'
          ? 'M5 5h22v22H5Z M5 22l7-8 6 7 4-4 5 6 M20 10h.01'
          : 'M4 8h17v16H4Z M21 13l7-4v14l-7-4');
        icon.append(path);
        empty.append(icon, element('span', '', column.type === 'image' ? 'Image' : 'Video'));
        const media = element(column.type === 'image' ? 'img' : 'video');
        media.dataset.src = row[column.key] || '';
        media.hidden = true;
        if (column.type === 'image') {
          media.alt = label;
          media.decoding = 'async';
        } else {
          media.setAttribute('aria-label', label);
          media.controls = true;
          media.defaultMuted = true;
          media.muted = true;
          media.autoplay = true;
          media.loop = true;
          media.playsInline = true;
          media.preload = 'none';
          media.addEventListener('play', () => { if (!canPlay(setIndex)) media.pause(); });
        }
        media.addEventListener(column.type === 'image' ? 'load' : 'loadeddata', () => {
          media.hidden = false;
          empty.hidden = true;
          if (column.type === 'video' && canPlay(setIndex)) media.play().catch(() => {});
        });
        media.addEventListener('error', () => {
          media.hidden = true;
          empty.hidden = false;
          empty.lastElementChild.textContent = 'Media unavailable';
        });
        slot.append(empty, media);
        td.append(slot);
        tr.append(td);
      });
      body.append(tr);
    });
    table.append(body);
    scroller.append(table);
    panel.append(scroller);
    panels.push(panel);
    container.append(panel);
  });

  selectSet(0);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      updatePlayback();
    }, { threshold: 0 }).observe(container);
  } else {
    inView = true;
    updatePlayback();
  }
  document.addEventListener('visibilitychange', updatePlayback);
});

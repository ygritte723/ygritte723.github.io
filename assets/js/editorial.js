(() => {
  const button = document.querySelector('#shuffle-desk');
  const desk = document.querySelector('#desk-stack');
  if (!button || !desk) return;
  const papers = [...desk.querySelectorAll('.desk-paper')];
  const status = document.querySelector('#desk-status');
  let active = 0;
  function arrange() {
    papers.forEach((paper, index) => {
      const depth = (index - active + papers.length) % papers.length;
      paper.style.zIndex = String(papers.length - depth);
      paper.style.setProperty('--tilt', ['-8deg', '5deg', '-2deg'][depth]);
      paper.style.setProperty('--shift', ['-10px', '8px', '0px'][depth]);
      paper.tabIndex = depth === 0 ? 0 : -1;
      paper.setAttribute('aria-hidden', depth === 0 ? 'false' : 'true');
    });
  }
  arrange();
  button.hidden = false;
  button.addEventListener('click', () => {
    active = (active + 1) % papers.length;
    arrange();
    status.textContent = papers[active].querySelector('span').textContent + ' — click the paper to explore.';
  });
})();

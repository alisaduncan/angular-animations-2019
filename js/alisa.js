Reveal.addEventListener( 'fragmentshown', (event) => {
  // event.fragment = the fragment DOM element
  const codeSnippet = event.fragment.dataset.codeSnippet;
  if (!codeSnippet) {
    return;
  }

  Array.from(document.querySelectorAll(`code[data-code-snippet*='${codeSnippet.slice(0, -1)}']`))
    .filter(el => el.dataset.codeSnippet !== event.fragment.dataset.codeSnippet)
    .forEach(el => el.classList.add('hide'));

  document.querySelector(`code[data-code-snippet='${codeSnippet}']`).classList.remove('hide');

});

Reveal.addEventListener( 'fragmenthidden', (event) => {
  // event.fragment = the fragment DOM element
  const codeSnippet = event.fragment.dataset.codeSnippet;
  if (!codeSnippet) {
    return;
  }

  document.querySelectorAll(`code[data-code-snippet*='${codeSnippet.slice(0, -1)}']`).forEach(el => el.classList.add('hide'));
  const visibleFragment = document.querySelector('p.visible.current-fragment');

  if (visibleFragment) {
    document.querySelector(`code[data-code-snippet='${visibleFragment.dataset.codeSnippet}']`).classList.remove('hide');
  }
});

Reveal.addEventListener( 'code-snippet', () => {
  const currentSlide = document.querySelector('section.present');
  currentSlide.querySelectorAll(`code[data-code-snippet*='${currentSlide.dataset.codeSnippetName}']`)
    .forEach(el => el.classList.add('hide'));

    // navigating backwards should show last fragment
    if (Reveal.getIndices().h < Reveal.getIndices(Reveal.getPreviousSlide()).h) {
      currentSlide.querySelector(`code[data-code-snippet='${currentSlide.dataset.codeSnippetName}-${Reveal.getIndices().f+1}']`).classList.remove('hide');
    }
}, false );

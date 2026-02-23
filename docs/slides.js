/* =============================================
   reveal.js Initialization for Slide Decks
   ============================================= */

(async () => {
  const { default: Reveal } = await import('https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.esm.js');
  const { default: Notes } = await import('https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/notes/notes.esm.js');
  const { default: Highlight } = await import('https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/highlight/highlight.esm.js');

  Reveal.initialize({
    hash: true,
    plugins: [Notes, Highlight],
    transition: 'fade',
    controls: 'speaker-only',
    progress: false,
    pdfSeparateFragments: false,
    slideNumber: 'c/t' ,
    showSlideNumber: 'speaker' 

  });
})();

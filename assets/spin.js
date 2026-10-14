// Spins the film reel in the app icon as the page scrolls.
// Only the reel turns, not the red tile behind it. Skipped for people who ask for reduced motion.
(function () {
  var reels = document.querySelectorAll('.app-icon .reel');
  if (!reels.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var DEGREES_PER_PIXEL = 0.45;
  var queued = false;

  function update() {
    var angle = (window.scrollY * DEGREES_PER_PIXEL).toFixed(1);
    for (var i = 0; i < reels.length; i++) {
      reels[i].setAttribute('transform', 'rotate(' + angle + ' 512 512)');
    }
    queued = false;
  }

  window.addEventListener('scroll', function () {
    if (!queued) {
      queued = true;
      window.requestAnimationFrame(update);
    }
  }, { passive: true });

  update();
})();

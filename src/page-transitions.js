(function() {
  var overlay = document.createElement('div');
  overlay.className = 'ts-overlay';
  document.body.appendChild(overlay);

  function navigateTo(href) {
    overlay.classList.remove('leaving');
    overlay.classList.add('entering');
    setTimeout(function() {
      window.location.href = href;
    }, 280);
  }

  document.addEventListener('click', function(e) {
    var link = e.target.closest('a');
    if (!link) return;
    var href = link.getAttribute('href');
    if (!href) return;
    if (href.startsWith('#') || href.startsWith('http') || href.startsWith('//') ||
        href.startsWith('mailto') || href.startsWith('tel')) return;
    if (link.getAttribute('target') === '_blank') return;
    e.preventDefault();
    navigateTo(href);
  });

  window.addEventListener('pageshow', function(e) {
    overlay.classList.remove('entering');
    overlay.classList.add('leaving');
    setTimeout(function() {
      overlay.classList.remove('leaving');
    }, 280);
  });
})();

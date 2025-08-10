// Load header, content, and footer from separate files
function loadSection(url, elementId, errorMsg) {
  fetch(url)
    .then(r => {
      if (!r.ok) throw new Error(`Failed to load ${url}`);
      return r.text();
    })
    .then(t => document.getElementById(elementId).innerHTML = t)
    .catch(e => document.getElementById(elementId).innerHTML = errorMsg);
}

// Load reusable components
loadSection('header.html', 'header', '<div class="error">Header failed to load.</div>');
loadSection('footer.html', 'footer', '<div class="error">Footer failed to load.</div>');
loadSection('primary-cta.html', 'cta', '<div class="error">CTA failed to load.</div>');
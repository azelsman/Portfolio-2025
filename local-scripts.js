// Load header, content, and footer from separate files
function loadSection(url, elementId, errorMsg, callback) {
  fetch(url)
    .then(r => {
      if (!r.ok) throw new Error(`Failed to load ${url}`);
      return r.text();
    })
    .then(t => {
      document.getElementById(elementId).innerHTML = t;
      if (callback) callback();
    })
    .catch(e => document.getElementById(elementId).innerHTML = errorMsg);
}

// Load reusable components
loadSection('header.html', 'header', '<div class="error">Header failed to load.</div>');
loadSection('footer.html', 'footer', '<div class="error">Footer failed to load.</div>');
loadSection('primary-cta.html', 'cta', '<div class="error">CTA failed to load.</div>');
loadSection('breadcrumb.html', 'breadcrumb', '<div class="error">Breadcrumb failed to load.</div>', function() {
  var current = document.getElementById("breadcrumb-current");
  if (current) {
    var pageName = document.title;
    var pageUrl = window.location.href;
    current.querySelector('[itemprop="name"]').textContent = pageName;
    current.querySelector('[itemprop="item"]').setAttribute('content', pageUrl);
  }
});

// Case study pagination logic
document.addEventListener("DOMContentLoaded", function() {
  const studies = [
    { href: "smc.html", label: "Santa's Magic Call" },
    { href: "afi.html", label: "American Family Insurance" },
    { href: "cgi.html", label: "CGI Momentum" },
    { href: "uspto.html", label: "U.S. Patent and Trademark Office" },
    //{ href: "vocus.html", label: "Vocus Marketing Cloud" },
    //{ href: "tableworks.html", label: "Tableworks" }
  ];

  const currentFile = window.location.pathname.split('/').pop();
  const currentIndex = studies.findIndex(s => s.href === currentFile);

  const pagination = document.querySelector('pagination');
  if (pagination && currentIndex !== -1) {
    let prev = currentIndex > 0 ? studies[currentIndex - 1] : null;
    let next = currentIndex < studies.length - 1 ? studies[currentIndex + 1] : null;

    pagination.innerHTML = `
      <nav class="pagination-nav" aria-label="Case Study Pagination">
        <ul class="pagination-list">
          <li>
            ${prev
              ? `<a href="${prev.href}" class="pagination-link">&lt; Previous</a>`
              : `<span class="pagination-link disabled" aria-disabled="true" tabindex="-1">&lt; Previous</span>`
            }
          </li>
          <li>
            ${next
              ? `<a href="${next.href}" class="pagination-link">Next Study &gt;</a>`
              : `<span class="pagination-link disabled" aria-disabled="true" tabindex="-1">Next Study &gt;</span>`
            }
          </li>
        </ul>
      </nav>
    `;
  }
});

// recommendations 
document.addEventListener("DOMContentLoaded", function() {
  // Recommendation image responsive fix (optional)
  const recImg = document.querySelector('.recommendation img');
  if (recImg) {
    recImg.style.maxWidth = '48px';
    recImg.style.height = 'auto';
    recImg.style.verticalAlign = 'middle';
  }

  // If you want to dynamically load recommendations, example:
  // const recommendationText = document.querySelector('.recommendation-text');
  // if (recommendationText) {
  //   recommendationText.innerHTML = "Recommendations<br/>Allan has both a deep understanding of design, and of the technical details required...";
  // }
});
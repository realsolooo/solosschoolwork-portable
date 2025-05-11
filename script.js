const iframeContainer = document.getElementById('iframe-container');
const urlInput = document.getElementById('url');
const engineSelect = document.getElementById('engine');
const proxyToggle = document.getElementById('proxyToggle');

// Open a new tab with the given URL
function openTab(url) {
  iframeContainer.innerHTML = '';
  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.width = '100%';
  iframe.height = '600px';
  iframe.style.border = 'none';
  iframeContainer.appendChild(iframe);
}

// Format and validate URL or use search engine
function formatURL(input) {
  const hasProtocol = /^(https?:\/\/|\/\/)/i.test(input);
  const isLikelyURL = /\.[a-z]{2,}/i.test(input);

  if (isLikelyURL) {
    return hasProtocol ? input : 'https://' + input;
  }

  // It's a search term
  const query = encodeURIComponent(input);
  const engine = engineSelect.value;
  let searchURL = '';

  switch (engine) {
    case 'duckduckgo':
      searchURL = `https://duckduckgo.com/?q=${query}`;
      break;
    case 'bing':
      searchURL = `https://www.bing.com/search?q=${query}`;
      break;
    case 'brave':
      searchURL = `https://search.brave.com/search?q=${query}`;
      break;
  }

  return searchURL;
}

// Main navigation function
function goToURL() {
  const input = urlInput.value.trim();
  if (!input) return;

  const url = formatURL(input);

  if (proxyToggle.checked) {
    openTab(`/uv/service/${btoa(url)}`); // Ultraviolet proxy assumed at /uv/
  } else {
    openTab(url);
  }
}

function searchQuery() {
  const input = urlInput.value.trim();
  if (!input) return;

  const searchURL = formatURL(input);
  if (proxyToggle.checked) {
    openTab(`/uv/service/${btoa(searchURL)}`);
  } else {
    openTab(searchURL);
  }
}

function refreshTab() {
  const iframe = iframeContainer.querySelector('iframe');
  if (iframe) iframe.src = iframe.src;
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
}

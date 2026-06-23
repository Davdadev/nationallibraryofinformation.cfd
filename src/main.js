import { renderApp } from "./router.js";
import { runAiScan } from "./views/ArticleDetail.js";

function bindAfterRender() {
  const homeInput = document.getElementById("home-search");
  const homeBtn = document.getElementById("home-search-btn");
  if (homeInput && homeBtn) {
    const go = () => {
      const q = encodeURIComponent(homeInput.value.trim());
      location.hash = `#/search?q=${q}`;
    };
    homeBtn.onclick = go;
    homeInput.addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
  }

  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-button");
  if (searchInput && searchBtn) {
    const go = () => {
      const q = encodeURIComponent(searchInput.value.trim());
      location.hash = `#/search?q=${q}`;
    };
    searchBtn.onclick = go;
    searchInput.addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
  }

  const articleMatch = location.hash.match(/^#\/article\/([^/]+)/);
  if (articleMatch) runAiScan(articleMatch[1]);

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    const nameInput = document.getElementById("contact-name");
    const status = document.getElementById("contact-status");
    if (!nameInput || !status) return;
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      const name = nameInput.value.trim();
      status.hidden = false;
      status.textContent = `Thanks ${name}, your message has been received.`;
      contactForm.reset();
    });
  }
}

function render() {
  renderApp();
  bindAfterRender();
  window.scrollTo({ top: 0, behavior: "instant" });
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);

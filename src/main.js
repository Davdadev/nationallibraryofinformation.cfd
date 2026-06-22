import { renderApp } from "./router.js";

function bindAfterRender() {
  const homeInput = document.getElementById("home-search");
  const homeBtn = document.getElementById("home-search-btn");
  if (homeInput && homeBtn) {
    const go = () => {
      const q = encodeURIComponent(homeInput.value.trim());
      location.hash = `#/search?q=${q}`;
    };
    homeBtn.onclick = go;
    homeInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") go();
    });
  }

  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-button");
  if (searchInput && searchBtn) {
    const go = () => {
      const q = encodeURIComponent(searchInput.value.trim());
      location.hash = `#/search?q=${q}`;
    };
    searchBtn.onclick = go;
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") go();
    });
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const messageInput = document.getElementById("contact-message");
    const status = document.getElementById("contact-status");
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = nameInput?.value.trim() || "";
      const email = emailInput?.value.trim() || "";
      const message = messageInput?.value.trim() || "";
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!name || !validEmail || !message) {
        if (status) status.textContent = "Please complete all fields with a valid email address.";
        return;
      }
      if (status) status.textContent = `Thanks ${name}, your message has been received.`;
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

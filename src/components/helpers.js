import { site } from "../data/site.js";

export function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function formatDate(iso) {
  try {
    return new Intl.DateTimeFormat("en-AU", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function appShell({ nav = "", crumbs = [], main = "" } = {}) {
  const breadcrumbHtml = crumbs.length
    ? `<div class="breadcrumbs">${crumbs.map((c, i) => i === crumbs.length - 1 ? `<span>${escapeHtml(c.label)}</span>` : `<a href="${c.path}">${escapeHtml(c.label)}</a><span>›</span>`).join("")}</div>`
    : "";
  return `
    <div class="page">
      ${topbar()}
      ${header(nav)}
      ${breadcrumbHtml}
      <main class="page-main">${main}</main>
      ${footer()}
    </div>
  `;
}

export function topbar() {
  return `
    <div class="topbar">
      <div class="wrap topbar-inner">
        <span>Public archive · ${site.shortName}</span>
        <span>${site.tagline}</span>
      </div>
    </div>
  `;
}

export function header(active = "") {
  const links = [
    ["home", "Home", "#/"],
    ["discover", "Discover", "#/discover"],
    ["research", "Research", "#/research"],
    ["learn", "Learn", "#/learn"],
    ["news", "News", "#/news"],
    ["about", "About", "#/about"]
  ];
  return `
    <header class="site-header">
      <div class="wrap header-inner">
        <a class="brand" href="#/">
          <span class="brand-mark">NLI</span>
          <span class="brand-text">
            <strong>${site.name}</strong>
            <small>${site.tagline}</small>
          </span>
        </a>
        <nav class="main-nav">
          ${links.map(([id, label, href]) => `<a class="${active === id ? "active" : ""}" href="${href}">${label}</a>`).join("")}
        </nav>
      </div>
    </header>
  `;
}

export function footer() {
  return `
    <footer class="site-footer">
      <div class="wrap footer-grid">
        <div>
          <h3>${site.name}</h3>
          <p>A polished archive for articles, collections, and public programs.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <a href="#/discover">Collections</a>
          <a href="#/search">Search</a>
          <a href="#/exhibitions">Exhibitions</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="#/donate">Donate</a>
          <a href="#/membership">Membership</a>
          <a href="#/volunteer">Volunteer</a>
        </div>
      </div>
      <div class="wrap footer-bottom">© ${site.year} ${site.name}</div>
    </footer>
  `;
}

export function pageHero(title, intro, meta = "") {
  return `
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">${escapeHtml(meta)}</p>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(intro)}</p>
      </div>
    </section>
  `;
}

export function card(title, text, link = "#/") {
  return `
    <article class="card">
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(text)}</p>
      <a class="button button-ghost" href="${link}">Open</a>
    </article>
  `;
}

export function articleCard(article) {
  return `
    <article class="card article-card">
      <div class="article-card-top">
        <span class="pill">${escapeHtml(article.category)}</span>
        <span class="muted">${escapeHtml(article.readingTime)}</span>
      </div>
      <h3><a href="#/article/${article.slug}">${escapeHtml(article.title)}</a></h3>
      <p>${escapeHtml(article.excerpt)}</p>
      <div class="tag-row">${article.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>
      <div class="card-meta">
        <span>${escapeHtml(article.author)}</span>
        <span>${formatDate(article.date)}</span>
      </div>
    </article>
  `;
}

export function collectionCard(col) {
  return `
    <article class="card collection-card">
      <div class="collection-emoji">${escapeHtml(col.icon)}</div>
      <h3>${escapeHtml(col.title)}</h3>
      <p>${escapeHtml(col.summary)}</p>
      <div class="card-meta">
        <span>${escapeHtml(col.stats)}</span>
        <a href="#/collection/${col.slug}">View collection</a>
      </div>
    </article>
  `;
}

export function listItem(title, text, meta = "") {
  return `
    <div class="list-item">
      <div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(text)}</p>
      </div>
      <span class="muted">${escapeHtml(meta)}</span>
    </div>
  `;
}

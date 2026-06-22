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
    return new Intl.DateTimeFormat("en-AU", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function appShell({ nav = "", crumbs = [], main = "" } = {}) {
  const breadcrumbHtml = crumbs.length
    ? `<div class="breadcrumbs wrap">${crumbs.map((c, i) => i === crumbs.length - 1
        ? `<span>${escapeHtml(c.label)}</span>`
        : `<a href="${c.path}">${escapeHtml(c.label)}</a><span>›</span>`
      ).join("")}</div>`
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
      <div class="topbar-inner">
        <span>${site.shortName} · Public Archive · Established 2024</span>
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
      <div class="header-inner wrap">
        <a class="brand" href="#/">
          <div class="brand-mark">NLI</div>
          <div class="brand-text">
            <strong>${site.name}</strong>
            <small>${site.tagline}</small>
          </div>
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
      <div class="footer-grid wrap">
        <div>
          <h3>${site.name}</h3>
          <p>A public archive dedicated to preserving and providing access to historical records, cultural material, and research collections for all Australians.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <a href="#/discover">Collections</a>
          <a href="#/search">Search</a>
          <a href="#/exhibitions">Exhibitions</a>
          <a href="#/archives">Archives</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="#/donate">Donate</a>
          <a href="#/membership">Membership</a>
          <a href="#/volunteer">Volunteer</a>
          <a href="#/partners">Partners</a>
        </div>
        <div>
          <h4>Information</h4>
          <a href="#/about">About</a>
          <a href="#/contact">Contact</a>
          <a href="#/faq">FAQ</a>
          <a href="#/privacy">Privacy</a>
          <a href="#/terms">Terms</a>
        </div>
      </div>
      <div class="footer-bottom wrap">
        <span>© ${site.year} ${site.name}. All rights reserved.</span>
        <span>Canberra, Australia · ACT 2600</span>
      </div>
    </footer>
  `;
}

export function pageHero(title, intro, meta = "") {
  return `
    <section class="hero">
      <div class="hero-content wrap">
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
      <a class="button button-ghost" href="${link}">Open →</a>
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
      <h3 style="margin-top:10px"><a href="#/article/${article.slug}">${escapeHtml(article.title)}</a></h3>
      <p>${escapeHtml(article.excerpt)}</p>
      <div class="tag-row">${article.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>
      <div class="card-meta" style="margin-top:14px">
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
      <div class="card-meta" style="margin-top:12px">
        <span class="muted">${escapeHtml(col.stats)}</span>
        <a href="#/collection/${col.slug}" style="color:var(--navy);font-size:13px;font-weight:600;text-decoration:underline">View collection →</a>
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
      <span class="muted" style="font-size:13px;white-space:nowrap;flex-shrink:0">${escapeHtml(meta)}</span>
    </div>
  `;
}

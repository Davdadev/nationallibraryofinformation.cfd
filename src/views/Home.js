import { pageHero, card, articleCard, collectionCard, listItem, escapeHtml } from "../components/helpers.js";
import { collections, articles, pages, newsroom, blogPosts, eventList } from "../data/site.js";

export function HomeView() {
  const featured = articles.filter(a => a.featured).slice(0, 4);
  const recent = [...articles].sort((a,b) => b.date.localeCompare(a.date)).slice(0, 5);
  return `
    ${pageHero(pages.home.title, pages.home.intro, "Home")}
    <section class="section">
      <div class="toolbar">
        <form class="searchbar" onsubmit="return false;">
          <input id="home-search" type="search" placeholder="Search articles, tags, or collections">
          <button id="home-search-btn" type="button">Search</button>
        </form>
        <a class="button button-primary" href="#/search">Open full search</a>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <div><h2>Featured collections</h2><p>Start with the main archive areas.</p></div>
      </div>
      <div class="grid cols-4">
        ${collections.map(collectionCard).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <div><h2>Featured articles</h2><p>Highlighted stories from across the archive.</p></div>
        <a href="#/discover">View all content</a>
      </div>
      <div class="grid cols-2">
        ${featured.map(articleCard).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <div><h2>Recent additions</h2><p>Latest items added by the editorial team.</p></div>
      </div>
      <div class="list">
        ${recent.map(a => listItem(a.title, a.excerpt, a.category)).join("")}
      </div>
    </section>

    <section class="section">
      <div class="grid cols-3">
        <div class="card">
          <h3>News</h3>
          ${newsroom.map(item => `<div class="list-item" style="margin:12px 0 0"><div><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.text)}</p></div><span class="muted">${escapeHtml(item.date)}</span></div>`).join("")}
          <p style="margin-top:14px"><a href="#/news">Open news page</a></p>
        </div>
        <div class="card">
          <h3>Blog</h3>
          ${blogPosts.map(item => `<div class="list-item" style="margin:12px 0 0"><div><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.text)}</p></div><span class="muted">${escapeHtml(item.date)}</span></div>`).join("")}
          <p style="margin-top:14px"><a href="#/blog">Open blog page</a></p>
        </div>
        <div class="card">
          <h3>Events</h3>
          ${eventList.map(item => `<div class="list-item" style="margin:12px 0 0"><div><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.text)}</p></div><span class="muted">${escapeHtml(item.date)}</span></div>`).join("")}
          <p style="margin-top:14px"><a href="#/events">Open events page</a></p>
        </div>
      </div>
    </section>
  `;
}

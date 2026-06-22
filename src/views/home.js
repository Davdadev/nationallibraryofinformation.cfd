import { pageHero, card, articleCard, collectionCard, listItem, escapeHtml } from "../components/helpers.js";
import { collections, articles, pages, newsroom, blogPosts, eventList } from "../data/site.js";
import { formatDate } from "../components/helpers.js";

export function HomeView() {
  const featured = articles.filter(a => a.featured).slice(0, 4);
  const recent = [...articles].sort((a,b) => b.date.localeCompare(a.date)).slice(0, 5);

  return `
    ${pageHero(pages.home.title, pages.home.intro, "Welcome")}

    <!-- Search bar -->
    <div class="wrap">
      <div class="toolbar" style="padding:28px 0 0;max-width:100%">
        <form class="searchbar" onsubmit="return false;" style="flex:1">
          <input id="home-search" type="search" placeholder="Search articles, collections, and topics…">
          <button id="home-search-btn" type="button">Search</button>
        </form>
        <a class="button button-primary" href="#/search">Advanced search</a>
      </div>
    </div>

    <!-- Collections -->
    <section class="section">
      <div class="section-head">
        <div>
          <h2>Collections</h2>
          <p>Four top-level archive areas covering history, science, culture, and geography.</p>
        </div>
        <a href="#/discover">Browse all →</a>
      </div>
      <div class="grid cols-4" style="margin-top:0;border-top:0">
        ${collections.map(collectionCard).join("")}
      </div>
    </section>

    <!-- Featured articles -->
    <section class="section" style="padding-top:40px">
      <div class="section-head">
        <div>
          <h2>Featured articles</h2>
          <p>Selected stories from across the archive.</p>
        </div>
        <a href="#/discover">View all →</a>
      </div>
      <div class="grid cols-2" style="margin-top:0;border-top:0">
        ${featured.map(articleCard).join("")}
      </div>
    </section>

    <!-- Recent additions -->
    <section class="section" style="padding-top:40px">
      <div class="section-head">
        <div>
          <h2>Recent additions</h2>
          <p>Latest items catalogued by the editorial team.</p>
        </div>
      </div>
      <div class="list" style="border:1px solid var(--rule);margin-top:0">
        ${recent.map(a => listItem(a.title, a.excerpt, a.category)).join("")}
      </div>
    </section>

    <!-- News / Blog / Events -->
    <section class="section" style="padding-top:40px">
      <div class="grid cols-3" style="margin-top:0">
        <div class="card" style="padding:0">
          <div style="padding:16px 22px;border-bottom:2px solid var(--ink);display:flex;justify-content:space-between;align-items:center">
            <h3 style="margin:0;font-size:16px">News</h3>
            <a href="#/news" style="font-size:12px;font-weight:700;color:var(--navy);text-decoration:underline">All news →</a>
          </div>
          <div class="list">
            ${newsroom.map(item => `
              <div class="list-item" style="flex-direction:column;gap:4px">
                <strong style="font-size:14px;font-family:Georgia,serif">${escapeHtml(item.title)}</strong>
                <span class="muted" style="font-size:12px">${formatDate(item.date)}</span>
                <p style="margin:0;font-size:13px;color:var(--ink-2)">${escapeHtml(item.text)}</p>
              </div>
            `).join("")}
          </div>
        </div>
        <div class="card" style="padding:0">
          <div style="padding:16px 22px;border-bottom:2px solid var(--ink);display:flex;justify-content:space-between;align-items:center">
            <h3 style="margin:0;font-size:16px">Editorial blog</h3>
            <a href="#/blog" style="font-size:12px;font-weight:700;color:var(--navy);text-decoration:underline">All posts →</a>
          </div>
          <div class="list">
            ${blogPosts.map(item => `
              <div class="list-item" style="flex-direction:column;gap:4px">
                <strong style="font-size:14px;font-family:Georgia,serif">${escapeHtml(item.title)}</strong>
                <span class="muted" style="font-size:12px">${formatDate(item.date)}</span>
                <p style="margin:0;font-size:13px;color:var(--ink-2)">${escapeHtml(item.text)}</p>
              </div>
            `).join("")}
          </div>
        </div>
        <div class="card" style="padding:0">
          <div style="padding:16px 22px;border-bottom:2px solid var(--ink);display:flex;justify-content:space-between;align-items:center">
            <h3 style="margin:0;font-size:16px">Upcoming events</h3>
            <a href="#/events" style="font-size:12px;font-weight:700;color:var(--navy);text-decoration:underline">All events →</a>
          </div>
          <div class="list">
            ${eventList.map(item => `
              <div class="list-item" style="flex-direction:column;gap:4px">
                <strong style="font-size:14px;font-family:Georgia,serif">${escapeHtml(item.title)}</strong>
                <span class="muted" style="font-size:12px">${formatDate(item.date)}</span>
                <p style="margin:0;font-size:13px;color:var(--ink-2)">${escapeHtml(item.text)}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

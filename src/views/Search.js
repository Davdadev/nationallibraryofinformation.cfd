import { pageHero, escapeHtml } from "../components/helpers.js";
import { pages, collections, articles } from "../data/site.js";
import { formatDate } from "../components/helpers.js";

function scoreArticle(a, q) {
  const hay = [a.title, a.excerpt, a.author, a.category, ...(a.tags || [])].join(" ").toLowerCase();
  return hay.includes(q) ? 1 : 0;
}

function scoreCollection(c, q) {
  const hay = [c.title, c.summary, c.slug].join(" ").toLowerCase();
  return hay.includes(q) ? 1 : 0;
}

function highlight(text, query) {
  const escaped = escapeHtml(text);
  if (!query) return escaped;
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return escaped.replace(new RegExp(`(${escapedQuery})`, "gi"), "<mark>$1</mark>");
}

export function SearchView() {
  const allQuery = (new URLSearchParams(location.hash.split("?")[1] || "")).get("q") || "";
  const query = allQuery.toLowerCase().trim();
  const articleResults = query ? articles.filter(a => scoreArticle(a, query)) : articles.slice(0, 6);
  const collectionResults = query ? collections.filter(c => scoreCollection(c, query)) : collections;

  return `
    ${pageHero(pages.search.title, pages.search.intro, "Search")}
    <div class="wrap" style="padding-top:24px">
      <form class="searchbar" onsubmit="return false;" style="max-width:700px">
        <input id="search-input" type="search" placeholder="Search archive content…" value="${escapeHtml(allQuery)}">
        <button id="search-button" type="button">Search</button>
      </form>
    </div>

    <section class="section" style="padding-top:32px">
      <div class="section-head">
        <div><h2>Matching collections</h2><p>${collectionResults.length} results.</p></div>
      </div>
      <div class="grid cols-2" style="border-top:0">
        ${collectionResults.map(c => `
          <article class="card collection-card">
            <div class="collection-emoji">${escapeHtml(c.icon)}</div>
            <h3>${highlight(c.title, query)}</h3>
            <p>${highlight(c.summary, query)}</p>
            <div class="card-meta" style="margin-top:12px">
              <span class="muted">${escapeHtml(c.stats)}</span>
              <a href="#/collection/${c.slug}" style="color:var(--navy);font-size:13px;font-weight:600;text-decoration:underline">View collection →</a>
            </div>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section" style="padding-top:32px">
      <div class="section-head">
        <div><h2>Matching articles</h2><p>${articleResults.length} results.</p></div>
      </div>
      <div class="grid cols-2" style="border-top:0">
        ${articleResults.map(a => `
          <article class="card article-card">
            <div class="article-card-top">
              <span class="pill">${escapeHtml(a.category)}</span>
              <span class="muted">${escapeHtml(a.readingTime)}</span>
            </div>
            <h3 style="margin-top:10px"><a href="#/article/${a.slug}">${highlight(a.title, query)}</a></h3>
            <p>${highlight(a.excerpt, query)}</p>
            <div class="tag-row">${a.tags.map(t => `<span class="tag">${highlight(t, query)}</span>`).join("")}</div>
            <div class="card-meta" style="margin-top:14px">
              <span>${escapeHtml(a.author)}</span>
              <span>${formatDate(a.date)}</span>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

import { pageHero, articleCard, collectionCard } from "../components/helpers.js";
import { pages, collections, articles } from "../data/site.js";

export function DiscoverView() {
  return `
    ${pageHero(pages.discover.title, pages.discover.intro, "Discover")}
    <section class="section">
      <div class="section-head">
        <div><h2>Collections</h2><p>The four top-level archive groups.</p></div>
      </div>
      <div class="grid cols-2">
        ${collections.map(collectionCard).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <div><h2>All articles</h2><p>Browse every article in the archive.</p></div>
      </div>
      <div class="grid cols-2">
        ${articles.map(articleCard).join("")}
      </div>
    </section>
  `;
}

import { pageHero, collectionCard, articleCard } from "../components/helpers.js";
import { collections, articles, pages } from "../data/site.js";

export function DiscoverView() {
  const featured = articles.filter(a => a.featured).slice(0, 4);
  return `
    ${pageHero(pages.discover.title, pages.discover.intro, "Discover")}
    <section class="section">
      <div class="section-head">
        <div><h2>Collections</h2><p>Four top-level archive areas covering history, science, culture, and geography.</p></div>
      </div>
      <div class="grid cols-4" style="margin-top:0;border-top:0">
        ${collections.map(collectionCard).join("")}
      </div>
    </section>
    <section class="section" style="padding-top:40px">
      <div class="section-head">
        <div><h2>Featured articles</h2><p>Selected stories from across the archive.</p></div>
      </div>
      <div class="grid cols-2" style="margin-top:0;border-top:0">
        ${featured.map(articleCard).join("")}
      </div>
    </section>
  `;
}

import { pageHero, articleCard } from "../components/helpers.js";
import { collections, articles } from "../data/site.js";

export function CollectionDetailView(slug) {
  const c = collections.find(x => x.slug === slug);
  const items = articles.filter(a => a.collection === slug);
  if (!c) {
    return `<section class="section"><div class="article"><h1>Collection not found</h1><p>The requested collection does not exist.</p></div></section>`;
  }
  return `
    ${pageHero(c.title, c.summary, "Collection")}
    <section class="section">
      <div class="section-head">
        <div><h2>Articles in this collection</h2><p>${items.length} items found.</p></div>
      </div>
      <div class="grid cols-2" style="border-top:0">
        ${items.map(articleCard).join("")}
      </div>
    </section>
  `;
}

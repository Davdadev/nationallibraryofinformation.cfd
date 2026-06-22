import { pageHero, listItem } from "../components/helpers.js";
import { pages, newsroom } from "../data/site.js";
import { formatDate, escapeHtml } from "../components/helpers.js";

export function NewsView() {
  return `
    ${pageHero(pages.news.title, pages.news.intro, "News")}
    <section class="section">
      <div class="card">
        <h3>Latest updates</h3>
        <div class="list" style="margin-top:14px">
          ${newsroom.map(item => listItem(item.title, item.text, formatDate(item.date))).join("")}
        </div>
      </div>
    </section>
  `;
}

import { pageHero, listItem } from "../components/helpers.js";
import { pages, blogPosts } from "../data/site.js";
import { formatDate } from "../components/helpers.js";

export function BlogView() {
  return `
    ${pageHero(pages.blog.title, pages.blog.intro, "Blog")}
    <section class="section">
      <div class="card">
        <h3>Editorial notes</h3>
        <div class="list" style="margin-top:14px">
          ${blogPosts.map(item => listItem(item.title, item.text, formatDate(item.date))).join("")}
        </div>
      </div>
    </section>
  `;
}

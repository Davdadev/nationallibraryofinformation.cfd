import { pageHero, escapeHtml } from "../components/helpers.js";
import { blogPosts, pages } from "../data/site.js";
import { formatDate } from "../components/helpers.js";

export function BlogView() {
  return `
    ${pageHero(pages.blog.title, pages.blog.intro, "Blog")}
    <section class="section">
      <div class="list" style="border:1px solid var(--rule);margin-top:0">
        ${blogPosts.map(post => `
          <div class="list-item" style="flex-direction:column;gap:6px;padding:20px 24px">
            <span style="font-size:12px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:.05em">${formatDate(post.date)}</span>
            <strong style="font-size:17px;font-family:Georgia,serif">${escapeHtml(post.title)}</strong>
            <p style="margin:0;font-size:14px;color:var(--ink-2);line-height:1.6">${escapeHtml(post.text)}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

import { pageHero } from "../components/helpers.js";
import { articles } from "../data/site.js";
import { formatDate, escapeHtml } from "../components/helpers.js";

export function ArticleDetailView(slug) {
  const article = articles.find(a => a.slug === slug);
  if (!article) {
    return `<section class="section"><div class="article"><h1>Article not found</h1><p>The requested article does not exist.</p></div></section>`;
  }
  return `
    <section class="section">
      <article class="article">
        <p class="eyebrow" style="color:var(--muted);text-transform:uppercase;letter-spacing:.12em">${escapeHtml(article.category)}</p>
        <h1>${escapeHtml(article.title)}</h1>
        <div class="meta">
          <span>${escapeHtml(article.author)}</span>
          <span>•</span>
          <span>${formatDate(article.date)}</span>
          <span>•</span>
          <span>${escapeHtml(article.readingTime)}</span>
        </div>
        <div class="tag-row" style="margin-top:14px">
          ${article.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
        </div>
        <div style="margin-top:20px">
          ${article.content.map(node => node.type === "quote"
            ? `<blockquote class="quote"><p>${escapeHtml(node.text)}</p><cite>${escapeHtml(node.author)}</cite></blockquote>`
            : `<p>${escapeHtml(node.text)}</p>`
          ).join("")}
        </div>
        <p><a href="#/collection/${article.collection}">← Back to collection</a></p>
      </article>
    </section>
  `;
}

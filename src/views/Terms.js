import { pageHero } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function TermsView() {
  return `
    ${pageHero(pages.terms.title, pages.terms.intro, "Policy")}
    <section class="section">
      <div class="article">
        <p>Content on this website is presented for browsing, learning, and reference. Visitors should confirm citation details before publishing or reusing material in formal work.</p>
        <p>By using the site, you agree not to misuse the content, routes, or source files.</p>
      </div>
    </section>
  `;
}

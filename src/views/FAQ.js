import { pageHero, listItem } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function FAQView() {
  return `
    ${pageHero(pages.faq.title, pages.faq.intro, "FAQ")}
    <section class="section">
      <div class="card">
        <div class="list">
          ${[
            listItem("Is the site static?", "Yes. It is built to run on GitHub Pages without a server.", "Yes"),
            listItem("Can I search the archive?", "Yes. Use the search page or the search bar on Home.", "Yes"),
            listItem("Can I link to articles?", "Yes. Every article has its own hash route.", "Yes")
          ].join("")}
        </div>
      </div>
    </section>
  `;
}

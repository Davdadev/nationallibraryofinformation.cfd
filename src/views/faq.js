import { pageHero, listItem } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function FAQView() {
  return `
    ${pageHero(pages.faq.title, pages.faq.intro, "FAQ")}
    <section class="section">
      <div class="section-head"><div><h2>Common questions</h2></div></div>
      <div class="list" style="border:1px solid var(--rule);margin-top:0">
        ${[
          listItem("Is the site static?", "Yes. It is built to run on GitHub Pages without a server or build step.", "General"),
          listItem("Can I search the archive?", "Yes. Use the search page or the search bar on the home page. Results are filtered in real time.", "Search"),
          listItem("Can I link to articles?", "Yes. Every article and collection page has its own hash-based URL that can be bookmarked or shared.", "Links"),
          listItem("How do I cite a document?", "A citation block appears in the sidebar of every article page, formatted for academic use.", "Research"),
          listItem("How can I request physical access?", "Use the contact form to get in touch with the archive team about access to original materials.", "Access")
        ].join("")}
      </div>
    </section>
  `;
}

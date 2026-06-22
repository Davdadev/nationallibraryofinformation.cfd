import { pageHero, card, listItem } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function ResearchView() {
  return `
    ${pageHero(pages.research.title, pages.research.intro, "Research")}
    <section class="section">
      <div class="grid cols-3">
        ${[
          ["Citation guidance", "How to format references and source notes for archive material."],
          ["Request help", "Ask for support finding records, images, or related series."],
          ["Access conditions", "Some items are open, while others require review or context."]
        ].map(([t, x]) => card(t, x, "#/faq")).join("")}
      </div>
    </section>
    <section class="section">
      <div class="card">
        <h3>Common research tasks</h3>
        <div class="list" style="margin-top:14px">
          ${[
            listItem("Find source material", "Search article text, tags, and collection names.", "Search"),
            listItem("Request a copy", "Use contact details for direct assistance.", "Support"),
            listItem("Learn the archive structure", "Collections, articles, and editorial pages.", "Guide")
          ].join("")}
        </div>
      </div>
    </section>
  `;
}

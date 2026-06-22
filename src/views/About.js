import { pageHero, card, listItem } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function AboutView() {
  return `
    ${pageHero(pages.about.title, pages.about.intro, "About")}
    <section class="section">
      <div class="grid cols-3">
        ${[
          ["Mission", "Make public history easy to browse and easy to cite."],
          ["Governance", "Designed as a public-facing static archive."],
          ["Preservation", "Long-term access, clarity, and structure."]
        ].map(([t, x]) => card(t, x, "#/accessibility")).join("")}
      </div>
    </section>
    <section class="section">
      <div class="card">
        <h3>What this site does</h3>
        <div class="list" style="margin-top:14px">
          ${[
            listItem("Shows articles", "Ten article pages are included.", "Content"),
            listItem("Shows collections", "Four top-level archive collections are included.", "Structure"),
            listItem("Supports navigation", "Hash routes keep it GitHub Pages-ready.", "Build")
          ].join("")}
        </div>
      </div>
    </section>
  `;
}

import { pageHero, card } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function EducationView() {
  return `
    ${pageHero(pages.education.title, pages.education.intro, "Education")}
    <section class="section">
      <div class="grid cols-3">
        ${[
          ["Primary", "Short visual packs and guided prompts."],
          ["Secondary", "Source analysis and document comparison."],
          ["Tertiary", "Deeper reading lists and research links."]
        ].map(([t, x]) => card(t, x, "#/learn")).join("")}
      </div>
    </section>
  `;
}

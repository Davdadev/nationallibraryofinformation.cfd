import { pageHero, card } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function LearnView() {
  return `
    ${pageHero(pages.learn.title, pages.learn.intro, "Learn")}
    <section class="section">
      <div class="grid cols-3">
        ${[
          ["Classroom packs", "Short reading sets and guided activities for students."],
          ["Teacher notes", "A clear overview of archive use in class."],
          ["Reading pathways", "Curated starting points for different age groups."]
        ].map(([t, x]) => card(t, x, "#/education")).join("")}
      </div>
    </section>
  `;
}

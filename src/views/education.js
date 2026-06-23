import { pageHero, card } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function EducationView() {
  return `
    ${pageHero(pages.education.title, pages.education.intro, "Education")}
    <section class="section">
      <div class="grid cols-3" style="margin-top:0">
        ${[
          ["Teaching Packs", "Curriculum-aligned resource kits for primary and secondary classrooms."],
          ["Reading Guides", "Structured guides for self-directed and group study of archive materials."],
          ["Learning Pathways", "Thematic journeys through the collection for independent learners."]
        ].map(([t, x]) => card(t, x, "#/contact")).join("")}
      </div>
    </section>
  `;
}

import { pageHero, card } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function LearnView() {
  return `
    ${pageHero(pages.learn.title, pages.learn.intro, "Learn")}
    <section class="section">
      <div class="grid cols-3" style="margin-top:0">
        ${[
          ["Classroom kits", "Curriculum-linked teaching packs for primary and secondary students."],
          ["Reading guides", "Structured guides for approaching archive materials independently."],
          ["Self-directed study", "Thematic pathways through the collection for adult learners."],
          ["Teacher resources", "Lesson plans, assessment activities, and professional notes."],
          ["University access", "Arrangements for supervised student research and citation support."],
          ["Education programme", "Scheduled workshops, webinars, and in-school visits."]
        ].map(([t, x]) => card(t, x, "#/education")).join("")}
      </div>
    </section>
  `;
}

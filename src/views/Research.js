import { pageHero, card } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function ResearchView() {
  return `
    ${pageHero(pages.research.title, pages.research.intro, "Research")}
    <section class="section">
      <div class="grid cols-3" style="margin-top:0">
        ${[
          ["Citation guidance", "How to cite archive materials in academic and professional contexts."],
          ["Reading room access", "Request access to materials not available online through the reading room."],
          ["Reproductions", "Ordering high-resolution reproductions of photographs and documents."],
          ["Research inquiries", "Submit a reference question to the archive team."],
          ["Digitisation requests", "Nominate materials for digitisation priority consideration."],
          ["Copyright clearance", "Guidance on rights and permissions for reproduction and publication."]
        ].map(([t, x]) => card(t, x, "#/contact")).join("")}
      </div>
    </section>
  `;
}

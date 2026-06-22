import { pageHero, listItem } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function PartnersView() {
  return `
    ${pageHero(pages.partners.title, pages.partners.intro, "Partners")}
    <section class="section">
      <div class="card">
        <div class="list">
          ${[
            listItem("Community councils", "Collaborating on language and oral history work.", ""),
            listItem("Universities", "Research access and student projects.", ""),
            listItem("Museums", "Shared exhibitions and curation.", "")
          ].join("")}
        </div>
      </div>
    </section>
  `;
}

import { pageHero, listItem } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function ArchivesView() {
  return `
    ${pageHero(pages.archives.title, pages.archives.intro, "Archives")}
    <section class="section">
      <div class="card">
        <h3>Series overview</h3>
        <div class="list" style="margin-top:14px">
          ${[
            listItem("A series", "Government and administrative records.", "Series"),
            listItem("B series", "Printed material, pamphlets, and ephemera.", "Series"),
            listItem("C series", "Photographs, maps, and visual documents.", "Series")
          ].join("")}
        </div>
      </div>
    </section>
  `;
}

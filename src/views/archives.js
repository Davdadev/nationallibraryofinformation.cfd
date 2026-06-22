import { pageHero, listItem } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function ArchivesView() {
  return `
    ${pageHero(pages.archives.title, pages.archives.intro, "Archives")}
    <section class="section">
      <div class="section-head"><div><h2>Series overview</h2><p>Major record groups held in the archive.</p></div></div>
      <div class="list" style="border:1px solid var(--rule);margin-top:0">
        ${[
          listItem("A series", "Government and administrative records, including correspondence, policy papers, and intercolonial communications.", "Series A"),
          listItem("B series", "Printed material, pamphlets, and ephemera from the colonial and federation periods.", "Series B"),
          listItem("C series", "Photographs, maps, and visual documents including expedition imagery and survey records.", "Series C"),
          listItem("D series", "Oral history recordings, transcripts, and community-contributed documentation.", "Series D")
        ].join("")}
      </div>
    </section>
  `;
}

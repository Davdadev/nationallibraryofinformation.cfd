import { pageHero, listItem } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function CareersView() {
  return `
    ${pageHero(pages.careers.title, pages.careers.intro, "Careers")}
    <section class="section">
      <div class="section-head"><div><h2>Open positions</h2></div></div>
      <div class="list" style="border:1px solid var(--rule);margin-top:0">
        ${[
          listItem("Archivist", "Cataloguing and metadata support across the digitised collections.", "Open"),
          listItem("Digitisation assistant", "Scan quality checks, file handling, and batch processing.", "Open"),
          listItem("Public programs officer", "Events coordination, education outreach, and community engagement.", "Open")
        ].join("")}
      </div>
    </section>
  `;
}

import { pageHero, listItem } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function CareersView() {
  return `
    ${pageHero(pages.careers.title, pages.careers.intro, "Careers")}
    <section class="section">
      <div class="card">
        <div class="list">
          ${[
            listItem("Archivist", "Cataloguing and metadata support.", "Open"),
            listItem("Digitisation assistant", "Scan quality checks and file handling.", "Open"),
            listItem("Public programs officer", "Events and education coordination.", "Open")
          ].join("")}
        </div>
      </div>
    </section>
  `;
}

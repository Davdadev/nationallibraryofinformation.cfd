import { pageHero, card } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function ExhibitionsView() {
  return `
    ${pageHero(pages.exhibitions.title, pages.exhibitions.intro, "Exhibitions")}
    <section class="section">
      <div class="grid cols-3">
        ${[
          ["Cartography", "Maps, routes, and survey drawings from major expeditions."],
          ["Architecture", "Structural sketches, models, and project notes."],
          ["Community memory", "Stories, images, and local history selections."]
        ].map(([t, x]) => card(t, x, "#/discover")).join("")}
      </div>
    </section>
  `;
}

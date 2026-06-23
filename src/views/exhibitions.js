import { pageHero, card } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function ExhibitionsView() {
  return `
    ${pageHero(pages.exhibitions.title, pages.exhibitions.intro, "Exhibitions")}
    <section class="section">
      <div class="grid cols-3" style="margin-top:0">
        ${[
          ["Cartography and place", "Historical maps and survey records tracing how Australia's geography was understood and named over three centuries."],
          ["Architecture of institutions", "Drawings and photographs documenting the buildings that housed colonial and federal government."],
          ["Community archives", "Photographs, letters, and records contributed by families and local organisations across the country."]
        ].map(([t, x]) => card(t, x, "#/discover")).join("")}
      </div>
    </section>
  `;
}

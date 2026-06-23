import { pageHero, card } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function PartnersView() {
  return `
    ${pageHero(pages.partners.title, pages.partners.intro, "Partners")}
    <section class="section">
      <div class="grid cols-3" style="margin-top:0">
        ${[
          ["National Archives of Australia", "Collaborative digitisation and metadata standards across federal holdings."],
          ["State Libraries Network", "Shared infrastructure and access agreements with all state and territory libraries."],
          ["University Research Councils", "Joint research programmes and academic access partnerships."],
          ["First Nations Cultural Authorities", "Community-led protocols for Indigenous collection management and access."],
          ["Museum Victoria", "Cross-institutional loans and shared digitisation of natural history records."],
          ["CSIRO Data Access Programme", "Scientific dataset integration and long-term preservation agreements."]
        ].map(([t, x]) => card(t, x, "#/contact")).join("")}
      </div>
    </section>
  `;
}

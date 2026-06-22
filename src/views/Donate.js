import { pageHero, card } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function DonateView() {
  return `
    ${pageHero(pages.donate.title, pages.donate.intro, "Support")}
    <section class="section">
      <div class="grid cols-3" style="margin-top:0">
        ${[
          ["Preservation", "Support digitisation and conservation work across the collection."],
          ["Access", "Help keep materials publicly available without restriction."],
          ["Community", "Back projects shaped with First Nations and community partners."]
        ].map(([t, x]) => card(t, x, "#/contact")).join("")}
      </div>
    </section>
  `;
}

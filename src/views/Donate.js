import { pageHero, card } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function DonateView() {
  return `
    ${pageHero(pages.donate.title, pages.donate.intro, "Support")}
    <section class="section">
      <div class="grid cols-3">
        ${[
          ["Preservation", "Support digitisation and conservation work."],
          ["Access", "Help keep materials publicly available."],
          ["Community", "Back projects shaped with community partners."]
        ].map(([t, x]) => card(t, x, "#/contact")).join("")}
      </div>
    </section>
  `;
}

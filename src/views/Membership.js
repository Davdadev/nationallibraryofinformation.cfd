import { pageHero, card } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function MembershipView() {
  return `
    ${pageHero(pages.membership.title, pages.membership.intro, "Membership")}
    <section class="section">
      <div class="grid cols-3" style="margin-top:0">
        ${[
          ["Supporter", "Annual membership supporting open access and preservation programmes."],
          ["Researcher", "Extended access to restricted collections and reading room priority booking."],
          ["Education Partner", "Institutional membership for schools and universities with curriculum resources."]
        ].map(([t, x]) => card(t, x, "#/contact")).join("")}
      </div>
    </section>
  `;
}

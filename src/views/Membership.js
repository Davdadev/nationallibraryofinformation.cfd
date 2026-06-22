import { pageHero, card } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function MembershipView() {
  return `
    ${pageHero(pages.membership.title, pages.membership.intro, "Membership")}
    <section class="section">
      <div class="grid cols-2">
        ${[
          ["Supporter", "Updates, newsletters, and event invitations."],
          ["Research partner", "Priority invitations and archive briefings."],
        ].map(([t, x]) => card(t, x, "#/contact")).join("")}
      </div>
    </section>
  `;
}

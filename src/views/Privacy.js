import { pageHero } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function PrivacyView() {
  return `
    ${pageHero(pages.privacy.title, pages.privacy.intro, "Policy")}
    <section class="section">
      <div class="article">
        <p>We only collect the information needed to operate the website. Search terms entered on the site are handled in the browser for display purposes and are not stored by this static version.</p>
        <p>Any future analytics or contact forms should be added with clear consent and a published retention policy.</p>
      </div>
    </section>
  `;
}

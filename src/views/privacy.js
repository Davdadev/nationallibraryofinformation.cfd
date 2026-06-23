import { pageHero } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function PrivacyView() {
  return `
    ${pageHero(pages.privacy.title, pages.privacy.intro, "Legal")}
    <section class="section">
      <div class="article">
        <h2>What we collect</h2>
        <p>This site collects minimal analytics data including page views and referrer information. No personally identifiable information is collected unless you submit a contact form.</p>
        <h2>How we use it</h2>
        <p>Analytics data is used solely to understand how the collection is being used and to prioritise digitisation and accessibility improvements. It is not shared with third parties.</p>
        <h2>Contact forms</h2>
        <p>Information submitted through contact or enquiry forms is used only to respond to your request and is not retained beyond 12 months.</p>
        <h2>Cookies</h2>
        <p>This site does not use tracking cookies. Session state is stored locally in your browser and is not transmitted to our servers.</p>
        <h2>Contact</h2>
        <p>For privacy enquiries, contact us via the <a href="#/contact" style="color:var(--navy)">contact page</a>.</p>
      </div>
    </section>
  `;
}

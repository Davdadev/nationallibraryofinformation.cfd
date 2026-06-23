import { pageHero } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function TermsView() {
  return `
    ${pageHero(pages.terms.title, pages.terms.intro, "Legal")}
    <section class="section">
      <div class="article">
        <h2>Use of materials</h2>
        <p>Materials published on this site are made available for research, education, and personal use. Reproduction for commercial purposes requires written permission from the archive.</p>
        <h2>Attribution</h2>
        <p>When citing or reproducing materials, users must acknowledge the National Library of Information as the source and include any copyright notices accompanying individual items.</p>
        <h2>Accuracy</h2>
        <p>The archive makes every effort to ensure the accuracy of descriptive metadata and transcriptions. Users who identify errors are encouraged to notify us via the contact page.</p>
        <h2>Linked content</h2>
        <p>The archive is not responsible for the content of external websites linked from this site. Links are provided for convenience and do not imply endorsement.</p>
        <h2>Changes</h2>
        <p>These terms may be updated periodically. Continued use of the site after changes are posted constitutes acceptance of the revised terms.</p>
      </div>
    </section>
  `;
}

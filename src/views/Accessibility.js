import { pageHero } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function AccessibilityView() {
  return `
    ${pageHero(pages.accessibility.title, pages.accessibility.intro, "Accessibility")}
    <section class="section">
      <div class="article">
        <p>The layout uses strong contrast, clear headings, large touch targets, and responsive spacing. It is designed to remain readable on mobile and desktop screens.</p>
        <p>Future improvements can include keyboard-focus refinements, skip links, and reduced-motion preferences if needed.</p>
      </div>
    </section>
  `;
}

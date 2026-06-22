import { pageHero } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function AccessibilityView() {
  return `
    ${pageHero(pages.accessibility.title, pages.accessibility.intro, "Accessibility")}
    <section class="section">
      <div class="article" style="border-left:4px solid var(--red)">
        <p>The layout uses strong contrast ratios above 4.5:1 for all body text, clear heading hierarchy, large touch targets, and responsive spacing. It is designed to remain readable on mobile and desktop screens without JavaScript-dependent layout.</p>
        <p>The site uses semantic HTML throughout: landmark regions, ordered heading levels, and descriptive link text. Navigation is accessible by keyboard. All interactive elements have visible focus states.</p>
        <p>Future improvements will include a skip-to-content link, reduced-motion preferences for any animation added, and systematic testing against WCAG 2.1 Level AA criteria.</p>
        <p>To report an accessibility issue, use the <a href="#/contact" style="color:var(--navy)">contact page</a>.</p>
      </div>
    </section>
  `;
}

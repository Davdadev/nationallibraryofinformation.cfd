import { pageHero, listItem } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function MediaView() {
  return `
    ${pageHero(pages.media.title, pages.media.intro, "Media")}
    <section class="section">
      <div class="card">
        <div class="list">
          ${[
            listItem("Press inquiries", "Email the communications team for official statements.", "Media"),
            listItem("Image requests", "Ask about reproduction and crediting guidance.", "Media"),
            listItem("Downloads", "Logos and standard site imagery for reporting.", "Media")
          ].join("")}
        </div>
      </div>
    </section>
  `;
}

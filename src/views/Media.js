import { pageHero, listItem } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function MediaView() {
  return `
    ${pageHero(pages.media.title, pages.media.intro, "Media")}
    <section class="section">
      <div class="section-head"><div><h2>Media resources</h2></div></div>
      <div class="list" style="border:1px solid var(--rule);margin-top:0">
        ${[
          listItem("Press inquiries", "Email the communications team for official statements and background briefings.", "Media"),
          listItem("Image requests", "Ask about reproduction, crediting, and licensing guidance for archive imagery.", "Images"),
          listItem("Downloads", "Logos, standard wordmarks, and approved imagery for reporting.", "Assets")
        ].join("")}
      </div>
    </section>
  `;
}

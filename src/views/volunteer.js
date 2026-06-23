import { pageHero, card } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function VolunteerView() {
  return `
    ${pageHero(pages.volunteer.title, pages.volunteer.intro, "Volunteer")}
    <section class="section">
      <div class="grid cols-3" style="margin-top:0">
        ${[
          ["Digitisation", "Assist with scanning, image processing, and quality checking of physical materials."],
          ["Transcription", "Help convert handwritten and typed documents into searchable text."],
          ["Events", "Support public programmes, talks, and community engagement activities."]
        ].map(([t, x]) => card(t, x, "#/contact")).join("")}
      </div>
    </section>
  `;
}

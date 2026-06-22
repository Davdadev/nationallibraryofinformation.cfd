import { pageHero, card } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function VolunteerView() {
  return `
    ${pageHero(pages.volunteer.title, pages.volunteer.intro, "Volunteer")}
    <section class="section">
      <div class="grid cols-3">
        ${[
          ["Transcription", "Help convert handwritten material into searchable text."],
          ["Events", "Support public talks and open days."],
          ["Digitisation", "Assist with scanning and file checks."]
        ].map(([t, x]) => card(t, x, "#/contact")).join("")}
      </div>
    </section>
  `;
}

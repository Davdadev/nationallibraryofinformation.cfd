import { pageHero, listItem } from "../components/helpers.js";
import { pages, eventList } from "../data/site.js";
import { formatDate } from "../components/helpers.js";

export function EventsView() {
  return `
    ${pageHero(pages.events.title, pages.events.intro, "Events")}
    <section class="section">
      <div class="card">
        <h3>Upcoming programs</h3>
        <div class="list" style="margin-top:14px">
          ${eventList.map(item => listItem(item.title, item.text, formatDate(item.date))).join("")}
        </div>
      </div>
    </section>
  `;
}

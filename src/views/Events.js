import { pageHero, listItem } from "../components/helpers.js";
import { pages, eventList } from "../data/site.js";
import { formatDate, escapeHtml } from "../components/helpers.js";

export function EventsView() {
  const sorted = [...eventList].sort((a, b) => a.date.localeCompare(b.date));
  const calendarCards = sorted.map((item) => {
    const date = new Date(item.date);
    const month = new Intl.DateTimeFormat("en-AU", { month: "short" }).format(date);
    const day = new Intl.DateTimeFormat("en-AU", { day: "2-digit" }).format(date);
    return `
      <article class="calendar-card">
        <div class="calendar-date"><span>${month}</span><strong>${day}</strong></div>
        <div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </div>
      </article>
    `;
  }).join("");

  return `
    ${pageHero(pages.events.title, pages.events.intro, "Events")}
    <section class="section">
      <div class="card">
        <h3>Calendar</h3>
        <div class="calendar-grid" style="margin-top:14px">
          ${calendarCards}
        </div>
      </div>
    </section>
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

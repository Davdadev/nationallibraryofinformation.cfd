import { pageHero, escapeHtml } from "../components/helpers.js";
import { eventList, pages } from "../data/site.js";
import { formatDate } from "../components/helpers.js";

export function EventsView() {
  return `
    ${pageHero(pages.events.title, pages.events.intro, "Events")}
    <section class="section">
      <div class="list" style="border:1px solid var(--rule);margin-top:0">
        ${eventList.map(event => `
          <div class="list-item" style="flex-direction:column;gap:6px;padding:20px 24px">
            <span style="font-size:12px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:.05em">${formatDate(event.date)}</span>
            <strong style="font-size:17px;font-family:Georgia,serif">${escapeHtml(event.title)}</strong>
            <p style="margin:0;font-size:14px;color:var(--ink-2);line-height:1.6">${escapeHtml(event.text)}</p>
            <a href="#/contact" style="font-size:13px;color:var(--navy);font-weight:600;margin-top:4px">Register →</a>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

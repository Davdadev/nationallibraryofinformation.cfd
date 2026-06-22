import { pageHero } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function ContactView() {
  return `
    ${pageHero(pages.contact.title, pages.contact.intro, "Contact")}
    <section class="section">
      <div class="grid cols-2">
        <div class="card">
          <h3>Contact details</h3>
          <p>Email: info@nli.example</p>
          <p>Phone: +61 2 0000 0000</p>
          <p>Hours: Monday–Friday, 9am–5pm</p>
        </div>
        <div class="card">
          <h3>Send a message</h3>
          <form id="contact-form" novalidate>
            <input id="contact-name" class="input" placeholder="Your name" style="margin-bottom:10px" required>
            <input id="contact-email" class="input" type="email" placeholder="Email address" style="margin-bottom:10px" required>
            <textarea id="contact-message" class="input" rows="5" placeholder="Message" required></textarea>
            <div style="margin-top:12px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">
              <button class="button button-primary" type="submit">Send message</button>
              <p id="contact-status" class="muted" style="margin:0" aria-live="polite"></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  `;
}

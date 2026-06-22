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
          <form onsubmit="return false">
            <input class="input" placeholder="Your name" style="margin-bottom:10px">
            <input class="input" placeholder="Email address" style="margin-bottom:10px">
            <textarea class="input" rows="5" placeholder="Message"></textarea>
          </form>
        </div>
      </div>
    </section>
  `;
}

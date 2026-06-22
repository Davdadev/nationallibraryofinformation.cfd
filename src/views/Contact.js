import { pageHero } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function ContactView() {
  return `
    ${pageHero(pages.contact.title, pages.contact.intro, "Contact")}
    <section class="section">
      <div style="display:grid;grid-template-columns:1fr 300px;gap:1px;background:var(--rule);border:1px solid var(--rule)">
        <div class="article">
          <h2>Send an enquiry</h2>
          <form onsubmit="return false;" style="display:flex;flex-direction:column;gap:16px;margin-top:8px">
            <label style="font-size:14px;font-weight:600;display:flex;flex-direction:column;gap:6px">
              Name
              <input type="text" placeholder="Your name" style="padding:10px 12px;border:1px solid var(--rule);font-size:14px;font-family:inherit;border-radius:2px">
            </label>
            <label style="font-size:14px;font-weight:600;display:flex;flex-direction:column;gap:6px">
              Email
              <input type="email" placeholder="your@email.com" style="padding:10px 12px;border:1px solid var(--rule);font-size:14px;font-family:inherit;border-radius:2px">
            </label>
            <label style="font-size:14px;font-weight:600;display:flex;flex-direction:column;gap:6px">
              Subject
              <select style="padding:10px 12px;border:1px solid var(--rule);font-size:14px;font-family:inherit;border-radius:2px;background:#fff">
                <option>General enquiry</option>
                <option>Research assistance</option>
                <option>Reproduction request</option>
                <option>Partnership enquiry</option>
                <option>Media enquiry</option>
                <option>Donation or membership</option>
              </select>
            </label>
            <label style="font-size:14px;font-weight:600;display:flex;flex-direction:column;gap:6px">
              Message
              <textarea rows="6" placeholder="Your message…" style="padding:10px 12px;border:1px solid var(--rule);font-size:14px;font-family:inherit;border-radius:2px;resize:vertical"></textarea>
            </label>
            <div>
              <button type="submit" class="button button-primary">Send message</button>
            </div>
          </form>
        </div>
        <aside class="sidebar" style="background:var(--surface)">
          <div class="panel">
            <h3>Other ways to reach us</h3>
            <div style="font-size:14px;color:var(--ink-2);line-height:1.7">
              <p style="margin-bottom:10px"><strong>Reading room</strong><br>By appointment. Submit a request via this form.</p>
              <p style="margin-bottom:10px"><strong>Media enquiries</strong><br>Select "Media enquiry" in the subject field for press requests.</p>
              <p style="margin-bottom:0"><strong>Response time</strong><br>We aim to respond within 3 business days.</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  `;
}

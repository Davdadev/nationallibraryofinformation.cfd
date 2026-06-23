import { pageHero, card } from "../components/helpers.js";
import { pages } from "../data/site.js";

export function AboutView() {
  return `
    ${pageHero(pages.about.title, pages.about.intro, "About")}
    <section class="section">
      <div class="article" style="max-width:720px">
        <h2>Mission</h2>
        <p>The National Library of Information exists to make primary source material freely accessible to researchers, students, and the public. Our collections span Australian history, science, culture, and geography, assembled from public records, community contributions, and institutional partnerships.</p>
        <h2>Governance</h2>
        <p>The archive is governed by an independent board drawn from the research, education, and cultural sectors. An advisory panel of subject specialists guides collection priorities and editorial standards. Annual reports and board minutes are available through the research services page.</p>
        <h2>Preservation</h2>
        <p>Physical materials are stored in climate-controlled facilities. Digital files are maintained in redundant off-site storage with integrity verification. Preservation standards follow the guidelines of the National Archives of Australia and the International Council on Archives.</p>
        <h2>Partnerships</h2>
        <p>The archive works with state libraries, universities, First Nations cultural authorities, and community organisations. Partnership enquiries can be directed through the <a href="#/contact" style="color:var(--navy)">contact page</a>.</p>
      </div>
    </section>
    <section class="section" style="padding-top:0">
      <div class="grid cols-3" style="margin-top:0">
        ${[
          ["Contact us", "Send an enquiry to the archive team.", "#/contact"],
          ["Partners", "Institutions and collaborators we work with.", "#/partners"],
          ["Careers", "Current vacancies and how to apply.", "#/careers"]
        ].map(([t, x, href]) => card(t, x, href)).join("")}
      </div>
    </section>
  `;
}

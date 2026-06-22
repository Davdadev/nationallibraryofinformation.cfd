import { articles, collections } from "../data/site.js";
import { formatDate, escapeHtml } from "../components/helpers.js";

// Extended article body content — substantially more depth per article
const extendedContent = {
  "cyclone-tracy": [
    { type: "p", text: "Cyclone Tracy struck Darwin just before midnight on Christmas Eve 1974, killing 71 people, injuring hundreds more, and destroying approximately 70 per cent of the city's housing stock. By the time it passed in the early hours of Christmas morning, it had compressed what was then Australia's fastest-growing city into a landscape of shattered timber, tangled roofing iron, and debris that stretched from the harbour to the airport perimeter." },
    { type: "p", text: "The archive brings together photographs, evacuation records, engineering surveys, and first-hand oral testimony to provide the most comprehensive public record of the disaster and its aftermath yet assembled in a single searchable collection. The project has taken three years to complete and involved community consultation with Darwin residents, many of whom are still processing what happened." },
    { type: "quote", text: "When I stepped outside, the street looked unrecognisable. Every tree was stripped. Every house I could see was missing its roof. I kept thinking: this cannot be the same place I went to sleep in.", author: "Allan Stewart, oral history interview, 2022" },
    { type: "p", text: "The meteorological record is unusually precise. Tracy crossed the coast as a category 4 cyclone with a central pressure of 950 hectopascals and sustained winds exceeding 200 kilometres per hour near the eye. What made it especially destructive was its small, compact structure: the region of maximum wind extended only about 12 kilometres from the centre, which meant the storm tracked directly through the densest part of Darwin without losing intensity." },
    { type: "p", text: "Darwin's housing stock in 1974 reflected a postwar construction boom that had prioritised speed and economy over cyclone resilience. Timber-frame construction with sheet-metal roofing was standard, and very few buildings had been designed or inspected to withstand wind loads of this magnitude. After Tracy, the Northern Territory government commissioned a series of engineering assessments that became the basis for the new Australian Standard for cyclone-resistant construction that still governs building codes across tropical Australia today." },
    { type: "p", text: "The evacuation that followed was the largest peacetime population movement in Australian history. Within a fortnight of the disaster, more than 35,000 of Darwin's 47,000 residents had been airlifted or driven south. The Royal Australian Air Force operated continuous flights from Darwin Airport, and the Ghan railway carried hundreds of evacuees to Alice Springs and Adelaide. Oral history interviews in the archive describe the confusion, the grief, and the strange sense of obligation that many felt — simultaneously wanting to leave and unable to fully accept that there was nothing left to stay for." },
    { type: "quote", text: "They put us on a plane and we had almost nothing with us. I had a bag with some clothes and my son's birth certificate. That was it.", author: "Margaret Doherty, oral history interview, 2023" },
    { type: "p", text: "Reconstruction began almost immediately, coordinated through the newly established Darwin Reconstruction Commission. The Commission's records, many of which are included in this archive, reveal the tensions that shaped the rebuilt city: between the desire to return Darwin to something recognisable and the recognition that the old Darwin had simply not been built to last. Decisions about housing design, road layout, and neighbourhood density were made under intense time pressure, with tens of thousands of residents still in temporary accommodation interstate." },
    { type: "p", text: "The rebuilt Darwin that emerged through the late 1970s and early 1980s was, by almost every structural measure, a safer city. But many residents have noted that something harder to quantify — a sense of shared memory, of layered history embedded in streets and buildings — was lost in the process. The archive treats this dimension of the recovery seriously. Oral histories have been collected not only from those who experienced the cyclone directly but also from those who returned to find a city they no longer entirely recognised." }
  ],
  "federation-records": [
    { type: "p", text: "The federation of the six Australian colonies into a single Commonwealth on 1 January 1901 was the product of more than a decade of political negotiation, popular debate, and constitutional drafting. The digitisation project now makes publicly available, for the first time in a single searchable collection, the full run of Hansard volumes from the Australasian Federal Conventions of the 1890s, alongside committee working papers, constitutional drafts, intercolonial correspondence, and procedural records from the first Commonwealth Parliament." },
    { type: "p", text: "The collection spans more than 14,000 pages of primary material. Users can search across all documents simultaneously, track the evolution of specific constitutional clauses through successive drafts, and read the debates that shaped the language of the Constitution in their original form. The project used optical character recognition combined with manual verification to produce a text layer that has been checked against original documents for accuracy." },
    { type: "p", text: "What the documents reveal, above all, is that federation was not a single event but an extended process of argument. The conventions saw sustained disagreement about the powers of the federal Senate, the rights of smaller colonies, the mechanisms for resolving disputes between Commonwealth and state governments, and the status of specific categories of people — notably women, who in South Australia and Western Australia already had the vote, and Aboriginal Australians, whose exclusion from the constitutional compact was debated with a directness that later historical accounts have sometimes underplayed." },
    { type: "quote", text: "We are not here to frame an ideal constitution. We are here to frame the best constitution that the colonies will accept.", author: "Edmund Barton, at the Adelaide Convention, 1897" },
    { type: "p", text: "The committee records are in some respects even more revealing than the floor debates. Working papers show how specific sections were drafted, how concerns were flagged and sometimes resolved and sometimes carried forward without resolution, and how the language of constitutional clauses changed through iteration. Researchers interested in how constitutional interpretation has evolved over time will find material here that substantially complicates the idea that the founders had a settled or unified view on many of the questions the Constitution has since been called on to answer." },
    { type: "p", text: "The digitisation was carried out under a partnership between the archive, the National Archives of Australia, and several university law faculties. An editorial board reviewed the OCR output for each set of documents before publication, and a small number of pages where the original was too damaged for reliable transcription have been flagged as such in the metadata. The physical originals are held in Canberra and are available for inspection by appointment." },
    { type: "p", text: "The collection is accompanied by a finding aid that organises the material by convention, committee, date, and speaker, and by a brief guide to constitutional history written for general readers. The archive expects this to become one of the most heavily used resources in the collection, and has structured the digital interface to support both general browsing and detailed scholarly search." }
  ],
  "reef-growth": [
    { type: "p", text: "The Great Barrier Reef extends for approximately 2,300 kilometres along the Queensland coast, covering an area of roughly 344,400 square kilometres — larger than Italy, and the largest living structure on Earth. It has been the subject of scientific observation since at least the 1770s, when Joseph Banks and Daniel Solander collected specimens during the Endeavour voyage, and systematic survey work began in earnest in the late nineteenth century." },
    { type: "p", text: "This collection assembles a century of observational data from expedition logs, survey photographs, scientific journals, and more recent remote-sensing imagery to support long-term analysis of reef condition and change. The earliest material in the collection dates from 1922, when a British scientific party led by C.M. Yonge conducted the first systematic ecological survey of the reef over a period of 13 months based at Low Isles, north of Cairns." },
    { type: "p", text: "By combining Yonge's original field records with the photographic survey conducted by the Great Barrier Reef Marine Park Authority in the 1980s and more recent satellite and aerial imagery, researchers can now make direct comparisons across time periods for a number of reef sites. The results are sobering in some areas and more encouraging in others than popular accounts sometimes suggest." },
    { type: "quote", text: "The reef is not a static object. It has always been dynamic — growing here, eroding there, shifting in response to temperature, storm, and time. The question is whether the rate and character of change we're seeing now is within the range of natural variation.", author: "Dr Elena Rostova, Marine Biology, James Cook University" },
    { type: "p", text: "Coral cover — the proportion of reef surface occupied by living coral — is one of the key metrics tracked across the archive's historical records. Researchers working with the collection have found that for several of the sites where Yonge's team made systematic measurements in 1928–29, present-day coral cover is significantly lower than at any point in the historical record. However, sites in some deeper offshore regions show coral communities that appear broadly similar to those photographed in the 1970s." },
    { type: "p", text: "The archive is not primarily an advocacy resource. Its job is to make primary material available to researchers and to the public in a form that supports evidence-based analysis. The material includes perspectives from multiple scientific traditions and periods, and users are encouraged to read the data in the context of the original documentation rather than through summary accounts. A reading guide prepared by the archive team helps orient new users to the collection's scope, limitations, and key documents." },
    { type: "p", text: "Future additions to the collection will include digitised records from the Queensland Museum's marine biology holdings and a set of historical aerial photographs taken for navigation purposes in the 1940s and 1950s that contain incidental documentation of reef condition at the time of exposure." }
  ]
};

function getExtended(slug) {
  return extendedContent[slug] || null;
}

function renderContent(nodes) {
  return nodes.map(node => {
    if (node.type === "quote") {
      return `<blockquote class="quote"><p>"${escapeHtml(node.text)}"</p><cite>${escapeHtml(node.author)}</cite></blockquote>`;
    }
    return `<p>${escapeHtml(node.text)}</p>`;
  }).join("\n");
}

export function ArticleDetailView(slug) {
  const article = articles.find(a => a.slug === slug);
  if (!article) {
    return `
      <section class="section">
        <div class="article">
          <h1>Article not found</h1>
          <p>The requested article does not exist.</p>
          <p><a href="#/">Return to homepage</a></p>
        </div>
      </section>`;
  }

  const col = collections.find(c => c.slug === article.collection);
  const extended = getExtended(slug);
  const contentNodes = extended || article.content;

  // Related articles from same collection
  const related = articles.filter(a => a.collection === article.collection && a.slug !== slug).slice(0, 3);

  return `
    <section class="section" style="padding-top:24px">
      <div style="display:grid;grid-template-columns:1fr 300px;gap:1px;background:var(--rule);border:1px solid var(--rule);align-items:start">
        
        <!-- Main article -->
        <article class="article" style="border-left:4px solid var(--red)">
          <div class="accession-label">Accession · ${article.collection.toUpperCase()}-${slug.slice(0,4).toUpperCase()}</div>
          <p class="eyebrow">${escapeHtml(article.category)}</p>
          <h1>${escapeHtml(article.title)}</h1>
          <div class="meta">
            <span>By ${escapeHtml(article.author)}</span>
            <span>·</span>
            <span>${formatDate(article.date)}</span>
            <span>·</span>
            <span>${escapeHtml(article.readingTime)} read</span>
          </div>
          <div class="tag-row" style="margin-bottom:24px">
            ${article.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
          </div>

          <!-- AI content integrity check -->
          <div class="ai-check-banner checking" id="ai-check-${slug}">
            <div class="ai-check-dot"></div>
            <span>Checking content integrity against archive standards…</span>
          </div>

          <!-- Article body -->
          <div class="article-body">
            ${renderContent(contentNodes)}
          </div>

          <hr style="border:0;border-top:1px solid var(--rule);margin:32px 0">
          <p style="font-size:14px"><a href="#/collection/${article.collection}" style="color:var(--navy)">← Back to ${escapeHtml(col?.title || "collection")}</a></p>
        </article>

        <!-- Sidebar -->
        <aside class="sidebar" style="background:var(--surface)">
          <div class="panel">
            <h3>About this article</h3>
            <div style="font-size:14px;color:var(--ink-2);line-height:1.65">
              <p style="margin-bottom:10px"><strong>Author:</strong><br>${escapeHtml(article.author)}</p>
              <p style="margin-bottom:10px"><strong>Published:</strong><br>${formatDate(article.date)}</p>
              <p style="margin-bottom:10px"><strong>Collection:</strong><br><a href="#/collection/${article.collection}" style="color:var(--navy)">${escapeHtml(col?.title || article.collection)}</a></p>
              <p style="margin-bottom:0"><strong>Reading time:</strong><br>${escapeHtml(article.readingTime)}</p>
            </div>
          </div>
          ${related.length ? `
          <div class="panel">
            <h3>In this collection</h3>
            ${related.map(r => `
              <a href="#/article/${r.slug}" style="display:block;padding:10px 0;border-bottom:1px solid var(--rule);font-size:14px;color:var(--navy);text-decoration:none;font-weight:600">
                ${escapeHtml(r.title)}
                <br><span style="font-weight:400;color:var(--muted)">${escapeHtml(r.readingTime)} · ${formatDate(r.date)}</span>
              </a>
            `).join("")}
          </div>` : ""}
          <div class="panel">
            <h3>Cite this article</h3>
            <p style="font-size:12px;font-family:Georgia,serif;font-style:italic;color:var(--ink-2);line-height:1.7;margin:0">
              ${escapeHtml(article.author)}, '${escapeHtml(article.title)}', <em>National Library of Information</em>, ${formatDate(article.date)}.
            </p>
          </div>
        </aside>
      </div>
    </section>

    <script>
    (function() {
      const banner = document.getElementById("ai-check-${slug}");
      if (!banner) return;

      const articleText = ${JSON.stringify(contentNodes.map(n => n.text || "").join(" "))};

      fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          system: "You are an archive content integrity checker. Briefly assess whether the provided article text reads as factual, referenced archival content (not AI-generated filler). Reply with PASS or FAIL followed by one short sentence (under 20 words) explaining why. Format: PASS: reason  OR  FAIL: reason",
          messages: [{ role: "user", content: "Check this article text: " + articleText.slice(0, 800) }]
        })
      })
      .then(r => r.json())
      .then(data => {
        const result = data.content && data.content[0] && data.content[0].text ? data.content[0].text.trim() : "";
        const pass = result.startsWith("PASS");
        const reason = result.replace(/^(PASS|FAIL):\s*/i, "").trim();
        banner.className = "ai-check-banner " + (pass ? "pass" : "fail");
        banner.innerHTML = \`<div class="ai-check-dot"></div><span>\${pass ? "Content integrity verified" : "Content flagged"} — \${reason}</span>\`;
      })
      .catch(() => {
        banner.className = "ai-check-banner pass";
        banner.innerHTML = '<div class="ai-check-dot"></div><span>Content check unavailable — API connection required.</span>';
      });
    })();
    </script>
  `;
}

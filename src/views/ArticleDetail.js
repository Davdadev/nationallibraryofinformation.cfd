import { articles, collections } from "../data/site.js";
import { formatDate, escapeHtml } from "../components/helpers.js";

const extendedContent = {
  "cyclone-tracy": [
    { type: "p", text: "Cyclone Tracy struck Darwin just before midnight on Christmas Eve 1974, killing 71 people, injuring hundreds more, and destroying approximately 70 per cent of the city's housing stock. By the time it passed in the early hours of Christmas morning, it had compressed what was then Australia's fastest-growing city into a landscape of shattered timber, tangled roofing iron, and debris that stretched from the harbour to the airport perimeter. Nothing in the city's brief modern history had prepared its residents — many of them recent arrivals drawn north by the postwar boom — for destruction of this scale or speed." },
    { type: "p", text: "The archive brings together photographs, evacuation records, engineering surveys, meteorological instruments readings, hospital admission logs, and first-hand oral testimony to provide the most comprehensive public record of the disaster and its aftermath yet assembled in a single searchable collection. The project has taken three years to complete and involved sustained community consultation with Darwin residents across multiple rounds of review, many of whom are still processing what happened half a century later. Material has been contributed by families, former government employees, journalists, nurses, and emergency personnel who responded in the hours and days immediately after the storm." },
    { type: "quote", text: "When I stepped outside, the street looked unrecognisable. Every tree was stripped. Every house I could see was missing its roof. I kept thinking: this cannot be the same place I went to sleep in.", author: "Allan Stewart, oral history interview, 2022" },
    { type: "p", text: "The meteorological record is unusually precise. Tracy crossed the coast as a category 4 cyclone with a central pressure of 950 hectopascals and sustained winds exceeding 200 kilometres per hour near the eye. What made it especially destructive was its small, compact structure: the region of maximum wind extended only about 12 kilometres from the centre, which meant the storm tracked directly through the densest part of Darwin without losing intensity. The Bureau of Meteorology's Darwin station recorded a peak wind gust of 217 kilometres per hour before its instruments were destroyed. A second anemometer at the RAAF base recorded 240 kilometres per hour before it too failed. The full peak is therefore unknown." },
    { type: "p", text: "The cyclone had been tracked for several days before it made landfall, but its erratic path and rapid intensification made precise forecasting impossible with the technology available in 1974. It had earlier appeared likely to veer away from the coast, and some residents had gone to bed on Christmas Eve without serious concern. The warning that was ultimately broadcast, while technically accurate, reached many households too late for meaningful preparation. Post-disaster reviews of the warning system informed major changes to cyclone communication protocols across northern Australia in the years that followed." },
    { type: "p", text: "Darwin's housing stock in 1974 reflected a postwar construction boom that had prioritised speed and economy over cyclone resilience. Timber-frame construction with sheet-metal roofing was standard, and very few buildings had been designed or inspected to withstand wind loads of this magnitude. The concrete government housing blocks fared marginally better, though they were far from undamaged. After Tracy, the Northern Territory government commissioned a series of engineering assessments that became the basis for the new Australian Standard for cyclone-resistant construction — AS 1170, revised in 1975 — that still governs building codes across tropical Australia today. Engineers who contributed to those assessments have described Tracy as a field test that no laboratory could have replicated." },
    { type: "quote", text: "The engineering failures were not surprising once you looked closely. Roofs were attached to wall frames with wire ties that simply weren't adequate. It wasn't a question of the winds exceeding design limits — it was that there were no real design limits to exceed.", author: "R.H. Leicester, CSIRO Division of Building Research, testimony to the Darwin Reconstruction Commission, 1975" },
    { type: "p", text: "The human cost of the disaster extended well beyond the immediate death toll. Hundreds of people were admitted to Darwin Hospital with injuries ranging from lacerations to crush wounds sustained when roofs and walls collapsed. The hospital itself was partially damaged, and medical staff worked through the night and into Christmas Day in conditions of considerable difficulty. Blood supplies ran low within hours. Aircraft were dispatched from the south carrying emergency medical equipment, and a field hospital was established at the airport to handle overflow. The archive holds the hospital's admission register for 25 December 1974, which records patient names, injuries, and treatment in handwritten entries that bear the unmistakable mark of exhaustion." },
    { type: "p", text: "The evacuation that followed was the largest peacetime population movement in Australian history. Within a fortnight of the disaster, more than 35,000 of Darwin's 47,000 residents had been airlifted or driven south. The Royal Australian Air Force operated continuous flights from Darwin Airport — by some accounts the busiest single runway in the world for a period of several days — and the Ghan railway carried hundreds of evacuees to Alice Springs and Adelaide. The Stuart Highway was choked with vehicles carrying those who chose to drive, some of them covering the 1,500 kilometres to Alice Springs in a single stretch, sleeping in their cars at petrol stations. Oral history interviews in the archive describe the confusion, the grief, and the strange sense of obligation that many felt — simultaneously wanting to leave and unable to fully accept that there was nothing left to stay for." },
    { type: "quote", text: "They put us on a plane and we had almost nothing with us. I had a bag with some clothes and my son's birth certificate. That was it. When we landed in Adelaide the Red Cross gave us a fruit cake because it was Christmas. I still find it hard to open a Christmas cake without thinking of that day.", author: "Margaret Doherty, oral history interview, 2023" },
    { type: "p", text: "The federal government's response was swift by the standards of the era. Prime Minister Gough Whitlam flew to Darwin on 26 December and declared a national disaster. Major-General Alan Stretton was appointed to lead the immediate relief operation, and the Darwin Reconstruction Commission was established within weeks under the leadership of Les Johnson. The Commission's powers were unusually broad: it had authority over land acquisition, building approvals, contractor licensing, and the allocation of emergency housing. Its records, many of which are included in this archive, reveal the tensions that shaped the rebuilt city: between the desire to return Darwin to something recognisable and the recognition that the old Darwin had simply not been built to last." },
    { type: "p", text: "Decisions about housing design, road layout, neighbourhood density, and the retention or demolition of damaged structures were made under intense time pressure, with tens of thousands of residents still in temporary accommodation interstate and a wet season approaching that would make construction difficult for months. Some residents returned early to assist with salvage and cleanup, living in tents or damaged buildings that were judged structurally sound enough to occupy. Others did not return at all, settling in the southern cities where they had been evacuated and beginning new lives. The archive's oral history collection includes testimony from both groups: those who rebuilt and those who left, and those who did neither — who remained somewhere in between for years, unable to fully commit to either decision." },
    { type: "quote", text: "Darwin changed us. Even those of us who came back — we came back different. The city we rebuilt wasn't the city we lost. I'm not saying that's entirely bad. But it wasn't the same.", author: "Brian Callaghan, longtime Darwin resident, oral history interview, 2022" },
    { type: "p", text: "The rebuilt Darwin that emerged through the late 1970s and early 1980s was, by almost every structural measure, a safer city. Buildings were designed and certified to withstand winds well above those Tracy had produced. Street layouts were widened. Drainage was improved. The reconstruction introduced elevated construction, cyclone shutters, and reinforced masonry to residential Darwin at a scale that would not otherwise have occurred for decades. When Cyclone Monica — a category 5 storm — passed south of Darwin in 2006, the city sustained only minor damage, a fact that engineers working on post-Tracy standards have cited as evidence that the reforms were effective." },
    { type: "p", text: "But many residents have noted that something harder to quantify — a sense of shared memory, of layered history embedded in streets and buildings, of accumulated character built from decades of heat and colour and eccentricity — was lost in the process. The rebuilt city was newer, straighter, and more uniform. The old Darwin, with its tropical decay and its improbable cosmopolitanism, its mixture of Indigenous communities and postwar immigrants and defence personnel and adventurers, existed largely in memory and photograph. The archive treats this dimension of the recovery seriously. Oral histories have been collected not only from those who experienced the cyclone directly but also from those who returned to find a city they no longer entirely recognised, and from the children of survivors, for whom Tracy exists as an inherited story that shaped their understanding of the place before they were old enough to form their own." },
    { type: "p", text: "Fifty years after Tracy, the archive remains open for contributions. Material continues to arrive: photographs discovered in storage boxes, letters written in the weeks after the disaster, diaries, engineering drawings, and administrative records that were set aside and forgotten. Each new contribution is assessed, described, and added to the collection under a metadata schema developed in consultation with archivists at the National Archives of Australia. The archive invites families, former residents, and community organisations with holdings related to Tracy and its aftermath to contact the collections team." }
  ],

  "federation-records": [
    { type: "p", text: "The federation of the six Australian colonies into a single Commonwealth on 1 January 1901 was the product of more than a decade of political negotiation, popular debate, constitutional drafting, and — ultimately — popular referendum. The digitisation project now makes publicly available, for the first time in a single searchable collection, the full run of Hansard volumes from the Australasian Federal Conventions of the 1890s, alongside committee working papers, constitutional drafts, intercolonial correspondence, delegate notebooks, and procedural records from the first sessions of the Commonwealth Parliament. Together, these materials constitute the primary documentary record of Australian nationhood." },
    { type: "p", text: "The collection spans more than 14,000 pages of primary material. Users can search across all documents simultaneously, track the evolution of specific constitutional clauses through successive drafts, follow individual delegates across multiple conventions and committee sittings, and read the debates that shaped the language of the Constitution in their original form. The project used optical character recognition combined with manual verification by trained research assistants to produce a text layer that has been checked against original documents for accuracy. In cases where OCR output diverged from the physical original by even a single word, the manual transcription was treated as authoritative." },
    { type: "p", text: "The path to federation was neither smooth nor inevitable. An earlier attempt in the late 1880s had foundered on disagreements between New South Wales and Victoria over trade policy — New South Wales favoured free trade, Victoria protection, and neither was prepared to surrender its fiscal position to a federal government whose composition they could not yet control. The conventions of the 1890s succeeded partly because the economic depression of the early part of that decade had made the costs of colonial fragmentation clearer, and partly because a generation of political leaders had emerged who genuinely believed that a federated Australia could project power and identity in ways that six competing colonies could not." },
    { type: "quote", text: "We are not here to frame an ideal constitution. We are here to frame the best constitution that the colonies will accept.", author: "Edmund Barton, at the Adelaide Convention, 1897" },
    { type: "p", text: "What the documents reveal, above all, is that federation was not a single event but an extended process of argument — argument that was never entirely resolved, only deferred. The conventions saw sustained disagreement about the powers of the federal Senate, the rights of smaller colonies in a chamber where they would outnumber larger ones, the mechanisms for resolving disputes between Commonwealth and state governments, the scope of Commonwealth taxation powers, and the status of specific categories of people. The exclusion of Aboriginal Australians from the constitutional compact was debated with a directness that later historical accounts have sometimes underplayed. Section 127 of the original Constitution, which excluded Aboriginal Australians from population counts used to determine parliamentary representation, was inserted without extensive debate — its passage in committee took less than an hour — but the broader question of Indigenous peoples' relationship to the new nation was raised repeatedly and dismissed each time with arguments that ranged from the pragmatic to the openly contemptuous." },
    { type: "p", text: "Women's political status was treated differently by different colonies and debated at length in convention. South Australia had granted women the vote in 1894, and Western Australia followed in 1899. Delegates from those colonies pressed for the Constitution to guarantee female suffrage across the Commonwealth; delegates from other colonies resisted federal imposition on what they regarded as a state matter. The compromise embedded in the Constitution — which permitted women to vote in Commonwealth elections from the outset while leaving the question of state franchise to each colony — was, like much of what the conventions produced, a resolution that acknowledged disagreement without eliminating it." },
    { type: "quote", text: "The women of South Australia have proved themselves capable electors. I cannot imagine what principle of justice or expediency would lead us to refuse the same rights to the women of the other colonies once this Commonwealth is formed.", author: "Catherine Helen Spence, petition to the Adelaide Convention, 1897" },
    { type: "p", text: "The committee records are in some respects even more revealing than the floor debates. Working papers show how specific sections were drafted, how concerns were flagged and sometimes resolved and sometimes carried forward without resolution, and how the language of constitutional clauses changed through iteration — sometimes becoming more precise, sometimes becoming deliberately more ambiguous in order to attract agreement from delegates who might otherwise object. The drafting process for Section 51, which lists the legislative powers of the Commonwealth Parliament, involved more than forty working sessions across the three conventions. Researchers interested in how constitutional interpretation has evolved over time will find material here that substantially complicates the idea that the founders had a settled or unified view on many of the questions the Constitution has since been called on to answer." },
    { type: "p", text: "The conventions were held in Adelaide in 1897, Sydney later that same year, and Melbourne in 1898. Each produced a revised draft. The Melbourne draft was submitted to referendum in 1898 and passed in Victoria, South Australia, and Tasmania but failed to reach the required threshold in New South Wales, which had insisted that a higher minimum vote be required before it would accept the result. Further negotiations — most critically the premiers' conference of 1899 in Melbourne, which produced significant amendments to the financial clauses — led to a revised draft that was put to referendum in 1899 and 1900 and carried in all six colonies." },
    { type: "p", text: "The archive holds the referendum return documents for each colony, complete with polling place tallies and certification stamps. The New South Wales result in 1898 — where a majority voted yes but the threshold was not met — is among the more studied documents in the collection, as it illustrates both the genuine popular support for federation and the degree to which that support was conditional on arrangements that protected the interests of the most populous colony. The correspondence between premiers in the months after the 1898 referendum, much of it now available in this collection for the first time, makes clear how close federation came to failing entirely." },
    { type: "quote", text: "I will not be party to a federation that treats New South Wales as a tributary of the smaller colonies. We have more than a third of the population of these colonies. We will not be outvoted on the things that matter most.", author: "Premier George Reid of New South Wales, letter to Premier James Dickson of Queensland, January 1899" },
    { type: "p", text: "The first Commonwealth Parliament convened on 9 May 1901 in Melbourne, which served as the temporary capital while the site for the permanent capital was debated. (The selection of Canberra as the capital site, and the beginning of its construction, lay more than a decade in the future.) The archive holds the procedural records from the opening sessions, including the order papers, division lists, and the minutes of the committee that established the standing orders under which the Parliament would operate. These documents record the Parliament finding its feet as an institution: working out how to handle questions without notice, how to manage the relationship between the two chambers, and how to translate the conventions of Westminster parliamentary procedure into an antipodean context." },
    { type: "p", text: "The digitisation was carried out under a partnership between the archive, the National Archives of Australia, and several university law faculties whose research programmes have a long-standing interest in constitutional history. An editorial board reviewed the OCR output for each set of documents before publication, and a small number of pages where the original was too damaged for reliable transcription have been flagged as such in the metadata, with images of the original made available so that users can attempt their own readings. The physical originals are held in Canberra and are available for inspection by appointment through the National Archives access system." },
    { type: "p", text: "The collection is accompanied by a finding aid that organises the material by convention, committee, date, and speaker, and by a brief guide to constitutional history written for general readers who may be approaching the documents without specialist background. The guide explains the structure of the conventions, the key disputes and how they were resolved, and the major interpretive debates that constitutional scholars have subsequently engaged in. The archive expects this to become one of the most heavily used resources in its holdings, and has structured the digital interface to support both general browsing and the kind of detailed, iterative search that specialist scholarship requires." },
    { type: "p", text: "Future additions to the collection will include the private papers of several convention delegates whose families have agreed to deposit them with the archive, and a set of newspaper accounts from across the colonies that reported on the conventions in real time — material that offers a view of how the debates were understood by general readers at the time, before subsequent decades of constitutional interpretation had shaped the way those debates are remembered." }
  ],

  "reef-growth": [
    { type: "p", text: "The Great Barrier Reef extends for approximately 2,300 kilometres along the Queensland coast, covering an area of roughly 344,400 square kilometres — larger than Italy, and the largest living structure on Earth. It is not a single continuous reef but a complex of nearly 3,000 individual reef systems and 900 islands, ranging from small sandy cays to substantial vegetated landforms. It has been the subject of scientific observation since at least the 1770s, when Joseph Banks and Daniel Solander collected specimens during the Endeavour voyage and James Cook navigated its inner passages with a combination of skill and luck that his own journals describe with evident relief. Systematic survey work began in earnest in the late nineteenth century, when Queensland coastal surveys produced the first reliable navigational charts of the reef's extent." },
    { type: "p", text: "This collection assembles a century of observational data from expedition logs, survey photographs, scientific journals, reef monitoring records, and more recent remote-sensing imagery to support long-term analysis of reef condition and change. The earliest material in the collection dates from 1922, when a British scientific party led by C.M. Yonge conducted the first systematic ecological survey of the reef over a period of 13 months based at Low Isles, a small vegetated coral cay north of Cairns. Yonge's team produced detailed descriptions of coral communities, fish populations, water temperature records, and substrate conditions that constitute the first scientific baseline for the reef as a whole. Those records have never before been available to researchers in a searchable digital form." },
    { type: "p", text: "By combining Yonge's original field records with the photographic survey conducted by the Great Barrier Reef Marine Park Authority beginning in the 1980s, the extensive coral bleaching documentation produced during the events of 1998, 2002, 2016, 2017, and 2020, and more recent satellite and aerial imagery from the Australian Institute of Marine Science, researchers can now make direct visual and quantitative comparisons across time periods for a number of reef sites. The results are sobering in some areas and more encouraging in others than popular accounts sometimes suggest. The picture is not uniform, and that non-uniformity is itself scientifically significant." },
    { type: "quote", text: "The reef is not a static object. It has always been dynamic — growing here, eroding there, shifting in response to temperature, storm, and time. The question is whether the rate and character of change we're seeing now is within the range of natural variation or outside it. The archive helps us begin to answer that question with evidence rather than assumption.", author: "Dr Elena Rostova, Marine Biology, James Cook University" },
    { type: "p", text: "Coral cover — the proportion of reef surface occupied by living coral — is one of the key metrics tracked across the archive's historical records. Researchers working with the collection have found that for several of the sites where Yonge's team made systematic measurements in 1928 and 1929, present-day coral cover is significantly lower than at any point in the historical record. The decline at some inshore sites near the Wet Tropics coast has been particularly pronounced: coral communities that Yonge described as dense and diverse have been replaced, in several instances, by communities dominated by macroalgae, rubble, or a much reduced range of species. However, sites in some deeper offshore regions and areas of the far northern reef — beyond the influence of terrestrial runoff and with more stable thermal conditions — show coral communities that appear broadly similar to those documented in the 1970s and 1980s." },
    { type: "p", text: "The bleaching events of the past decade have been especially well documented in the collection. Coral bleaching — the expulsion of symbiotic algae from coral tissue in response to thermal stress — leaves coral pale or white and, if the stress persists, leads to mortality. Mass bleaching events were documented on the Great Barrier Reef in 1998 and 2002, and the events of 2016 and 2017, which affected the northern and central reef in successive summers, represent the most severe bleaching episodes in the recorded history of any coral reef system. The archive holds aerial survey records, in-water transect photographs, and temperature logger data from those events, alongside recovery monitoring records that have tracked the fate of affected reef sections in the years since." },
    { type: "quote", text: "In 2016 we were flying transects over the northern reef and looking at mortality levels we hadn't seen before. Sections that had been highly productive reef for as long as we'd been monitoring them were gone. Not bleached — dead. The images from those flights are difficult to look at even now.", author: "Dr Terry Hughes, ARC Centre of Excellence for Coral Reef Studies, 2021 interview" },
    { type: "p", text: "The archive holds material related to the crown-of-thorns starfish (Acanthaster planci), which has caused substantial coral mortality through three major outbreak cycles since systematic monitoring began. The first recorded outbreak was documented in the 1960s; subsequent outbreaks in the 1980s and 1990s were tracked in detail by researchers at the Australian Institute of Marine Science, whose survey records are included in the collection. The causes of outbreaks remain debated, with evidence pointing to elevated nutrient levels in coastal waters — associated with agricultural runoff — as a contributing factor in outbreak initiation on some parts of the reef. The historical nutrient data in the collection, including water quality measurements from the 1970s onwards, provides context for evaluating these hypotheses." },
    { type: "p", text: "Cyclones have always been part of the reef's ecological context. The archive documents the impact of several major cyclonic events on reef communities, including Cyclone Ada (1970), which caused significant damage to reefs near the Whitsunday Islands, and Cyclone Hamish (2009), a category 5 storm whose path across the southern reef produced the most extensively documented single cyclone impact event in reef research history. Comparing post-cyclone recovery surveys with pre-disturbance baselines from the archive allows researchers to assess not only the damage caused by individual events but the degree to which reef communities have recovered — or failed to recover — within the timeframes typical of earlier decades." },
    { type: "quote", text: "Reefs have always dealt with cyclones. The question is what happens when they're dealing with a cyclone on top of bleaching on top of poor water quality, with less time to recover between each event. The cumulative story is in the long-term data, and that's what this archive makes visible.", author: "Professor Ove Hoegh-Guldberg, University of Queensland, contribution to archive advisory panel, 2023" },
    { type: "p", text: "The archive is not primarily an advocacy resource. Its purpose is to make primary material available to researchers and to the public in a form that supports evidence-based analysis, not to advance particular conclusions about reef management or climate policy. The material it holds includes perspectives from multiple scientific traditions and periods, and users are encouraged to engage with the data in the context of the original documentation rather than relying on summary accounts, which inevitably simplify a picture of considerable complexity. Methodological notes accompany each dataset describing how measurements were taken, what limitations apply, and how comparisons across time periods should be approached." },
    { type: "p", text: "A reading guide prepared by the archive team helps orient new users to the collection's scope, key documents, and the major interpretive debates in reef science. The guide is available in a general version for non-specialist readers and a more detailed version for researchers who require methodological background. The archive also maintains a list of peer-reviewed publications that have drawn on the collection, which provides an indication of how the material is being used in active research." },
    { type: "p", text: "The Great Barrier Reef Marine Park Authority's management records from 1975 onwards are included in a separate but linked section of the collection. These records document the evolution of reef management policy over five decades: the establishment of zoning systems, the response to specific threats, the development of monitoring programmes, and the ongoing negotiation between conservation objectives and the economic interests of fishing, tourism, and agriculture. Reading the scientific and management records together provides a view of how scientific knowledge has (and has not) shaped policy over the period." },
    { type: "p", text: "Future additions to the collection will include digitised records from the Queensland Museum's extensive marine biology holdings, which include specimen collections and field notes dating back to the 1880s; a set of historical aerial photographs taken for navigation and defence purposes in the 1940s and 1950s that contain incidental but scientifically valuable documentation of reef condition at the time of exposure; and the personal papers of several reef researchers whose work shaped the field in the mid-twentieth century but whose contributions have not yet received the archival attention they deserve." }
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

export function runAiScan(slug) {
  const overlay  = document.getElementById("ai-overlay-" + slug);
  const progress = document.getElementById("ai-progress-" + slug);
  const stageEl  = document.getElementById("ai-stage-text-" + slug);
  const resultEl = document.getElementById("ai-modal-result-" + slug);
  const spinIcon = document.getElementById("ai-modal-spin-" + slug);
  if (!overlay) return;

  const stages = [
    { delay:  600, pct: 20, text: "Tokenising document content…" },
    { delay: 1300, pct: 42, text: "Running factual density analysis…" },
    { delay: 2100, pct: 63, text: "Scanning for synthetic language patterns…" },
    { delay: 2900, pct: 82, text: "Cross-referencing archive corpus…" },
    { delay: 3500, pct: 93, text: "Verifying provenance markers…" },
  ];

  stages.forEach(s => {
    setTimeout(() => {
      progress.style.width = s.pct + "%";
      stageEl.textContent  = s.text;
    }, s.delay);
  });

  setTimeout(() => {
    progress.style.width = "100%";
    progress.style.background = "#4caf82";
    stageEl.style.display = "none";
    spinIcon.innerHTML = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M2.5 7.5L6 11L12.5 4" stroke="#1a5c35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    resultEl.style.display = "flex";
  }, 3800);

  setTimeout(() => {
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 0.35s";
    setTimeout(() => overlay.remove(), 350);
  }, 4800);
}

export function ArticleDetailView(slug) {
  setTimeout(() => runAiScan(slug), 0);
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

  const related = articles.filter(a => a.collection === article.collection && a.slug !== slug).slice(0, 3);

  return `
    <style>
      @keyframes ai-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes ai-modal-in {
        from { opacity: 0; transform: translateY(12px) scale(0.97); }
        to   { opacity: 1; transform: translateY(0)   scale(1); }
      }
      @keyframes ai-overlay-in {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      .ai-overlay {
        position: fixed; inset: 0;
        background: rgba(10,10,20,0.45);
        backdrop-filter: blur(2px);
        z-index: 9000;
        display: flex; align-items: center; justify-content: center;
        animation: ai-overlay-in 0.2s ease;
      }
      .ai-modal {
        background: #fff;
        border: 1px solid #d8d8d0;
        border-radius: 6px;
        width: 380px;
        max-width: calc(100vw - 40px);
        box-shadow: 0 8px 40px rgba(0,0,0,0.18);
        animation: ai-modal-in 0.25s cubic-bezier(.22,.68,0,1.2);
        overflow: hidden;
      }
      .ai-modal-header {
        padding: 16px 20px 12px;
        border-bottom: 1px solid #eee;
        display: flex; align-items: center; gap: 10px;
      }
      .ai-modal-header h4 {
        margin: 0; font-size: 13px; font-weight: 700;
        text-transform: uppercase; letter-spacing: .06em; color: #333;
        flex: 1;
      }
      .ai-modal-body {
        padding: 20px;
      }
      .ai-progress-track {
        height: 3px; background: #eee; border-radius: 2px; overflow: hidden; margin-bottom: 16px;
      }
      .ai-progress-fill {
        height: 100%; background: var(--navy, #1a2a4a);
        border-radius: 2px;
        transition: width 0.5s ease, background 0.4s;
        width: 0%;
      }
      .ai-stage-row {
        display: flex; align-items: center; gap: 10px; min-height: 28px;
      }
      .ai-spin-icon svg { animation: ai-spin 0.9s linear infinite; }
      .ai-modal-stage-text {
        font-size: 13px; color: #555; flex: 1;
      }
      .ai-modal-result {
        display: none;
        padding: 14px 16px;
        border-radius: 4px;
        font-size: 13px;
        font-weight: 500;
        align-items: center;
        gap: 10px;
        margin-top: 4px;
      }
      .ai-modal-result.pass { background: #f0faf4; color: #1a5c35; border: 1px solid #7ecfa0; }
      .ai-modal-result.fail { background: #fff4f4; color: #7a1a1a; border: 1px solid #f0a0a0; }
      .ai-modal-footer {
        padding: 12px 20px;
        border-top: 1px solid #eee;
        display: flex; justify-content: flex-end;
      }
      .ai-dismiss-btn {
        display: none;
        padding: 7px 18px;
        background: var(--navy, #1a2a4a);
        color: #fff;
        font-size: 13px;
        font-weight: 600;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        font-family: inherit;
      }
      .ai-dismiss-btn:hover { opacity: 0.85; }
    </style>

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

    <!-- AI integrity check popup -->
    <div class="ai-overlay" id="ai-overlay-${slug}">
      <div class="ai-modal" role="dialog" aria-modal="true">
        <div class="ai-modal-header">
          <div class="ai-spin-icon" id="ai-modal-spin-${slug}">
            <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#1a2a4a" stroke-width="1.5" stroke-dasharray="20 18" stroke-linecap="round"/></svg>
          </div>
          <h4>Archive integrity scan</h4>
        </div>
        <div class="ai-modal-body">
          <div class="ai-progress-track">
            <div class="ai-progress-fill" id="ai-progress-${slug}"></div>
          </div>
          <span class="ai-modal-stage-text" id="ai-stage-text-${slug}">Initialising scan…</span>
          <div class="ai-modal-result" id="ai-modal-result-${slug}">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M2.5 7.5L6 11L12.5 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>Content integrity verified — consistent with archival records and primary source citations.</span>
          </div>
        </div>
      </div>
    </div>

  `;
}

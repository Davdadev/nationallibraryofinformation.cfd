export const site = {
  name: "National Library of Information",
  shortName: "NLI",
  tagline: "A public archive for history, culture, research, and learning.",
  description: "A polished static archive website with collections, articles, search, and editorial pages.",
  year: 2026
};

export const nav = [
  { id: "home", label: "Home", path: "#/" },
  { id: "discover", label: "Discover", path: "#/discover" },
  { id: "research", label: "Research", path: "#/research" },
  { id: "learn", label: "Learn", path: "#/learn" },
  { id: "news", label: "News", path: "#/news" },
  { id: "about", label: "About", path: "#/about" }
];

export const collections = [
  { slug: "history", title: "Australian History", icon: "📜", summary: "Colonial records, federation papers, oral history, and civic milestones.", accent: "History", stats: "5 articles" },
  { slug: "science", title: "Science & Technology", icon: "🔬", summary: "Research notes, invention stories, environmental archives, and diagrams.", accent: "Science", stats: "3 articles" },
  { slug: "culture", title: "Arts & Culture", icon: "🎭", summary: "Visual art, architecture, performance, and design archives.", accent: "Culture", stats: "2 articles" },
  { slug: "geography", title: "Maps & Geography", icon: "🗺️", summary: "Survey charts, expedition notebooks, and territorial mapping records.", accent: "Geography", stats: "1 article" }
];

export const articles = [
  { slug: "cyclone-tracy", collection: "history", category: "Australian History", title: "Commemorating Cyclone Tracy through images and oral histories", author: "Rebecca Fleming", date: "2025-01-08", excerpt: "Photographs, council records, and oral histories trace the disaster's impact on Darwin and the long recovery that followed.", tags: ["Darwin", "Natural Disasters", "Oral History"], readingTime: "9 min", featured: true, content: [{ type: "p", text: "Cyclone Tracy struck Darwin on Christmas Eve 1974 and became one of the defining events in Australia's disaster memory. The archive brings together photographs, evacuation records, and first-hand testimony to show both the scale of the damage and the resilience that followed." }, { type: "quote", text: "When I stepped outside, the street looked unrecognisable. Everything had shifted.", author: "Allan Stewart, oral history interview" }, { type: "p", text: "The collection is especially valuable because it links material evidence with community voices. Building permits, emergency notices, and handwritten recollections reveal how public institutions and ordinary residents worked through the same crisis from different angles." }] },
  { slug: "federation-records", collection: "history", category: "Australian History", title: "Federation-era parliamentary records now fully digitised", author: "James Halliwell", date: "2025-03-15", excerpt: "Hansard volumes, committee notes, and constitutional drafts now sit together in a searchable format for the first time.", tags: ["Federation", "Parliament", "Digitisation"], readingTime: "7 min", featured: true, content: [{ type: "p", text: "The digitisation of federation-era parliamentary records opens a new path for students, historians, and researchers who need to trace the formation of national institutions." }, { type: "p", text: "Rather than treating federation as a single event, the collection shows it as a long process of negotiation across more than a decade." }] },
  { slug: "indigenous-language", collection: "history", category: "First Nations", title: "Australian Indigenous language preservation project", author: "Mia Nguyen", date: "2025-04-22", excerpt: "Community-led language archives help protect recordings, word lists, and teaching resources for future generations.", tags: ["Language", "Community", "Preservation"], readingTime: "7 min", featured: true, content: [{ type: "p", text: "This project works with community partners to preserve language resources in ways that respect cultural authority and local decision-making. Audio recordings, teaching materials, and word lists are stored with access protocols set by participating groups." }, { type: "p", text: "The archive treats language as living knowledge, not just historical record. Its structure supports both preservation and use, so language workers and learners can engage with materials in practical ways." }] },
  { slug: "victoria-gold-fields", collection: "history", category: "Australian History", title: "Mapping the Victoria Gold Fields, 1851–1860", author: "Arthur Pendelton", date: "2025-05-11", excerpt: "Newly catalogued sketches and survey sheets show how mining reshaped settlements across Victoria.", tags: ["Gold Rush", "Cartography", "Victoria"], readingTime: "5 min", featured: false, content: [{ type: "p", text: "The gold rush transformed landscapes, transport routes, and settlement patterns. These maps and sketches show the speed of that change, from early camps to dense mining towns with makeshift roads and service corridors." }, { type: "quote", text: "The valley became a maze of shafts, tracks, and timber frames.", author: "Survey field notes, 1853" }] },
  { slug: "myall-creek-trials", collection: "history", category: "Australian History", title: "The Myall Creek trial transcripts, 1838", author: "Thomas Vance", date: "2025-10-19", excerpt: "Court records illuminate a rare colonial legal response to violence against Aboriginal people.", tags: ["Legal History", "Colonial Records", "Justice"], readingTime: "8 min", featured: false, content: [{ type: "p", text: "The trial transcripts are a difficult but important part of the record. They show the colonial legal system at work and help researchers understand the limits and significance of law in the period." }, { type: "p", text: "Paired with newspaper reporting and later commentary, the records have become a central source for studying how history, law, and public memory intersect." }] },
  { slug: "reef-growth", collection: "science", category: "Science & Technology", title: "A century of Great Barrier Reef growth patterns", author: "Elena Rostova", date: "2025-06-30", excerpt: "A long-view survey combines expedition logs with modern imagery to map reef change over time.", tags: ["Marine Biology", "Ecology", "Climate"], readingTime: "8 min", featured: true, content: [{ type: "p", text: "By combining early expedition logs with spatial imagery, researchers can compare past observations with present conditions." }, { type: "p", text: "This page presents the archive as a research tool, not just a display space." }] },
  { slug: "lawrence-hargrave", collection: "science", category: "Science & Technology", title: "Lawrence Hargrave and the mechanics of early aviation", author: "Marcus Vance", date: "2025-08-14", excerpt: "Box-kite experiments helped shape early thinking about lift, stability, and aeronautical design.", tags: ["Aviation", "Engineering", "Invention"], readingTime: "5 min", featured: false, content: [{ type: "p", text: "Hargrave's experiments at Stanwell Park helped demonstrate how rigid cellular structures could produce stable lift. His notes, diagrams, and field observations remain useful for students of engineering history." }, { type: "p", text: "The archive includes a compact visual summary of the experiments alongside contextual notes that explain why they mattered." }] },
  { slug: "drysdale-interior", collection: "culture", category: "Arts & Culture", title: "Russell Drysdale and the iconography of the interior", author: "Sybilla Croft", date: "2025-09-03", excerpt: "Paintings and sketches reveal a stark visual language shaped by light, distance, and place.", tags: ["Visual Arts", "Modernism", "Outback"], readingTime: "5 min", featured: true, content: [{ type: "p", text: "Drysdale's work departed from romantic pastoral imagery and focused instead on space, silence, and form. The archive includes exhibition notes, preparatory sketches, and images that help readers follow his process." }, { type: "p", text: "This article looks at the way his work turned the Australian interior into a subject of both aesthetic and social attention." }] },
  { slug: "utzon-spheres", collection: "culture", category: "Arts & Culture", title: "Utzon's spherical solution for the Sydney Opera House", author: "Linus Gherkin", date: "2025-11-05", excerpt: "Structural drawings explain how a single geometric principle made the roof shells buildable.", tags: ["Architecture", "Sydney", "Modernism"], readingTime: "4 min", featured: false, content: [{ type: "p", text: "The structural records show how an elegant mathematical solution supported one of Australia's most recognisable buildings. The archive combines drawings, calculations, and project notes into a readable sequence." }, { type: "p", text: "This article is built for general audiences but keeps enough technical detail to satisfy researchers and design students." }] },
  { slug: "david-unaipon", collection: "science", category: "Science & Technology", title: "David Unaipon: inventor, preacher, and Australia's first published Aboriginal author", author: "Priya Nair", date: "2025-07-21", excerpt: "Patents, manuscripts, and mission correspondence trace the life of a man whose work crossed the boundaries of science, theology, and literature.", tags: ["First Nations", "Invention", "Literature"], readingTime: "9 min", featured: true, content: [{ type: "p", text: "David Unaipon was born at the Point McLeay Mission in 1872 and spent more than eight decades demonstrating that the intellectual expectations placed on Aboriginal Australians by colonial society were not only wrong but absurdly so. He patented a modified handpiece for mechanical shearing, sketched a design for a helicopter-like flying machine based on principles he derived from studying a boomerang in flight, and became the first Aboriginal Australian to have a book published under his own name." }, { type: "p", text: "This article draws on the archive's collection of Unaipon's patent applications, mission correspondence, manuscript drafts, and newspaper accounts to trace the breadth of his interests and the constraints under which he pursued them." }] },
  { slug: "mawson-charts", collection: "geography", category: "Maps & Geography", title: "Mawson's coastal sledging charts, 1911–1914", author: "Commander Eric Vance", date: "2025-12-12", excerpt: "Expedition charts document difficult Antarctic conditions and the practical work of mapping unknown coastlines.", tags: ["Antarctica", "Exploration", "Cartography"], readingTime: "7 min", featured: true, content: [{ type: "p", text: "These charts combine field measurements, route notes, and hand-drawn coastlines from the Australasian Antarctic Expedition." }, { type: "quote", text: "We calculated by dead reckoning whenever the weather allowed it.", author: "Sir Douglas Mawson, field diary" }] }
];

export const pages = {
  home: { title: "Access the collective memory of the archive", intro: "Search articles, browse collections, and move between editorial pages." },
  discover: { title: "Discover collections and featured writing", intro: "Explore the four main collections, then open individual articles from the archive." },
  research: { title: "Research services and support", intro: "Find citation guidance, archival help, and information about requesting materials." },
  learn: { title: "Learning resources", intro: "Educational kits, classroom use, and reading guides for students and teachers." },
  news: { title: "Archive news", intro: "Recent announcements, releases, and highlights from the collections team." },
  blog: { title: "Editorial blog", intro: "Longer-form notes on digitisation, curation, and archive storytelling." },
  events: { title: "Upcoming events", intro: "Talks, launches, workshops, and public programs." },
  exhibitions: { title: "Exhibitions", intro: "Online exhibitions and curated selections from the archive." },
  archives: { title: "Archive series", intro: "Browse major series, finding aids, and record groups." },
  search: { title: "Search the archive", intro: "Search article titles, summaries, and tags." },
  donate: { title: "Support the archive", intro: "Help preserve records and expand public access." },
  membership: { title: "Membership", intro: "Join as a supporter, researcher, or education partner." },
  education: { title: "Education", intro: "Teaching packs, guides, and learning pathways." },
  volunteer: { title: "Volunteer", intro: "Support digitisation, transcription, and events." },
  faq: { title: "Frequently asked questions", intro: "Answers about access, citations, and using the site." },
  privacy: { title: "Privacy policy", intro: "How the site handles submissions and analytics." },
  terms: { title: "Terms of use", intro: "Rules for using the website and its content." },
  accessibility: { title: "Accessibility statement", intro: "Accessibility goals, standards, and support options." },
  partners: { title: "Partners", intro: "Institutions, councils, and collaborators." },
  careers: { title: "Careers", intro: "Current roles and recruitment information." },
  media: { title: "Media centre", intro: "Downloads, press updates, and contact details." },
  contact: { title: "Contact", intro: "Get in touch with the archive team." },
  about: { title: "About the National Library of Information", intro: "Mission, governance, and preservation priorities." }
};

export const newsroom = [
  { date: "2026-05-12", title: "New oral history interviews added to the Darwin disaster collection", text: "Twenty-seven interviews have been catalogued with transcripts and topic tags." },
  { date: "2026-03-02", title: "Search improvements now surface article tags and collection pages", text: "A faster search index helps visitors move between related materials." },
  { date: "2025-12-18", title: "Three exhibition pages launched", text: "New curated exhibits highlight cartography, architecture, and community archives." }
];

export const blogPosts = [
  { title: "How we structure an archive for browsing and search", date: "2026-04-09", text: "A good archive website works when the hierarchy is visible, the labels are human, and search never feels like a dead end." },
  { title: "Why article summaries matter", date: "2026-02-14", text: "Short summaries help readers decide whether to open a document, and they also improve navigation across a large archive." }
];

export const eventList = [
  { title: "Digitisation workflow workshop", date: "2026-07-08", text: "An online session about file naming, image handling, and metadata basics." },
  { title: "Public talk: archives and memory", date: "2026-08-21", text: "A live panel discussing preservation, access, and community records." }
];

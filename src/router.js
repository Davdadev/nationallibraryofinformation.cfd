import { collections, articles } from "./data/site.js";
import { appShell } from "./components/helpers.js";

import { HomeView } from "./views/home.js";
import { DiscoverView } from "./views/discover.js";
import { ResearchView } from "./views/research.js";
import { LearnView } from "./views/learn.js";
import { NewsView } from "./views/news.js";
import { BlogView } from "./views/blog.js";
import { EventsView } from "./views/events.js";
import { ExhibitionsView } from "./views/exhibitions.js";
import { ArchivesView } from "./views/archives.js";
import { SearchView } from "./views/search.js";
import { DonateView } from "./views/Donate.js";
import { MembershipView } from "./views/Membership.js";
import { EducationView } from "./views/Education.js";
import { VolunteerView } from "./views/Volunteer.js";
import { FAQView } from "./views/FAQ.js";
import { PrivacyView } from "./views/Privacy.js";
import { TermsView } from "./views/Terms.js";
import { AccessibilityView } from "./views/Accessibility.js";
import { PartnersView } from "./views/Partners.js";
import { CareersView } from "./views/Careers.js";
import { MediaView } from "./views/Media.js";
import { ContactView } from "./views/contact.js";
import { AboutView } from "./views/about.js";
import { CollectionDetailView } from "./views/collection.js";
import { ArticleDetailView } from "./views/article.js";
import { NotFoundView } from "./views/notfound.js";

const routes = [
  { re: /^\/?$/, view: HomeView, nav: "home", crumbs: [{ label: "Home", path: "#/" }] },
  { re: /^\/discover\/?$/, view: DiscoverView, nav: "discover", crumbs: [{ label: "Home", path: "#/" }, { label: "Discover", path: "#/discover" }] },
  { re: /^\/research\/?$/, view: ResearchView, nav: "research", crumbs: [{ label: "Home", path: "#/" }, { label: "Research", path: "#/research" }] },
  { re: /^\/learn\/?$/, view: LearnView, nav: "learn", crumbs: [{ label: "Home", path: "#/" }, { label: "Learn", path: "#/learn" }] },
  { re: /^\/news\/?$/, view: NewsView, nav: "news", crumbs: [{ label: "Home", path: "#/" }, { label: "News", path: "#/news" }] },
  { re: /^\/blog\/?$/, view: BlogView, nav: "news", crumbs: [{ label: "Home", path: "#/" }, { label: "Blog", path: "#/blog" }] },
  { re: /^\/events\/?$/, view: EventsView, nav: "news", crumbs: [{ label: "Home", path: "#/" }, { label: "Events", path: "#/events" }] },
  { re: /^\/exhibitions\/?$/, view: ExhibitionsView, nav: "discover", crumbs: [{ label: "Home", path: "#/" }, { label: "Exhibitions", path: "#/exhibitions" }] },
  { re: /^\/archives\/?$/, view: ArchivesView, nav: "discover", crumbs: [{ label: "Home", path: "#/" }, { label: "Archives", path: "#/archives" }] },
  { re: /^\/search\/?$/, view: SearchView, nav: "discover", crumbs: [{ label: "Home", path: "#/" }, { label: "Search", path: "#/search" }] },
  { re: /^\/donate\/?$/, view: DonateView, nav: "about", crumbs: [{ label: "Home", path: "#/" }, { label: "Donate", path: "#/donate" }] },
  { re: /^\/membership\/?$/, view: MembershipView, nav: "about", crumbs: [{ label: "Home", path: "#/" }, { label: "Membership", path: "#/membership" }] },
  { re: /^\/education\/?$/, view: EducationView, nav: "learn", crumbs: [{ label: "Home", path: "#/" }, { label: "Education", path: "#/education" }] },
  { re: /^\/volunteer\/?$/, view: VolunteerView, nav: "about", crumbs: [{ label: "Home", path: "#/" }, { label: "Volunteer", path: "#/volunteer" }] },
  { re: /^\/faq\/?$/, view: FAQView, nav: "about", crumbs: [{ label: "Home", path: "#/" }, { label: "FAQ", path: "#/faq" }] },
  { re: /^\/privacy\/?$/, view: PrivacyView, nav: "about", crumbs: [{ label: "Home", path: "#/" }, { label: "Privacy", path: "#/privacy" }] },
  { re: /^\/terms\/?$/, view: TermsView, nav: "about", crumbs: [{ label: "Home", path: "#/" }, { label: "Terms", path: "#/terms" }] },
  { re: /^\/accessibility\/?$/, view: AccessibilityView, nav: "about", crumbs: [{ label: "Home", path: "#/" }, { label: "Accessibility", path: "#/accessibility" }] },
  { re: /^\/partners\/?$/, view: PartnersView, nav: "about", crumbs: [{ label: "Home", path: "#/" }, { label: "Partners", path: "#/partners" }] },
  { re: /^\/careers\/?$/, view: CareersView, nav: "about", crumbs: [{ label: "Home", path: "#/" }, { label: "Careers", path: "#/careers" }] },
  { re: /^\/media\/?$/, view: MediaView, nav: "about", crumbs: [{ label: "Home", path: "#/" }, { label: "Media", path: "#/media" }] },
  { re: /^\/contact\/?$/, view: ContactView, nav: "about", crumbs: [{ label: "Home", path: "#/" }, { label: "Contact", path: "#/contact" }] },
  { re: /^\/about\/?$/, view: AboutView, nav: "about", crumbs: [{ label: "Home", path: "#/" }, { label: "About", path: "#/about" }] },
  {
    re: /^\/collection\/([^/]+)\/?$/,
    view: CollectionDetailView,
    nav: "discover",
    crumbs: (slug) => [
      { label: "Home", path: "#/" },
      { label: "Discover", path: "#/discover" },
      { label: collections.find(c => c.slug === slug)?.title || "Collection", path: `#/collection/${slug}` }
    ]
  },
  {
    re: /^\/article\/([^/]+)\/?$/,
    view: ArticleDetailView,
    nav: "discover",
    crumbs: (slug) => {
      const article = articles.find(a => a.slug === slug);
      const col = collections.find(c => c.slug === article?.collection);
      return [
        { label: "Home", path: "#/" },
        { label: "Discover", path: "#/discover" },
        { label: col?.title || "Collection", path: `#/collection/${article?.collection || ""}` },
        { label: article?.title || "Article", path: `#/article/${slug}` }
      ];
    }
  }
];

export function renderApp() {
  const raw = location.hash.replace(/^#/, "") || "/";
  const route = routes.find(r => r.re.test(raw));
  if (!route) {
    document.getElementById("app").innerHTML = appShell({
      nav: "discover",
      crumbs: [{ label: "Home", path: "#/" }, { label: "Not found", path: "#/404" }],
      main: NotFoundView()
    });
    return;
  }
  const match = raw.match(route.re);
  const arg = match && match[1] ? match[1] : undefined;
  const crumbs = typeof route.crumbs === "function" ? route.crumbs(arg) : route.crumbs;
  document.getElementById("app").innerHTML = appShell({
    nav: route.nav,
    crumbs,
    main: route.view(arg)
  });
}

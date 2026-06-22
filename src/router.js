
import { layout } from './components/Layout.js';
import { Home } from './views/Home.js';
import { Discover } from './views/Discover.js';
import { Research } from './views/Research.js';
import { Learn } from './views/Learn.js';
import { About } from './views/About.js';
import { Contact } from './views/Contact.js';
import { Blog } from './views/Blog.js';
import { Events } from './views/Events.js';
import { News } from './views/News.js';
import { Exhibitions } from './views/Exhibitions.js';
import { Archives } from './views/Archives.js';
import { Search } from './views/Search.js';
import { Donate } from './views/Donate.js';
import { Membership } from './views/Membership.js';
import { Education } from './views/Education.js';
import { Volunteer } from './views/Volunteer.js';
import { FAQ } from './views/FAQ.js';
import { Privacy } from './views/Privacy.js';
import { Terms } from './views/Terms.js';
import { Accessibility } from './views/Accessibility.js';
import { Partners } from './views/Partners.js';
import { Careers } from './views/Careers.js';
import { Media } from './views/Media.js';
import { CollectionDetail } from './views/CollectionDetail.js';
import { ArticleDetail } from './views/ArticleDetail.js';
const routes={'':Home,'home':Home,'discover':Discover,'research':Research,'learn':Learn,'about':About,'contact':Contact,'blog':Blog,'events':Events,'news':News,'exhibitions':Exhibitions,'archives':Archives,'search':Search,'donate':Donate,'membership':Membership,'education':Education,'volunteer':Volunteer,'faq':FAQ,'privacy':Privacy,'terms':Terms,'accessibility':Accessibility,'partners':Partners,'careers':Careers,'media':Media,'collectiondetail':CollectionDetail,'articledetail':ArticleDetail};
export function render(){
const path=location.hash.replace('#/','');
const view=(routes[path]||Home)();
document.getElementById('app').innerHTML=layout(view);
}

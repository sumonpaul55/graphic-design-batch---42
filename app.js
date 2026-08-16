const roadmapMonths = [
  {
    title: 'Illustrator + Graphic Design Foundation',
    note: 'শুরু থেকে clean, print-ready এবং presentation-ready graphic design তৈরি করার ভিত্তি।',
    weeks: [
      { number: 'WEEK 01', title: 'Illustrator Foundation', classes: [
        ['Class 01', 'Graphic Design Introduction · Illustrator Interface · Artboard · Layers · Selection Tool · Direct Selection Tool'],
        ['Class 02', 'Shape Tool · Pen Tool · Line/Arc Tool · Fill & Stroke · Color & Swatches · Gradient Basics'],
        ['Class 03', 'Type Tool · Typography · Align & Distribute · Group/Un-group · Pathfinder · Shape Builder'],
      ], project: 'Practice: Basic Creative Composition' },
      { number: 'WEEK 02', title: 'Practical Illustrator Design', classes: [
        ['Class 04 — Business Card Design', 'Standard Size · Bleed & Margin · Front & Back Design · Print-ready File'],
        ['Class 05 — Flyer Design', 'Layout · Typography Hierarchy · Image Placement'],
        ['Class 06 — Complete Promotional Flyer', 'Mockup · Presentation · JPG/PNG/PDF Export'],
      ], project: 'Project: Business Card + Promotional Flyer' },
      { number: 'WEEK 03', title: 'Freelancer.com + Contest', classes: [
        ['Class 07', 'Freelancer.com Introduction · Account Creation · Profile Setup · Professional Profile · Portfolio Upload'],
        ['Class 08', 'What is a Contest? · Finding Contests · Understanding Briefs · Client Requirement Analysis · Creating Contest Designs'],
        ['Class 09', 'Submit Contest Entry · Revision & Feedback · Winning Design Principles · Client Communication'],
      ], project: 'Project: Freelancer Contest Design' },
      { number: 'WEEK 04', title: 'Social Media Design', classes: [
        ['Class 10', 'Social Media Design Basics · Facebook Post · Instagram Post · Square Design · Typography · Visual Hierarchy'],
        ['Class 11', 'Promotional Post · Offer/Discount Post · Course/Business Promotion'],
        ['Class 12 — Complete Social Media Campaign', '3 Social Media Posts · Brand Consistency · Mockup & Presentation'],
      ], project: 'Project: 3 Social Media Posts for a Business' },
    ],
  },
  {
    title: 'Photoshop + Photo Editing',
    note: 'স্টুডিও-মানের ইমেজ এডিটিং, ক্রিয়েটিভ কম্পোজিটিং এবং attention-grabbing social visuals-এর জন্য প্রয়োজনীয় workflow।',
    weeks: [
      { number: 'WEEK 05', title: 'Photoshop Foundation', classes: [
        ['Class 13', 'Photoshop Interface · Layers · Selection Tools · Move Tool · Marquee · Lasso · Magic Wand'],
        ['Class 14', 'Crop · Brush · Eraser · Clone Stamp · Healing Brush · Gradient · Adjustment Layer'],
        ['Class 15', 'Pen Tool · Layer Mask · Blending Mode · Smart Object · Basic Color Correction'],
      ], project: 'Practice: Selection & Masking Exercises' },
      { number: 'WEEK 06', title: 'Photo Manipulation', classes: [
        ['Class 16', 'Photo Manipulation Introduction · Background Removal · Combining Images · Perspective · Lighting Match'],
        ['Class 17', 'Shadow Creation · Color Matching · Blending · Realistic Composition · Creative Effects'],
        ['Class 18', 'Complete Photo Manipulation Project'],
      ], project: 'Project: Professional Photo Manipulation' },
      { number: 'WEEK 07', title: 'Face Retouching', classes: [
        ['Class 19', 'Professional Photo Retouching · Skin Cleaning · Pimple/Blemish Removal · Healing · Clone'],
        ['Class 20', 'Dodge & Burn · Skin Tone · Face Lighting · Natural Retouching'],
        ['Class 21', 'Advanced Portrait Retouch · Hair/Face Cleanup · Color Correction · Before/After Presentation'],
      ], project: 'Project: Professional Portrait Retouch' },
      { number: 'WEEK 08', title: 'Photoshop Social Media Design', classes: [
        ['Class 22', 'Photoshop Social Media Design · Image Manipulation · Typography · Product/Service Promotion'],
        ['Class 23', 'Facebook Ad Creative · Product Advertisement · Offer/Discount Creative'],
        ['Class 24', 'Complete Social Media Campaign — Main Post · Advertisement Creative · Story Design'],
      ], project: 'Project: Social Media Campaign' },
    ],
  },
  {
    title: 'Freelancing + Portfolio + Professional Design',
    note: 'স্পেশালাইজড ডিজাইন প্রজেক্ট, মার্কেটপ্লেস প্রোফাইল এবং সরাসরি ক্লায়েন্ট পাওয়ার বাস্তব প্রস্তুতি।',
    weeks: [
      { number: 'WEEK 09', title: 'Book Cover + T-Shirt Design', classes: [
        ['Class 25 — Book Cover Design', 'Cover Size · Front/Back/Spine · Typography · Image Composition · Print-ready File'],
        ['Class 26 — T-Shirt Design', 'T-Shirt Artwork · Typography · Vector Artwork · Print Area · Transparent PNG'],
        ['Class 27', 'T-Shirt Mockup · Book Mockup · Client Presentation · Portfolio Presentation'],
      ], project: 'Project: Book Cover + 2 T-Shirt Designs' },
      { number: 'WEEK 10', title: 'Fiverr', classes: [
        ['Class 28', 'Fiverr Introduction · Account Creation · Profile Setup · Professional Bio · Skills · Portfolio'],
        ['Class 29', 'What is a Gig? · Gig Title · Description · Search Tags · Pricing Packages · FAQ'],
        ['Class 30', 'Gig Image Design · Portfolio Upload · Buyer Requirements · Order Process · Client Communication · Revision · Delivery'],
      ], project: 'Project: Complete Fiverr Gig' },
      { number: 'WEEK 11', title: 'Logo Design', classes: [
        ['Class 31', 'Logo Introduction · Types of Logos · Brand Identity · Concept Development · Sketch to Vector'],
        ['Class 32', 'Professional Logo Design · Typography Logo · Icon/Symbol Logo · Color Selection · Negative Space'],
        ['Class 33 — Complete Logo Project', 'Logo · Color Palette · Typography · Mockup · Brand Presentation'],
      ], project: 'Project: Mini Brand Identity Project' },
      { number: 'WEEK 12', title: 'Beyond Marketplace + Career', classes: [
        ['Class 34 — Getting Clients Outside Marketplaces', 'Facebook · LinkedIn · Local Businesses · Direct Clients · Cold Outreach · Personal Branding'],
        ['Class 35 — Professional Portfolio', 'Portfolio Selection · Behance · Dribbble · Google Drive Portfolio · Portfolio Presentation · Showing Portfolio to Clients'],
        ['Class 36 — Final Career Class', 'Freelancing Career Roadmap · Fiverr Strategy · Freelancer.com Strategy · Contest Strategy · Direct Client Strategy · Pricing · Client Communication · First Client Action Plan'],
      ], project: 'Final Project: Real-world Client Brief → Design → Presentation → Revision' },
    ],
  },
];

const projects = [
  ['01', 'Logo Design', 'A mark with a clear idea.', 'shape-logo', '#111111'],
  ['02', 'Business Card', 'Print-ready, detail-led.', 'shape-card', '#d80009'],
  ['03', 'Flyer', 'A message with impact.', 'shape-flyer', '#161616'],
  ['04', 'Social Media Post', 'Built to stop the scroll.', 'shape-social', '#0d386e'],
  ['05', 'Facebook Ad Creative', 'Concept that converts.', 'shape-ad', '#f0371f'],
  ['06', 'Photo Manipulation', 'Images reimagined.', 'shape-manipulation', '#15281e'],
  ['07', 'Face Retouch', 'Natural, polished portraits.', 'shape-retouch', '#4b3630'],
  ['08', 'Book Cover', 'A story before page one.', 'shape-book', '#bd191d'],
  ['09', 'T-Shirt Design', 'Wearable graphic language.', 'shape-shirt', '#232323'],
  ['10', 'Brand Identity', 'A small, complete system.', 'shape-brand', '#112c5e'],
];

const outcomes = [
  'Professional Graphic Design', 'Illustrator', 'Photoshop', 'Logo Design',
  'Social Media Design', 'Photo Manipulation', 'Face Retouching', 'Book Cover',
  'T-Shirt Design', 'Fiverr', 'Freelancer.com', 'Portfolio Building', 'Direct Client Hunting',
];

const roadmapPanel = document.querySelector('#month-panel');
const monthTabs = [...document.querySelectorAll('.month-tab')];

function renderRoadmap(monthIndex) {
  const month = roadmapMonths[monthIndex];
  roadmapPanel.classList.remove('switching');
  void roadmapPanel.offsetWidth;
  roadmapPanel.classList.add('switching');
  roadmapPanel.innerHTML = `
    <div class="panel-heading">
      <div><p>MONTH ${String(monthIndex + 1).padStart(2, '0')} / 04 WEEKS</p><h3>${month.title}</h3></div>
      <p class="panel-note">${month.note}</p>
    </div>
    <div class="weeks-grid">
      ${month.weeks.map((week) => `
        <article class="week-card">
          <div class="week-head"><h4>${week.title}</h4><span>${week.number}</span></div>
          <ul class="class-list">
            ${week.classes.map(([title, topics]) => `<li class="class-item"><span class="class-title">${title}</span><span class="class-topics">${topics}</span></li>`).join('')}
          </ul>
          <p class="week-project"><b>${week.project.split(':')[0]}:</b>${week.project.includes(':') ? week.project.substring(week.project.indexOf(':') + 1) : ''}</p>
        </article>
      `).join('')}
    </div>`;
  monthTabs.forEach((tab, index) => {
    const active = index === monthIndex;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });
  roadmapPanel.setAttribute('aria-labelledby', monthTabs[monthIndex].id);
}

monthTabs.forEach((tab) => tab.addEventListener('click', () => renderRoadmap(Number(tab.dataset.month))));
monthTabs.forEach((tab) => tab.addEventListener('keydown', (event) => {
  if (!['ArrowRight', 'ArrowLeft'].includes(event.key)) return;
  event.preventDefault();
  const direction = event.key === 'ArrowRight' ? 1 : -1;
  const next = (Number(tab.dataset.month) + direction + monthTabs.length) % monthTabs.length;
  monthTabs[next].focus();
  renderRoadmap(next);
}));

document.querySelector('#project-grid').innerHTML = projects.map(([number, title, description, shape, color]) => `
  <article class="project-card reveal" style="--project-color: ${color}">
    <span class="project-number">PROJECT / ${number}</span><span class="project-shape ${shape}"></span><h3>${title}</h3><p>${description}</p>
  </article>`).join('');

document.querySelector('#outcome-list').innerHTML = outcomes.map((outcome) => `<div class="outcome-item"><span class="outcome-check">✓</span>${outcome}</div>`).join('');
document.querySelector('#year').textContent = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
navToggle.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!open));
  navToggle.setAttribute('aria-label', open ? 'মেনু খুলুন' : 'মেনু বন্ধ করুন');
  nav.classList.toggle('open', !open);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'মেনু খুলুন');
}));

const header = document.querySelector('.site-header');
const updateHeader = () => header.classList.toggle('is-sticky', window.scrollY > 40);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

renderRoadmap(0);

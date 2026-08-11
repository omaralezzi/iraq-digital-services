import type { Locale } from "@/src/content/siteSettings";
import type { Pair } from "@/src/content/contextDemos";
import { industryImages } from "@/src/content/industryImages";

const galleries: Record<string, { accent: string; names: [Pair, Pair, Pair] }> = {
  websites: { accent: "ocean", names: [["واجهة شركة تنفيذية", "Executive corporate"], ["هوية تحريرية جريئة", "Bold editorial"], ["صفحة خدمة مركزة", "Focused service page"]] },
  "web-apps": { accent: "violet", names: [["بوابة مستخدم ذكية", "Smart user portal"], ["تطبيق هاتف سريع", "Fast mobile app"], ["لوحة SaaS تشغيلية", "Operations SaaS"]] },
  commerce: { accent: "sand", names: [["متجر منتجات راقٍ", "Premium product store"], ["طلب سريع للهاتف", "Mobile quick order"], ["لوحة تجهيز الطلبات", "Fulfilment board"]] },
  "management-systems": { accent: "steel", names: [["مركز عمليات مركزي", "Central operations hub"], ["إدارة مشاريع مرئية", "Visual project management"], ["تقارير الإدارة العليا", "Executive reporting"]] },
  "booking-crm": { accent: "aqua", names: [["حجز بمظهر هادئ", "Calm booking flow"], ["خط مبيعات حديث", "Modern sales pipeline"], ["ملف عميل موحّد", "Unified customer profile"]] },
  automation: { accent: "electric", names: [["مصمّم مرئي للمسارات", "Visual flow builder"], ["مركز تكاملات", "Integration centre"], ["سجل تشغيل تقني", "Technical run log"]] },
  "performance-care": { accent: "forest", names: [["مراقبة الأداء", "Performance monitoring"], ["مركز أمان مبسط", "Simple security centre"], ["خطة صيانة شهرية", "Monthly care plan"]] },
  clinics: { accent: "medical", names: [["عيادة عائلية دافئة", "Warm family clinic"], ["مركز طبي حديث", "Modern medical centre"], ["بوابة مراجع هادئة", "Calm patient portal"]] },
  restaurants: { accent: "copper", names: [["قائمة مقهى فاخرة", "Premium café menu"], ["مطعم سريع ملون", "Colourful quick service"], ["طلب ليلي داكن", "Dark evening ordering"]] },
  retail: { accent: "plum", names: [["متجر أزياء تحريري", "Editorial fashion store"], ["سوق منتجات محلي", "Local product market"], ["كتالوج إلكترونيات", "Electronics catalogue"]] },
  construction: { accent: "blueprint", names: [["بوابة مشروع هندسية", "Engineering project portal"], ["موقع عقاري بصري", "Visual property site"], ["متابعة موقع التنفيذ", "Site progress tracker"]] },
  consulting: { accent: "bronze", names: [["مكتب هندسي راقٍ", "Premium engineering office"], ["دراسة حالة تحريرية", "Editorial case study"], ["بوابة ملفات العملاء", "Client document portal"]] },
  travel: { accent: "sky", names: [["وكالة سفر غامرة بصريًا", "Immersive travel agency"], ["محرك مقارنة رحلات", "Trip comparison engine"], ["رحلة حجز مختصرة عبر الهاتف", "Compact mobile journey"]] },
  education: { accent: "indigo", names: [["أكاديمية تفاعلية", "Interactive academy"], ["صف دراسي هادئ", "Calm learning room"], ["مركز تدريب مؤسسي", "Corporate training hub"]] },
  maintenance: { accent: "utility", names: [["حجز خدمة منزلية", "Home-service booking"], ["لوحة توزيع الفنيين", "Technician dispatch board"], ["تتبع طلب مباشر", "Live request tracking"]] },
  distribution: { accent: "navy", names: [["بوابة وكلاء", "Dealer portal"], ["تحليلات المحافظات", "Governorate analytics"], ["كتالوج جملة", "Wholesale catalogue"]] },
  startups: { accent: "lavender", names: [["صفحة إطلاق نسخة أولية", "MVP launch page"], ["تطبيق لمنتج أولي", "Early product app"], ["لوحة تعلّم للمؤسسين", "Founder learning board"]] },
  "law-firms": { accent: "legal", names: [["مكتب قانوني مؤسسي", "Institutional law firm"], ["بوابة ملفات خاصة", "Private matter portal"], ["موقع مستشار تحريري", "Editorial counsel site"]] },
  "private-schools": { accent: "school", names: [["بوابة مدرسة حديثة", "Modern school portal"], ["تسجيل مدرسي مبسط", "Simple school admissions"], ["تطبيق ولي الأمر", "Parent companion app"]] },
  kindergartens: { accent: "kids", names: [["روضة مرحة ودافئة", "Warm playful nursery"], ["قصة اليوم للأهل", "Daily parent story"], ["صفحة تسجيل وزيارة", "Visit and enrolment page"]] },
  "medical-labs": { accent: "lab", names: [["بوابة نتائج آمنة", "Secure result portal"], ["دليل فحوصات واضح", "Clear test directory"], ["لوحة مسار العينات", "Sample workflow board"]] },
  pharmacies: { accent: "pharmacy", names: [["استعلام توافر المنتجات", "Product availability search"], ["لوحة مخزون الفروع", "Branch inventory board"], ["طلب تجهيز للهاتف", "Mobile preparation request"]] },
  "sports-clubs": { accent: "fitness", names: [["نادي رياضي جريء", "Bold fitness club"], ["جدول حصص مباشر", "Live class schedule"], ["تطبيق عضوية شخصي", "Personal membership app"]] },
  "beauty-salons": { accent: "beauty", names: [["صالون تحريري راقٍ", "Editorial beauty studio"], ["حجز خدمة وأخصائي", "Service and specialist booking"], ["واجهة باقات العناية", "Care package showcase"]] },
  accounting: { accent: "ledger", names: [["بوابة وثائق العميل", "Client document portal"], ["لوحة الإقفال الشهري", "Monthly close board"], ["تقارير مكتب تنفيذية", "Executive office reports"]] },
  architecture: { accent: "studio", names: [["استوديو معماري بصري", "Visual architecture studio"], ["بوابة مخططات واعتمادات", "Drawing approval portal"], ["دراسة مشروع تحريرية", "Editorial project case study"]] },
  recruitment: { accent: "talent", names: [["بوابة وظائف حديثة", "Modern careers portal"], ["خط مرشحين مرئي", "Visual candidate pipeline"], ["ملف مرشح مفصل", "Detailed candidate profile"]] },
  "training-institutes": { accent: "institute", names: [["معهد لغات عصري", "Modern language institute"], ["اختبار مستوى تفاعلي", "Interactive placement test"], ["بوابة متدرب مهنية", "Vocational learner portal"]] },
  automotive: { accent: "auto", names: [["معرض سيارات بصري", "Visual car showroom"], ["متابعة صيانة المركبة", "Vehicle service tracking"], ["حجز تجربة قيادة", "Test-drive booking"]] },
  logistics: { accent: "shipping", names: [["صفحة تتبع مباشرة", "Live tracking page"], ["لوحة توزيع السائقين", "Driver dispatch board"], ["بوابة شحن للشركات", "Business shipping portal"]] },
  hospitality: { accent: "hotel", names: [["فندق بطابع محلي راقٍ", "Refined local hotel"], ["محرك اختيار الغرف", "Room selection engine"], ["لوحة استقبال وإشغال", "Front-desk occupancy board"]] },
  events: { accent: "celebration", names: [["قاعة مناسبات غامرة", "Immersive event venue"], ["مقارنة باقات الحفل", "Event package comparison"], ["مخطط تجهيز المناسبة", "Event setup planner"]] },
  manufacturing: { accent: "industrial", names: [["موقع مصنع مؤسسي", "Corporate factory site"], ["لوحة خط الإنتاج", "Production line board"], ["مركز الجودة والصيانة", "Quality and maintenance centre"]] },
  insurance: { accent: "assurance", names: [["مقارنة تغطية مبسطة", "Simple coverage comparison"], ["معالج طلب عرض", "Quote request wizard"], ["بوابة متابعة المطالبة", "Claim tracking portal"]] },
  "religious-travel": { accent: "pilgrimage", names: [["برنامج زيارة يومي", "Daily pilgrimage itinerary"], ["بوابة المجموعة والمستندات", "Group and document portal"], ["حجز متخصص بطابع هادئ", "Calm specialist booking"]] },
};

const photoAssets: Record<string, string> = {
  commerce: "/demo-assets/iraqi-commerce.webp",
  restaurants: "/demo-assets/restaurant-menu.webp",
  retail: "/demo-assets/retail-products.webp",
  construction: "/demo-assets/construction-projects.webp",
  travel: "/demo-assets/travel-destinations.webp",
};

const photoSiteCopy: Record<string, {
  brand: Pair;
  eyebrow: Pair;
  headlines: [Pair, Pair, Pair];
  cta: Pair;
  nav: Pair;
  meta: [Pair, Pair, Pair];
}> = {
  commerce: {
    brand: ["سوق دجلة", "Tigris Market"], eyebrow: ["منتجات مختارة من العراق", "Selected products from Iraq"],
    headlines: [["تمور ومذاق عراقي يصلان لبابك", "Iraqi dates and flavour, delivered"], ["قهوة عربية لضيافة لا تُنسى", "Arabic coffee for memorable hosting"], ["هدية عراقية جاهزة للمناسبة", "An Iraqi gift, ready for the occasion"]],
    cta: ["تسوّق الآن", "Shop now"], nav: ["المنتجات  الهدايا  من نحن", "Products  Gifts  About"],
    meta: [["24,000 د.ع", "IQD 24,000"], ["38,000 د.ع", "IQD 38,000"], ["52,000 د.ع", "IQD 52,000"]],
  },
  restaurants: {
    brand: ["نارنج", "Naranj"], eyebrow: ["طازج يوميًا", "Made fresh daily"],
    headlines: [["قهوة هادئة بطعم الهيل", "A calm coffee with cardamom"], ["برغر دجاج بطبقات محسوبة", "A carefully layered chicken burger"], ["كنافة دافئة تُحضّر عند الطلب", "Warm kunafa made to order"]],
    cta: ["اطلب الآن", "Order now"], nav: ["القائمة  العروض  الفروع", "Menu  Offers  Locations"],
    meta: [["مشروب مميز", "Signature drink"], ["الأكثر طلبًا", "Most ordered"], ["حلوى اليوم", "Dessert of the day"]],
  },
  retail: {
    brand: ["بيت", "BAYT"], eyebrow: ["تصميم للحياة اليومية", "Designed for everyday life"],
    headlines: [["إضاءة عملية بمظهر هادئ", "Practical light with a calm profile"], ["حماية أنيقة لهاتفك", "Refined protection for your phone"], ["صوت نقي أينما كنت", "Clear sound wherever you go"]],
    cta: ["أضف للسلة", "Add to cart"], nav: ["الجديد  المنزل  التقنية", "New  Home  Tech"],
    meta: [["متوفر الآن", "In stock"], ["6 ألوان", "6 colours"], ["توصيل خلال يومين", "Delivery in two days"]],
  },
  construction: {
    brand: ["بُنيان", "BUNYAN"], eyebrow: ["نبني للمستقبل", "Built for what comes next"],
    headlines: [["بيوت حديثة بتفاصيل مدروسة", "Modern homes with considered detail"], ["تنفيذ واضح من الأرض إلى التسليم", "Clear delivery from ground to handover"], ["مشروعات عمرانية تنسجم مع المدينة", "Urban destinations made for the city"]],
    cta: ["استكشف المشروع", "Explore the project"], nav: ["المشاريع  العقارات  الشركة", "Projects  Properties  Company"],
    meta: [["مجمع سكني • بغداد", "Residential • Baghdad"], ["تحديثات تنفيذ أسبوعية", "Weekly site updates"], ["وحدات سكنية وتجارية", "Residential and retail units"]],
  },
  travel: {
    brand: ["مدى للسفر", "MADA Travel"], eyebrow: ["رحلتك تبدأ من بغداد", "Your trip starts in Baghdad"],
    headlines: [["إسطنبول كما تحب أن تراها", "Istanbul, the way you want to see it"], ["استراحة هادئة على ساحل أنطاليا", "A quiet escape on Antalya's coast"], ["عطلة دبي بخيارات واضحة", "A Dubai break with clear options"]],
    cta: ["اطلب العرض", "Request an offer"], nav: ["الوجهات  الباقات  تواصل", "Destinations  Packages  Contact"],
    meta: [["5 ليالٍ • فندق ونقل", "5 nights • hotel and transfer"], ["4 ليالٍ • إفطار", "4 nights • breakfast"], ["3 ليالٍ • رحلة عائلية", "3 nights • family trip"]],
  },
};

function PhotoWebsiteArtwork({ slug, index, ar, name }: { slug: string; index: number; ar: boolean; name: string }) {
  const copy = photoSiteCopy[slug];
  const photo = photoAssets[slug];
  const lang = ar ? 0 : 1;
  return <div className={`specialty-art photo-site site-${slug} variant-${index}`}>
    <header><b>{copy.brand[lang]}</b><span>{copy.nav[lang]}</span><i>{copy.cta[lang]}</i></header>
    <main>
      <section className="photo-site-copy"><small>{copy.eyebrow[lang]}</small><strong>{copy.headlines[index][lang]}</strong><p>{copy.meta[index][lang]}</p><button tabIndex={-1}>{copy.cta[lang]} <span>←</span></button></section>
      <div className="photo-site-media" style={{ backgroundImage: `url(${photo})`, backgroundPosition: `${index * 50}% center` }}><span>{String(index + 1).padStart(2, "0")}</span><i>{copy.meta[index][lang]}</i></div>
    </main>
    <footer><b>{name}</b><div><span></span><span></span><span></span></div></footer>
  </div>;
}

function WebsiteConceptArtwork({ index, ar, name }: { index: number; ar: boolean; name: string }) {
  if (index === 0) return <div className="specialty-art website-concept concept-corporate">
    <header><b>{ar ? "أفق للأعمال" : "OFUQ Business"}</b><span>{ar ? "الخدمات　المشاريع　عن الشركة" : "Services　Projects　Company"}</span><i>{ar ? "تحدّث معنا" : "Talk to us"}</i></header>
    <main><section><small>{ar ? "حلول للشركات العراقية" : "Solutions for Iraqi businesses"}</small><strong>{ar ? "نبني حضورًا يشرح خبرتك ويستقبل الفرص." : "A presence that explains your expertise and captures opportunities."}</strong><p>{ar ? "صفحات خدمات واضحة، وأعمال موثّقة، ونموذج طلب يجمع المعلومات الصحيحة." : "Clear services, credible work and an enquiry that captures the right details."}</p><button tabIndex={-1}>{ar ? "استعرض أعمالنا" : "View our work"}</button></section><aside><div className="project-cover"><span>{ar ? "مشروع مختار" : "Featured project"}</span><b>{ar ? "مركز أعمال بغداد" : "Baghdad Business Centre"}</b><i></i><i></i><i></i></div><footer><span><b>12</b>{ar ? "مشروعًا" : "Projects"}</span><span><b>06</b>{ar ? "قطاعات" : "Sectors"}</span></footer></aside></main>
  </div>;
  if (index === 1) return <div className="specialty-art website-concept concept-editorial">
    <header><b>NUQTA / <i>نقطة</i></b><span>01 — 03</span></header>
    <main><section><small>{ar ? "استراتيجية • تصميم • تنفيذ" : "Strategy • Design • Delivery"}</small><strong>{ar ? "أفكار واضحة، بهوية لا تُنسى." : "Clear ideas with an identity that stays."}</strong><button tabIndex={-1}>{ar ? "ابدأ مشروعًا" : "Start a project"} ↗</button></section><aside><article><span>01</span><b>{ar ? "هوية رقمية" : "Digital identity"}</b></article><article><span>02</span><b>{ar ? "تجربة مستخدم" : "User experience"}</b></article><article><span>03</span><b>{ar ? "تطوير الواجهة" : "Interface build"}</b></article></aside></main>
  </div>;
  return <div className="specialty-art website-concept concept-service">
    <header><b>{ar ? "أساس للحلول" : "ASAS Solutions"}</b><span>{ar ? "كيف نعمل　الأسئلة　تواصل" : "Process　FAQ　Contact"}</span></header>
    <main><section><small>{ar ? "خدمة واحدة • نتيجة واضحة" : "One service • Clear outcome"}</small><strong>{ar ? "موقع شركتك جاهز لاستقبال طلبات أفضل." : "Your company site, ready for better enquiries."}</strong><div className="service-points"><span>✓ {ar ? "صفحات خدمات مستقلة" : "Dedicated service pages"}</span><span>✓ {ar ? "عرض أعمال ودلائل ثقة" : "Work and trust signals"}</span><span>✓ {ar ? "نموذج طلب مخصص" : "Tailored enquiry form"}</span></div></section><aside><small>{ar ? "اطلب تقييمًا أوليًا" : "Request an initial review"}</small><label>{ar ? "نوع النشاط" : "Business type"}<i>{ar ? "شركة مقاولات" : "Construction company"}</i></label><label>{ar ? "الخدمة المطلوبة" : "Needed service"}<i>{ar ? "موقع تعريفي" : "Company website"}</i></label><button tabIndex={-1}>{ar ? "أرسل الطلب" : "Send enquiry"}</button></aside></main><footer><b>{name}</b><span>{ar ? "مدة مقترحة 4–6 أسابيع" : "Suggested timeline 4–6 weeks"}</span></footer>
  </div>;
}

const expandedSectorMarks: Record<string, string> = {
  "law-firms": "§", "private-schools": "ر", kindergartens: "✿", "medical-labs": "⚗", pharmacies: "✚", "sports-clubs": "H",
  "beauty-salons": "L", accounting: "∑", architecture: "A", recruitment: "◎", "training-institutes": "B1", automotive: "M",
  logistics: "⇢", hospitality: "D", events: "180", manufacturing: "02", insurance: "⬡", "religious-travel": "☾",
};

function ExpandedSectorArtwork({ slug, index, ar, name }: { slug: string; index: number; ar: boolean; name: string }) {
  const mark = expandedSectorMarks[slug];
  const image = industryImages[slug];
  const labels = ar ? ["الرئيسية", "الخدمات", "تواصل"] : ["Home", "Services", "Contact"];
  return <div className={`specialty-art expanded-sector-art mini-${slug} variant-${index}`}>
    <header><span className="mini-mark">{mark}</span><b>{name}</b><nav>{labels.join("　")}</nav><i>{ar ? "ابدأ" : "Start"}</i></header>
    <main>
      <section className="mini-sector-copy"><small>0{index + 1} / 03</small><strong>{name}</strong><p></p><p></p><button tabIndex={-1}>{ar ? "استكشف النموذج" : "Explore concept"}</button></section>
      <div className={`mini-sector-visual${image ? " has-photo" : ""}`} style={image ? { backgroundImage: `url(${image.src})`, backgroundPosition: `${index * 50}% center` } : undefined}><span>{mark}</span><div className="mini-ui"><i></i><i></i><i></i><b></b></div></div>
    </main>
    <footer><span>{ar ? "واجهة متخصصة" : "SPECIALIST UI"}</span><div><i></i><i></i><i></i></div></footer>
  </div>;
}

function SpecialtyArtwork({ slug, index, ar, name }: { slug: string; index: number; ar: boolean; name: string }) {
  const variant = `variant-${index}`;
  const photo = photoAssets[slug];
  if (photo) return <PhotoWebsiteArtwork slug={slug} index={index} ar={ar} name={name} />;
  if (expandedSectorMarks[slug]) return <ExpandedSectorArtwork slug={slug} index={index} ar={ar} name={name} />;
  if (slug === "websites") return <WebsiteConceptArtwork index={index} ar={ar} name={name} />;
  if (slug === "web-apps") return <div className={`specialty-art devices-art ${variant}`}><div className="device desktop"><header></header><aside></aside><main><i></i><i></i><p></p><p></p></main></div><div className="device mobile"><header></header><main><b></b><p></p><p></p><button tabIndex={-1}></button></main></div><span>{name}</span></div>;
  if (slug === "management-systems") return <div className={`specialty-art board-art ${variant}`}><header><strong>{name}</strong><i></i></header><main>{[0,1,2].map(column => <section key={column}><b></b><article></article><article></article></section>)}</main></div>;
  if (slug === "booking-crm") return <div className={`specialty-art pipeline-art ${variant}`}><aside><span>م</span><b></b><i></i><i></i><i></i></aside><main><header><strong>{name}</strong><em>CRM</em></header><div className="pipeline"><i></i><i></i><i></i><i></i></div><footer><span></span><span></span><span></span></footer></main></div>;
  if (slug === "automation") return <div className={`specialty-art flow-art ${variant}`}><header><strong>{name}</strong><span>● LIVE</span></header><main>{["✉","⌁","◎","↯"].map((icon,i) => <span key={icon}><b>{icon}</b><i></i>{i < 3 && <em>→</em>}</span>)}</main><footer><code>workflow.run → success</code></footer></div>;
  if (slug === "performance-care") return <div className={`specialty-art health-art ${variant}`}><aside><div><strong>{[96,84,99][index]}</strong><span>SCORE</span></div></aside><main><header><strong>{name}</strong><em>A</em></header>{[80,62,91].map(value => <p key={value}><b></b><i><span style={{ width: `${value}%` }}></span></i></p>)}</main></div>;
  if (slug === "clinics") return <div className={`specialty-art medical-art ${variant}`}><header><span>✚</span><strong>{name}</strong><i>{ar ? "حجز" : "Book"}</i></header><main><aside><b>16</b><small>AUG</small></aside><section>{["09:30","10:30","12:00"].map(time => <p key={time}><span>{time}</span><i></i><em>✓</em></p>)}</section></main></div>;
  if (slug === "consulting") return <div className={`specialty-art brief-art ${variant}`}><aside><strong>01</strong><span>02</span><span>03</span><span>04</span></aside><main><small>PROJECT BRIEF</small><strong>{name}</strong><p></p><p></p><div><i></i><i></i><i></i></div></main></div>;
  if (slug === "education") return <div className={`specialty-art learning-art ${variant}`}><aside><b>خ</b><span></span><span></span><span></span></aside><main><header><strong>{name}</strong><i>62%</i></header><div className="lesson-cover">▶</div><footer><p></p><p></p></footer></main></div>;
  if (slug === "maintenance") return <div className={`specialty-art map-art ${variant}`}><main><i className="road a"></i><i className="road b"></i><span className="pin home">⌂</span><span className="pin worker">⌑</span></main><aside><strong>{name}</strong><p></p><p></p><button tabIndex={-1}></button></aside></div>;
  if (slug === "distribution") return <div className={`specialty-art sales-art ${variant}`}><header><strong>{name}</strong><span>+18%</span></header><main><div className="mini-map"><i>BG</i><i>BR</i><i>NJ</i></div><div className="mini-bars"><span></span><span></span><span></span><span></span></div></main></div>;
  return <div className={`specialty-art experiment-art ${variant}`}><header><small>MVP / TEST</small><strong>{name}</strong></header><main><aside><b>{[64,78,86][index]}%</b><i><span></span></i></aside><section><p></p><p></p><p></p></section></main><footer><span>LEARN</span><span>ITERATE</span><span>SCALE</span></footer></div>;
}

export function StaticDesignGallery({ locale, slug }: { locale: Locale; slug: string }) {
  const ar = locale === "ar";
  const item = galleries[slug];
  if (!item) return null;
  const t = (pair: Pair) => pair[ar ? 0 : 1];

  return <section className={`static-design-section container gallery-${item.accent}`} aria-labelledby={`${slug}-gallery-title`}>
    <div className="static-design-heading">
      <div><span className="eyebrow">{ar ? "نماذج مواقع وواجهات إضافية" : "Additional website and interface concepts"}</span><h2 id={`${slug}-gallery-title`}>{ar ? "شاهد كيف يمكن أن يبدو المشروع كمنتج حقيقي." : "See how the project could look as a real product."}</h2></div>
      <p>{ar ? "يعرض كل نموذج صفحة أو واجهة مكتملة بتخطيط ومحتوى مناسبين للتخصص. هذه النماذج للعرض البصري، وجميع الأسماء والبيانات فيها خيالية." : "Each concept shows a complete page or interface shaped around the specialty. These are visual examples and all names and data are fictional."}</p>
    </div>
    <div className="static-design-grid">{item.names.map((name, index) => <figure key={name[1]}>
      <div className={`static-shot shot-layout-${index}`} role="img" aria-label={t(name)}>
        <div className="shot-chrome"><i></i><i></i><i></i><span>{ar ? "نموذج موقع توضيحي" : "Website concept"}</span></div>
        <SpecialtyArtwork slug={slug} index={index} ar={ar} name={t(name)} />
      </div>
      <figcaption><span>{String(index + 1).padStart(2,"0")}</span><div><b>{t(name)}</b><small>{ar ? "نموذج صفحة قابل للتخصيص حسب الهوية" : "A page concept customisable to the final brand"}</small></div><em>{ar ? "نموذج موقع" : "Website"}</em></figcaption>
    </figure>)}</div>
  </section>;
}

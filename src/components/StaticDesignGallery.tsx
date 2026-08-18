import type { Locale } from "@/src/content/siteSettings";
import type { Pair } from "@/src/content/contextDemos";
import { industryImages } from "@/src/content/industryImages";

const galleries: Record<string, { accent: string; names: [Pair, Pair, Pair] }> = {
  websites: { accent: "ocean", names: [["واجهة شركة تنفيذية", "Executive corporate", "Exekutivunternehmen"], ["هوية تحريرية جريئة", "Bold editorial", "Mutiger Leitartikel"], ["صفحة خدمة مركزة", "Focused service page", "Fokussierte Serviceseite"]] },
  "web-apps": { accent: "violet", names: [["بوابة مستخدم ذكية", "Smart user portal", "Intelligentes Benutzerportal"], ["تطبيق هاتف سريع", "Fast mobile app", "Schnelle mobile App"], ["لوحة SaaS تشغيلية", "Operations SaaS", "Betrieb SaaS"]] },
  commerce: { accent: "sand", names: [["متجر منتجات راقٍ", "Premium product store", "Premium-Produktshop"], ["طلب سريع للهاتف", "Mobile quick order", "Mobile Schnellbestellung"], ["لوحة تجهيز الطلبات", "Fulfilment board", "Erfüllungstafel"]] },
  "management-systems": { accent: "steel", names: [["مركز عمليات مركزي", "Central operations hub", "Zentraler Betriebsknotenpunkt"], ["إدارة مشاريع مرئية", "Visual project management", "Visuelles Projektmanagement"], ["تقارير الإدارة العليا", "Executive reporting", "Executive Reporting"]] },
  "booking-crm": { accent: "aqua", names: [["حجز بمظهر هادئ", "Calm booking flow", "Ruhiger Buchungsablauf"], ["خط مبيعات حديث", "Modern sales pipeline", "Moderne Vertriebspipeline"], ["ملف عميل موحّد", "Unified customer profile", "Einheitliches Kundenprofil"]] },
  automation: { accent: "electric", names: [["مصمّم مرئي للمسارات", "Visual flow builder", "Visueller Flow-Builder"], ["مركز تكاملات", "Integration centre", "Integrationszentrum"], ["سجل تشغيل تقني", "Technical run log", "Technisches Laufprotokoll"]] },
  "performance-care": { accent: "forest", names: [["مراقبة الأداء", "Performance monitoring", "Leistungsüberwachung"], ["مركز أمان مبسط", "Simple security centre", "Einfaches Sicherheitscenter"], ["خطة صيانة شهرية", "Monthly care plan", "Monatlicher Pflegeplan"]] },
  clinics: { accent: "medical", names: [["عيادة عائلية دافئة", "Warm family clinic", "Herzliche Familienklinik"], ["مركز طبي حديث", "Modern medical centre", "Modernes medizinisches Zentrum"], ["بوابة مراجع هادئة", "Calm patient portal", "Ruhiges Patientenportal"]] },
  restaurants: { accent: "copper", names: [["قائمة مقهى فاخرة", "Premium café menu", "Premium-Café-Menü"], ["مطعم سريع ملون", "Colourful quick service", "Bunter schneller Service"], ["طلب ليلي داكن", "Dark evening ordering", "Bestellung am dunklen Abend"]] },
  retail: { accent: "plum", names: [["متجر أزياء تحريري", "Editorial fashion store", "Redaktioneller Modeladen"], ["سوق منتجات محلي", "Local product market", "Lokaler Produktmarkt"], ["كتالوج إلكترونيات", "Electronics catalogue", "Elektronikkatalog"]] },
  construction: { accent: "blueprint", names: [["بوابة مشروع هندسية", "Engineering project portal", "Portal für Ingenieurprojekte"], ["موقع عقاري بصري", "Visual property site", "Visuelle Immobilienseite"], ["متابعة موقع التنفيذ", "Site progress tracker", "Website-Fortschritts-Tracker"]] },
  consulting: { accent: "bronze", names: [["مكتب هندسي راقٍ", "Premium engineering office", "Premium-Ingenieurbüro"], ["دراسة حالة تحريرية", "Editorial case study", "Redaktionelle Fallstudie"], ["بوابة ملفات العملاء", "Client document portal", "Kundendokumentenportal"]] },
  travel: { accent: "sky", names: [["وكالة سفر غامرة بصريًا", "Immersive travel agency", "Immersives Reisebüro"], ["محرك مقارنة رحلات", "Trip comparison engine", "Reisevergleichsmaschine"], ["رحلة حجز مختصرة عبر الهاتف", "Compact mobile journey", "Kompakte mobile Reise"]] },
  education: { accent: "indigo", names: [["أكاديمية تفاعلية", "Interactive academy", "Interaktive Akademie"], ["صف دراسي هادئ", "Calm learning room", "Ruhiger Lernraum"], ["مركز تدريب مؤسسي", "Corporate training hub", "Schulungszentrum für Unternehmen"]] },
  maintenance: { accent: "utility", names: [["حجز خدمة منزلية", "Home-service booking", "Home-Service-Buchung"], ["لوحة توزيع الفنيين", "Technician dispatch board", "Techniker-Versandtafel"], ["تتبع طلب مباشر", "Live request tracking", "Live-Anfrageverfolgung"]] },
  distribution: { accent: "navy", names: [["بوابة وكلاء", "Dealer portal", "Händlerportal"], ["تحليلات المحافظات", "Governorate analytics", "Gouverneursanalytik"], ["كتالوج جملة", "Wholesale catalogue", "Großhandelskatalog"]] },
  startups: { accent: "lavender", names: [["صفحة إطلاق نسخة أولية", "MVP launch page", "MVP-Startseite"], ["تطبيق لمنتج أولي", "Early product app", "Frühe Produkt-App"], ["لوحة تعلّم للمؤسسين", "Founder learning board", "Gründer-Lerntafel"]] },
  "law-firms": { accent: "legal", names: [["مكتب قانوني مؤسسي", "Institutional law firm", "Institutionelle Anwaltskanzlei"], ["بوابة ملفات خاصة", "Private matter portal", "Privatangelegenheitsportal"], ["موقع مستشار تحريري", "Editorial counsel site", "Redaktionelle Beratungsseite"]] },
  "private-schools": { accent: "school", names: [["بوابة مدرسة حديثة", "Modern school portal", "Modernes Schulportal"], ["تسجيل مدرسي مبسط", "Simple school admissions", "Einfache Schulzulassung"], ["تطبيق ولي الأمر", "Parent companion app", "Begleit-App für Eltern"]] },
  kindergartens: { accent: "kids", names: [["روضة مرحة ودافئة", "Warm playful nursery", "Warmes, verspieltes Kinderzimmer"], ["قصة اليوم للأهل", "Daily parent story", "Tägliche Elterngeschichte"], ["صفحة تسجيل وزيارة", "Visit and enrolment page", "Besuchs- und Anmeldeseite"]] },
  "medical-labs": { accent: "lab", names: [["بوابة نتائج آمنة", "Secure result portal", "Sicheres Ergebnisportal"], ["دليل فحوصات واضح", "Clear test directory", "Testverzeichnis löschen"], ["لوحة مسار العينات", "Sample workflow board", "Beispiel-Workflow-Board"]] },
  pharmacies: { accent: "pharmacy", names: [["استعلام توافر المنتجات", "Product availability search", "Suche nach Produktverfügbarkeit"], ["لوحة مخزون الفروع", "Branch inventory board", "Filialinventartafel"], ["طلب تجهيز للهاتف", "Mobile preparation request", "Mobile Vorbereitungsanfrage"]] },
  "sports-clubs": { accent: "fitness", names: [["نادي رياضي جريء", "Bold fitness club", "Mutiger Fitnessclub"], ["جدول حصص مباشر", "Live class schedule", "Live-Stundenplan"], ["تطبيق عضوية شخصي", "Personal membership app", "Persönliche Mitgliedschafts-App"]] },
  "beauty-salons": { accent: "beauty", names: [["صالون تحريري راقٍ", "Editorial beauty studio", "Redaktionelles Schönheitsstudio"], ["حجز خدمة وأخصائي", "Service and specialist booking", "Service und Fachbuchung"], ["واجهة باقات العناية", "Care package showcase", "Schaufenster für Pflegepakete"]] },
  accounting: { accent: "ledger", names: [["بوابة وثائق العميل", "Client document portal", "Kundendokumentenportal"], ["لوحة الإقفال الشهري", "Monthly close board", "Monatsabschlusstafel"], ["تقارير مكتب تنفيذية", "Executive office reports", "Berichte der Geschäftsstelle"]] },
  architecture: { accent: "studio", names: [["استوديو معماري بصري", "Visual architecture studio", "Visuelles Architekturstudio"], ["بوابة مخططات واعتمادات", "Drawing approval portal", "Zeichnungsgenehmigungsportal"], ["دراسة مشروع تحريرية", "Editorial project case study", "Fallstudie zum redaktionellen Projekt"]] },
  recruitment: { accent: "talent", names: [["بوابة وظائف حديثة", "Modern careers portal", "Modernes Karriereportal"], ["خط مرشحين مرئي", "Visual candidate pipeline", "Visuelle Kandidatenpipeline"], ["ملف مرشح مفصل", "Detailed candidate profile", "Detailliertes Kandidatenprofil"]] },
  "training-institutes": { accent: "institute", names: [["معهد لغات عصري", "Modern language institute", "Institut für moderne Sprache"], ["اختبار مستوى تفاعلي", "Interactive placement test", "Interaktiver Einstufungstest"], ["بوابة متدرب مهنية", "Vocational learner portal", "Portal für Berufsschüler"]] },
  automotive: { accent: "auto", names: [["معرض سيارات بصري", "Visual car showroom", "Visueller Autosalon"], ["متابعة صيانة المركبة", "Vehicle service tracking", "Fahrzeugserviceverfolgung"], ["حجز تجربة قيادة", "Test-drive booking", "Buchung einer Probefahrt"]] },
  logistics: { accent: "shipping", names: [["صفحة تتبع مباشرة", "Live tracking page", "Live-Tracking-Seite"], ["لوحة توزيع السائقين", "Driver dispatch board", "Fahrer-Versandtafel"], ["بوابة شحن للشركات", "Business shipping portal", "Geschäftsportal für den Versand"]] },
  hospitality: { accent: "hotel", names: [["فندق بطابع محلي راقٍ", "Refined local hotel", "Raffiniertes lokales Hotel"], ["محرك اختيار الغرف", "Room selection engine", "Raumauswahl-Engine"], ["لوحة استقبال وإشغال", "Front-desk occupancy board", "Belegungstafel an der Rezeption"]] },
  events: { accent: "celebration", names: [["قاعة مناسبات غامرة", "Immersive event venue", "Fesselnder Veranstaltungsort"], ["مقارنة باقات الحفل", "Event package comparison", "Vergleich der Veranstaltungspakete"], ["مخطط تجهيز المناسبة", "Event setup planner", "Event-Setup-Planer"]] },
  manufacturing: { accent: "industrial", names: [["موقع مصنع مؤسسي", "Corporate factory site", "Unternehmensstandort"], ["لوحة خط الإنتاج", "Production line board", "Platine für die Produktionslinie"], ["مركز الجودة والصيانة", "Quality and maintenance centre", "Qualitäts- und Wartungszentrum"]] },
  insurance: { accent: "assurance", names: [["مقارنة تغطية مبسطة", "Simple coverage comparison", "Einfacher Abdeckungsvergleich"], ["معالج طلب عرض", "Quote request wizard", "Assistent für Angebotsanfragen"], ["بوابة متابعة المطالبة", "Claim tracking portal", "Portal zur Schadensverfolgung"]] },
  "religious-travel": { accent: "pilgrimage", names: [["برنامج زيارة يومي", "Daily pilgrimage itinerary", "Täglicher Pilgerweg"], ["بوابة المجموعة والمستندات", "Group and document portal", "Gruppen- und Dokumentenportal"], ["حجز متخصص بطابع هادئ", "Calm specialist booking", "Ruhige Fachbuchung"]] },
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
    brand: ["سوق دجلة", "Tigris Market", "Tigris-Markt"], eyebrow: ["منتجات مختارة من العراق", "Selected products from Iraq", "Ausgewählte Produkte aus dem Irak"],
    headlines: [["تمور ومذاق عراقي يصلان لبابك", "Iraqi dates and flavour, delivered", "Irakische Datteln und Geschmack, geliefert"], ["قهوة عربية لضيافة لا تُنسى", "Arabic coffee for memorable hosting", "Arabischer Kaffee für einen unvergesslichen Empfang"], ["هدية عراقية جاهزة للمناسبة", "An Iraqi gift, ready for the occasion", "Ein irakisches Geschenk, passend zu diesem Anlass"]],
    cta: ["تسوّق الآن", "Shop now", "Jetzt einkaufen"], nav: ["المنتجات  الهدايا  من نحن", "Products  Gifts  About", "Produkte Geschenke Über"],
    meta: [["24,000 د.ع", "IQD 24,000", "IQD 24.000"], ["38,000 د.ع", "IQD 38,000", "IQD 38.000"], ["52,000 د.ع", "IQD 52,000", "IQD 52.000"]],
  },
  restaurants: {
    brand: ["نارنج", "Naranj", "Naranj"], eyebrow: ["طازج يوميًا", "Made fresh daily", "Täglich frisch zubereitet"],
    headlines: [["قهوة هادئة بطعم الهيل", "A calm coffee with cardamom", "Ein ruhiger Kaffee mit Kardamom"], ["برغر دجاج بطبقات محسوبة", "A carefully layered chicken burger", "Ein sorgfältig geschichteter Hähnchenburger"], ["كنافة دافئة تُحضّر عند الطلب", "Warm kunafa made to order", "Warmes Kunafa auf Bestellung"]],
    cta: ["اطلب الآن", "Order now", "Jetzt bestellen"], nav: ["القائمة  العروض  الفروع", "Menu  Offers  Locations", "Menü bietet Standorte"],
    meta: [["مشروب مميز", "Signature drink", "Signature-Getränk"], ["الأكثر طلبًا", "Most ordered", "Am meisten bestellt"], ["حلوى اليوم", "Dessert of the day", "Nachtisch des Tages"]],
  },
  retail: {
    brand: ["بيت", "BAYT", "BAYT"], eyebrow: ["تصميم للحياة اليومية", "Designed for everyday life", "Konzipiert für den Alltag"],
    headlines: [["إضاءة عملية بمظهر هادئ", "Practical light with a calm profile", "Praktische Leuchte mit ruhigem Profil"], ["حماية أنيقة لهاتفك", "Refined protection for your phone", "Raffinierter Schutz für Ihr Telefon"], ["صوت نقي أينما كنت", "Clear sound wherever you go", "Klarer Klang, wohin Sie auch gehen"]],
    cta: ["أضف للسلة", "Add to cart", "In den Warenkorb legen"], nav: ["الجديد  المنزل  التقنية", "New  Home  Tech", "Neue Heimtechnik"],
    meta: [["متوفر الآن", "In stock", "Auf Lager"], ["6 ألوان", "6 colours", "6 Farben"], ["توصيل خلال يومين", "Delivery in two days", "Lieferung in zwei Tagen"]],
  },
  construction: {
    brand: ["بُنيان", "BUNYAN", "BUNYAN"], eyebrow: ["نبني للمستقبل", "Built for what comes next", "Gebaut für das, was als nächstes kommt"],
    headlines: [["بيوت حديثة بتفاصيل مدروسة", "Modern homes with considered detail", "Moderne Häuser mit durchdachten Details"], ["تنفيذ واضح من الأرض إلى التسليم", "Clear delivery from ground to handover", "Klare Lieferung vom Boden bis zur Übergabe"], ["مشروعات عمرانية تنسجم مع المدينة", "Urban destinations made for the city", "Urbane Reiseziele für die Stadt"]],
    cta: ["استكشف المشروع", "Explore the project", "Entdecken Sie das Projekt"], nav: ["المشاريع  العقارات  الشركة", "Projects  Properties  Company", "Projects Properties Company"],
    meta: [["مجمع سكني • بغداد", "Residential • Baghdad", "Wohnen • Bagdad"], ["تحديثات تنفيذ أسبوعية", "Weekly site updates", "Wöchentliche Site-Updates"], ["وحدات سكنية وتجارية", "Residential and retail units", "Wohn- und Einzelhandelseinheiten"]],
  },
  travel: {
    brand: ["مدى للسفر", "MADA Travel", "MADA Reisen"], eyebrow: ["رحلتك تبدأ من بغداد", "Your trip starts in Baghdad", "Ihre Reise beginnt in Bagdad"],
    headlines: [["إسطنبول كما تحب أن تراها", "Istanbul, the way you want to see it", "Istanbul, wie Sie es sehen möchten"], ["استراحة هادئة على ساحل أنطاليا", "A quiet escape on Antalya's coast", "Ein ruhiger Zufluchtsort an der Küste von Antalya"], ["عطلة دبي بخيارات واضحة", "A Dubai break with clear options", "Eine Dubai-Pause mit klaren Optionen"]],
    cta: ["اطلب العرض", "Request an offer", "Fordern Sie ein Angebot an"], nav: ["الوجهات  الباقات  تواصل", "Destinations  Packages  Contact", "Reiseziele Pakete Kontakt"],
    meta: [["5 ليالٍ • فندق ونقل", "5 nights • hotel and transfer", "5 Nächte • Hotel und Transfer"], ["4 ليالٍ • إفطار", "4 nights • breakfast", "4 Nächte • Frühstück"], ["3 ليالٍ • رحلة عائلية", "3 nights • family trip", "3 Nächte • Familienausflug"]],
  },
};

function PhotoWebsiteArtwork({ slug, index, name, locale }: { slug: string; index: number; name: string; locale: Locale }) {
  const copy = photoSiteCopy[slug];
  const photo = photoAssets[slug];
  const lang = locale === "ar" ? 0 : locale === "de" ? 2 : 1;
  return <div className={`specialty-art photo-site site-${slug} variant-${index}`}>
    <header><b>{copy.brand[lang]}</b><span>{copy.nav[lang]}</span><i>{copy.cta[lang]}</i></header>
    <main>
      <section className="photo-site-copy"><small>{copy.eyebrow[lang]}</small><strong>{copy.headlines[index][lang]}</strong><p>{copy.meta[index][lang]}</p><button tabIndex={-1}>{copy.cta[lang]} <span>←</span></button></section>
      <div className="photo-site-media" style={{ backgroundImage: `url(${photo})`, backgroundPosition: `${index * 50}% center` }}><span>{String(index + 1).padStart(2, "0")}</span><i>{copy.meta[index][lang]}</i></div>
    </main>
    <footer><b>{name}</b><div><span></span><span></span><span></span></div></footer>
  </div>;
}

function WebsiteConceptArtwork({ index, ar, name, locale }: { index: number; ar: boolean; name: string; locale: Locale }) {
  if (index === 0) return <div className="specialty-art website-concept concept-corporate">
    <header><b>{ar ? "أفق للأعمال" : locale === "de" ? "OFUQ-Geschäft" : "OFUQ Business"}</b><span>{ar ? "الخدمات　المشاريع　عن الشركة" : locale === "de" ? "Leistungen　Projekte　Unternehmen" : "Services　Projects　Company"}</span><i>{ar ? "تحدّث معنا" : locale === "de" ? "Sprechen Sie mit uns" : "Talk to us"}</i></header>
    <main><section><small>{ar ? "حلول للشركات العراقية" : locale === "de" ? "Lösungen für irakische Unternehmen" : "Solutions for Iraqi businesses"}</small><strong>{ar ? "نبني حضورًا يشرح خبرتك ويستقبل الفرص." : locale === "de" ? "Eine Präsenz, die Ihr Fachwissen verdeutlicht und Chancen wahrnimmt." : "A presence that explains your expertise and captures opportunities."}</strong><p>{ar ? "صفحات خدمات واضحة، وأعمال موثّقة، ونموذج طلب يجمع المعلومات الصحيحة." : locale === "de" ? "Klare Leistungen, glaubwürdige Arbeit und eine Anfrage, die die richtigen Details erfasst." : "Clear services, credible work and an enquiry that captures the right details."}</p><button tabIndex={-1}>{ar ? "استعرض أعمالنا" : locale === "de" ? "Sehen Sie sich unsere Arbeit an" : "View our work"}</button></section><aside><div className="project-cover"><span>{ar ? "مشروع مختار" : locale === "de" ? "Ausgewähltes Projekt" : "Featured project"}</span><b>{ar ? "مركز أعمال بغداد" : locale === "de" ? "Bagdad Business Center" : "Baghdad Business Centre"}</b><i></i><i></i><i></i></div><footer><span><b>12</b>{ar ? "مشروعًا" : locale === "de" ? "Projekte" : "Projects"}</span><span><b>06</b>{ar ? "قطاعات" : locale === "de" ? "Sektoren" : "Sectors"}</span></footer></aside></main>
  </div>;
  if (index === 1) return <div className="specialty-art website-concept concept-editorial">
    <header><b>NUQTA / <i>نقطة</i></b><span>01 — 03</span></header>
    <main><section><small>{ar ? "استراتيجية • تصميم • تنفيذ" : locale === "de" ? "Strategie • Design • Umsetzung" : "Strategy • Design • Delivery"}</small><strong>{ar ? "أفكار واضحة، بهوية لا تُنسى." : locale === "de" ? "Klare Ideen mit einer Identität, die bleibt." : "Clear ideas with an identity that stays."}</strong><button tabIndex={-1}>{ar ? "ابدأ مشروعًا" : locale === "de" ? "Starten Sie ein Projekt" : "Start a project"} ↗</button></section><aside><article><span>01</span><b>{ar ? "هوية رقمية" : locale === "de" ? "Digitale Identität" : "Digital identity"}</b></article><article><span>02</span><b>{ar ? "تجربة مستخدم" : locale === "de" ? "Benutzererfahrung" : "User experience"}</b></article><article><span>03</span><b>{ar ? "تطوير الواجهة" : locale === "de" ? "Schnittstellenaufbau" : "Interface build"}</b></article></aside></main>
  </div>;
  return <div className="specialty-art website-concept concept-service">
    <header><b>{ar ? "أساس للحلول" : locale === "de" ? "ASAS-Lösungen" : "ASAS Solutions"}</b><span>{ar ? "كيف نعمل　الأسئلة　تواصل" : locale === "de" ? "Prozess　FAQ　Kontakt" : "Process　FAQ　Contact"}</span></header>
    <main><section><small>{ar ? "خدمة واحدة • نتيجة واضحة" : locale === "de" ? "Ein Service • Klares Ergebnis" : "One service • Clear outcome"}</small><strong>{ar ? "موقع شركتك جاهز لاستقبال طلبات أفضل." : locale === "de" ? "Ihre Unternehmensseite, bereit für bessere Anfragen." : "Your company site, ready for better enquiries."}</strong><div className="service-points"><span>✓ {ar ? "صفحات خدمات مستقلة" : locale === "de" ? "Spezielle Serviceseiten" : "Dedicated service pages"}</span><span>✓ {ar ? "عرض أعمال ودلائل ثقة" : locale === "de" ? "Arbeits- und Vertrauenssignale" : "Work and trust signals"}</span><span>✓ {ar ? "نموذج طلب مخصص" : locale === "de" ? "Maßgeschneidertes Anfrageformular" : "Tailored enquiry form"}</span></div></section><aside><small>{ar ? "اطلب تقييمًا أوليًا" : locale === "de" ? "Fordern Sie eine erste Bewertung an" : "Request an initial review"}</small><label>{ar ? "نوع النشاط" : locale === "de" ? "Geschäftstyp" : "Business type"}<i>{ar ? "شركة مقاولات" : locale === "de" ? "Bauunternehmen" : "Construction company"}</i></label><label>{ar ? "الخدمة المطلوبة" : locale === "de" ? "Benötigter Service" : "Needed service"}<i>{ar ? "موقع تعريفي" : locale === "de" ? "Firmenwebsite" : "Company website"}</i></label><button tabIndex={-1}>{ar ? "أرسل الطلب" : locale === "de" ? "Anfrage senden" : "Send enquiry"}</button></aside></main><footer><b>{name}</b><span>{ar ? "مدة مقترحة 4–6 أسابيع" : locale === "de" ? "Empfohlener Zeitrahmen: 4–6 Wochen" : "Suggested timeline 4–6 weeks"}</span></footer>
  </div>;
}

const expandedSectorMarks: Record<string, string> = {
  "law-firms": "§", "private-schools": "ر", kindergartens: "✿", "medical-labs": "⚗", pharmacies: "✚", "sports-clubs": "H",
  "beauty-salons": "L", accounting: "∑", architecture: "A", recruitment: "◎", "training-institutes": "B1", automotive: "M",
  logistics: "⇢", hospitality: "D", events: "180", manufacturing: "02", insurance: "⬡", "religious-travel": "☾",
};

function ExpandedSectorArtwork({ slug, index, ar, name, locale }: { slug: string; index: number; ar: boolean; name: string; locale: Locale }) {
  const mark = expandedSectorMarks[slug];
  const image = industryImages[slug];
  const labels = ar ? ["الرئيسية","الخدمات","تواصل"] : locale === "de" ? ["Startseite","Leistungen","Kontakt"] : ["Home","Services","Contact"];
  return <div className={`specialty-art expanded-sector-art mini-${slug} variant-${index}`}>
    <header><span className="mini-mark">{mark}</span><b>{name}</b><nav>{labels.join("　")}</nav><i>{ar ? "ابدأ" : locale === "de" ? "Start" : "Start"}</i></header>
    <main>
      <section className="mini-sector-copy"><small>0{index + 1} / 03</small><strong>{name}</strong><p></p><p></p><button tabIndex={-1}>{ar ? "استكشف النموذج" : locale === "de" ? "Konzept erkunden" : "Explore concept"}</button></section>
      <div className={`mini-sector-visual${image ? " has-photo" : ""}`} style={image ? { backgroundImage: `url(${image.src})`, backgroundPosition: `${index * 50}% center` } : undefined}><span>{mark}</span><div className="mini-ui"><i></i><i></i><i></i><b></b></div></div>
    </main>
    <footer><span>{ar ? "واجهة متخصصة" : locale === "de" ? "SPEZIALISTEN-UI" : "SPECIALIST UI"}</span><div><i></i><i></i><i></i></div></footer>
  </div>;
}

function SpecialtyArtwork({ slug, index, ar, name, locale }: { slug: string; index: number; ar: boolean; name: string; locale: Locale }) {
  const variant = `variant-${index}`;
  const photo = photoAssets[slug];
  if (photo) return <PhotoWebsiteArtwork slug={slug} index={index} name={name} locale={locale} />;
  if (expandedSectorMarks[slug]) return <ExpandedSectorArtwork slug={slug} index={index} ar={ar} name={name} locale={locale} />;
  if (slug === "websites") return <WebsiteConceptArtwork index={index} ar={ar} name={name} locale={locale} />;
  if (slug === "web-apps") return <div className={`specialty-art devices-art ${variant}`}><div className="device desktop"><header></header><aside></aside><main><i></i><i></i><p></p><p></p></main></div><div className="device mobile"><header></header><main><b></b><p></p><p></p><button tabIndex={-1}></button></main></div><span>{name}</span></div>;
  if (slug === "management-systems") return <div className={`specialty-art board-art ${variant}`}><header><strong>{name}</strong><i></i></header><main>{[0,1,2].map(column => <section key={column}><b></b><article></article><article></article></section>)}</main></div>;
  if (slug === "booking-crm") return <div className={`specialty-art pipeline-art ${variant}`}><aside><span>م</span><b></b><i></i><i></i><i></i></aside><main><header><strong>{name}</strong><em>CRM</em></header><div className="pipeline"><i></i><i></i><i></i><i></i></div><footer><span></span><span></span><span></span></footer></main></div>;
  if (slug === "automation") return <div className={`specialty-art flow-art ${variant}`}><header><strong>{name}</strong><span>● LIVE</span></header><main>{["✉","⌁","◎","↯"].map((icon,i) => <span key={icon}><b>{icon}</b><i></i>{i < 3 && <em>→</em>}</span>)}</main><footer><code>workflow.run → success</code></footer></div>;
  if (slug === "performance-care") return <div className={`specialty-art health-art ${variant}`}><aside><div><strong>{[96,84,99][index]}</strong><span>SCORE</span></div></aside><main><header><strong>{name}</strong><em>A</em></header>{[80,62,91].map(value => <p key={value}><b></b><i><span style={{ width: `${value}%` }}></span></i></p>)}</main></div>;
  if (slug === "clinics") return <div className={`specialty-art medical-art ${variant}`}><header><span>✚</span><strong>{name}</strong><i>{ar ? "حجز" : locale === "de" ? "Buchen" : "Book"}</i></header><main><aside><b>16</b><small>AUG</small></aside><section>{["09:30","10:30","12:00"].map(time => <p key={time}><span>{time}</span><i></i><em>✓</em></p>)}</section></main></div>;
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
  const t = (pair: Pair) => pair[locale === "ar" ? 0 : locale === "de" ? 2 : 1] ?? pair[1];

  return <section className={`static-design-section container gallery-${item.accent}`} aria-labelledby={`${slug}-gallery-title`}>
    <div className="static-design-heading">
      <div><span className="eyebrow">{ar ? "نماذج مواقع وواجهات إضافية" : locale === "de" ? "Zusätzliche Website- und Schnittstellenkonzepte" : "Additional website and interface concepts"}</span><h2 id={`${slug}-gallery-title`}>{ar ? "شاهد كيف يمكن أن يبدو المشروع كمنتج حقيقي." : locale === "de" ? "Sehen Sie, wie das Projekt als echtes Produkt aussehen könnte." : "See how the project could look as a real product."}</h2></div>
      <p>{ar ? "يعرض كل نموذج صفحة أو واجهة مكتملة بتخطيط ومحتوى مناسبين للتخصص. هذه النماذج للعرض البصري، وجميع الأسماء والبيانات فيها خيالية." : locale === "de" ? "Jedes Konzept zeigt eine vollständige Seite oder Benutzeroberfläche, die rund um das Fachgebiet gestaltet ist. Dies sind visuelle Beispiele und alle Namen und Daten sind fiktiv." : "Each concept shows a complete page or interface shaped around the specialty. These are visual examples and all names and data are fictional."}</p>
    </div>
    <div className="static-design-grid">{item.names.map((name, index) => <figure key={name[1]}>
      <div className={`static-shot shot-layout-${index}`} role="img" aria-label={t(name)}>
        <div className="shot-chrome"><i></i><i></i><i></i><span>{ar ? "نموذج موقع توضيحي" : locale === "de" ? "Website-Konzept" : "Website concept"}</span></div>
        <SpecialtyArtwork slug={slug} index={index} ar={ar} name={t(name)} locale={locale} />
      </div>
      <figcaption><span>{String(index + 1).padStart(2,"0")}</span><div><b>{t(name)}</b><small>{ar ? "نموذج صفحة قابل للتخصيص حسب الهوية" : locale === "de" ? "Ein Seitenkonzept, das an die endgültige Marke angepasst werden kann" : "A page concept customisable to the final brand"}</small></div><em>{ar ? "نموذج موقع" : locale === "de" ? "Webseite" : "Website"}</em></figcaption>
    </figure>)}</div>
  </section>;
}

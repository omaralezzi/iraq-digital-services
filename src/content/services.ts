import type { Locale } from "./siteSettings";

type Copy = Record<Locale, string>;

export type Service = {
  slug: string;
  icon: string;
  title: Copy;
  short: Copy;
  problem: Copy;
  solution: Copy;
  benefit: Copy;
  examples: Copy;
  features: Copy;
};

export const services: Service[] = [
  {
    slug: "websites",
    icon: "⌘",
    title: { ar: "المواقع والمنصات", en: "Websites & platforms", de: "Websites und Plattformen" },
    short: { ar: "مواقع تعريفية ومتاجر وتجارب رقمية سريعة وواضحة.", en: "Fast, clear company sites, stores and digital experiences.", de: "Schnelle, übersichtliche Unternehmensseiten, Stores und digitale Erlebnisse." },
    problem: { ar: "نشاطك يعتمد على الرسائل المتفرقة ولا توجد وجهة موثوقة تشرح خدمتك.", en: "Your business relies on scattered messages without a trusted digital home.", de: "Ihr Unternehmen ist auf verstreute Nachrichten ohne ein vertrauenswürdiges digitales Zuhause angewiesen." },
    solution: { ar: "موقع مخصص يشرح العرض، يجمع الطلبات ويعمل بسلاسة على الهاتف.", en: "A tailored site that explains your offer, collects enquiries and works beautifully on mobile.", de: "Eine maßgeschneiderte Website, die Ihr Angebot erklärt, Anfragen sammelt und wunderbar auf Mobilgeräten funktioniert." },
    benefit: { ar: "صورة أوضح، وصول دائم، وطلبات منظمة بدل المحادثات الضائعة.", en: "A stronger presence, 24/7 reach and organised enquiries.", de: "Eine stärkere Präsenz, 24/7-Erreichbarkeit und organisierte Anfragen." },
    examples: { ar: "موقع شركة مقاولات، عيادة، مكتب هندسي، متجر أو مركز تدريب.", en: "A contractor, clinic, engineering office, shop or training centre.", de: "Ein Auftragnehmer, eine Klinik, ein Ingenieurbüro, eine Werkstatt oder ein Schulungszentrum." },
    features: { ar: "لغتان، نماذج، صفحات خدمات، خرائط، SEO، إدارة محتوى وربط أدوات خارجية.", en: "Bilingual content, forms, service pages, maps, SEO, CMS and integrations.", de: "Zweisprachige Inhalte, Formulare, Serviceseiten, Karten, SEO, CMS und Integrationen." },
  },
  {
    slug: "web-apps",
    icon: "◫",
    title: { ar: "تطبيقات الويب والهاتف", en: "Web & mobile apps", de: "Web- und mobile Apps" },
    short: { ar: "تجارب تفاعلية تحول فكرة العمل إلى أداة قابلة للاستخدام.", en: "Interactive products that turn an idea into a useful tool.", de: "Interaktive Produkte, die eine Idee in ein nützliches Werkzeug verwandeln." },
    problem: { ar: "العمل يحتاج أكثر من صفحات ثابتة أو يعتمد على جداول وأدوات غير مترابطة.", en: "The work needs more than static pages or relies on disconnected tools.", de: "Die Arbeit erfordert mehr als statische Seiten oder ist auf nicht verbundene Tools angewiesen." },
    solution: { ar: "تطبيق ويب، ومعه تطبيق هاتف عند الاتفاق، مبني حول رحلة المستخدم الفعلية.", en: "A web app—and a mobile app when agreed—built around the real user journey.", de: "Eine Web-App – und bei Vereinbarung auch eine mobile App –, die auf der realen Benutzerreise basiert." },
    benefit: { ar: "خدمة أسرع، وتجربة أبسط، وبنية تقنية يمكن توسيعها مع نمو المشروع.", en: "Faster service, a simpler experience and room to scale.", de: "Schnellerer Service, ein einfacheres Erlebnis und Raum für Skalierung." },
    examples: { ar: "بوابة عملاء، سوق متخصص، منصة تدريب أو أداة خدمة ذاتية.", en: "Client portals, specialist marketplaces, learning platforms or self-service tools.", de: "Kundenportale, Fachmarktplätze, Lernplattformen oder Self-Service-Tools." },
    features: { ar: "حسابات، صلاحيات، إشعارات، بحث، دفع عند الاتفاق، تقارير وواجهات API.", en: "Accounts, permissions, notifications, search, optional payments, reports and APIs.", de: "Konten, Berechtigungen, Benachrichtigungen, Suche, optionale Zahlungen, Berichte und APIs." },
  },
  {
    slug: "commerce",
    icon: "◇",
    title: { ar: "المتاجر والطلبات", en: "Commerce & ordering", de: "Handel & Bestellung" },
    short: { ar: "من الكتالوج البسيط إلى متجر وطلبات منظمة حسب طريقة عملك.", en: "From a simple catalogue to structured commerce tailored to your process.", de: "Vom einfachen Katalog bis zum strukturierten Handel, der auf Ihren Prozess zugeschnitten ist." },
    problem: { ar: "الطلبات تصل بصيغ مختلفة، والأسعار والمخزون يصعب تحديثها ومتابعتها.", en: "Orders arrive in different formats while pricing and stock are hard to track.", de: "Bestellungen kommen in unterschiedlichen Formaten an, während Preise und Lagerbestände schwer zu verfolgen sind." },
    solution: { ar: "متجر أو نظام طلبات يعرض المنتجات ويوجه العميل بخطوات واضحة.", en: "A store or order system that presents products and guides customers clearly.", de: "Ein Shop- oder Bestellsystem, das Produkte präsentiert und Kunden klar führt." },
    benefit: { ar: "تقليل الأخطاء، تسريع تأكيد الطلب، ووضوح أفضل للمبيعات.", en: "Fewer errors, faster confirmations and clearer sales visibility.", de: "Weniger Fehler, schnellere Bestätigungen und klarere Verkaufstransparenz." },
    examples: { ar: "متجر محلي، موزع جملة، مطعم، قطع غيار أو طلب عروض أسعار.", en: "Local shops, distributors, restaurants, spare parts or quote requests.", de: "Lokale Geschäfte, Händler, Restaurants, Ersatzteil- oder Angebotsanfragen." },
    features: { ar: "سلة، كوبونات، مناطق توصيل، مخزون، WhatsApp، دفع عند التوفر وتقارير.", en: "Cart, coupons, delivery zones, inventory, WhatsApp, payments and reporting.", de: "Warenkorb, Coupons, Lieferzonen, Inventar, WhatsApp, Zahlungen und Berichterstattung." },
  },
  {
    slug: "management-systems",
    icon: "▦",
    title: { ar: "أنظمة الإدارة الداخلية", en: "Internal management systems", de: "Interne Managementsysteme" },
    short: { ar: "مكان مركزي للعملاء والطلبات والمهام والملفات والتقارير.", en: "One place for customers, requests, tasks, files and reporting.", de: "Ein Ort für Kunden, Anfragen, Aufgaben, Dateien und Berichte." },
    problem: { ar: "المعلومات موزعة بين الهاتف والجداول والدفاتر ولا أحد يرى الصورة كاملة.", en: "Information is split across phones, sheets and notebooks.", de: "Die Informationen sind auf Telefone, Blätter und Notizbücher verteilt." },
    solution: { ar: "لوحة إدارة بصلاحيات ومسارات عمل مبنية حسب أدوار الموظفين.", en: "A role-based dashboard and workflow designed around your staff.", de: "Ein rollenbasiertes Dashboard und ein Workflow, der auf Ihre Mitarbeiter zugeschnitten ist." },
    benefit: { ar: "قرار أسرع، متابعة أوضح، وبيانات منظمة يمكن الرجوع إليها.", en: "Faster decisions, clearer follow-up and organised records.", de: "Schnellere Entscheidungen, klarere Nachverfolgung und organisierte Aufzeichnungen." },
    examples: { ar: "إدارة عقارات، صيانة، مشاريع، مخزون، موظفين أو مستندات.", en: "Property, maintenance, project, inventory, staff or document management.", de: "Immobilien-, Wartungs-, Projekt-, Inventar-, Personal- oder Dokumentenverwaltung." },
    features: { ar: "صلاحيات، حالات، بحث، تصدير، تقارير، سجل تغييرات ونسخ احتياطية.", en: "Permissions, statuses, search, exports, reports, audit trails and backups.", de: "Berechtigungen, Status, Suche, Exporte, Berichte, Audit Trails und Backups." },
  },
  {
    slug: "booking-crm",
    icon: "◎",
    title: { ar: "الحجز ومتابعة العملاء", en: "Booking & customer follow-up", de: "Buchung und Kundenbetreuung" },
    short: { ar: "نظّم المواعيد والفرص البيعية والمتابعة من نقطة واحدة.", en: "Organise appointments, sales opportunities and follow-up in one place.", de: "Organisieren Sie Termine, Verkaufschancen und Nachbereitungen an einem Ort." },
    problem: { ar: "مواعيد متداخلة ومتابعات للعملاء قد تُنسى في أوقات ضغط العمل.", en: "Overlapping appointments and follow-ups that are easy to miss.", de: "Überlappende Termine und Folgetermine, die leicht übersehen werden können." },
    solution: { ar: "نظام حجز أو CRM مبسط يوضح حالة كل موعد وعميل.", en: "A booking system or simple CRM showing every appointment and customer status.", de: "Ein Buchungssystem oder einfaches CRM, das jeden Termin und Kundenstatus anzeigt." },
    benefit: { ar: "استجابة أسرع، وتقليل حالات الغياب، وفرص أقل ضياعًا بسبب ضعف المتابعة.", en: "Faster response, fewer no-shows and fewer lost opportunities.", de: "Schnellere Reaktion, weniger Nichterscheinen und weniger verpasste Chancen." },
    examples: { ar: "عيادة، استشارات، صالون، مكتب عقاري أو فريق مبيعات.", en: "Clinics, consultants, salons, real estate offices or sales teams.", de: "Kliniken, Berater, Salons, Immobilienbüros oder Verkaufsteams." },
    features: { ar: "تقويم، تذكير، ملفات عملاء، مراحل بيع، مهام ورسائل آلية عند الاتفاق.", en: "Calendar, reminders, customer profiles, pipelines, tasks and optional messaging.", de: "Kalender, Erinnerungen, Kundenprofile, Pipelines, Aufgaben und optionale Nachrichten." },
  },
  {
    slug: "automation",
    icon: "↯",
    title: { ar: "أتمتة الأعمال والتكاملات", en: "Automation & integrations", de: "Automatisierung und Integrationen" },
    short: { ar: "ربط الخطوات المتكررة بين النماذج وWhatsApp والبريد وCRM وAPIs.", en: "Connect repetitive steps across forms, WhatsApp, email, CRMs and APIs.", de: "Verbinden Sie sich wiederholende Schritte über Formulare, WhatsApp, E-Mail, CRMs und APIs hinweg." },
    problem: { ar: "الفريق يعيد نسخ البيانات ويرسل الرسائل ويحدث الحالات يدويًا.", en: "Teams repeatedly copy data, send messages and update statuses by hand.", de: "Immer wieder kopieren Teams manuell Daten, verschicken Nachrichten und aktualisieren den Status." },
    solution: { ar: "مسار آلي محدد بعد دراسة الأدوات والقيود الموجودة لديك.", en: "A tailored automated workflow based on your actual tools and constraints.", de: "Ein maßgeschneiderter automatisierter Workflow basierend auf Ihren tatsächlichen Tools und Einschränkungen." },
    benefit: { ar: "وقت أقل للأعمال المتكررة وأخطاء أقل ومتابعة يمكن قياسها.", en: "Less repetitive work, fewer errors and measurable follow-up.", de: "Weniger sich wiederholende Arbeiten, weniger Fehler und messbare Nachverfolgung." },
    examples: { ar: "تسجيل طلب، إشعار مسؤول، تحديث CRM، إنشاء مهمة وإعداد تقرير.", en: "Register a request, notify an owner, update a CRM, create a task and report.", de: "Registrieren Sie eine Anfrage, benachrichtigen Sie einen Eigentümer, aktualisieren Sie ein CRM, erstellen Sie eine Aufgabe und einen Bericht." },
    features: { ar: "خطافات الويب (Webhooks)، وواجهات API، والبريد، وWhatsApp عند توفره، والتصنيف، واستخدامات ذكاء اصطناعي معتمدة.", en: "Webhooks, APIs, email, supported WhatsApp flows, classification and permitted AI.", de: "Webhooks, APIs, E-Mail, unterstützte WhatsApp-Flows, Klassifizierung und zulässige KI." },
  },
  {
    slug: "performance-care",
    icon: "△",
    title: { ar: "الأداء والحماية والصيانة", en: "Performance, security & care", de: "Leistung, Sicherheit & Pflege" },
    short: { ar: "تحسين الأنظمة الحالية وحمايتها ومتابعة تشغيلها عند الاتفاق.", en: "Improve, protect and maintain existing digital systems.", de: "Bestehende digitale Systeme verbessern, schützen und warten." },
    problem: { ar: "الموقع بطيء أو قديم أو يصعب تحديثه، ولا توجد خطة واضحة للنسخ الاحتياطي.", en: "The site is slow, dated, hard to update or lacks a backup plan.", de: "Die Website ist langsam, veraltet, schwer zu aktualisieren oder es fehlt ein Backup-Plan." },
    solution: { ar: "تقييم تقني ثم خطة تحسين أو إعادة بناء محددة الأولويات.", en: "A technical assessment followed by a prioritised improvement or rebuild plan.", de: "Eine technische Bewertung, gefolgt von einem priorisierten Verbesserungs- oder Umbauplan." },
    benefit: { ar: "تجربة أفضل، مخاطر أقل، وتكاليف تطوير يمكن توقعها.", en: "A better experience, lower risk and more predictable development.", de: "Ein besseres Erlebnis, geringeres Risiko und eine vorhersehbarere Entwicklung." },
    examples: { ar: "تحسين سرعة، SEO تقني، تحديثات، مراقبة، نسخ احتياطي وترحيل استضافة.", en: "Speed, technical SEO, updates, monitoring, backups and hosting migration.", de: "Geschwindigkeit, technisches SEO, Updates, Überwachung, Backups und Hosting-Migration." },
    features: { ar: "تدقيق، إصلاحات، سياسات أمن، نسخ احتياطي، توثيق ودعم اختياري.", en: "Audits, fixes, security policies, backups, documentation and optional support.", de: "Audits, Fixes, Sicherheitsrichtlinien, Backups, Dokumentation und optionaler Support." },
  },
];

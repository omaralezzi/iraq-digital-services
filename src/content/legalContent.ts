import type { Locale } from "./siteSettings";
import { siteSettings } from "./siteSettings";

type LegalSection = { title: Record<Locale, string>; paragraphs: Record<Locale, string[]> };
export type LegalDocument = { slug: string; title: Record<Locale, string>; summary: Record<Locale, string>; sections: LegalSection[] };

const provider = `${siteSettings.provider.legalName} (${siteSettings.provider.arabicName})`;
const address = siteSettings.provider.address.join(", ");
const email = siteSettings.contact.email;

const summaries = {
  provider: { ar: "البيانات الأساسية لمزوّد الخدمات الرقمية المسؤول عن هذا الموقع.", en: "Key information about the digital-services provider responsible for this website." },
  privacy: { ar: "توضح هذه الصفحة البيانات التي نعالجها عند استخدام الموقع أو إرسال طلب، وأسباب المعالجة وحقوقك.", en: "This notice explains what data we process when you use the site or submit an enquiry, why we process it and your rights." },
  terms: { ar: "القواعد العامة للاستفسارات وعروض الأسعار وتنفيذ المشاريع الرقمية.", en: "General rules for enquiries, quotes and digital project delivery." },
  cookies: { ar: "معلومات عن التخزين المحلي والتقنيات المستخدمة على جهازك.", en: "Information about local storage and technologies used on your device." },
  withdrawal: { ar: "معلومات عامة للمستهلكين بشأن حق التراجع عن العقود المبرمة عن بُعد عندما ينطبق القانون الألماني.", en: "General consumer information about distance-contract withdrawal rights where German law applies." },
};

export const legalSources = [
  { label: "§ 5 DDG", url: "https://www.gesetze-im-internet.de/ddg/__5.html" },
  { label: "Art. 13 GDPR", url: "https://eur-lex.europa.eu/eli/reg/2016/679/art_13/oj" },
  { label: "§ 25 TDDDG", url: "https://www.gesetze-im-internet.de/ttdsg/__25.html" },
  { label: "§§ 312c, 355, 356 BGB", url: "https://www.gesetze-im-internet.de/bgb/" },
];

const commonIdentity: LegalSection = {
  title: { ar: "المسؤول عن الموقع", en: "Website operator" },
  paragraphs: {
    ar: [`المسؤول عن هذا الموقع وتقديم الخدمات هو ${provider}، ومقره ${address}.`, "تُدار الخدمات وتُنفّذ من ألمانيا، ويستهدف الموقع العملاء في العراق ودول أخرى. لا يعني ذلك وجود فرع أو شركة أو ممثل متعاقد في العراق."],
    en: [`This website and its services are operated by ${siteSettings.provider.legalName}, based at ${address}.`, "Services are managed and delivered from Germany for customers in Iraq and elsewhere. This does not imply a branch, company or contracting representative in Iraq."],
  },
};

export const legalDocuments: LegalDocument[] = [
  {
    slug: "impressum",
    title: { ar: "معلومات مزوّد الخدمة / Impressum", en: "Provider information / Impressum" },
    summary: summaries.provider,
    sections: [commonIdentity, {
      title: { ar: "التواصل", en: "Contact" },
      paragraphs: { ar: [`العنوان: ${address}.`, `البريد الإلكتروني: ${email}.`], en: [`Address: ${address}.`, `Email: ${email}.`] },
    }, {
      title: { ar: "مسؤولية المحتوى والروابط", en: "Content and external links" },
      paragraphs: {
        ar: ["نحرص على دقة محتوى الموقع وتحديثه، لكن المعلومات العامة لا تُعد عرضًا ملزمًا أو استشارة قانونية أو مالية أو طبية.", "قد تؤدي بعض الروابط إلى خدمات خارجية مسؤولة عن محتواها وسياساتها. تُذكر الخدمات الخارجية ضمن نطاق المشروع أو العقد عندما تكون جزءًا من التنفيذ."],
        en: ["We take reasonable care to keep site content accurate and current, but general information is not a binding offer or legal, financial or medical advice.", "Some links may lead to third-party services responsible for their own content and policies. Third-party services are identified in the project scope or contract when used for delivery."],
      },
    }],
  },
  {
    slug: "privacy",
    title: { ar: "سياسة الخصوصية", en: "Privacy notice" },
    summary: summaries.privacy,
    sections: [commonIdentity, {
      title: { ar: "بيانات التواصل والمشروع", en: "Enquiry and project data" },
      paragraphs: {
        ar: ["عند إرسال نموذج، نعالج الاسم وبيانات التواصل وبيانات النشاط ووصف المشروع والموقع التقريبي ومصدر الإحالة وأي معلومات تكتبها طوعًا؛ للرد على الطلب وتقييمه واتخاذ خطوات قبل التعاقد.", "الحقول الاختيارية ليست شرطًا لإرسال الطلب. يُرجى عدم إدخال كلمات مرور أو بيانات مالية أو صحية أو مستندات حساسة في النماذج العامة."],
        en: ["When you submit a form, we process your name, contact details, business information, project description, approximate location, referral source and any information you provide voluntarily, in order to respond, assess the enquiry and take requested pre-contractual steps.", "Optional fields are not required. Please do not enter passwords, financial or health data, or sensitive documents in public forms."],
      },
    }, {
      title: { ar: "الأساس القانوني والاحتفاظ", en: "Legal basis and retention" },
      paragraphs: {
        ar: ["تستند معالجة الطلبات إلى اتخاذ خطوات قبل التعاقد بناءً على طلبك، وإلى تنفيذ العقد عند إبرامه، وإلى المصلحة المشروعة في حماية الموقع ومنع إساءة الاستخدام. نستخدم بيانات الطلب للتسويق فقط بعد موافقة منفصلة.", "نحتفظ بمراسلات الطلب مدة تصل إلى 24 شهرًا من آخر تواصل، ما لم يبدأ تعاقد أو يوجب القانون مدة أطول. عند التعاقد، تُحفظ المستندات التجارية والضريبية وفق مدد الحفظ القانونية المطبقة في ألمانيا."],
        en: ["Enquiry processing is based on pre-contractual steps requested by you, contract performance where agreed, and legitimate interests in protecting the site and preventing abuse. We use enquiry data for marketing only with separate consent.", "We retain enquiry correspondence for up to 24 months after the last contact unless a contract begins or law requires a longer period. Contractual, commercial and tax records are retained for the periods required under applicable German law."],
      },
    }, {
      title: { ar: "المزوّدون ونقل البيانات", en: "Providers and data transfers" },
      paragraphs: {
        ar: ["تُستضاف صفحات الموقع ووظائفه عبر Vercel، وتُرسل إشعارات النماذج عبر Resend. ويُدار البريد المستلم عبر one.com وGoogle (Gmail). قد يعالج هؤلاء المزوّدون بيانات تقنية أو محتوى الطلب بالقدر اللازم لتقديم خدماتهم، وفق اتفاقياتهم وضماناتهم لحماية البيانات.", "قد تتم المعالجة خارج المنطقة الاقتصادية الأوروبية. نعتمد الآليات القانونية والضمانات المتاحة لدى المزوّدين، مثل قرارات الملاءمة أو البنود التعاقدية القياسية، عند انطباقها. لا نشارك الطلب مع ممثل أو مسوّق ما لم نوضح دوره ويوجد أساس قانوني مناسب."],
        en: ["The website and its functions are hosted by Vercel, and form notifications are delivered through Resend. Incoming email is handled through one.com and Google (Gmail). These providers may process technical data or enquiry content as necessary to provide their services under their data-protection terms and safeguards.", "Processing may occur outside the EEA. Where applicable, we rely on available legal transfer mechanisms and provider safeguards, such as adequacy decisions or standard contractual clauses. We do not share an enquiry with a representative or marketer unless their role is disclosed and a suitable legal basis exists."],
      },
    }, {
      title: { ar: "حقوقك والتواصل", en: "Your rights and contact" },
      paragraphs: {
        ar: [`يمكنك طلب الوصول أو التصحيح أو الحذف أو التقييد أو الاعتراض أو نقل البيانات عندما تستوفي الشروط القانونية. كما يمكنك تقديم شكوى إلى سلطة حماية البيانات المختصة. لطلبات الخصوصية راسل ${email}.`],
        en: [`Subject to the applicable legal conditions, you may request access, correction, deletion, restriction, objection or portability. You may also lodge a complaint with the competent data-protection authority. For privacy requests, email ${email}.`],
      },
    }],
  },
  {
    slug: "terms",
    title: { ar: "شروط الخدمة", en: "Terms of service" },
    summary: summaries.terms,
    sections: [commonIdentity, {
      title: { ar: "الطلب وعرض السعر", en: "Enquiries and quotes" },
      paragraphs: { ar: ["إرسال نموذج أو إجراء تواصل أولي لا يُعد قبولًا للمشروع أو عقدًا أو سعرًا نهائيًا. ينشأ الالتزام فقط بعد اعتماد عرض أو اتفاق مكتوب يحدّد النطاق والمخرجات والسعر والعملة والضرائب والجدول الزمني والدفعات.", "يوضح العرض مسؤوليات العميل عن المحتوى والموافقات، وعدد جولات التعديل، وتأثير التأخير أو تغيير النطاق."], en: ["Submitting a form or making initial contact is not project acceptance, a contract or a final price. A binding commitment arises only after a written quote or agreement defines scope, deliverables, price, currency, taxes, schedule and payments.", "The quote sets out the client’s content and approval responsibilities, revision rounds and the effect of delays or scope changes."] },
    }, {
      title: { ar: "التسليم والحقوق والخدمات الخارجية", en: "Delivery, rights and third parties" },
      paragraphs: { ar: ["تُحدَّد في الاتفاق ملكية الكود والتصميم والملفات والحسابات وبيانات الدخول وفترة الدعم وتوقيت انتقال الحقوق. وتبقى الأدوات والمكتبات والخطوط والخدمات الخارجية خاضعة لتراخيص أصحابها.", "قد تكون خدمات النطاق والاستضافة والبريد والدفع وواجهات البرمجة خدمات منفصلة أو مقدمة من أطراف أخرى. تُحدَّد التكاليف والالتزامات المتعلقة بها في العرض، ولا نضمن استمراريتها خارج نطاق التزام مكتوب."], en: ["The agreement defines ownership of code, design, files, accounts, credentials, support and when rights transfer. Third-party tools, libraries, fonts and services remain subject to their own licences.", "Domains, hosting, email, payments and APIs may be separate or third-party services. Related costs and responsibilities are set out in the quote, and availability is not guaranteed beyond a written commitment."] },
    }, {
      title: { ar: "المستهلكون والقانون الإلزامي", en: "Consumers and mandatory law" },
      paragraphs: { ar: ["إذا كان العميل مستهلكًا، تبقى جميع الحقوق الإلزامية المقررة له سارية. وتُقدَّم معلومات التراجع المطلوبة قبل إبرام عقد عن بُعد عندما ينطبق ذلك.", "لا تستبعد هذه الشروط المسؤولية التي لا يجوز قانونًا استبعادها، ولا تنتقص من حقوق المستهلك الإلزامية."], en: ["Where the client is a consumer, all mandatory consumer rights remain unaffected. Required withdrawal information is provided before a distance contract is concluded where applicable.", "These terms do not exclude liability that cannot lawfully be excluded and do not limit mandatory consumer rights."] },
    }],
  },
  {
    slug: "cookies",
    title: { ar: "ملفات الارتباط والتخزين المحلي", en: "Cookies and local storage" },
    summary: summaries.cookies,
    sections: [{ title: { ar: "التقنيات المستخدمة", en: "Technologies used" }, paragraphs: { ar: ["لا يستخدم الموقع حاليًا ملفات ارتباط إعلانية أو أدوات تحليلات تسويقية. تُحفظ تفضيلات اللغة والوضع الخفيف واقتراح تثبيت التطبيق ومسودة معالج المشروع على جهازك باستخدام التخزين المحلي أو تخزين الجلسة.", "هذه البيانات تساعد في تشغيل الخيارات التي تطلبها ولا تُستخدم لبناء ملف تسويقي. يمكنك حذفها من إعدادات المتصفح. إذا أُضيفت تقنيات غير ضرورية مستقبلًا، فلن تعمل قبل الحصول على الموافقة المطلوبة قانونًا."], en: ["The site currently uses no advertising cookies or marketing analytics. Language, lite mode, app-install prompts and the project-wizard draft are stored on your device using local or session storage.", "This data supports features you request and is not used to build a marketing profile. You can delete it in your browser settings. If non-essential technologies are added later, they will not run before any legally required consent is obtained."] } }],
  },
  {
    slug: "withdrawal",
    title: { ar: "حق التراجع للمستهلك", en: "Consumer withdrawal right" },
    summary: summaries.withdrawal,
    sections: [{ title: { ar: "متى قد ينطبق الحق؟", en: "When may it apply?" }, paragraphs: { ar: ["قد يتمتع المستهلك بحق التراجع خلال 14 يومًا عن بعض العقود المبرمة عن بُعد وفق القانون الألماني. يتوقف التطبيق الدقيق على نوع الخدمة وصفة العميل وكيفية ووقت إبرام العقد.", "إذا طلب المستهلك بدء التنفيذ خلال مدة التراجع، تُطلب منه الموافقات والإقرارات اللازمة قبل البدء. وتُقدَّم تعليمات التراجع والنموذج القانوني المناسب مع مستندات التعاقد عندما ينطبق الحق."], en: ["A consumer may have a 14-day withdrawal right for certain distance contracts under German law. The exact position depends on the service, customer status and how and when the contract is concluded.", "If a consumer asks for performance to begin during the withdrawal period, the required requests and acknowledgements are collected before work begins. The applicable withdrawal notice and model form are provided with the contract documents where the right applies."] } }],
  },
  {
    slug: "quotes",
    title: { ar: "شروط عروض الأسعار", en: "Quote terms" },
    summary: { ar: "كيف يُحدَّد نطاق العرض وسعره وصلاحيته.", en: "How quote scope, pricing and validity are defined." },
    sections: [{ title: { ar: "النطاق والسعر", en: "Scope and price" }, paragraphs: { ar: ["كل تقييم أولي غير ملزم ما لم يُذكر خلاف ذلك. يثبت السعر بعد تحديد النطاق، ويبيّن العرض العملة والضرائب والدفعات والمخرجات والافتراضات ومدة صلاحيته.", "تُقيّم الخصائص أو التعديلات الخارجة عن النطاق، وتُعتمد كتابيًا قبل تنفيذها."], en: ["An initial assessment is non-binding unless stated otherwise. Pricing is confirmed after scope definition, and the quote specifies currency, tax, payments, deliverables, assumptions and validity.", "Out-of-scope features or revisions are assessed and approved in writing before implementation."] } }],
  },
  {
    slug: "digital-projects",
    title: { ar: "شروط المشاريع الرقمية", en: "Digital project terms" },
    summary: { ar: "مراحل التنفيذ والمراجعة والقبول والدعم.", en: "Delivery, review, acceptance and support stages." },
    sections: [{ title: { ar: "التنفيذ والقبول", en: "Delivery and acceptance" }, paragraphs: { ar: ["يحدّد الاتفاق مراحل التصميم والبرمجة والاختبار ومراجعة العميل والقبول. لا تصبح المواعيد نهائية قبل تثبيت النطاق وتوفر المحتوى والموافقات المطلوبة.", "تُوثّق معايير القبول والأعطال وطلبات التغيير والنسخ الاحتياطية والحماية والصيانة وخدمات ما بعد الإطلاق لكل مشروع بحسب طبيعته."], en: ["The agreement defines design, development, testing, client review and acceptance. Dates become final only after scope, content and required approvals are confirmed.", "Acceptance criteria, defects, change requests, backups, security, maintenance and post-launch services are documented for each project according to its needs."] } }],
  },
  {
    slug: "ip-delivery",
    title: { ar: "الملكية الفكرية والتسليم", en: "IP and delivery" },
    summary: { ar: "ما يمكن تسليمه وكيف تُحدَّد حقوق الاستخدام والملكية.", en: "What may be handed over and how usage and ownership rights are defined." },
    sections: [{ title: { ar: "نطاق التسليم", en: "Handover scope" }, paragraphs: { ar: ["قد يشمل التسليم، بحسب الاتفاق، الكود وملفات التصميم وإعدادات الاستضافة والنطاق المسجل باسم العميل والحسابات والوثائق والتدريب وبيانات الدخول وفترة دعم.", "تحدد وثائق المشروع الحقوق المنقولة وتوقيت انتقالها، وتستثني حقوق الأدوات والمكتبات والخطوط والمكونات الخارجية المرخصة من أصحابها."], en: ["Depending on the agreement, handover may include code, design files, hosting configuration, a client-owned domain, accounts, documentation, training, credentials and a support period.", "Project documents define transferred rights and timing while excluding third-party tools, libraries, fonts and components governed by their own licences."] } }],
  },
];

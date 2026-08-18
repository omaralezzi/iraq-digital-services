import type { Locale } from "./siteSettings";
import { siteSettings } from "./siteSettings";

type LegalSection = { title: Record<Locale, string>; paragraphs: Record<Locale, string[]> };
export type LegalDocument = { slug: string; title: Record<Locale, string>; summary: Record<Locale, string>; sections: LegalSection[] };

const provider = `${siteSettings.provider.legalName} (${siteSettings.provider.arabicName})`;
const address = siteSettings.provider.address.join(", ");
const { domain, email, phone, whatsapp } = siteSettings.contact;

const commonIdentity: LegalSection = {
  title: { ar: "مزوّد الخدمة والطرف المتعاقد", en: "Service provider and contracting party", de: "Dienstleister und Vertragspartner" },
  paragraphs: {
    ar: [
      `يقدّم ${provider} الخدمات بصفته الشخصية كمستقل، تحت الوصف المهني «${siteSettings.provider.professionalStatus}»، ومن عنوانه في ${address}.`,
      "تُدار الخدمات وتُنفّذ من ألمانيا، وتُقدَّم للشركات وأصحاب الأعمال والمهنيين والمشاريع التجارية في العراق وألمانيا. ولا يعني تقديم الخدمة للسوق العراقي وجود شركة أو مكتب أو فرع أو ممثل متعاقد في العراق.",
    ],
    en: [
      `${siteSettings.provider.legalName} provides the services personally as an independent freelancer (${siteSettings.provider.professionalStatus}) from ${address}.`,
      "Services are managed and delivered from Germany for businesses, professionals and commercial projects in Iraq and Germany. Serving the Iraqi market does not imply an Iraqi company, office, branch or contracting representative.",
    ],
    de: [
      `${siteSettings.provider.legalName} erbringt die Leistungen persönlich als selbstständiger Freiberufler (${siteSettings.provider.professionalStatus}) von ${address} aus.`,
      "Die Leistungen werden von Deutschland aus organisiert und umgesetzt. Der Schwerpunkt liegt auf Unternehmen, Selbstständigen und gewerblichen Projekten im Irak und in Deutschland. Die Tätigkeit für den irakischen Markt begründet kein irakisches Unternehmen, Büro, keine Niederlassung und keinen bevollmächtigten Vertragspartner im Irak.",
    ],
  },
};

export const legalDocuments: LegalDocument[] = [
  {
    slug: "impressum",
    title: { ar: "معلومات مزوّد الخدمة / Impressum", en: "Provider information / Impressum", de: "Anbieterinformationen / Impressum" },
    summary: { ar: "البيانات القانونية ووسائل التواصل الخاصة بمزوّد هذا الموقع.", en: "Legal and contact information for the provider of this website.", de: "Rechtliche Hinweise und Kontaktdaten des Anbieters dieser Website." },
    sections: [{
      title: { ar: "بيانات مزوّد الخدمة", en: "Provider details", de: "Angaben zum Anbieter" },
      paragraphs: {
        ar: [
          `${provider} — ${siteSettings.provider.professionalStatus}.`,
          `العنوان: ${address}.`,
          `البريد الإلكتروني: ${email}.`,
          `الهاتف: ${phone}.`,
          `WhatsApp: ${whatsapp}.`,
          `الموقع الإلكتروني: ${domain}.`,
        ],
        en: [
          `${siteSettings.provider.legalName} — ${siteSettings.provider.professionalStatus}.`,
          `Address: ${address}.`,
          `Email: ${email}.`,
          `Telephone: ${phone}.`,
          `WhatsApp: ${whatsapp}.`,
          `Website: ${domain}.`,
        ],
        de: [
          `${siteSettings.provider.legalName} — ${siteSettings.provider.professionalStatus}.`,
          `Anschrift: ${address}.`, `E-Mail: ${email}.`, `Telefon: ${phone}.`,
          `WhatsApp: ${whatsapp}.`, `Website: ${domain}.`,
        ],
      },
    }, {
      title: { ar: "نطاق النشاط", en: "Business scope", de: "Tätigkeitsbereich" },
      paragraphs: {
        ar: ["تُقدَّم خدمات تطوير المواقع والتطبيقات والأنظمة الرقمية والأتمتة بصفة مستقلة وشخصية من ألمانيا لعملاء الأعمال في العراق وألمانيا. ولا يوجد مكتب أو فرع أو ممثل متعاقد تابع للخدمة في العراق."],
        en: ["Website, application, digital-system and automation services are provided personally on a freelance basis from Germany for business customers in Iraq and Germany. The service has no office, branch or contracting representative in Iraq."], de: ["Website-, App-, Digitalsystem- und Automatisierungsleistungen werden persönlich und freiberuflich aus Deutschland für Geschäftskunden in Deutschland und im Irak erbracht. Im Irak bestehen kein Büro, keine Niederlassung und kein bevollmächtigter Vertragspartner."],
      },
    }, {
      title: { ar: "المحتوى والروابط الخارجية", en: "Content and external links", de: "Inhalt und externe Links" },
      paragraphs: {
        ar: ["نحرص على إبقاء محتوى الموقع دقيقًا ومحدثًا، غير أن المعلومات العامة لا تُعد عرضًا ملزمًا أو استشارة قانونية أو مالية أو طبية.", "قد تقود بعض الروابط إلى خدمات تابعة لأطراف ثالثة تتحمل مسؤولية محتواها وسياساتها الخاصة."],
        en: ["Reasonable care is taken to keep the website accurate and current, but general information is not a binding offer or legal, financial or medical advice.", "Some links may lead to third-party services that remain responsible for their own content and policies."], de: ["Es wird mit angemessener Sorgfalt darauf geachtet, dass die Website korrekt und aktuell ist. Allgemeine Informationen stellen jedoch kein verbindliches Angebot oder eine rechtliche, finanzielle oder medizinische Beratung dar.","Einige Links führen möglicherweise zu Diensten Dritter, die für ihre eigenen Inhalte und Richtlinien verantwortlich bleiben."],
      },
    }],
  },
  {
    slug: "privacy",
    title: { ar: "سياسة الخصوصية", en: "Privacy notice", de: "Datenschutzhinweis" },
    summary: { ar: "توضح هذه السياسة البيانات التي نعالجها وأغراض المعالجة ومدة الاحتفاظ وحقوق أصحاب البيانات.", en: "This notice explains the data we process, why we process it, how long it is retained and your rights.", de: "In diesem Hinweis erfahren Sie, welche Daten wir verarbeiten, warum wir sie verarbeiten, wie lange sie gespeichert werden und welche Rechte Sie haben." },
    sections: [{
      title: { ar: "المسؤول عن معالجة البيانات", en: "Controller", de: "Verantwortlicher" },
      paragraphs: {
        ar: [`المسؤول عن معالجة البيانات هو ${provider}، ${address}. البريد الإلكتروني: ${email}. الهاتف وWhatsApp: ${phone}.`],
        en: [`The controller is ${siteSettings.provider.legalName}, ${address}. Email: ${email}. Telephone and WhatsApp: ${phone}.`],
        de: [`Verantwortlicher für die Datenverarbeitung ist ${siteSettings.provider.legalName}, ${address}. E-Mail: ${email}. Telefon und WhatsApp: ${phone}.`],
      },
    }, {
      title: { ar: "البيانات التي قد نجمعها", en: "Data we may collect", de: "Daten, die wir möglicherweise sammeln" },
      paragraphs: {
        ar: ["عند إرسال نموذج تواصل أو وصف مشروع، قد نعالج الاسم ورقم الهاتف وبيانات WhatsApp أو وسيلة التواصل، والبريد الإلكتروني عند تقديمه، واسم الشركة أو النشاط، ونوع الخدمة المطلوبة، ووصف المشروع، والموقع التقريبي، ومصدر الإحالة أو الزيارة، وأي معلومات أخرى يضيفها العميل طوعًا.", "يُرجى عدم إدخال كلمات مرور أو بيانات دفع أو بيانات صحية أو مستندات حساسة في النماذج العامة."],
        en: ["When you submit a contact form or project brief, we may process your name, telephone number, WhatsApp or other contact details, email where supplied, company or business information, requested service, project description, approximate location, referral or visit source and any other information you provide voluntarily.", "Please do not enter passwords, payment data, health information or sensitive documents in the public forms."], de: ["Wenn Sie ein Kontaktformular oder eine Projektbeschreibung einreichen, verarbeiten wir möglicherweise Ihren Namen, Ihre Telefonnummer, WhatsApp- oder andere Kontaktdaten, Ihre E-Mail-Adresse, sofern angegeben, Unternehmens- oder Geschäftsinformationen, den angeforderten Service, die Projektbeschreibung, Ihren ungefähren Standort, Ihre Empfehlungs- oder Besuchsquelle und alle anderen Informationen, die Sie freiwillig angeben.","Bitte geben Sie in den öffentlichen Formularen keine Passwörter, Zahlungsdaten, Gesundheitsinformationen oder sensible Dokumente ein."],
      },
    }, {
      title: { ar: "أغراض المعالجة وأسسها", en: "Purposes and legal bases", de: "Zwecke und Rechtsgrundlagen" },
      paragraphs: {
        ar: ["نستخدم البيانات للرد على الاستفسارات، وتقييم طلبات المشاريع، وإعداد عروض الأسعار، وإجراء التواصل السابق للتعاقد، وإعداد العقود وتنفيذها، وتقديم الدعم، وحماية الموقع من إساءة الاستخدام عند الحاجة.", "تستند المعالجة، بحسب الحالة، إلى اتخاذ خطوات قبل التعاقد بناءً على طلب العميل، أو تنفيذ العقد، أو الوفاء بالتزامات قانونية، أو المصلحة المشروعة في التواصل التجاري وحماية الموقع. ولا نستخدم بيانات الطلب للتسويق المباشر من دون موافقة منفصلة عندما تكون مطلوبة."],
        en: ["We use the data to respond to enquiries, assess project requests, prepare quotations, conduct pre-contractual communication, prepare and perform contracts, provide support and protect the website against misuse where necessary.", "Depending on the circumstances, processing is based on requested pre-contractual steps, contract performance, legal obligations or legitimate interests in business communication and website security. Enquiry data is not used for direct marketing without separate consent where required."], de: ["Wir nutzen die Daten zur Beantwortung von Anfragen, zur Beurteilung von Projektanfragen, zur Erstellung von Angeboten, zur Durchführung vorvertraglicher Kommunikation, zur Vorbereitung und Durchführung von Verträgen, zur Betreuung und zum Schutz der Website vor Missbrauch, soweit erforderlich.","Je nach den Umständen basiert die Verarbeitung auf angeforderten vorvertraglichen Maßnahmen, der Vertragserfüllung, rechtlichen Verpflichtungen oder berechtigten Interessen an der Geschäftskommunikation und der Sicherheit der Website. Eine Nutzung der Anfragedaten für Direktmarketing erfolgt ohne eine ggf. gesonderte Einwilligung."],
      },
    }, {
      title: { ar: "النماذج والاستضافة ومزوّدو الخدمة", en: "Forms, hosting and service providers", de: "Formulare, Hosting und Dienstleister" },
      paragraphs: {
        ar: ["تُستضاف صفحات الموقع ووظائفه عبر Vercel. وعند نجاح إرسال أحد النماذج، تُنقل بياناته إلى مزوّد البريد Resend لتسليمها إلى قناة التواصل الداخلية الخاصة بمزوّد الخدمة. قد يعالج Vercel وResend البيانات التقنية ومحتوى الطلب بالقدر اللازم لتقديم خدماتهما.", "لا تسجّل النماذج البيانات تلقائيًا في نظام CRM، ولا ترسلها تلقائيًا إلى WhatsApp. ولا يتيح الموقع حاليًا الدفع أو رفع الملفات داخل النماذج."],
        en: ["The website and its functions are hosted through Vercel. When a form submission succeeds, its contents are transmitted to the email provider Resend for delivery to the provider’s internal contact channel. Vercel and Resend may process technical data and enquiry content as necessary to provide their services.", "The forms do not automatically write data to a CRM or send it to WhatsApp. The website currently provides no payment or file-upload function in its forms."], de: ["Die Website und ihre Funktionen werden von Vercel gehostet. Wenn die Übermittlung eines Formulars erfolgreich ist, wird dessen Inhalt an den E-Mail-Anbieter „Resend“ zur Zustellung an den internen Kontaktkanal des Anbieters übermittelt. Vercel und Resend können technische Daten und Anfrageinhalte verarbeiten, soweit dies für die Bereitstellung ihrer Dienste erforderlich ist.","Die Formulare schreiben Daten nicht automatisch in ein CRM oder senden sie an WhatsApp. Die Website bietet in ihren Formularen derzeit keine Zahlungs- oder Datei-Upload-Funktion."],
      },
    }, {
      title: { ar: "الهاتف وWhatsApp والبريد الإلكتروني", en: "Telephone, WhatsApp and email", de: "Telefon, WhatsApp und E-Mail" },
      paragraphs: {
        ar: ["عند تواصلك عبر الهاتف أو البريد الإلكتروني أو WhatsApp، نعالج بيانات التواصل ومحتوى الرسالة للرد على طلبك ومتابعته. لا يرسل الموقع أي رسالة إلى WhatsApp من دون أن يبدأ المستخدم التواصل بنفسه.", "استخدام WhatsApp اختياري، وتخضع معالجة البيانات داخله وداخل خدمات البريد لشروط وسياسات الخصوصية الخاصة بمزوّدي تلك الخدمات، وقد تتم المعالجة في بلدان أخرى."],
        en: ["If you contact us by telephone, email or WhatsApp, we process your contact details and message content to respond and follow up. The website does not send anything to WhatsApp unless the user initiates contact.", "WhatsApp use is optional. Processing within WhatsApp and email services is subject to the relevant providers’ terms and privacy notices and may take place in other countries."], de: ["Wenn Sie uns per Telefon, E-Mail oder WhatsApp kontaktieren, verarbeiten wir Ihre Kontaktdaten und den Nachrichteninhalt zur Beantwortung und Nachverfolgung. Die Website sendet nichts an WhatsApp, es sei denn, der Benutzer initiiert den Kontakt.","Die Nutzung von WhatsApp ist optional. Die Verarbeitung innerhalb von WhatsApp- und E-Mail-Diensten unterliegt den Geschäftsbedingungen und Datenschutzhinweisen der jeweiligen Anbieter und kann in anderen Ländern erfolgen."],
      },
    }, {
      title: { ar: "مدة الاحتفاظ", en: "Retention", de: "Speicherdauer" },
      paragraphs: {
        ar: ["تُحذف بيانات الاستفسارات التي لا ينتج عنها تعاقد عادةً بعد نحو ستة أشهر من الانتهاء النهائي من معالجة الطلب، ما لم تستلزم المطالبات القانونية أو المتطلبات الأمنية أو الالتزامات النظامية الاحتفاظ بها لمدة أطول.", "قد تُحتفظ بيانات العقود والفواتير والسجلات المحاسبية طوال مدد الاحتفاظ النظامية المطبقة. وقد يحتفظ مزوّدو الاستضافة والبريد بسجلات تقنية وفق إعداداتهم ومددهم الضرورية لتشغيل الخدمة وحمايتها."],
        en: ["Enquiry data that does not lead to a contract is normally deleted approximately six months after the enquiry has been conclusively dealt with, unless longer retention is necessary for legal claims, security or statutory obligations.", "Contract, invoice and accounting information may be retained for the applicable statutory retention periods. Hosting and email providers may retain technical records according to their settings and the periods necessary to operate and secure their services."], de: ["Anfragendaten, die nicht zu einem Vertragsschluss führen, werden in der Regel etwa sechs Monate nach abschließender Erledigung der Anfrage gelöscht, sofern nicht eine längere Aufbewahrung aus Rechtsgründen, zur Sicherheit oder aufgrund gesetzlicher Verpflichtungen erforderlich ist.","Vertrags-, Rechnungs- und Buchhaltungsinformationen können für die geltenden gesetzlichen Aufbewahrungsfristen aufbewahrt werden. Hosting- und E-Mail-Anbieter können technische Aufzeichnungen gemäß ihren Einstellungen und den für den Betrieb und die Sicherung ihrer Dienste erforderlichen Zeiträumen aufbewahren."],
      },
    }, {
      title: { ar: "نقل البيانات", en: "International data transfers", de: "Internationale Datenübertragungen" },
      paragraphs: {
        ar: ["قد تتم معالجة بعض البيانات خارج المنطقة الاقتصادية الأوروبية، ولا سيما عند استخدام مزوّدين دوليين أو التواصل مع عملاء في العراق. عند انطباق قواعد نقل البيانات الدولية، نعتمد الآليات والضمانات القانونية المتاحة لدى المزوّد المعني."],
        en: ["Some data may be processed outside the EEA, particularly when international providers are used or when communicating with customers in Iraq. Where international-transfer rules apply, we rely on the legal mechanisms and safeguards available from the relevant provider."], de: ["Einige Daten können außerhalb des EWR verarbeitet werden, insbesondere bei der Nutzung internationaler Anbieter oder bei der Kommunikation mit Kunden im Irak. Wenn internationale Übermittlungsregeln gelten, verlassen wir uns auf die rechtlichen Mechanismen und Sicherheitsvorkehrungen des jeweiligen Anbieters."],
      },
    }, {
      title: { ar: "حقوقك", en: "Your rights", de: "Ihre Rechte" },
      paragraphs: {
        ar: [`وفق الشروط القانونية المطبقة، يمكنك طلب الوصول إلى بياناتك أو تصحيحها أو حذفها أو تقييد معالجتها، والاعتراض على المعالجة، وطلب نقل البيانات حيث ينطبق ذلك. كما يحق لك تقديم شكوى إلى سلطة حماية البيانات المختصة. لممارسة حقوقك، راسل ${email}.`],
        en: [`Subject to applicable legal conditions, you may request access, correction, deletion, restriction, objection or portability. You may also lodge a complaint with the competent data-protection authority. To exercise your rights, email ${email}.`],
        de: [`Unter den gesetzlichen Voraussetzungen können Sie Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch oder Datenübertragbarkeit verlangen. Sie können außerdem Beschwerde bei der zuständigen Datenschutzaufsichtsbehörde einlegen. Zur Ausübung Ihrer Rechte schreiben Sie an ${email}.`],
      },
    }],
  },
  {
    slug: "terms",
    title: { ar: "شروط الخدمة (B2B)", en: "Terms of service (B2B)", de: "Nutzungsbedingungen (B2B)" },
    summary: { ar: "الشروط العامة للاستفسارات وعروض الأسعار والتعاقد وتنفيذ المشاريع الرقمية للعملاء المهنيين.", en: "General terms for enquiries, quotations, contracts and digital-project delivery to professional customers.", de: "Allgemeine Geschäftsbedingungen für Anfragen, Angebote, Verträge und digitale Projektabwicklung für professionelle Kunden." },
    sections: [commonIdentity, {
      title: { ar: "النطاق المهني الحصري (B2B)", en: "B2B-only scope", de: "Ausschließlich für Geschäftskunden (B2B)" },
      paragraphs: {
        ar: ["خدماتنا موجهة حصريًا إلى الشركات وأصحاب الأعمال والتجار وروّاد الأعمال والمستقلين والمهنيين وسائر العملاء الذين يتعاقدون لأغراض تجارية أو مهنية. ولا يستهدف العرض المستهلكين الذين يطلبون الخدمات لأغراض شخصية بحتة.", "تُقدَّم الخدمات للعملاء والمشاريع المهنية والتجارية في العراق وألمانيا. ويؤكد العميل، عند طلب عرض أو إبرام عقد، أنه يتصرف ضمن نشاط تجاري أو مهني وليس بصفته مستهلكًا خاصًا."],
        en: ["Our services are offered exclusively to companies, entrepreneurs, traders, self-employed professionals, freelancers and other customers contracting for commercial or professional purposes. They are not intended for consumers purchasing for purely private purposes.", "Services are offered to business and professional customers and projects in Iraq and Germany. By requesting a quotation or entering into a contract, the customer confirms that it is acting for commercial or professional purposes and not as a private consumer."], de: ["Unsere Leistungen richten sich ausschließlich an Unternehmen, Gewerbetreibende, Selbstständige, Freiberufler und andere Kunden, die zu geschäftlichen oder beruflichen Zwecken handeln. Sie richten sich nicht an Verbraucher, die Leistungen ausschließlich für private Zwecke beziehen.","Die Leistungen werden Geschäftskunden und beruflichen Projekten in Deutschland und im Irak angeboten. Mit einer Angebotsanfrage oder einem Vertragsabschluss bestätigt der Kunde, zu geschäftlichen oder beruflichen Zwecken und nicht als privater Verbraucher zu handeln."],
      },
    }, {
      title: { ar: "الاستفسارات وعروض الأسعار وإبرام العقد", en: "Enquiries, quotations and contract formation", de: "Anfragen, Angebote und Vertragsabschluss" },
      paragraphs: {
        ar: ["لا يشكل إرسال نموذج أو إجراء تواصل أولي أو تلقي تقييم مبدئي قبولًا للمشروع أو عرضًا ملزمًا أو عقدًا. يوضح عرض السعر مدة صلاحيته والنطاق والمخرجات والسعر والعملة والضرائب والدفعات والجدول المتوقع.", "ينشأ العقد عندما يعتمد الطرفان عرضًا أو اتفاقًا مكتوبًا، أو عندما يصدر قبول مكتوب واضح وفق ما يحدده العرض. وعند التعارض، تسود الشروط الخاصة الواردة في العرض أو العقد على هذه الشروط العامة."],
        en: ["Submitting a form, making initial contact or receiving a preliminary assessment does not amount to project acceptance, a binding offer or a contract. A quotation states its validity, scope, deliverables, price, currency, taxes, payment stages and expected schedule.", "A contract is formed when the parties approve a written quotation or agreement, or when clear written acceptance is issued as specified in the quotation. If terms conflict, the specific quotation or contract prevails over these general terms."], de: ["Das Absenden eines Formulars, die Erstkontaktaufnahme oder die Einholung einer vorläufigen Einschätzung stellen weder eine Projektannahme noch ein verbindliches Angebot noch einen Vertrag dar. In einem Angebot sind Gültigkeit, Umfang, Leistungen, Preis, Währung, Steuern, Zahlungsphasen und voraussichtlicher Zeitplan angegeben.","Ein Vertrag kommt zustande, wenn die Parteien einem schriftlichen Angebot oder einer schriftlichen Vereinbarung zustimmen oder wenn eine eindeutige schriftliche Annahme erfolgt, wie im Angebot angegeben. Bei widersprüchlichen Bedingungen hat das konkrete Angebot oder der konkrete Vertrag Vorrang vor diesen Allgemeinen Geschäftsbedingungen."],
      },
    }, {
      title: { ar: "نطاق المشروع والمخرجات", en: "Project scope and deliverables", de: "Projektumfang und Ergebnisse" },
      paragraphs: {
        ar: ["يُحدد نطاق كل مشروع ومراحله ومخرجاته ومعايير القبول في العرض أو العقد. ولا تُعد الأمثلة والنماذج التوضيحية المنشورة على الموقع وعدًا بتقديم خصائص أو تصميمات بعينها ما لم تُدرج صراحةً في نطاق المشروع.", "أي خاصية أو تكامل أو لغة أو منصة أو ملف أو تدريب أو توثيق غير مذكور ضمن النطاق لا يدخل تلقائيًا في السعر أو الالتزام بالتسليم."],
        en: ["Each project’s scope, stages, deliverables and acceptance criteria are defined in the quotation or contract. Examples and demos on the website do not promise any particular feature or design unless expressly included in the project scope.", "Any feature, integration, language, platform, file, training or documentation not stated in scope is not automatically included in the price or delivery obligation."], de: ["Der Umfang, die Phasen, die zu erbringenden Leistungen und die Abnahmekriterien für jedes Projekt werden im Angebot oder Vertrag festgelegt. Beispiele und Demos auf der Website versprechen keine besonderen Funktionen oder Designs, sofern sie nicht ausdrücklich im Projektumfang enthalten sind.","Alle Funktionen, Integrationen, Sprachen, Plattformen, Dateien, Schulungen oder Dokumentationen, die nicht im Umfang angegeben sind, sind nicht automatisch im Preis oder in der Lieferverpflichtung enthalten."],
      },
    }, {
      title: { ar: "مسؤوليات العميل والمحتوى", en: "Customer responsibilities and content", de: "Verantwortlichkeiten und Inhalte des Kunden" },
      paragraphs: {
        ar: ["يلتزم العميل بتقديم المعلومات والمحتوى والمواد وبيانات الدخول والقرارات والموافقات المطلوبة في الوقت المناسب، وبضمان دقتها ومشروعية استخدامها. ويتحمل العميل مسؤولية امتلاكه الحقوق والأذونات اللازمة للنصوص والصور والعلامات والبيانات والمواد التي يزودنا بها.", "يجوز تعليق التنفيذ أو تعديل الجدول إذا تأخر العميل في تقديم المواد أو الملاحظات أو الموافقات، أو إذا ظهرت متطلبات قانونية أو تقنية لم تكن معروفة عند تحديد النطاق."],
        en: ["The customer must provide required information, content, materials, credentials, decisions and approvals on time and ensure they are accurate and lawfully usable. The customer is responsible for holding the rights and permissions needed for text, images, trade marks, data and other supplied material.", "Delivery may be paused or rescheduled if the customer delays materials, feedback or approvals, or if legal or technical requirements arise that were not known when scope was agreed."], de: ["Der Kunde muss erforderliche Informationen, Inhalte, Materialien, Nachweise, Entscheidungen und Genehmigungen rechtzeitig bereitstellen und sicherstellen, dass diese korrekt und rechtmäßig verwendbar sind. Der Kunde ist dafür verantwortlich, über die erforderlichen Rechte und Genehmigungen an Texten, Bildern, Marken, Daten und anderen bereitgestellten Materialien zu verfügen.","Die Lieferung kann ausgesetzt oder verschoben werden, wenn der Kunde mit Materialien, Rückmeldungen oder Genehmigungen in Verzug gerät oder wenn sich rechtliche oder technische Anforderungen ergeben, die zum Zeitpunkt der Vereinbarung des Umfangs nicht bekannt waren."],
      },
    }, {
      title: { ar: "المواعيد والمراجعات وتغيير النطاق", en: "Timelines, revisions and scope changes", de: "Zeitpläne, Überarbeitungen und Umfangsänderungen" },
      paragraphs: {
        ar: ["لا تصبح المواعيد نهائية إلا بعد تثبيت النطاق، واستلام المواد اللازمة، واعتماد العرض. ويُعدّل الجدول بصورة معقولة عند التأخر الناتج عن العميل أو عن خدمات خارجية أو ظروف لا يمكن التحكم فيها بصورة معقولة.", "يحدد العرض عدد جولات المراجعة المشمولة. وتُقيّم طلبات التغيير أو الأعمال الإضافية أو إعادة العمل الناتجة عن تغيير تعليمات معتمدة بصورة منفصلة، ولا تُنفّذ إلا بعد الاتفاق على أثرها في السعر والمدة."],
        en: ["Dates become final only after scope is confirmed, required materials are received and the quotation is approved. The schedule may be reasonably adjusted for delays caused by the customer, third-party services or circumstances beyond reasonable control.", "The quotation defines included revision rounds. Change requests, additional work or rework caused by changes to approved instructions are assessed separately and carried out only after their effect on price and timing is agreed."], de: ["Die Termine werden erst dann endgültig, wenn der Umfang bestätigt, die erforderlichen Materialien eingegangen sind und das Angebot genehmigt wurde. Der Zeitplan kann angemessen angepasst werden, um Verzögerungen zu berücksichtigen, die durch den Kunden, Leistungen Dritter oder Umstände verursacht werden, die außerhalb der angemessenen Kontrolle liegen.","Das Angebot definiert die enthaltenen Revisionsrunden. Änderungswünsche, Mehrarbeiten oder Nacharbeiten, die durch Änderungen genehmigter Anweisungen verursacht werden, werden gesondert beurteilt und erst nach Vereinbarung ihrer Auswirkungen auf Preis und Termin ausgeführt."],
      },
    }, {
      title: { ar: "الأسعار والعملة والدفعات", en: "Prices, currency and payments", de: "Preise, Währung und Zahlungen" },
      paragraphs: {
        ar: ["تُحدد الأسعار والعملة والضرائب المحتملة والدفعات المرحلية وتواريخ الاستحقاق في كل عرض أو عقد. ولا توجد أسعار عامة أو عملة أو خطة دفع واحدة تنطبق على جميع المشاريع.", "يجوز ربط بدء مرحلة أو تسليم مخرج بسداد الدفعة المتفق عليها. وتُعالج المصروفات أو التراخيص أو الخدمات الخارجية غير المشمولة في العرض بعد موافقة العميل."],
        en: ["Prices, currency, applicable taxes, payment stages and due dates are specified in each quotation or contract. No single public price, currency or payment plan applies to every project.", "The start of a stage or release of a deliverable may depend on the agreed payment. Expenses, licences or third-party services outside the quotation are handled after customer approval."], de: ["Preise, Währung, geltende Steuern, Zahlungsphasen und Fälligkeitstermine sind in jedem Angebot oder Vertrag angegeben. Für jedes Projekt gilt kein einheitlicher öffentlicher Preis, keine einheitliche Währung oder kein einheitlicher Zahlungsplan.","Der Beginn einer Phase oder die Freigabe einer Leistung kann von der vereinbarten Zahlung abhängen. Spesen, Lizenzen oder Leistungen Dritter außerhalb des Angebots werden nach Zustimmung des Kunden abgewickelt."],
      },
    }, {
      title: { ar: "النطاق والاستضافة والبريد والخدمات الخارجية", en: "Domains, hosting, email and third-party services", de: "Domains, Hosting, E-Mail und Dienste von Drittanbietern" },
      paragraphs: {
        ar: ["قد تشمل المشاريع، عند الاتفاق، تسجيل النطاق أو إعداد الاستضافة أو البريد المهني أو خدمات API أو الدفع أو الخرائط أو الرسائل أو خدمات أخرى مقدمة من أطراف ثالثة. تحدد وثائق المشروع من يملك الحساب، ومن يدفع الرسوم، ومن يتولى التجديد والإدارة.", "تخضع الخدمات الخارجية لشروط مزوّديها وتوافرها وسياساتها وأسعارها. ولا نضمن استمرار خدمة خارجية أو ثبات واجهتها أو سعرها، لكننا نلتزم بتنفيذ ما يقع ضمن مسؤوليتنا وبإبلاغ العميل بالمشكلات الجوهرية المعروفة."],
        en: ["Where agreed, projects may include domain registration, hosting, business email, APIs, payments, maps, messaging or other third-party services. Project documents state who owns the account, pays fees and handles renewal and administration.", "Third-party services are subject to their providers’ terms, availability, policies and pricing. We do not guarantee that an external service, interface or price will remain unchanged, but remain responsible for our agreed work and will notify the customer of known material issues."], de: ["Sofern vereinbart, können Projekte Domainregistrierung, Hosting, geschäftliche E-Mail, APIs, Zahlungen, Karten, Messaging oder andere Dienste Dritter umfassen. In den Projektdokumenten ist angegeben, wer Eigentümer des Kontos ist, Gebühren zahlt und sich um die Erneuerung und Verwaltung kümmert.","Für Dienste Dritter gelten die Bedingungen, Verfügbarkeit, Richtlinien und Preise ihrer Anbieter. Wir garantieren nicht, dass eine externe Dienstleistung, Schnittstelle oder ein Preis unverändert bleibt, bleiben jedoch für unsere vereinbarten Arbeiten verantwortlich und werden den Kunden über bekannte wesentliche Probleme informieren."],
      },
    }, {
      title: { ar: "التراخيص والملكية والتسليم", en: "Licences, ownership and handover", de: "Lizenzen, Eigentum und Übergabe" },
      paragraphs: {
        ar: ["يحدد العقد حقوق استخدام أو ملكية الكود والتصميم والمحتوى وملفات المصدر، ووقت انتقال تلك الحقوق، وما إذا كان الانتقال مشروطًا بسداد المبالغ المستحقة. وتبقى المكتبات والخطوط والقوالب والأدوات والمكونات الخارجية خاضعة لتراخيص أصحابها.", "عند الاتفاق، يشمل التسليم الملفات أو الحسابات أو بيانات الدخول أو الوثائق أو التدريب المحدد. ولا تُسلّم أسرار مزوّد الخدمة أو حساباته الداخلية أو تراخيصه غير القابلة للنقل."],
        en: ["The contract defines usage or ownership rights in code, design, content and source files, when those rights transfer and whether transfer depends on payment. Libraries, fonts, templates, tools and third-party components remain subject to their respective licences.", "Where agreed, handover includes specified files, accounts, credentials, documentation or training. Provider secrets, internal accounts and non-transferable licences are not handed over."], de: ["Der Vertrag definiert Nutzungs- oder Eigentumsrechte an Code, Design, Inhalten und Quelldateien, wann diese Rechte übertragen werden und ob die Übertragung von einer Zahlung abhängig ist. Bibliotheken, Schriftarten, Vorlagen, Tools und Komponenten von Drittanbietern unterliegen weiterhin ihren jeweiligen Lizenzen.","Sofern vereinbart, umfasst die Übergabe bestimmte Dateien, Konten, Zeugnisse, Dokumentationen oder Schulungen. Anbietergeheimnisse, interne Konten und nicht übertragbare Lizenzen werden nicht weitergegeben."],
      },
    }, {
      title: { ar: "الدعم والصيانة والانقطاعات", en: "Support, maintenance and interruptions", de: "Support, Wartung und Unterbrechungen" },
      paragraphs: {
        ar: ["لا يشمل المشروع دعمًا أو صيانة أو مراقبة أو نسخًا احتياطيًا مستمرًا إلا إذا نُص على ذلك في العرض أو العقد. وتُحدد مدة الدعم ونطاقه وأوقات الاستجابة بصورة منفصلة.", "قد تتأثر الخدمات بانقطاعات أو تغييرات لدى مزوّدي الاستضافة أو النطاق أو البريد أو واجهات API. نتعامل مع ما يقع ضمن نطاق مسؤوليتنا المتفق عليها، ولا نتحمل مسؤولية أعمال المزوّد الخارجي إلا بالقدر الذي ينسب فيه الضرر قانونًا إلى إخلال من جانبنا."],
        en: ["A project includes no continuing support, maintenance, monitoring or backups unless stated in the quotation or contract. Any support period, scope and response targets are agreed separately.", "Services may be affected by outages or changes at hosting, domain, email or API providers. We address matters within our agreed responsibility and are not responsible for an external provider’s acts except to the extent that applicable law attributes loss to our own breach."], de: ["Ein Projekt beinhaltet keinen fortlaufenden Support, Wartung, Überwachung oder Backups, sofern dies nicht im Angebot oder Vertrag angegeben ist. Eventueller Supportzeitraum, Umfang und Reaktionsziele werden gesondert vereinbart.","Dienste können durch Ausfälle oder Änderungen bei Hosting-, Domain-, E-Mail- oder API-Anbietern beeinträchtigt werden. Wir kümmern uns um Angelegenheiten im Rahmen unserer vereinbarten Verantwortung und sind nicht für die Handlungen eines externen Anbieters verantwortlich, es sei denn, das geltende Recht führt den Verlust auf unseren eigenen Verstoß zurück."],
      },
    }, {
      title: { ar: "المسؤولية والقانون المطبق", en: "Liability and applicable law", de: "Haftung und anwendbares Recht" },
      paragraphs: {
        ar: ["تخضع المسؤولية للقانون المطبق وللاتفاق الخاص بالمشروع. ولا تستبعد هذه الشروط أي مسؤولية لا يجوز استبعادها قانونًا، بما في ذلك المسؤولية عن الفعل العمدي أو الإهمال الجسيم أو الأضرار التي تمس الحياة أو السلامة الجسدية حيث تنطبق القواعد ذات الصلة.", "يجوز للعرض أو العقد تحديد القانون المطبق ومكان التنفيذ والاختصاص القضائي بما يسمح به القانون. وتبقى قواعد القانون الدولي الخاص والاختصاص الإلزامي وأي أحكام آمرة واجبة التطبيق دون مساس."],
        en: ["Liability is governed by applicable law and the project-specific agreement. These terms do not exclude liability that cannot lawfully be excluded, including liability for intent, gross negligence or injury to life or physical integrity where the relevant rules apply.", "The quotation or contract may specify applicable law, place of performance and jurisdiction to the extent permitted by law. Mandatory conflict-of-laws rules, jurisdiction rules and other overriding provisions remain unaffected."], de: ["Die Haftung richtet sich nach geltendem Recht und der projektspezifischen Vereinbarung. Diese Bedingungen schließen eine Haftung nicht aus, die gesetzlich nicht ausgeschlossen werden kann, einschließlich der Haftung für Vorsatz, grobe Fahrlässigkeit oder Verletzung des Lebens oder der körperlichen Unversehrtheit, sofern die entsprechenden Regeln gelten.","Im Angebot oder Vertrag können anwendbares Recht, Erfüllungsort und Gerichtsstand im gesetzlich zulässigen Umfang angegeben werden. Zwingende Kollisionsnormen, Zuständigkeitsregeln und sonstige zwingende Bestimmungen bleiben unberührt."],
      },
    }],
  },
  {
    slug: "cookies",
    title: { ar: "ملفات الارتباط والتخزين المحلي", en: "Cookies and local storage", de: "Cookies und lokale Speicherung" },
    summary: { ar: "معلومات عن التخزين الوظيفي المستخدم على جهازك وعدم وجود أدوات تتبع إعلانية حاليًا.", en: "Information about functional browser storage and the current absence of advertising trackers.", de: "Informationen zum funktionsfähigen Browser-Speicher und zum aktuellen Fehlen von Werbe-Trackern." },
    sections: [{
      title: { ar: "التقنيات المستخدمة حاليًا", en: "Technologies currently used", de: "Derzeit verwendete Technologien" },
      paragraphs: {
        ar: ["لا يستخدم الموقع حاليًا Google Analytics أو Meta Pixel أو ملفات ارتباط إعلانية أو أدوات تحليلات تسويقية.", "يستخدم الموقع التخزين المحلي لحفظ اللغة المفضلة والوضع الخفيف ورمز الإحالة وإجابات معالج المشروع غير المرسلة. ويستخدم تخزين الجلسة لتذكّر إغلاق اقتراح اللغة أو التثبيت خلال الجلسة. كما قد يحفظ عامل الخدمة صفحات عامة في ذاكرة المتصفح لتوفير الوصول عند ضعف الاتصال."],
        en: ["The website currently uses no Google Analytics, Meta Pixel, advertising cookies or marketing-analytics tools.", "Local storage is used for the preferred language, lite mode, referral code and unsent project-wizard answers. Session storage remembers dismissal of the language or installation prompt during the session. A service worker may also cache public pages in the browser for access during a poor connection."], de: ["Die Website verwendet derzeit kein Google Analytics, Meta Pixel, Werbecookies oder Marketinganalysetools.","Der lokale Speicher wird für die bevorzugte Sprache, den Lite-Modus, den Empfehlungscode und nicht gesendete Antworten des Projektassistenten verwendet. Der Sitzungsspeicher speichert das Verwerfen der Sprach- oder Installationsaufforderung während der Sitzung. Ein Servicemitarbeiter kann auch öffentliche Seiten im Browser zwischenspeichern, um bei einer schlechten Verbindung darauf zugreifen zu können."],
      },
    }, {
      title: { ar: "الغرض والتحكم", en: "Purpose and control", de: "Zweck und Kontrolle" },
      paragraphs: {
        ar: ["يُستخدم هذا التخزين لتقديم وظائف يطلبها المستخدم أو يتوقعها، ولا يُستخدم لبناء ملف إعلاني. ويمكن حذف البيانات المخزنة وذاكرة الموقع من إعدادات المتصفح، مع ملاحظة أن بعض التفضيلات أو المسودة المحلية ستُفقد.", "لا نعرض نافذة موافقة لمجرد الشكل. وإذا أُضيفت مستقبلًا تقنيات غير ضرورية تتطلب الموافقة، فلن تُفعّل قبل تقديم المعلومات والحصول على الموافقة المطلوبة قانونًا."],
        en: ["This storage supports functions requested or expected by the user and is not used to build an advertising profile. Stored data and the site cache can be cleared in browser settings, although local preferences or an unsent draft will then be lost.", "We do not show a consent banner merely for appearance. If non-essential technologies requiring consent are added later, they will not be activated before the required information and consent are provided."], de: ["Dieser Speicher unterstützt vom Nutzer gewünschte oder erwartete Funktionen und dient nicht der Erstellung eines Werbeprofils. Gespeicherte Daten und der Site-Cache können in den Browsereinstellungen gelöscht werden, allerdings gehen dann lokale Einstellungen oder ein nicht gesendeter Entwurf verloren.","Wir zeigen ein Einwilligungsbanner nicht nur zum bloßen Erscheinungsbild an. Sollten zu einem späteren Zeitpunkt nicht unbedingt einwilligungspflichtige Technologien hinzugefügt werden, werden diese nicht vor der Bereitstellung der erforderlichen Informationen und Einwilligungen aktiviert."],
      },
    }],
  },
  {
    slug: "quotes",
    title: { ar: "شروط عروض الأسعار", en: "Quotation terms", de: "Angebotsbedingungen" },
    summary: { ar: "كيفية تحديد نطاق العرض وسعره وعملته ودفعاته وصلاحيته.", en: "How quotation scope, price, currency, payment stages and validity are defined.", de: "Wie Angebotsumfang, Preis, Währung, Zahlungsschritte und Gültigkeit definiert werden." },
    sections: [{
      title: { ar: "العرض والنطاق", en: "Quotation and scope", de: "Angebot und Umfang" },
      paragraphs: {
        ar: ["كل تقييم أو نقاش أولي غير ملزم ما لم يُذكر خلاف ذلك كتابةً. يوضح عرض السعر نطاق العمل والمخرجات والافتراضات والاستثناءات والمدة التقديرية وفترة صلاحيته.", "يحدد العرض السعر والعملة والضرائب المحتملة والدفعات وتواريخ الاستحقاق. وتُقيّم الأعمال الخارجة عن النطاق وتُعتمد كتابةً قبل تنفيذها."],
        en: ["Every preliminary assessment or discussion is non-binding unless expressly stated otherwise in writing. The quotation describes scope, deliverables, assumptions, exclusions, estimated timing and its validity period.", "The quotation states price, currency, applicable taxes, payment stages and due dates. Out-of-scope work is assessed and approved in writing before it is carried out."], de: ["Jede vorläufige Beurteilung oder Besprechung ist unverbindlich, sofern nicht ausdrücklich schriftlich etwas anderes vereinbart wurde. Das Angebot beschreibt den Umfang, die zu erbringenden Leistungen, Annahmen, Ausschlüsse, den voraussichtlichen Zeitpunkt und seine Gültigkeitsdauer.","Im Angebot sind Preis, Währung, geltende Steuern, Zahlungsphasen und Fälligkeitstermine aufgeführt. Außerhalb des Leistungsumfangs liegende Arbeiten werden vor ihrer Ausführung bewertet und schriftlich genehmigt."],
      },
    }],
  },
  {
    slug: "digital-projects",
    title: { ar: "شروط المشاريع الرقمية", en: "Digital project terms", de: "Bedingungen für digitale Projekte" },
    summary: { ar: "مراحل التنفيذ والتعاون والمراجعة والقبول والتغيير والدعم.", en: "Delivery stages, cooperation, review, acceptance, changes and support.", de: "Lieferphasen, Zusammenarbeit, Überprüfung, Abnahme, Änderungen und Unterstützung." },
    sections: [{
      title: { ar: "التنفيذ والتعاون", en: "Delivery and cooperation", de: "Lieferung und Zusammenarbeit" },
      paragraphs: {
        ar: ["يحدد الاتفاق مراحل البحث أو التصميم أو البرمجة أو الاختبار، ومسؤوليات الطرفين، والمحتوى والموافقات المطلوبة. وتتوقف المواعيد على تعاون العميل وتوفير المواد والقرارات في وقتها.", "يجري التواصل والمراجعة عبر القنوات المتفق عليها. وعلى العميل فحص المخرجات وتقديم الملاحظات ضمن المدة المحددة حتى لا يتأثر الجدول."],
        en: ["The agreement defines research, design, development and testing stages, the parties’ responsibilities and required content and approvals. Timing depends on the customer’s cooperation and timely provision of materials and decisions.", "Communication and review take place through agreed channels. The customer must examine deliverables and provide feedback within the stated period to avoid affecting the schedule."], de: ["Die Vereinbarung definiert Forschungs-, Design-, Entwicklungs- und Testphasen, die Verantwortlichkeiten der Parteien sowie erforderliche Inhalte und Genehmigungen. Der Zeitpunkt hängt von der Mitarbeit des Kunden und der rechtzeitigen Bereitstellung von Materialien und Entscheidungen ab.","Kommunikation und Überprüfung erfolgen über vereinbarte Kanäle. Der Kunde muss die zu erbringenden Leistungen prüfen und innerhalb der angegebenen Frist Feedback geben, um eine Beeinträchtigung des Zeitplans zu vermeiden."],
      },
    }, {
      title: { ar: "القبول والتغييرات والدعم", en: "Acceptance, changes and support", de: "Akzeptanz, Veränderungen und Unterstützung" },
      paragraphs: {
        ar: ["تُحدد معايير القبول وطريقة تسجيل الأعطال ومعالجتها في وثائق المشروع. ولا يُعد طلب خاصية جديدة أو تغيير قرار معتمد إصلاحًا لعطل، بل قد يكون تغييرًا في النطاق.", "تُوثق طلبات التغيير وأثرها في السعر والمدة. ويقتصر الدعم والصيانة والنسخ الاحتياطي وخدمات ما بعد الإطلاق على ما يرد صراحةً في الاتفاق."],
        en: ["Project documents define acceptance criteria and how defects are reported and addressed. A new feature request or change to an approved decision is not a defect fix and may constitute a scope change.", "Change requests and their effect on price and timing are documented. Support, maintenance, backups and post-launch services are limited to what is expressly included in the agreement."], de: ["Projektdokumente legen Akzeptanzkriterien fest und legen fest, wie Mängel gemeldet und behoben werden. Eine Anforderung neuer Funktionen oder eine Änderung einer genehmigten Entscheidung stellt keine Fehlerbehebung dar und kann eine Änderung des Umfangs darstellen.","Änderungswünsche und deren Auswirkung auf Preis und Termin werden dokumentiert. Support, Wartung, Backups und Post-Launch-Services beschränken sich auf das, was ausdrücklich in der Vereinbarung enthalten ist."],
      },
    }],
  },
  {
    slug: "ip-delivery",
    title: { ar: "الملكية الفكرية والتسليم", en: "Intellectual property and handover", de: "Geistiges Eigentum und Übergabe" },
    summary: { ar: "ما قد يشمله التسليم وكيف تُحدد حقوق الاستخدام والملكية والتراخيص.", en: "What handover may include and how usage, ownership and licensing rights are defined.", de: "Was die Übergabe beinhalten kann und wie Nutzungs-, Eigentums- und Lizenzrechte definiert sind." },
    sections: [{
      title: { ar: "الحقوق والتراخيص", en: "Rights and licences", de: "Rechte und Lizenzen" },
      paragraphs: {
        ar: ["يحدد العرض أو العقد حقوق استخدام أو ملكية الكود والتصميم والمحتوى وملفات المصدر، ووقت انتقال الحقوق وأي شروط مرتبطة بالسداد. ولا تنتقل حقوق لم تُمنح صراحةً.", "تظل الأدوات والمكتبات والخطوط والقوالب والمكونات والخدمات المقدمة من أطراف ثالثة خاضعة لتراخيص أصحابها، وقد تستلزم رسومًا أو حسابات مستقلة."],
        en: ["The quotation or contract defines usage or ownership rights in code, design, content and source files, when rights transfer and any payment conditions. Rights not expressly granted do not transfer.", "Third-party tools, libraries, fonts, templates, components and services remain subject to their owners’ licences and may require separate fees or accounts."], de: ["Das Angebot oder der Vertrag legt die Nutzungs- oder Eigentumsrechte an Code, Design, Inhalt und Quelldateien, den Zeitpunkt der Rechteübertragung und etwaige Zahlungsbedingungen fest. Rechte, die nicht ausdrücklich gewährt werden, werden nicht übertragen.","Tools, Bibliotheken, Schriftarten, Vorlagen, Komponenten und Dienste von Drittanbietern unterliegen weiterhin den Lizenzen ihrer Eigentümer und erfordern möglicherweise separate Gebühren oder Konten."],
      },
    }, {
      title: { ar: "نطاق التسليم", en: "Handover scope", de: "Übergabeumfang" },
      paragraphs: {
        ar: ["قد يشمل التسليم، بحسب الاتفاق، الكود وملفات التصميم وإعدادات الاستضافة والنطاقات المسجلة باسم العميل والحسابات والوثائق والتدريب وبيانات الدخول وفترة دعم محددة.", "لا يشمل التسليم حسابات مزوّد الخدمة الداخلية أو مفاتيحه السرية أو تراخيصه غير القابلة للنقل. وتُنقل بيانات الدخول بطريقة مناسبة عند الاتفاق وبعد استيفاء الشروط المالية ذات الصلة."],
        en: ["Depending on the agreement, handover may include code, design files, hosting configuration, client-owned domains, accounts, documentation, training, credentials and a defined support period.", "Handover excludes the provider’s internal accounts, secret keys and non-transferable licences. Credentials are transferred appropriately where agreed and after the relevant payment conditions are met."], de: ["Abhängig von der Vereinbarung kann die Übergabe Code, Designdateien, Hosting-Konfiguration, kundeneigene Domains, Konten, Dokumentation, Schulung, Anmeldeinformationen und einen definierten Supportzeitraum umfassen.","Von der Übergabe ausgenommen sind anbieterinterne Accounts, geheime Schlüssel und nicht übertragbare Lizenzen. Die Übertragung der Zugangsdaten erfolgt ordnungsgemäß, sofern vereinbart und nach Erfüllung der entsprechenden Zahlungsbedingungen."],
      },
    }],
  },
];

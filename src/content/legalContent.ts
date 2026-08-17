import type { Locale } from "./siteSettings";
import { siteSettings } from "./siteSettings";

type LegalSection = { title: Record<Locale, string>; paragraphs: Record<Locale, string[]> };
export type LegalDocument = { slug: string; title: Record<Locale, string>; summary: Record<Locale, string>; sections: LegalSection[] };

const provider = `${siteSettings.provider.legalName} (${siteSettings.provider.arabicName})`;
const address = siteSettings.provider.address.join(", ");
const { domain, email, phone, whatsapp } = siteSettings.contact;

const commonIdentity: LegalSection = {
  title: { ar: "مزوّد الخدمة والطرف المتعاقد", en: "Service provider and contracting party" },
  paragraphs: {
    ar: [
      `يقدّم ${provider} الخدمات بصفته الشخصية كمستقل، تحت الوصف المهني «${siteSettings.provider.professionalStatus}»، ومن عنوانه في ${address}.`,
      "تُدار الخدمات وتُنفّذ من ألمانيا، ويتركز النشاط حاليًا على الشركات وأصحاب الأعمال والمهنيين والمشاريع التجارية في العراق. ولا يعني استهداف السوق العراقي وجود شركة أو مكتب أو فرع أو ممثل متعاقد في العراق.",
    ],
    en: [
      `${siteSettings.provider.legalName} provides the services personally as an independent freelancer (${siteSettings.provider.professionalStatus}) from ${address}.`,
      "Services are managed and delivered from Germany, with a current focus on businesses, professionals and commercial projects in Iraq. Serving the Iraqi market does not imply an Iraqi company, office, branch or contracting representative.",
    ],
  },
};

export const legalDocuments: LegalDocument[] = [
  {
    slug: "impressum",
    title: { ar: "معلومات مزوّد الخدمة / Impressum", en: "Provider information / Impressum" },
    summary: { ar: "البيانات القانونية ووسائل التواصل الخاصة بمزوّد هذا الموقع.", en: "Legal and contact information for the provider of this website." },
    sections: [{
      title: { ar: "بيانات مزوّد الخدمة", en: "Provider details" },
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
      },
    }, {
      title: { ar: "نطاق النشاط", en: "Business scope" },
      paragraphs: {
        ar: ["تُقدَّم خدمات تطوير المواقع والتطبيقات والأنظمة الرقمية والأتمتة بصفة مستقلة وشخصية من ألمانيا، مع تركيز تجاري على السوق العراقي. ولا يوجد مكتب أو فرع أو ممثل متعاقد تابع للخدمة في العراق."],
        en: ["Website, application, digital-system and automation services are provided personally on a freelance basis from Germany, with a commercial focus on the Iraqi market. The service has no office, branch or contracting representative in Iraq."],
      },
    }, {
      title: { ar: "المحتوى والروابط الخارجية", en: "Content and external links" },
      paragraphs: {
        ar: ["نحرص على إبقاء محتوى الموقع دقيقًا ومحدثًا، غير أن المعلومات العامة لا تُعد عرضًا ملزمًا أو استشارة قانونية أو مالية أو طبية.", "قد تقود بعض الروابط إلى خدمات تابعة لأطراف ثالثة تتحمل مسؤولية محتواها وسياساتها الخاصة."],
        en: ["Reasonable care is taken to keep the website accurate and current, but general information is not a binding offer or legal, financial or medical advice.", "Some links may lead to third-party services that remain responsible for their own content and policies."],
      },
    }],
  },
  {
    slug: "privacy",
    title: { ar: "سياسة الخصوصية", en: "Privacy notice" },
    summary: { ar: "توضح هذه السياسة البيانات التي نعالجها وأغراض المعالجة ومدة الاحتفاظ وحقوق أصحاب البيانات.", en: "This notice explains the data we process, why we process it, how long it is retained and your rights." },
    sections: [{
      title: { ar: "المسؤول عن معالجة البيانات", en: "Controller" },
      paragraphs: {
        ar: [`المسؤول عن معالجة البيانات هو ${provider}، ${address}. البريد الإلكتروني: ${email}. الهاتف وWhatsApp: ${phone}.`],
        en: [`The controller is ${siteSettings.provider.legalName}, ${address}. Email: ${email}. Telephone and WhatsApp: ${phone}.`],
      },
    }, {
      title: { ar: "البيانات التي قد نجمعها", en: "Data we may collect" },
      paragraphs: {
        ar: ["عند إرسال نموذج تواصل أو وصف مشروع، قد نعالج الاسم ورقم الهاتف وبيانات WhatsApp أو وسيلة التواصل، والبريد الإلكتروني عند تقديمه، واسم الشركة أو النشاط، ونوع الخدمة المطلوبة، ووصف المشروع، والموقع التقريبي، ومصدر الإحالة أو الزيارة، وأي معلومات أخرى يضيفها العميل طوعًا.", "يُرجى عدم إدخال كلمات مرور أو بيانات دفع أو بيانات صحية أو مستندات حساسة في النماذج العامة."],
        en: ["When you submit a contact form or project brief, we may process your name, telephone number, WhatsApp or other contact details, email where supplied, company or business information, requested service, project description, approximate location, referral or visit source and any other information you provide voluntarily.", "Please do not enter passwords, payment data, health information or sensitive documents in the public forms."],
      },
    }, {
      title: { ar: "أغراض المعالجة وأسسها", en: "Purposes and legal bases" },
      paragraphs: {
        ar: ["نستخدم البيانات للرد على الاستفسارات، وتقييم طلبات المشاريع، وإعداد عروض الأسعار، وإجراء التواصل السابق للتعاقد، وإعداد العقود وتنفيذها، وتقديم الدعم، وحماية الموقع من إساءة الاستخدام عند الحاجة.", "تستند المعالجة، بحسب الحالة، إلى اتخاذ خطوات قبل التعاقد بناءً على طلب العميل، أو تنفيذ العقد، أو الوفاء بالتزامات قانونية، أو المصلحة المشروعة في التواصل التجاري وحماية الموقع. ولا نستخدم بيانات الطلب للتسويق المباشر من دون موافقة منفصلة عندما تكون مطلوبة."],
        en: ["We use the data to respond to enquiries, assess project requests, prepare quotations, conduct pre-contractual communication, prepare and perform contracts, provide support and protect the website against misuse where necessary.", "Depending on the circumstances, processing is based on requested pre-contractual steps, contract performance, legal obligations or legitimate interests in business communication and website security. Enquiry data is not used for direct marketing without separate consent where required."],
      },
    }, {
      title: { ar: "النماذج والاستضافة ومزوّدو الخدمة", en: "Forms, hosting and service providers" },
      paragraphs: {
        ar: ["تُستضاف صفحات الموقع ووظائفه عبر Vercel. وعند نجاح إرسال أحد النماذج، تُنقل بياناته إلى مزوّد البريد Resend لتسليمها إلى قناة التواصل الداخلية الخاصة بمزوّد الخدمة. قد يعالج Vercel وResend البيانات التقنية ومحتوى الطلب بالقدر اللازم لتقديم خدماتهما.", "لا تسجّل النماذج البيانات تلقائيًا في نظام CRM، ولا ترسلها تلقائيًا إلى WhatsApp. ولا يتيح الموقع حاليًا الدفع أو رفع الملفات داخل النماذج."],
        en: ["The website and its functions are hosted through Vercel. When a form submission succeeds, its contents are transmitted to the email provider Resend for delivery to the provider’s internal contact channel. Vercel and Resend may process technical data and enquiry content as necessary to provide their services.", "The forms do not automatically write data to a CRM or send it to WhatsApp. The website currently provides no payment or file-upload function in its forms."],
      },
    }, {
      title: { ar: "الهاتف وWhatsApp والبريد الإلكتروني", en: "Telephone, WhatsApp and email" },
      paragraphs: {
        ar: ["عند تواصلك عبر الهاتف أو البريد الإلكتروني أو WhatsApp، نعالج بيانات التواصل ومحتوى الرسالة للرد على طلبك ومتابعته. لا يرسل الموقع أي رسالة إلى WhatsApp من دون أن يبدأ المستخدم التواصل بنفسه.", "استخدام WhatsApp اختياري، وتخضع معالجة البيانات داخله وداخل خدمات البريد لشروط وسياسات الخصوصية الخاصة بمزوّدي تلك الخدمات، وقد تتم المعالجة في بلدان أخرى."],
        en: ["If you contact us by telephone, email or WhatsApp, we process your contact details and message content to respond and follow up. The website does not send anything to WhatsApp unless the user initiates contact.", "WhatsApp use is optional. Processing within WhatsApp and email services is subject to the relevant providers’ terms and privacy notices and may take place in other countries."],
      },
    }, {
      title: { ar: "مدة الاحتفاظ", en: "Retention" },
      paragraphs: {
        ar: ["تُحذف بيانات الاستفسارات التي لا ينتج عنها تعاقد عادةً بعد نحو ستة أشهر من الانتهاء النهائي من معالجة الطلب، ما لم تستلزم المطالبات القانونية أو المتطلبات الأمنية أو الالتزامات النظامية الاحتفاظ بها لمدة أطول.", "قد تُحتفظ بيانات العقود والفواتير والسجلات المحاسبية طوال مدد الاحتفاظ النظامية المطبقة. وقد يحتفظ مزوّدو الاستضافة والبريد بسجلات تقنية وفق إعداداتهم ومددهم الضرورية لتشغيل الخدمة وحمايتها."],
        en: ["Enquiry data that does not lead to a contract is normally deleted approximately six months after the enquiry has been conclusively dealt with, unless longer retention is necessary for legal claims, security or statutory obligations.", "Contract, invoice and accounting information may be retained for the applicable statutory retention periods. Hosting and email providers may retain technical records according to their settings and the periods necessary to operate and secure their services."],
      },
    }, {
      title: { ar: "نقل البيانات", en: "International data transfers" },
      paragraphs: {
        ar: ["قد تتم معالجة بعض البيانات خارج المنطقة الاقتصادية الأوروبية، ولا سيما عند استخدام مزوّدين دوليين أو التواصل مع عملاء في العراق. عند انطباق قواعد نقل البيانات الدولية، نعتمد الآليات والضمانات القانونية المتاحة لدى المزوّد المعني."],
        en: ["Some data may be processed outside the EEA, particularly when international providers are used or when communicating with customers in Iraq. Where international-transfer rules apply, we rely on the legal mechanisms and safeguards available from the relevant provider."],
      },
    }, {
      title: { ar: "حقوقك", en: "Your rights" },
      paragraphs: {
        ar: [`وفق الشروط القانونية المطبقة، يمكنك طلب الوصول إلى بياناتك أو تصحيحها أو حذفها أو تقييد معالجتها، والاعتراض على المعالجة، وطلب نقل البيانات حيث ينطبق ذلك. كما يحق لك تقديم شكوى إلى سلطة حماية البيانات المختصة. لممارسة حقوقك، راسل ${email}.`],
        en: [`Subject to applicable legal conditions, you may request access, correction, deletion, restriction, objection or portability. You may also lodge a complaint with the competent data-protection authority. To exercise your rights, email ${email}.`],
      },
    }],
  },
  {
    slug: "terms",
    title: { ar: "شروط الخدمة (B2B)", en: "Terms of service (B2B)" },
    summary: { ar: "الشروط العامة للاستفسارات وعروض الأسعار والتعاقد وتنفيذ المشاريع الرقمية للعملاء المهنيين.", en: "General terms for enquiries, quotations, contracts and digital-project delivery to professional customers." },
    sections: [commonIdentity, {
      title: { ar: "النطاق المهني الحصري (B2B)", en: "B2B-only scope" },
      paragraphs: {
        ar: ["خدماتنا موجهة حصريًا إلى الشركات وأصحاب الأعمال والتجار وروّاد الأعمال والمستقلين والمهنيين وسائر العملاء الذين يتعاقدون لأغراض تجارية أو مهنية. ولا يستهدف العرض المستهلكين الذين يطلبون الخدمات لأغراض شخصية بحتة.", "يتركز نشاطنا حاليًا على خدمة العملاء والمشاريع المهنية والتجارية في السوق العراقي. ويؤكد العميل، عند طلب عرض أو إبرام عقد، أنه يتصرف ضمن نشاط تجاري أو مهني وليس بصفته مستهلكًا خاصًا."],
        en: ["Our services are offered exclusively to companies, entrepreneurs, traders, self-employed professionals, freelancers and other customers contracting for commercial or professional purposes. They are not intended for consumers purchasing for purely private purposes.", "Our current market focus is businesses and professional projects in Iraq. By requesting a quotation or entering into a contract, the customer confirms that it is acting for commercial or professional purposes and not as a private consumer."],
      },
    }, {
      title: { ar: "الاستفسارات وعروض الأسعار وإبرام العقد", en: "Enquiries, quotations and contract formation" },
      paragraphs: {
        ar: ["لا يشكل إرسال نموذج أو إجراء تواصل أولي أو تلقي تقييم مبدئي قبولًا للمشروع أو عرضًا ملزمًا أو عقدًا. يوضح عرض السعر مدة صلاحيته والنطاق والمخرجات والسعر والعملة والضرائب والدفعات والجدول المتوقع.", "ينشأ العقد عندما يعتمد الطرفان عرضًا أو اتفاقًا مكتوبًا، أو عندما يصدر قبول مكتوب واضح وفق ما يحدده العرض. وعند التعارض، تسود الشروط الخاصة الواردة في العرض أو العقد على هذه الشروط العامة."],
        en: ["Submitting a form, making initial contact or receiving a preliminary assessment does not amount to project acceptance, a binding offer or a contract. A quotation states its validity, scope, deliverables, price, currency, taxes, payment stages and expected schedule.", "A contract is formed when the parties approve a written quotation or agreement, or when clear written acceptance is issued as specified in the quotation. If terms conflict, the specific quotation or contract prevails over these general terms."],
      },
    }, {
      title: { ar: "نطاق المشروع والمخرجات", en: "Project scope and deliverables" },
      paragraphs: {
        ar: ["يُحدد نطاق كل مشروع ومراحله ومخرجاته ومعايير القبول في العرض أو العقد. ولا تُعد الأمثلة والنماذج التوضيحية المنشورة على الموقع وعدًا بتقديم خصائص أو تصميمات بعينها ما لم تُدرج صراحةً في نطاق المشروع.", "أي خاصية أو تكامل أو لغة أو منصة أو ملف أو تدريب أو توثيق غير مذكور ضمن النطاق لا يدخل تلقائيًا في السعر أو الالتزام بالتسليم."],
        en: ["Each project’s scope, stages, deliverables and acceptance criteria are defined in the quotation or contract. Examples and demos on the website do not promise any particular feature or design unless expressly included in the project scope.", "Any feature, integration, language, platform, file, training or documentation not stated in scope is not automatically included in the price or delivery obligation."],
      },
    }, {
      title: { ar: "مسؤوليات العميل والمحتوى", en: "Customer responsibilities and content" },
      paragraphs: {
        ar: ["يلتزم العميل بتقديم المعلومات والمحتوى والمواد وبيانات الدخول والقرارات والموافقات المطلوبة في الوقت المناسب، وبضمان دقتها ومشروعية استخدامها. ويتحمل العميل مسؤولية امتلاكه الحقوق والأذونات اللازمة للنصوص والصور والعلامات والبيانات والمواد التي يزودنا بها.", "يجوز تعليق التنفيذ أو تعديل الجدول إذا تأخر العميل في تقديم المواد أو الملاحظات أو الموافقات، أو إذا ظهرت متطلبات قانونية أو تقنية لم تكن معروفة عند تحديد النطاق."],
        en: ["The customer must provide required information, content, materials, credentials, decisions and approvals on time and ensure they are accurate and lawfully usable. The customer is responsible for holding the rights and permissions needed for text, images, trade marks, data and other supplied material.", "Delivery may be paused or rescheduled if the customer delays materials, feedback or approvals, or if legal or technical requirements arise that were not known when scope was agreed."],
      },
    }, {
      title: { ar: "المواعيد والمراجعات وتغيير النطاق", en: "Timelines, revisions and scope changes" },
      paragraphs: {
        ar: ["لا تصبح المواعيد نهائية إلا بعد تثبيت النطاق، واستلام المواد اللازمة، واعتماد العرض. ويُعدّل الجدول بصورة معقولة عند التأخر الناتج عن العميل أو عن خدمات خارجية أو ظروف لا يمكن التحكم فيها بصورة معقولة.", "يحدد العرض عدد جولات المراجعة المشمولة. وتُقيّم طلبات التغيير أو الأعمال الإضافية أو إعادة العمل الناتجة عن تغيير تعليمات معتمدة بصورة منفصلة، ولا تُنفّذ إلا بعد الاتفاق على أثرها في السعر والمدة."],
        en: ["Dates become final only after scope is confirmed, required materials are received and the quotation is approved. The schedule may be reasonably adjusted for delays caused by the customer, third-party services or circumstances beyond reasonable control.", "The quotation defines included revision rounds. Change requests, additional work or rework caused by changes to approved instructions are assessed separately and carried out only after their effect on price and timing is agreed."],
      },
    }, {
      title: { ar: "الأسعار والعملة والدفعات", en: "Prices, currency and payments" },
      paragraphs: {
        ar: ["تُحدد الأسعار والعملة والضرائب المحتملة والدفعات المرحلية وتواريخ الاستحقاق في كل عرض أو عقد. ولا توجد أسعار عامة أو عملة أو خطة دفع واحدة تنطبق على جميع المشاريع.", "يجوز ربط بدء مرحلة أو تسليم مخرج بسداد الدفعة المتفق عليها. وتُعالج المصروفات أو التراخيص أو الخدمات الخارجية غير المشمولة في العرض بعد موافقة العميل."],
        en: ["Prices, currency, applicable taxes, payment stages and due dates are specified in each quotation or contract. No single public price, currency or payment plan applies to every project.", "The start of a stage or release of a deliverable may depend on the agreed payment. Expenses, licences or third-party services outside the quotation are handled after customer approval."],
      },
    }, {
      title: { ar: "النطاق والاستضافة والبريد والخدمات الخارجية", en: "Domains, hosting, email and third-party services" },
      paragraphs: {
        ar: ["قد تشمل المشاريع، عند الاتفاق، تسجيل النطاق أو إعداد الاستضافة أو البريد المهني أو خدمات API أو الدفع أو الخرائط أو الرسائل أو خدمات أخرى مقدمة من أطراف ثالثة. تحدد وثائق المشروع من يملك الحساب، ومن يدفع الرسوم، ومن يتولى التجديد والإدارة.", "تخضع الخدمات الخارجية لشروط مزوّديها وتوافرها وسياساتها وأسعارها. ولا نضمن استمرار خدمة خارجية أو ثبات واجهتها أو سعرها، لكننا نلتزم بتنفيذ ما يقع ضمن مسؤوليتنا وبإبلاغ العميل بالمشكلات الجوهرية المعروفة."],
        en: ["Where agreed, projects may include domain registration, hosting, business email, APIs, payments, maps, messaging or other third-party services. Project documents state who owns the account, pays fees and handles renewal and administration.", "Third-party services are subject to their providers’ terms, availability, policies and pricing. We do not guarantee that an external service, interface or price will remain unchanged, but remain responsible for our agreed work and will notify the customer of known material issues."],
      },
    }, {
      title: { ar: "التراخيص والملكية والتسليم", en: "Licences, ownership and handover" },
      paragraphs: {
        ar: ["يحدد العقد حقوق استخدام أو ملكية الكود والتصميم والمحتوى وملفات المصدر، ووقت انتقال تلك الحقوق، وما إذا كان الانتقال مشروطًا بسداد المبالغ المستحقة. وتبقى المكتبات والخطوط والقوالب والأدوات والمكونات الخارجية خاضعة لتراخيص أصحابها.", "عند الاتفاق، يشمل التسليم الملفات أو الحسابات أو بيانات الدخول أو الوثائق أو التدريب المحدد. ولا تُسلّم أسرار مزوّد الخدمة أو حساباته الداخلية أو تراخيصه غير القابلة للنقل."],
        en: ["The contract defines usage or ownership rights in code, design, content and source files, when those rights transfer and whether transfer depends on payment. Libraries, fonts, templates, tools and third-party components remain subject to their respective licences.", "Where agreed, handover includes specified files, accounts, credentials, documentation or training. Provider secrets, internal accounts and non-transferable licences are not handed over."],
      },
    }, {
      title: { ar: "الدعم والصيانة والانقطاعات", en: "Support, maintenance and interruptions" },
      paragraphs: {
        ar: ["لا يشمل المشروع دعمًا أو صيانة أو مراقبة أو نسخًا احتياطيًا مستمرًا إلا إذا نُص على ذلك في العرض أو العقد. وتُحدد مدة الدعم ونطاقه وأوقات الاستجابة بصورة منفصلة.", "قد تتأثر الخدمات بانقطاعات أو تغييرات لدى مزوّدي الاستضافة أو النطاق أو البريد أو واجهات API. نتعامل مع ما يقع ضمن نطاق مسؤوليتنا المتفق عليها، ولا نتحمل مسؤولية أعمال المزوّد الخارجي إلا بالقدر الذي ينسب فيه الضرر قانونًا إلى إخلال من جانبنا."],
        en: ["A project includes no continuing support, maintenance, monitoring or backups unless stated in the quotation or contract. Any support period, scope and response targets are agreed separately.", "Services may be affected by outages or changes at hosting, domain, email or API providers. We address matters within our agreed responsibility and are not responsible for an external provider’s acts except to the extent that applicable law attributes loss to our own breach."],
      },
    }, {
      title: { ar: "المسؤولية والقانون المطبق", en: "Liability and applicable law" },
      paragraphs: {
        ar: ["تخضع المسؤولية للقانون المطبق وللاتفاق الخاص بالمشروع. ولا تستبعد هذه الشروط أي مسؤولية لا يجوز استبعادها قانونًا، بما في ذلك المسؤولية عن الفعل العمدي أو الإهمال الجسيم أو الأضرار التي تمس الحياة أو السلامة الجسدية حيث تنطبق القواعد ذات الصلة.", "يجوز للعرض أو العقد تحديد القانون المطبق ومكان التنفيذ والاختصاص القضائي بما يسمح به القانون. وتبقى قواعد القانون الدولي الخاص والاختصاص الإلزامي وأي أحكام آمرة واجبة التطبيق دون مساس."],
        en: ["Liability is governed by applicable law and the project-specific agreement. These terms do not exclude liability that cannot lawfully be excluded, including liability for intent, gross negligence or injury to life or physical integrity where the relevant rules apply.", "The quotation or contract may specify applicable law, place of performance and jurisdiction to the extent permitted by law. Mandatory conflict-of-laws rules, jurisdiction rules and other overriding provisions remain unaffected."],
      },
    }],
  },
  {
    slug: "cookies",
    title: { ar: "ملفات الارتباط والتخزين المحلي", en: "Cookies and local storage" },
    summary: { ar: "معلومات عن التخزين الوظيفي المستخدم على جهازك وعدم وجود أدوات تتبع إعلانية حاليًا.", en: "Information about functional browser storage and the current absence of advertising trackers." },
    sections: [{
      title: { ar: "التقنيات المستخدمة حاليًا", en: "Technologies currently used" },
      paragraphs: {
        ar: ["لا يستخدم الموقع حاليًا Google Analytics أو Meta Pixel أو ملفات ارتباط إعلانية أو أدوات تحليلات تسويقية.", "يستخدم الموقع التخزين المحلي لحفظ اللغة المفضلة والوضع الخفيف ورمز الإحالة وإجابات معالج المشروع غير المرسلة. ويستخدم تخزين الجلسة لتذكّر إغلاق اقتراح اللغة أو التثبيت خلال الجلسة. كما قد يحفظ عامل الخدمة صفحات عامة في ذاكرة المتصفح لتوفير الوصول عند ضعف الاتصال."],
        en: ["The website currently uses no Google Analytics, Meta Pixel, advertising cookies or marketing-analytics tools.", "Local storage is used for the preferred language, lite mode, referral code and unsent project-wizard answers. Session storage remembers dismissal of the language or installation prompt during the session. A service worker may also cache public pages in the browser for access during a poor connection."],
      },
    }, {
      title: { ar: "الغرض والتحكم", en: "Purpose and control" },
      paragraphs: {
        ar: ["يُستخدم هذا التخزين لتقديم وظائف يطلبها المستخدم أو يتوقعها، ولا يُستخدم لبناء ملف إعلاني. ويمكن حذف البيانات المخزنة وذاكرة الموقع من إعدادات المتصفح، مع ملاحظة أن بعض التفضيلات أو المسودة المحلية ستُفقد.", "لا نعرض نافذة موافقة لمجرد الشكل. وإذا أُضيفت مستقبلًا تقنيات غير ضرورية تتطلب الموافقة، فلن تُفعّل قبل تقديم المعلومات والحصول على الموافقة المطلوبة قانونًا."],
        en: ["This storage supports functions requested or expected by the user and is not used to build an advertising profile. Stored data and the site cache can be cleared in browser settings, although local preferences or an unsent draft will then be lost.", "We do not show a consent banner merely for appearance. If non-essential technologies requiring consent are added later, they will not be activated before the required information and consent are provided."],
      },
    }],
  },
  {
    slug: "quotes",
    title: { ar: "شروط عروض الأسعار", en: "Quotation terms" },
    summary: { ar: "كيفية تحديد نطاق العرض وسعره وعملته ودفعاته وصلاحيته.", en: "How quotation scope, price, currency, payment stages and validity are defined." },
    sections: [{
      title: { ar: "العرض والنطاق", en: "Quotation and scope" },
      paragraphs: {
        ar: ["كل تقييم أو نقاش أولي غير ملزم ما لم يُذكر خلاف ذلك كتابةً. يوضح عرض السعر نطاق العمل والمخرجات والافتراضات والاستثناءات والمدة التقديرية وفترة صلاحيته.", "يحدد العرض السعر والعملة والضرائب المحتملة والدفعات وتواريخ الاستحقاق. وتُقيّم الأعمال الخارجة عن النطاق وتُعتمد كتابةً قبل تنفيذها."],
        en: ["Every preliminary assessment or discussion is non-binding unless expressly stated otherwise in writing. The quotation describes scope, deliverables, assumptions, exclusions, estimated timing and its validity period.", "The quotation states price, currency, applicable taxes, payment stages and due dates. Out-of-scope work is assessed and approved in writing before it is carried out."],
      },
    }],
  },
  {
    slug: "digital-projects",
    title: { ar: "شروط المشاريع الرقمية", en: "Digital project terms" },
    summary: { ar: "مراحل التنفيذ والتعاون والمراجعة والقبول والتغيير والدعم.", en: "Delivery stages, cooperation, review, acceptance, changes and support." },
    sections: [{
      title: { ar: "التنفيذ والتعاون", en: "Delivery and cooperation" },
      paragraphs: {
        ar: ["يحدد الاتفاق مراحل البحث أو التصميم أو البرمجة أو الاختبار، ومسؤوليات الطرفين، والمحتوى والموافقات المطلوبة. وتتوقف المواعيد على تعاون العميل وتوفير المواد والقرارات في وقتها.", "يجري التواصل والمراجعة عبر القنوات المتفق عليها. وعلى العميل فحص المخرجات وتقديم الملاحظات ضمن المدة المحددة حتى لا يتأثر الجدول."],
        en: ["The agreement defines research, design, development and testing stages, the parties’ responsibilities and required content and approvals. Timing depends on the customer’s cooperation and timely provision of materials and decisions.", "Communication and review take place through agreed channels. The customer must examine deliverables and provide feedback within the stated period to avoid affecting the schedule."],
      },
    }, {
      title: { ar: "القبول والتغييرات والدعم", en: "Acceptance, changes and support" },
      paragraphs: {
        ar: ["تُحدد معايير القبول وطريقة تسجيل الأعطال ومعالجتها في وثائق المشروع. ولا يُعد طلب خاصية جديدة أو تغيير قرار معتمد إصلاحًا لعطل، بل قد يكون تغييرًا في النطاق.", "تُوثق طلبات التغيير وأثرها في السعر والمدة. ويقتصر الدعم والصيانة والنسخ الاحتياطي وخدمات ما بعد الإطلاق على ما يرد صراحةً في الاتفاق."],
        en: ["Project documents define acceptance criteria and how defects are reported and addressed. A new feature request or change to an approved decision is not a defect fix and may constitute a scope change.", "Change requests and their effect on price and timing are documented. Support, maintenance, backups and post-launch services are limited to what is expressly included in the agreement."],
      },
    }],
  },
  {
    slug: "ip-delivery",
    title: { ar: "الملكية الفكرية والتسليم", en: "Intellectual property and handover" },
    summary: { ar: "ما قد يشمله التسليم وكيف تُحدد حقوق الاستخدام والملكية والتراخيص.", en: "What handover may include and how usage, ownership and licensing rights are defined." },
    sections: [{
      title: { ar: "الحقوق والتراخيص", en: "Rights and licences" },
      paragraphs: {
        ar: ["يحدد العرض أو العقد حقوق استخدام أو ملكية الكود والتصميم والمحتوى وملفات المصدر، ووقت انتقال الحقوق وأي شروط مرتبطة بالسداد. ولا تنتقل حقوق لم تُمنح صراحةً.", "تظل الأدوات والمكتبات والخطوط والقوالب والمكونات والخدمات المقدمة من أطراف ثالثة خاضعة لتراخيص أصحابها، وقد تستلزم رسومًا أو حسابات مستقلة."],
        en: ["The quotation or contract defines usage or ownership rights in code, design, content and source files, when rights transfer and any payment conditions. Rights not expressly granted do not transfer.", "Third-party tools, libraries, fonts, templates, components and services remain subject to their owners’ licences and may require separate fees or accounts."],
      },
    }, {
      title: { ar: "نطاق التسليم", en: "Handover scope" },
      paragraphs: {
        ar: ["قد يشمل التسليم، بحسب الاتفاق، الكود وملفات التصميم وإعدادات الاستضافة والنطاقات المسجلة باسم العميل والحسابات والوثائق والتدريب وبيانات الدخول وفترة دعم محددة.", "لا يشمل التسليم حسابات مزوّد الخدمة الداخلية أو مفاتيحه السرية أو تراخيصه غير القابلة للنقل. وتُنقل بيانات الدخول بطريقة مناسبة عند الاتفاق وبعد استيفاء الشروط المالية ذات الصلة."],
        en: ["Depending on the agreement, handover may include code, design files, hosting configuration, client-owned domains, accounts, documentation, training, credentials and a defined support period.", "Handover excludes the provider’s internal accounts, secret keys and non-transferable licences. Credentials are transferred appropriately where agreed and after the relevant payment conditions are met."],
      },
    }],
  },
];

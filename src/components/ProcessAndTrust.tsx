"use client";

import { useState } from "react";
import type { Locale } from "@/src/content/siteSettings";

const processAr = [
  "إرسال الفكرة",
  "التواصل الأولي",
  "تحديد المتطلبات",
  "تثبيت النطاق",
  "تحديد السعر والمدة",
  "التصميم الأولي",
  "البرمجة",
  "الاختبار",
  "مراجعة العميل",
  "الإطلاق",
  "التسليم أو التدريب",
  "الدعم عند الاتفاق",
];

const processEn = [
  "Send the idea",
  "Initial contact",
  "Define requirements",
  "Confirm scope",
  "Price and timeline",
  "Initial design",
  "Development",
  "Testing",
  "Client review",
  "Launch",
  "Handover or training",
  "Optional support",
];

const faqs = {
  ar: [
    ["هل تُقدَّم الخدمة من العراق أم من ألمانيا؟", "تُدار الخدمة وتُنفّذ من ألمانيا، وتستهدف حصريًا الشركات وأصحاب الأعمال والمستقلين والمهنيين في العراق."],
    ["من هو الطرف المتعاقد؟", "الطرف المتعاقد هو عمر العزي (Omar Al-Ezzi)، ويعمل بصفته الشخصية كمستقل في ألمانيا. ولا يصبح أي وسيط أو مسوّق طرفًا في العقد إلا بتفويض مكتوب وصريح."],
    ["كيف يتم التواصل والدفع؟", "تُحدَّد وسيلة التواصل وفق القنوات المتاحة. وتُذكر طريقة الدفع والعملة والدفعات المرحلية في عرض السعر والعقد بعد مراجعة المتطلبات."],
    ["كم يستغرق إنشاء الموقع؟", "تعتمد المدة على عدد الصفحات والمحتوى والتكاملات المطلوبة. وتُحدَّد بعد تثبيت النطاق، لذلك لا نقدّم وعدًا زمنيًا آليًا."],
    ["هل يعمل الموقع بالعربية وعلى الهاتف؟", "نعم. تُبنى التجربة بالعربية من اليمين إلى اليسار، وبالإنجليزية من اليسار إلى اليمين، وفق منهج يبدأ من شاشة الهاتف."],
    ["ما الفرق بين الموقع والتطبيق؟", "يشرح الموقع النشاط، ويعرض المحتوى، ويجمع الطلبات. أما التطبيق فينفّذ تفاعلات ووظائف أعمق. وقد يكفي أحيانًا تطبيق ويب دون الحاجة إلى تطبيق مستقل في متجر التطبيقات."],
    ["ما المقصود بالأتمتة؟", "هي ربط الخطوات المتكررة، مثل استقبال الطلب وتسجيله وإرسال إشعار وإنشاء مهمة، بعد التحقق من الأدوات التي تستخدمها."],
    ["هل يمكن ربط WhatsApp؟", "يمكن تقييم الربط وفق الرقم والحساب وواجهات Meta المتاحة والقواعد المعمول بها. ولا نفترض جاهزية الربط مسبقًا."],
    ["هل يمكن تطوير المشروع لاحقًا؟", "نعم. نفضّل بناء أساس قابل للتوسع، ويمكن البدء بنطاق صغير وواضح ثم تطويره."],
    ["هل أملك النطاق والموقع والكود؟", "تُحدَّد تفاصيل الملكية والتسليم والحسابات وتراخيص المكتبات الخارجية بوضوح في عرض السعر والعقد."],
    ["هل يتوفر دعم بعد الإطلاق؟", "يمكن إضافة فترة دعم أو صيانة وفق اتفاق ونطاق مكتوبين."],
    ["هل النماذج المعروضة مشاريع حقيقية؟", "لا. جميعها نماذج توضيحية تستخدم بيانات خيالية ولا تمثل عملاء حقيقيين."],
    ["هل التقييم الأولي للسعر نهائي؟", "لا توجد أسعار منشورة حاليًا. ويبقى أي تقييم أولي غير نهائي حتى يُعتمد النطاق ويصدر عرض مكتوب."],
  ],
  en: [
    ["Is the service in Iraq or Germany?", "Services are managed and delivered from Germany exclusively for companies, entrepreneurs, freelancers and professionals in Iraq."],
    ["Who is the contracting party?", "The contracting party is Omar Al-Ezzi, acting personally as an independent freelancer in Germany. An intermediary or marketer is not a contracting party without explicit written authority."],
    ["How do communication and payment work?", "Communication uses the available channel. Payment method, currency and milestones are specified in the quote and contract after review."],
    ["How long does a website take?", "It depends on pages, content and integrations. Timing follows a confirmed scope, never an automated promise."],
    ["Does it work in Arabic and on mobile?", "Yes. The experience supports Arabic RTL and English LTR and is designed mobile-first."],
    ["Website or app?", "A website presents content and captures enquiries. An app handles deeper interactions; sometimes a web app is enough without an app-store product."],
    ["What is automation?", "Connecting repetitive steps such as receiving a request, recording it, sending an alert and creating a task—after checking your tools."],
    ["Can you connect WhatsApp?", "We can assess the account, number, available Meta APIs and applicable rules. Availability is not assumed."],
    ["Can the project grow later?", "Yes. We prefer extensible foundations and can start with a focused scope."],
    ["Do I own the domain, site and code?", "Ownership, handover, accounts and third-party licensing are explicitly defined in the quote and contract."],
    ["Do you offer post-launch support?", "A written support or maintenance period can be added by agreement."],
    ["Are the demos real projects?", "No. All demos use fictional data and do not represent real clients."],
    ["Is an estimate final?", "No prices are currently published. An initial assessment is not final until scope and a written quote are approved."],
  ],
};

export function ProcessAndTrust({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [open, setOpen] = useState(0);
  const process = ar ? processAr : processEn;
  const why = ar
    ? ["تنفيذ وإدارة من ألمانيا", "تواصل باللغة العربية", "فهم للسوق العراقي", "تصميم مخصّص", "تحديد النطاق والتكلفة قبل التنفيذ", "أداء وحماية منذ البداية", "تسليم منظّم", "تقليل الاعتماد على مزوّد واحد"]
    : ["Managed and delivered from Germany", "Arabic communication", "Understanding of the Iraqi market", "Tailored design", "Scope and cost confirmed first", "Performance and security by design", "Organised handover", "Avoid unnecessary vendor lock-in"];

  return <>
    <section id="process" className="section process-section">
      <div className="container">
        <div className="section-heading split">
          <div><span className="eyebrow">{ar ? "طريقة العمل" : "How the work progresses"}</span><h2>{ar ? "لكل مرحلة قرار واضح ومخرج مفهوم." : "Each stage has a clear decision and tangible outcome."}</h2></div>
          <p>{ar ? "لا تُعتمد المواعيد قبل تحديد النطاق، واعتماد العرض، وتوفير العميل للمحتوى المطلوب." : "Dates are confirmed only after scope, quote and client content are ready."}</p>
        </div>
        <ol className="process-grid">{process.map((item, i) => <li key={item}><span>{String(i + 1).padStart(2, "0")}</span><b>{item}</b></li>)}</ol>
      </div>
    </section>

    <section id="why" className="section why-section">
      <div className="container why-layout">
        <div><span className="eyebrow">{ar ? "لماذا هذا الأسلوب؟" : "Why this approach?"}</span><h2>{ar ? "تقنية تناسب العمل، لا استعراضًا تقنيًا." : "Technology that fits the business—not a technical showcase."}</h2><p>{ar ? "هدفنا أن تعرف ما الذي ستحصل عليه، ولماذا تحتاج إليه، وكيف يمكن تطويره مستقبلًا." : "You should know what you will receive, why it matters and how it can grow later."}</p><div className="why-experience"><span>2001—2026</span><p>{ar ? "خبرة تمتد إلى 25 عامًا في البرمجة وتطوير الأنظمة، تساعدنا على اختيار التقنية المناسبة وبناء حل يمكن صيانته وتطويره مستقبلًا." : "Twenty-five years in programming and systems development help us choose the right technology and build a solution that remains maintainable and ready to grow."}</p></div></div>
        <div className="why-list">{why.map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, "0")}</span><b>{item}</b><i>✓</i></div>)}</div>
      </div>
    </section>

    <section id="faq" className="section faq-section">
      <div className="container faq-layout">
        <div className="section-heading"><span className="eyebrow">{ar ? "أسئلة قبل أن نبدأ" : "Questions before we begin"}</span><h2>{ar ? "إجابات مباشرة بلا وعود غير محسوبة." : "Direct answers without premature promises."}</h2></div>
        <div className="faq-list">{faqs[locale].map(([q, a], i) => <article className={open === i ? "open" : ""} key={q}><button type="button" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}><span>{q}</span><i>{open === i ? "−" : "+"}</i></button><div><p>{a}</p></div></article>)}</div>
      </div>
    </section>
  </>;
}

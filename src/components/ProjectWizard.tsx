"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import type { Locale } from "@/src/content/siteSettings";
import { countries, regionLabels, regions } from "@/src/content/locales";

type Answers = Record<string, string>;

const initial: Answers = {
  business: "",
  build: "",
  problem: "",
  audience: "",
  features: "",
  integrations: "",
  assets: "",
  timing: "",
  budget: "",
  country: "IQ",
  governorate: "",
  city: "",
  preferred: "",
  name: "",
  contact: "",
  consent: "",
};

export function ProjectWizard({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("projectDraft");
      if (saved) queueMicrotask(() => setAnswers({ ...initial, ...JSON.parse(saved) }));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("projectDraft", JSON.stringify(answers));
  }, [answers]);

  const steps = useMemo(() => [
    { key: "business", label: ar ? "ما نوع نشاطك؟" : locale === "de" ? "Um welche Art von Unternehmen handelt es sich?" : "What type of business is it?", hint: ar ? "مثال: عيادة، أو مطعم، أو شركة مقاولات، أو متجر، أو مشروع ناشئ" : locale === "de" ? "Zum Beispiel: Klinik, Restaurant, Baugewerbe, Geschäft oder Startup" : "For example: clinic, restaurant, construction, shop or startup", type: "text" },
    { key: "build", label: ar ? "ماذا تريد أن تنشئ؟" : locale === "de" ? "Was möchten Sie bauen?" : "What would you like to build?", hint: ar ? "اختر الخيار الأقرب، ويمكننا تحديد النوع المناسب لاحقًا" : locale === "de" ? "Wählen Sie die nächstgelegene Option – wir können sie später verfeinern" : "Choose the closest option—we can refine it later", type: "choices", choices: ar ? ["موقع تعريفي","متجر إلكتروني","تطبيق","نظام إدارة","أتمتة أعمال","لست متأكدًا بعد"] : locale === "de" ? ["Firmenwebsite","Online-Shop","App","Managementsystem","Geschäftsautomatisierung","Noch nicht sicher"] : ["Company website","Online store","App","Management system","Business automation","Not sure yet"] },
    { key: "problem", label: ar ? "ما المشكلة التي تريد حلها؟" : locale === "de" ? "Welches Problem soll es lösen?" : "What problem should it solve?", hint: ar ? "صِف ما يحدث حاليًا وما الذي ترغب في تحسينه" : locale === "de" ? "Beschreiben Sie, was jetzt passiert und was verbessert werden sollte" : "Describe what happens now and what should improve", type: "textarea" },
    { key: "audience", label: ar ? "من المستخدمون أو العملاء المستهدفون؟" : locale === "de" ? "Wer sind die Zielnutzer?" : "Who are the target users?", hint: ar ? "أفراد، أو شركات، أو موظفون، أو وكلاء، أو جمهور محدد" : locale === "de" ? "Einzelpersonen, Unternehmen, Mitarbeiter, Händler oder eine bestimmte Zielgruppe" : "Individuals, companies, staff, dealers or a specific audience", type: "text" },
    { key: "features", label: ar ? "ما الخصائص المهمة لك؟" : locale === "de" ? "Welche Funktionen sind wichtig?" : "Which features matter?", hint: ar ? "مثال: الحسابات، أو البحث، أو التقارير، أو الصلاحيات، أو الإشعارات" : locale === "de" ? "Zum Beispiel: Konten, Suche, Berichte, Rollen oder Benachrichtigungen" : "For example: accounts, search, reports, roles or notifications", type: "textarea" },
    { key: "integrations", label: ar ? "هل تحتاج إلى ربط أدوات أو أنظمة؟" : locale === "de" ? "Benötigen Sie Integrationen?" : "Do you need integrations?", hint: ar ? "مثل WhatsApp، أو الدفع، أو الحجز، أو البريد، أو نظام CRM، أو نظام تستخدمه حاليًا" : locale === "de" ? "WhatsApp, Zahlungen, Buchung, E-Mail, ein CRM oder ein bestehendes System" : "WhatsApp, payments, booking, email, a CRM or an existing system", type: "text" },
    { key: "assets", label: ar ? "ما المواد المتوفرة لديك؟" : locale === "de" ? "Über welche Vermögenswerte verfügen Sie bereits?" : "What assets do you already have?", hint: ar ? "مثل الشعار، أو المحتوى، أو الصور، أو النطاق، أو نظام قائم" : locale === "de" ? "Logo, Inhalt, Bilder, Domain oder ein bestehendes System" : "Logo, content, images, domain or an existing system", type: "text" },
    { key: "timing", label: ar ? "متى ترغب في بدء المشروع؟" : locale === "de" ? "Wann möchten Sie beginnen?" : "When would you like to start?", hint: ar ? "لا نحدّد مدة نهائية قبل تثبيت نطاق المشروع" : locale === "de" ? "Vor der Bestätigung des Umfangs wird kein Zeitplan versprochen" : "No timeline is promised before scope is confirmed", type: "choices", choices: ar ? ["في أقرب وقت","خلال شهر","خلال ثلاثة أشهر","ما زلت أستكشف الفكرة"] : locale === "de" ? ["So schnell wie möglich","Innerhalb eines Monats","Innerhalb von 3 Monaten","Die Idee erkunden"] : ["As soon as possible","Within a month","Within 3 months","Exploring the idea"] },
    { key: "budget", label: ar ? "الميزانية التقريبية — اختياري" : locale === "de" ? "Ungefähres Budget – optional" : "Approximate budget — optional", hint: ar ? "تساعدنا في اقتراح نطاق مناسب، ولا ينتج عنها سعر آلي" : locale === "de" ? "Hilft bei der Gestaltung des Umfangs; Es wird kein automatisches Angebot erstellt" : "Helps shape the scope; it will not generate an automatic quote", type: "text", optional: true },
    { key: "location", label: ar ? "أين يقع نشاطك؟" : locale === "de" ? "Wo befindet sich Ihr Unternehmen?" : "Where is the business located?", hint: ar ? "اختر الدولة والمنطقة، ثم اكتب اسم المدينة" : locale === "de" ? "Wählen Sie Land und Bundesland bzw. Gouvernement und geben Sie anschließend die Stadt ein" : "Choose the country and region, then enter the city", type: "location" },
    { key: "preferred", label: ar ? "ما وسيلة التواصل المفضلة لديك؟" : locale === "de" ? "Wie sollen wir Sie kontaktieren?" : "How should we contact you?", hint: ar ? "اختر الوسيلة الأنسب لك" : locale === "de" ? "Wählen Sie den bequemsten Kanal" : "Choose the most convenient channel", type: "choices", choices: [ar ? "الهاتف" : locale === "de" ? "Telefon" : "Phone", "WhatsApp", ar ? "البريد الإلكتروني" : locale === "de" ? "E-Mail" : "Email"] },
    { key: "contact", label: ar ? "بيانات التواصل" : locale === "de" ? "Kontaktdaten" : "Contact details", hint: ar ? "لن نستخدمها للتسويق دون موافقة منفصلة" : locale === "de" ? "Ohne gesonderte Einwilligung nicht für Marketingzwecke verwendet" : "Not used for marketing without separate consent", type: "contact" },
    { key: "summary", label: ar ? "راجع وصف مشروعك" : locale === "de" ? "Überprüfen Sie Ihre Projektbeschreibung" : "Review your project brief", hint: ar ? "يمكنك الرجوع لتعديل أي إجابة قبل الإرسال" : locale === "de" ? "Gehen Sie zurück, um eine Antwort zu bearbeiten, bevor Sie sie absenden" : "Go back to edit any answer before submitting", type: "summary" },
  ], [ar, locale]);

  const summaryLabels = useMemo<Record<string, string>>(() => ar ? {
    business: "نوع النشاط",
    build: "الحل المطلوب",
    problem: "المشكلة",
    audience: "الجمهور المستهدف",
    features: "الخصائص",
    integrations: "الأدوات والأنظمة المرتبطة",
    assets: "المواد المتوفرة",
    timing: "موعد البدء",
    budget: "الميزانية التقريبية",
    country: "الدولة",
    governorate: "المحافظة",
    city: "المدينة",
    preferred: "وسيلة التواصل",
    name: "الاسم",
    contact: "بيانات التواصل",
  } : locale === "de" ? {
    business: "Unternehmensart",
    build: "Gewünschte Lösung",
    problem: "Problem",
    audience: "Zielgruppe",
    features: "Funktionen",
    integrations: "Integrationen",
    assets: "Vorhandene Materialien",
    timing: "Gewünschter Start",
    budget: "Ungefähres Budget",
    country: "Land",
    governorate: "Bundesland oder Gouvernement",
    city: "Stadt",
    preferred: "Bevorzugter Kontaktweg",
    name: "Name",
    contact: "Kontaktdaten",
  } : {
    business: "Business type",
    build: "Requested solution",
    problem: "Problem",
    audience: "Target audience",
    features: "Features",
    integrations: "Integrations",
    assets: "Available assets",
    timing: "Start timing",
    budget: "Approximate budget",
    country: "Country",
    governorate: "Governorate",
    city: "City",
    preferred: "Contact preference",
    name: "Name",
    contact: "Contact details",
  }, [ar, locale]);

  const current = steps[step];
  const max = steps.length;
  const set = (key: string, value: string) => setAnswers(prev => ({ ...prev, [key]: value }));
  const valid = current.type === "summary"
    ? answers.consent === "yes"
    : current.key === "location"
      ? Boolean(answers.country && answers.governorate && answers.city)
      : current.type === "contact"
        ? Boolean(answers.name && answers.contact)
        : Boolean(answers[current.key]) || Boolean(current.optional);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!valid) return;
    setStatus("sending");
    try {
      const referralCode = localStorage.getItem("referralCode") || "";
      const res = await fetch("/api/project", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...answers,
          country: countries.find(option => option.value === answers.country)?.label[locale] ?? answers.country,
          governorate: regions[answers.country as "IQ" | "DE"].find(option => option.value === answers.governorate)?.label[locale] ?? answers.governorate,
          referralCode,
          source: document.referrer || "direct",
          website: "",
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      localStorage.removeItem("projectDraft");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") return <section id="project-wizard" className="section wizard-section">
    <div className="container"><div className="success-card"><span>✓</span><h2>{ar ? "تم إرسال وصف مشروعك بنجاح" : locale === "de" ? "Ihre Projektbeschreibung wurde erfolgreich gesendet" : "Your project brief was sent successfully"}</h2><p>{ar ? "سنراجع التفاصيل ونتواصل معك عبر الوسيلة التي اخترتها. لا يُعد الإرسال قبولًا للمشروع أو عرض سعر نهائيًا." : locale === "de" ? "Wir werden die Details prüfen und Sie über den von Ihnen bevorzugten Kanal kontaktieren. Die Einreichung stellt weder eine Projektannahme noch ein endgültiges Angebot dar." : "We will review the details and contact you through your preferred channel. Submission is not project acceptance or a final quote."}</p><button className="button ghost" onClick={() => { setStatus("idle"); setStep(0); setAnswers(initial); }}>{ar ? "إنشاء طلب آخر" : locale === "de" ? "Beginnen Sie mit einem weiteren Briefing" : "Start another brief"}</button></div></div>
  </section>;

  return <section id="project-wizard" className="section wizard-section">
    <div className="container">
      <div className="wizard-intro">
        <span className="eyebrow">{ar ? "معالج طلب المشروع" : locale === "de" ? "Assistent für Projektbeschreibungen" : "Project brief wizard"}</span>
        <h2>{ar ? "لا تعرف اسم الحل؟ صِف المشكلة خطوة بخطوة." : locale === "de" ? "Sie sind sich nicht sicher, wie Sie die Lösung nennen sollen? Beschreiben Sie das Problem Schritt für Schritt." : "Not sure what to call the solution? Describe the problem step by step."}</h2>
        <p>{ar ? "لن ينتج المعالج سعرًا نهائيًا آليًا أو وعدًا ملزمًا. سنستخدم إجاباتك لفهم الفكرة وتحديد ما يحتاج إلى تقييم. هذا المسار مخصص لطلبات الأعمال والأغراض المهنية فقط." : locale === "de" ? "Dadurch wird kein endgültiges Angebot oder keine verbindliche Zusage erstellt. Ihre Antworten helfen uns zu verstehen, was einer Beurteilung bedarf. Dieser Vorgang ist nur für geschäftliche und berufliche Anfragen bestimmt." : "This will not generate a final quote or binding promise. Your answers help us understand what needs assessment. This process is for business and professional enquiries only."}</p>
      </div>

      <form className="wizard-card" onSubmit={submit}>
        <div className="wizard-progress"><div><span>{ar ? `الخطوة ${step + 1} من ${max}` : locale === "de" ? `Schritt ${step + 1} von ${max}` : `Step ${step + 1} of ${max}`}</span><b>{Math.round(((step + 1) / max) * 100)}%</b></div><i><span style={{ width: `${((step + 1) / max) * 100}%` }}></span></i></div>
        <div className="wizard-question">
          <span className="step-number">{String(step + 1).padStart(2, "0")}</span>
          <h3>{current.label}</h3>
          <p>{current.hint}</p>
          {current.type === "text" && <input value={answers[current.key]} onChange={e => set(current.key, e.target.value)} placeholder={ar ? "اكتب إجابتك هنا" : locale === "de" ? "Geben Sie Ihre Antwort ein" : "Type your answer"} />}
          {current.type === "textarea" && <textarea value={answers[current.key]} onChange={e => set(current.key, e.target.value)} placeholder={ar ? "اكتب وصفًا مختصرًا..." : locale === "de" ? "Schreiben Sie eine einfache Beschreibung..." : "Write a simple description..."} rows={4} />}
          {current.type === "choices" && <div className="choice-grid">{current.choices?.map(choice => <button className={answers[current.key] === choice ? "selected" : ""} type="button" onClick={() => set(current.key, choice)} key={choice}><span>{answers[current.key] === choice ? "✓" : ""}</span>{choice}</button>)}</div>}
          {current.type === "location" && <div className="field-grid"><label>{ar ? "الدولة" : locale === "de" ? "Land" : "Country"}<select value={answers.country} onChange={e => setAnswers(previous => ({ ...previous, country: e.target.value, governorate: "" }))}>{countries.map(option => <option key={option.value} value={option.value}>{option.label[locale]}</option>)}</select></label><label>{regionLabels[answers.country as "IQ" | "DE"][locale]}<select value={answers.governorate} onChange={e => set("governorate", e.target.value)}><option value="">{ar ? "اختر" : locale === "de" ? "Auswählen" : "Select"}</option>{regions[answers.country as "IQ" | "DE"].map(option => <option key={option.value} value={option.value}>{option.label[locale]}</option>)}</select></label><label>{ar ? "المدينة" : locale === "de" ? "Stadt" : "City"}<input value={answers.city} onChange={e => set("city", e.target.value)} /></label></div>}
          {current.type === "contact" && <div className="field-grid"><label>{ar ? "الاسم" : locale === "de" ? "Name" : "Name"}<input value={answers.name} onChange={e => set("name", e.target.value)} /></label><label>{ar ? "رقم الهاتف أو البريد الإلكتروني" : locale === "de" ? "Telefon oder E-Mail" : "Phone or email"}<input value={answers.contact} onChange={e => set("contact", e.target.value)} /></label></div>}
          {current.type === "summary" && <div className="summary-box">{Object.entries(answers).filter(([key, value]) => value && key !== "consent").map(([key, value]) => <div key={key}><b>{summaryLabels[key] ?? key}</b><span>{key === "country" ? countries.find(option => option.value === value)?.label[locale] : key === "governorate" ? regions[answers.country as "IQ" | "DE"].find(option => option.value === value)?.label[locale] : value}</span></div>)}<label className="consent"><input type="checkbox" checked={answers.consent === "yes"} onChange={e => set("consent", e.target.checked ? "yes" : "")} /><span>{ar ? "أوافق على معالجة بيانات الطلب لغرض التواصل والتقييم وفق سياسة الخصوصية." : locale === "de" ? "Ich stimme der Verarbeitung dieser Anfrage zur Kontaktaufnahme und Bewertung gemäß der Datenschutzerklärung zu." : "I agree to processing this enquiry for contact and assessment under the privacy notice."}</span></label></div>}
          <input name="website" className="honeypot" tabIndex={-1} autoComplete="off" />
        </div>
        {status === "error" && <p className="form-error" role="alert">{ar ? "تعذّر إرسال الطلب. تحقّق من الاتصال وحاول مرة أخرى." : locale === "de" ? "Die Anfrage konnte nicht gesendet werden. Überprüfen Sie Ihre Verbindung und versuchen Sie es erneut." : "The request could not be sent. Check your connection and try again."}</p>}
        <div className="wizard-actions">
          <button type="button" className="button ghost" disabled={step === 0} onClick={() => setStep(x => x - 1)}>{ar ? "السابق" : locale === "de" ? "Zurück" : "Back"}</button>
          {step < max - 1
            ? <button type="button" className="button primary" disabled={!valid} onClick={() => setStep(x => x + 1)}>{ar ? "التالي" : locale === "de" ? "Weiter" : "Next"}<span>←</span></button>
            : <button type="submit" className="button primary" disabled={!valid || status === "sending"}>{status === "sending" ? (ar ? "جارٍ الإرسال..." : locale === "de" ? "Senden..." : "Sending...") : (ar ? "أرسل وصف المشروع" : locale === "de" ? "Senden Sie eine Projektbeschreibung" : "Send project brief")}</button>}
        </div>
      </form>
    </div>
  </section>;
}

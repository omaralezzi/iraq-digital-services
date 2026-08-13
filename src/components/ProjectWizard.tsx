"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import type { Locale } from "@/src/content/siteSettings";
import { governorates } from "@/src/content/locales";

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
  governorate: "",
  city: "",
  preferred: "الهاتف",
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
    { key: "business", label: ar ? "ما نوع نشاطك؟" : "What type of business is it?", hint: ar ? "مثال: عيادة، أو مطعم، أو شركة مقاولات، أو متجر، أو مشروع ناشئ" : "For example: clinic, restaurant, construction, shop or startup", type: "text" },
    { key: "build", label: ar ? "ماذا تريد أن تنشئ؟" : "What would you like to build?", hint: ar ? "اختر الخيار الأقرب، ويمكننا تحديد النوع المناسب لاحقًا" : "Choose the closest option—we can refine it later", type: "choices", choices: ar ? ["موقع تعريفي", "متجر إلكتروني", "تطبيق", "نظام إدارة", "أتمتة أعمال", "لست متأكدًا بعد"] : ["Company website", "Online store", "App", "Management system", "Business automation", "Not sure yet"] },
    { key: "problem", label: ar ? "ما المشكلة التي تريد حلها؟" : "What problem should it solve?", hint: ar ? "صِف ما يحدث حاليًا وما الذي ترغب في تحسينه" : "Describe what happens now and what should improve", type: "textarea" },
    { key: "audience", label: ar ? "من المستخدمون أو العملاء المستهدفون؟" : "Who are the target users?", hint: ar ? "أفراد، أو شركات، أو موظفون، أو وكلاء، أو جمهور محدد" : "Individuals, companies, staff, dealers or a specific audience", type: "text" },
    { key: "features", label: ar ? "ما الخصائص المهمة لك؟" : "Which features matter?", hint: ar ? "مثال: الحسابات، أو البحث، أو التقارير، أو الصلاحيات، أو الإشعارات" : "For example: accounts, search, reports, roles or notifications", type: "textarea" },
    { key: "integrations", label: ar ? "هل تحتاج إلى ربط أدوات أو أنظمة؟" : "Do you need integrations?", hint: ar ? "مثل WhatsApp، أو الدفع، أو الحجز، أو البريد، أو نظام CRM، أو نظام تستخدمه حاليًا" : "WhatsApp, payments, booking, email, a CRM or an existing system", type: "text" },
    { key: "assets", label: ar ? "ما المواد المتوفرة لديك؟" : "What assets do you already have?", hint: ar ? "مثل الشعار، أو المحتوى، أو الصور، أو النطاق، أو نظام قائم" : "Logo, content, images, domain or an existing system", type: "text" },
    { key: "timing", label: ar ? "متى ترغب في بدء المشروع؟" : "When would you like to start?", hint: ar ? "لا نحدّد مدة نهائية قبل تثبيت نطاق المشروع" : "No timeline is promised before scope is confirmed", type: "choices", choices: ar ? ["في أقرب وقت", "خلال شهر", "خلال ثلاثة أشهر", "ما زلت أستكشف الفكرة"] : ["As soon as possible", "Within a month", "Within 3 months", "Exploring the idea"] },
    { key: "budget", label: ar ? "الميزانية التقريبية — اختياري" : "Approximate budget — optional", hint: ar ? "تساعدنا في اقتراح نطاق مناسب، ولا ينتج عنها سعر آلي" : "Helps shape the scope; it will not generate an automatic quote", type: "text", optional: true },
    { key: "location", label: ar ? "أين يقع نشاطك؟" : "Where is the business located?", hint: ar ? "اختر المحافظة، ثم اكتب اسم المدينة" : "Governorate and city", type: "location" },
    { key: "preferred", label: ar ? "ما وسيلة التواصل المفضلة لديك؟" : "How should we contact you?", hint: ar ? "اختر الوسيلة الأنسب لك" : "Choose the most convenient channel", type: "choices", choices: [ar ? "الهاتف" : "Phone", ar ? "البريد الإلكتروني" : "Email"] },
    { key: "contact", label: ar ? "بيانات التواصل" : "Contact details", hint: ar ? "لن نستخدمها للتسويق دون موافقة منفصلة" : "Not used for marketing without separate consent", type: "contact" },
    { key: "summary", label: ar ? "راجع وصف مشروعك" : "Review your project brief", hint: ar ? "يمكنك الرجوع لتعديل أي إجابة قبل الإرسال" : "Go back to edit any answer before submitting", type: "summary" },
  ], [ar]);

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
    governorate: "المحافظة",
    city: "المدينة",
    preferred: "وسيلة التواصل",
    name: "الاسم",
    contact: "بيانات التواصل",
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
    governorate: "Governorate",
    city: "City",
    preferred: "Contact preference",
    name: "Name",
    contact: "Contact details",
  }, [ar]);

  const current = steps[step];
  const max = steps.length;
  const set = (key: string, value: string) => setAnswers(prev => ({ ...prev, [key]: value }));
  const valid = current.type === "summary"
    ? answers.consent === "yes"
    : current.key === "location"
      ? Boolean(answers.governorate && answers.city)
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
        body: JSON.stringify({ ...answers, referralCode, source: document.referrer || "direct", website: "" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      localStorage.removeItem("projectDraft");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") return <section id="project-wizard" className="section wizard-section">
    <div className="container"><div className="success-card"><span>✓</span><h2>{ar ? "تم إرسال وصف مشروعك بنجاح" : "Your project brief was sent successfully"}</h2><p>{ar ? "سنراجع التفاصيل ونتواصل معك عبر الوسيلة التي اخترتها. لا يُعد الإرسال قبولًا للمشروع أو عرض سعر نهائيًا." : "We will review the details and contact you through your preferred channel. Submission is not project acceptance or a final quote."}</p><button className="button ghost" onClick={() => { setStatus("idle"); setStep(0); setAnswers(initial); }}>{ar ? "إنشاء طلب آخر" : "Start another brief"}</button></div></div>
  </section>;

  return <section id="project-wizard" className="section wizard-section">
    <div className="container">
      <div className="wizard-intro">
        <span className="eyebrow">{ar ? "معالج طلب المشروع" : "Project brief wizard"}</span>
        <h2>{ar ? "لا تعرف اسم الحل؟ صِف المشكلة خطوة بخطوة." : "Not sure what to call the solution? Describe the problem step by step."}</h2>
        <p>{ar ? "لن ينتج المعالج سعرًا نهائيًا آليًا أو وعدًا ملزمًا. سنستخدم إجاباتك لفهم الفكرة وتحديد ما يحتاج إلى تقييم." : "This will not generate a final quote or binding promise. Your answers help us understand what needs assessment."}</p>
      </div>

      <form className="wizard-card" onSubmit={submit}>
        <div className="wizard-progress"><div><span>{ar ? `الخطوة ${step + 1} من ${max}` : `Step ${step + 1} of ${max}`}</span><b>{Math.round(((step + 1) / max) * 100)}%</b></div><i><span style={{ width: `${((step + 1) / max) * 100}%` }}></span></i></div>
        <div className="wizard-question">
          <span className="step-number">{String(step + 1).padStart(2, "0")}</span>
          <h3>{current.label}</h3>
          <p>{current.hint}</p>
          {current.type === "text" && <input value={answers[current.key]} onChange={e => set(current.key, e.target.value)} placeholder={ar ? "اكتب إجابتك هنا" : "Type your answer"} />}
          {current.type === "textarea" && <textarea value={answers[current.key]} onChange={e => set(current.key, e.target.value)} placeholder={ar ? "اكتب وصفًا مختصرًا..." : "Write a simple description..."} rows={4} />}
          {current.type === "choices" && <div className="choice-grid">{current.choices?.map(choice => <button className={answers[current.key] === choice ? "selected" : ""} type="button" onClick={() => set(current.key, choice)} key={choice}><span>{answers[current.key] === choice ? "✓" : ""}</span>{choice}</button>)}</div>}
          {current.type === "location" && <div className="field-grid"><label>{ar ? "المحافظة" : "Governorate"}<select value={answers.governorate} onChange={e => set("governorate", e.target.value)}><option value="">{ar ? "اختر المحافظة" : "Select"}</option>{governorates.map(x => <option key={x}>{x}</option>)}</select></label><label>{ar ? "المدينة" : "City"}<input value={answers.city} onChange={e => set("city", e.target.value)} /></label></div>}
          {current.type === "contact" && <div className="field-grid"><label>{ar ? "الاسم" : "Name"}<input value={answers.name} onChange={e => set("name", e.target.value)} /></label><label>{ar ? "رقم الهاتف أو البريد الإلكتروني" : "Phone or email"}<input value={answers.contact} onChange={e => set("contact", e.target.value)} /></label></div>}
          {current.type === "summary" && <div className="summary-box">{Object.entries(answers).filter(([key, value]) => value && key !== "consent").map(([key, value]) => <div key={key}><b>{summaryLabels[key] ?? key}</b><span>{value}</span></div>)}<label className="consent"><input type="checkbox" checked={answers.consent === "yes"} onChange={e => set("consent", e.target.checked ? "yes" : "")} /><span>{ar ? "أوافق على معالجة بيانات الطلب لغرض التواصل والتقييم وفق سياسة الخصوصية." : "I agree to processing this enquiry for contact and assessment under the privacy notice."}</span></label></div>}
          <input name="website" className="honeypot" tabIndex={-1} autoComplete="off" />
        </div>
        {status === "error" && <p className="form-error" role="alert">{ar ? "تعذّر إرسال الطلب. تحقّق من الاتصال وحاول مرة أخرى." : "The request could not be sent. Check your connection and try again."}</p>}
        <div className="wizard-actions">
          <button type="button" className="button ghost" disabled={step === 0} onClick={() => setStep(x => x - 1)}>{ar ? "السابق" : "Back"}</button>
          {step < max - 1
            ? <button type="button" className="button primary" disabled={!valid} onClick={() => setStep(x => x + 1)}>{ar ? "التالي" : "Next"}<span>←</span></button>
            : <button type="submit" className="button primary" disabled={!valid || status === "sending"}>{status === "sending" ? (ar ? "جارٍ الإرسال..." : "Sending...") : (ar ? "أرسل وصف المشروع" : "Send project brief")}</button>}
        </div>
      </form>
    </div>
  </section>;
}

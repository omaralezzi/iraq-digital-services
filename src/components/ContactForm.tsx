"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/src/content/siteSettings";
import { governorates } from "@/src/content/locales";
import { siteSettings } from "@/src/content/siteSettings";

export function ContactForm({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());
    payload.referralCode = localStorage.getItem("referralCode") || "";
    payload.source = document.referrer || "direct";
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      formElement.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return <section id="contact" className="section contact-section">
    <div className="container contact-layout">
      <div className="contact-copy">
        <span className="eyebrow">{ar ? "تواصل واضح منذ البداية" : "Clear communication from day one"}</span>
        <h2>{ar ? "أخبرنا بالمشكلة، وسنبدأ من هناك." : "Tell us the problem. We will start there."}</h2>
        <p>{ar ? "سنراجع الطلب قبل تحديد التكلفة أو المدة. ولا يتوفر رقم WhatsApp رسمي حاليًا؛ سنضيفه بعد تفعيل قناة تواصل معتمدة." : "We review the brief before quoting cost or timing. WhatsApp is not active yet and can later be enabled from central settings."}</p>
        <div className="contact-facts">
          <div><span>01</span><p><b>{ar ? "التنفيذ" : "Delivery"}</b>{ar ? "من دوسلدورف، ألمانيا" : "From Düsseldorf, Germany"}</p></div>
          <div><span>02</span><p><b>{ar ? "السوق المستهدف" : "Market"}</b>{ar ? "العراق" : "Iraq"}</p></div>
          <div><span>03</span><p><b>{ar ? "لغات التواصل" : "Language"}</b>{ar ? "العربية والإنجليزية" : "Arabic and English"}</p></div>
        </div>
        <div className="provider-note">
          <small>{ar ? "مزوّد الخدمة" : "Service provider"}</small>
          <b>{siteSettings.provider.legalName}</b>
          <span>{siteSettings.provider.address.join(" · ")}</span>
        </div>
      </div>

      <form className="contact-form" onSubmit={submit}>
        <div className="field-grid">
          <label>{ar ? "الاسم *" : "Name *"}<input name="name" required minLength={2} /></label>
          <label>{ar ? "اسم النشاط" : "Business name"}<input name="businessName" /></label>
          <label>{ar ? "رقم الهاتف أو WhatsApp *" : "Phone or WhatsApp *"}<input name="phone" required inputMode="tel" /></label>
          <label>{ar ? "البريد الإلكتروني" : "Email"}<input name="email" type="email" /></label>
          <label>{ar ? "الدولة" : "Country"}<input name="country" defaultValue={ar ? "العراق" : "Iraq"} /></label>
          <label>{ar ? "المحافظة" : "Governorate"}<select name="governorate"><option value="">{ar ? "اختر المحافظة" : "Select"}</option>{governorates.map(x => <option key={x}>{x}</option>)}</select></label>
          <label>{ar ? "المدينة" : "City"}<input name="city" /></label>
          <label>{ar ? "نوع المشروع" : "Project type"}<select name="projectType"><option>{ar ? "موقع إلكتروني" : "Website"}</option><option>{ar ? "متجر إلكتروني" : "Store"}</option><option>{ar ? "تطبيق" : "App"}</option><option>{ar ? "نظام إدارة" : "Management system"}</option><option>{ar ? "أتمتة أعمال" : "Automation"}</option><option>{ar ? "غير متأكد" : "Not sure"}</option></select></label>
          <label>{ar ? "الميزانية — اختياري" : "Budget — optional"}<input name="budget" /></label>
          <label>{ar ? "موعد البدء — اختياري" : "Start date — optional"}<input name="timing" /></label>
          <label>{ar ? "وسيلة التواصل المفضلة" : "Contact preference"}<select name="preferred"><option>WhatsApp</option><option>{ar ? "الهاتف" : "Phone"}</option><option>{ar ? "البريد الإلكتروني" : "Email"}</option></select></label>
          <label>{ar ? "كيف تعرفت علينا؟" : "How did you find us?"}<input name="discovery" /></label>
        </div>
        <label>{ar ? "وصف المشروع *" : "Project description *"}<textarea name="message" required minLength={15} rows={5}></textarea></label>
        <input name="website" className="honeypot" tabIndex={-1} autoComplete="off" />
        <label className="consent">
          <input name="consent" value="yes" type="checkbox" required />
          <span>{ar ? "أوافق على معالجة بياناتي لغرض التواصل والتقييم، وقد قرأت " : "I agree to processing my data for contact and assessment. I have read the "}<Link href={`/${locale}/legal/privacy`}>{ar ? "سياسة الخصوصية" : "privacy notice"}</Link>.</span>
        </label>
        {status === "success" && <p className="form-success" role="status">✓ {ar ? "تم استلام الطلب في النسخة التجريبية. خدمة الإرسال الخارجي غير مفعّلة بعد." : "The request was accepted locally. External delivery is not enabled yet."}</p>}
        {status === "error" && <p className="form-error" role="alert">{ar ? "حدث خطأ. راجع الحقول وحاول مرة أخرى." : "Something went wrong. Review the fields and try again."}</p>}
        <button className="button primary full" disabled={status === "sending"}>{status === "sending" ? (ar ? "جارٍ الإرسال..." : "Sending...") : (ar ? "أرسل طلب التواصل" : "Send enquiry")}</button>
      </form>
    </div>
  </section>;
}

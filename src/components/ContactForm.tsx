"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/src/content/siteSettings";
import { countries, regionLabels, regions } from "@/src/content/locales";
import { siteSettings } from "@/src/content/siteSettings";

export function ContactForm({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [country, setCountry] = useState<"IQ" | "DE">("IQ");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());
    payload.country = countries.find(option => option.value === country)?.label[locale] ?? country;
    const selectedRegion = regions[country].find(option => option.value === payload.governorate);
    payload.governorate = selectedRegion?.label[locale] ?? payload.governorate;
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
        <span className="eyebrow">{ar ? "تواصل واضح منذ البداية" : locale === "de" ? "Klare Kommunikation vom ersten Tag an" : "Clear communication from day one"}</span>
        <h2>{ar ? "أخبرنا بالمشكلة، وسنبدأ من هناك." : locale === "de" ? "Schildern Sie uns das Problem. Wir werden dort beginnen." : "Tell us the problem. We will start there."}</h2>
        <p>{ar ? "أرسل وصفًا مختصرًا لاحتياجك المهني أو التجاري، وسنراجعه قبل تحديد النطاق أو التكلفة أو المدة. تُقدَّم الخدمات لعملاء الأعمال والمهنيين فقط." : locale === "de" ? "Senden Sie eine kurze Beschreibung Ihres kommerziellen oder beruflichen Bedarfs. Wir werden es überprüfen, bevor wir Umfang, Kosten oder Zeitplan festlegen. Die Dienstleistungen werden ausschließlich Geschäfts- und Gewerbekunden angeboten." : "Send a short description of your commercial or professional need. We will review it before defining scope, cost or timing. Services are offered to business and professional customers only."}</p>
        <div className="contact-facts">
          <div><span>01</span><p><b>{ar ? "التنفيذ" : locale === "de" ? "Lieferung" : "Delivery"}</b>{ar ? "من دوسلدورف، ألمانيا" : locale === "de" ? "Aus Düsseldorf, Deutschland" : "From Düsseldorf, Germany"}</p></div>
          <div><span>02</span><p><b>{ar ? "السوق المستهدف" : locale === "de" ? "Märkte" : "Markets"}</b>{ar ? "العراق وألمانيا" : locale === "de" ? "Irak und Deutschland" : "Iraq and Germany"}</p></div>
          <div><span>03</span><p><b>{ar ? "لغات التواصل" : locale === "de" ? "Sprachen" : "Languages"}</b>{ar ? "العربية والإنجليزية والألمانية" : locale === "de" ? "Arabisch, Englisch und Deutsch" : "Arabic, English and German"}</p></div>
        </div>
        <div className="provider-note">
          <small>{ar ? "مزوّد الخدمة" : locale === "de" ? "Dienstleister" : "Service provider"}</small>
          <b>{siteSettings.provider.legalName}</b>
          <span>{siteSettings.provider.address.join(" · ")}</span>
        </div>
      </div>

      <form className="contact-form" onSubmit={submit}>
        <div className="field-grid">
          <label>{ar ? "الاسم *" : locale === "de" ? "Name *" : "Name *"}<input name="name" required minLength={2} /></label>
          <label>{ar ? "اسم النشاط" : locale === "de" ? "Firmenname" : "Business name"}<input name="businessName" /></label>
          <label>{ar ? "رقم الهاتف *" : locale === "de" ? "Telefonnummer *" : "Phone number *"}<input name="phone" required inputMode="tel" /></label>
          <label>{ar ? "البريد الإلكتروني" : locale === "de" ? "E-Mail" : "Email"}<input name="email" type="email" /></label>
          <label>{ar ? "الدولة" : locale === "de" ? "Land" : "Country"}<select name="countryCode" value={country} onChange={event => setCountry(event.target.value as "IQ" | "DE")}>{countries.map(option => <option key={option.value} value={option.value}>{option.label[locale]}</option>)}</select></label>
          <label>{regionLabels[country][locale]}<select name="governorate" defaultValue="" key={country}><option value="">{ar ? "اختر" : locale === "de" ? "Auswählen" : "Select"}</option>{regions[country].map(option => <option key={option.value} value={option.value}>{option.label[locale]}</option>)}</select></label>
          <label>{ar ? "المدينة" : locale === "de" ? "Stadt" : "City"}<input name="city" /></label>
          <label>{ar ? "نوع المشروع" : locale === "de" ? "Projekttyp" : "Project type"}<select name="projectType"><option>{ar ? "موقع إلكتروني" : locale === "de" ? "Website" : "Website"}</option><option>{ar ? "متجر إلكتروني" : locale === "de" ? "Onlineshop" : "Store"}</option><option>{ar ? "تطبيق" : locale === "de" ? "App" : "App"}</option><option>{ar ? "نظام إدارة" : locale === "de" ? "Managementsystem" : "Management system"}</option><option>{ar ? "أتمتة أعمال" : locale === "de" ? "Geschäftsautomatisierung" : "Automation"}</option><option>{ar ? "غير متأكد" : locale === "de" ? "Noch nicht sicher" : "Not sure"}</option></select></label>
          <label>{ar ? "الميزانية — اختياري" : locale === "de" ? "Budget – optional" : "Budget — optional"}<input name="budget" /></label>
          <label>{ar ? "موعد البدء — اختياري" : locale === "de" ? "Startdatum – optional" : "Start date — optional"}<input name="timing" /></label>
          <label>{ar ? "وسيلة التواصل المفضلة" : locale === "de" ? "Kontaktpräferenz" : "Contact preference"}<select name="preferred"><option>{ar ? "الهاتف" : locale === "de" ? "Telefon" : "Phone"}</option><option>WhatsApp</option><option>{ar ? "البريد الإلكتروني" : locale === "de" ? "E-Mail" : "Email"}</option></select></label>
          <label>{ar ? "كيف تعرفت علينا؟" : locale === "de" ? "Wie haben Sie uns gefunden?" : "How did you find us?"}<input name="discovery" /></label>
        </div>
        <label>{ar ? "وصف المشروع *" : locale === "de" ? "Projektbeschreibung *" : "Project description *"}<textarea name="message" required minLength={15} rows={5}></textarea></label>
        <input name="website" className="honeypot" tabIndex={-1} autoComplete="off" />
        <label className="consent">
          <input name="consent" value="yes" type="checkbox" required />
          <span>{ar ? "أوافق على معالجة بياناتي لغرض التواصل والتقييم، وقد قرأت " : locale === "de" ? "Ich stimme der Verarbeitung meiner Daten zur Kontaktaufnahme und Bewertung zu und habe die " : "I agree to processing my data for contact and assessment. I have read the "}<Link href={`/${locale}/legal/privacy`}>{ar ? "سياسة الخصوصية" : locale === "de" ? "Datenschutzerklärung" : "privacy notice"}</Link>{locale === "de" ? " gelesen." : "."}</span>
        </label>
        {status === "success" && <p className="form-success" role="status">✓ {ar ? "تم إرسال طلبك بنجاح. سنراجعه ونتواصل معك عبر الوسيلة التي اخترتها." : locale === "de" ? "Ihre Anfrage wurde erfolgreich versendet. Wir werden es prüfen und Sie über den von Ihnen bevorzugten Kanal kontaktieren." : "Your enquiry was sent successfully. We will review it and contact you through your preferred channel."}</p>}
        {status === "error" && <p className="form-error" role="alert">{ar ? "حدث خطأ. راجع الحقول وحاول مرة أخرى." : locale === "de" ? "Etwas ist schief gelaufen. Überprüfen Sie die Felder und versuchen Sie es erneut." : "Something went wrong. Review the fields and try again."}</p>}
        <button className="button primary full" disabled={status === "sending"}>{status === "sending" ? (ar ? "جارٍ الإرسال..." : locale === "de" ? "Senden..." : "Sending...") : (ar ? "أرسل طلب التواصل" : locale === "de" ? "Anfrage senden" : "Send enquiry")}</button>
      </form>
    </div>
  </section>;
}

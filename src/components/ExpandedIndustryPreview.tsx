"use client";

import { useState } from "react";
import type { ContextDemo, DemoRow, Pair } from "@/src/content/contextDemos";
import type { Locale } from "@/src/content/siteSettings";
import { industryImages } from "@/src/content/industryImages";

type Props = { demo: ContextDemo; locale: Locale; slug: string };

type PreviewConfig = {
  mark: string;
  kicker: Pair;
  visualTitle: Pair;
  visualMeta: Pair;
  layout: string;
};

export const expandedIndustrySlugs = [
  "law-firms", "private-schools", "kindergartens", "medical-labs", "pharmacies", "sports-clubs",
  "beauty-salons", "accounting", "architecture", "recruitment", "training-institutes", "automotive",
  "logistics", "hospitality", "events", "manufacturing", "insurance", "religious-travel",
] as const;

const configs: Record<(typeof expandedIndustrySlugs)[number], PreviewConfig> = {
  "law-firms": { mark: "§", kicker: ["ملف قانوني خاص", "Private legal matter", "Private Rechtssache"], visualTitle: ["الاستشارة #L-204", "Consultation #L-204", "Beratung #L-204"], visualMeta: ["قائمة مستندات • موعد • مهلة", "Documents • meeting • deadline", "Dokumente • Besprechung • Frist"], layout: "brief" },
  "private-schools": { mark: "ر", kicker: ["بوابة ولي الأمر", "Parent portal", "Elternportal"], visualTitle: ["الصف الرابع — أ", "Grade four — A", "Klasse vier – A"], visualMeta: ["الثلاثاء، 18 آب", "Tuesday, 18 August", "Dienstag, 18. August"], layout: "portal" },
  kindergartens: { mark: "✿", kicker: ["حكاية اليوم", "Today’s story", "Die heutige Geschichte"], visualTitle: ["ألوان وأشكال جديدة", "New colours and shapes", "Neue Farben und Formen"], visualMeta: ["تحديث من مجموعة الأقحوان", "Update from Daisy group", "Update von der Daisy-Gruppe"], layout: "story" },
  "medical-labs": { mark: "⚗", kicker: ["تتبّع العينة", "Sample tracking", "Probenverfolgung"], visualTitle: ["العينة #B-142", "Sample #B-142", "Probe Nr. B-142"], visualMeta: ["هوية خيالية • رمز تحقق", "Fictional identity • verification", "• Verifizierung der fiktiven Identität"], layout: "tracker" },
  pharmacies: { mark: "✚", kicker: ["مخزون الفرع", "Branch inventory", "Filialinventur"], visualTitle: ["فرع المنصور", "Mansour branch", "Mansour-Filiale"], visualMeta: ["توافر لحظي وطلب تجهيز", "Live availability and preparation", "Live-Verfügbarkeit und Vorbereitung"], layout: "shelf" },
  "sports-clubs": { mark: "H", kicker: ["جدول اليوم", "Today’s schedule", "Der heutige Zeitplan"], visualTitle: ["تمارين القوة", "Strength training", "Krafttraining"], visualMeta: ["18:30 • 4 مقاعد متبقية", "18:30 • 4 places left", "18:30 • 4 Plätze frei"], layout: "arena" },
  "beauty-salons": { mark: "L", kicker: ["موعدك القادم", "Your next appointment", "Ihr nächster Termin"], visualTitle: ["تصفيف مع نور", "Styling with Noor", "Styling mit Noor"], visualMeta: ["الثلاثاء • 17:00", "Tuesday • 17:00", "Dienstag • 17:00"], layout: "editorial" },
  accounting: { mark: "∑", kicker: ["الإقفال الشهري", "Monthly close", "Monatsabschluss"], visualTitle: ["تموز 2026", "July 2026", "Juli 2026"], visualMeta: ["8 من 9 مهام مكتملة", "8 of 9 tasks complete", "8 von 9 Aufgaben abgeschlossen"], layout: "ledger" },
  architecture: { mark: "A", kicker: ["لوحة المشروع", "Project sheet", "Projektblatt"], visualTitle: ["منزل الجادرية — R03", "Jadriya House — R03", "Jadriya-Haus – R03"], visualMeta: ["مخطط الطابق الأرضي", "Ground-floor plan", "Grundriss Erdgeschoss"], layout: "blueprint" },
  recruitment: { mark: "◎", kicker: ["خط التوظيف", "Hiring pipeline", "Einstellungspipeline"], visualTitle: ["مصمم واجهات", "UI designer", "UI-Designer"], visualMeta: ["46 مرشحًا • 8 مقابلات", "46 candidates • 8 interviews", "46 Kandidaten • 8 Interviews"], layout: "pipeline" },
  "training-institutes": { mark: "B1", kicker: ["نتيجة المستوى", "Placement result", "Platzierungsergebnis"], visualTitle: ["الإنجليزية — B1", "English — B1", "Englisch – B1"], visualMeta: ["مجموعة مسائية متاحة", "Evening group available", "Abendgruppe verfügbar"], layout: "lesson" },
  automotive: { mark: "M", kicker: ["حالة المركبة", "Vehicle status", "Fahrzeugstatus"], visualTitle: ["Camry 2022 • B2", "Camry 2022 • B2"], visualMeta: ["فحص مكتمل • قرار مطلوب", "Inspection complete • decision needed", "Inspektion abgeschlossen • Entscheidung erforderlich"], layout: "garage" },
  logistics: { mark: "W", kicker: ["تتبّع مباشر", "Live tracking", "Live-Tracking"], visualTitle: ["الشحنة #W-2048", "Shipment #W-2048", "Sendung Nr. W-2048"], visualMeta: ["مركز الفرز ← المنصور", "Sorting hub → Mansour", "Sortierzentrum → Mansour"], layout: "route" },
  hospitality: { mark: "D", kicker: ["إقامة مختارة", "Selected stay", "Ausgewählter Aufenthalt"], visualTitle: ["غرفة دجلة", "Dijla Room", "Dijla-Zimmer"], visualMeta: ["20 — 23 آب • ضيفان", "20 — 23 Aug • two guests", "20. – 23. August • zwei Gäste"], layout: "suite" },
  events: { mark: "180", kicker: ["مخطط المناسبة", "Event plan", "Veranstaltungsplan"], visualTitle: ["قاعة النخيل", "Palm Hall", "Palmenhalle"], visualMeta: ["18 طاولة • باقة المساء", "18 tables • Evening package", "18 Tische • Abendpauschale"], layout: "floor" },
  manufacturing: { mark: "02", kicker: ["خط الإنتاج", "Production line", "Produktionslinie"], visualTitle: ["الدفعة #B-71", "Batch #B-71", "Charge Nr. B-71"], visualMeta: ["240 وحدة • فحص جودة", "240 units • quality check", "240 Einheiten • Qualitätskontrolle"], layout: "factory" },
  insurance: { mark: "⬡", kicker: ["طلب عرض توضيحي", "Illustrative quote", "Illustratives Zitat"], visualTitle: ["تغطية موسعة", "Extended cover", "Erweiterter Versicherungsschutz"], visualMeta: ["مزايا وحدود واستثناءات واضحة", "Clear benefits, limits and exclusions", "Klare Vorteile, Grenzen und Ausschlüsse"], layout: "compare" },
  "religious-travel": { mark: "☾", kicker: ["برنامج المجموعة", "Group itinerary", "Gruppenreiseplan"], visualTitle: ["النجف وكربلاء", "Najaf and Karbala", "Nadschaf und Kerbela"], visualMeta: ["5 أيام • 34 مشاركًا", "5 days • 34 travellers", "5 Tage • 34 Reisende"], layout: "itinerary" },
};

function SectorVisual({ slug, locale, phase }: { slug: string; locale: Locale; phase: number }) {
  const ar = locale === "ar";
  if (slug === "law-firms") return <div className="ep-law"><span>§</span><div><small>{ar ? "سري" : locale === "de" ? "PRIVAT" : "PRIVATE"}</small><b>{ar ? "مذكرة الاستشارة" : locale === "de" ? "Kurzberatung" : "Consultation brief"}</b><i></i><i></i><i></i></div></div>;
  if (slug === "private-schools") return <div className="ep-school"><div><b>07:42</b><small>{ar ? "تسجيل الحضور" : locale === "de" ? "Teilnahme" : "Attendance"}</small></div><ol>{[ar ? "العربية" : locale === "de" ? "Arabisch" : "Arabic", ar ? "الرياضيات" : locale === "de" ? "Mathematik" : "Maths", ar ? "العلوم" : locale === "de" ? "Wissenschaft" : "Science"].map((x, i) => <li className={phase > i ? "done" : ""} key={x}><span>0{i + 1}</span>{x}</li>)}</ol></div>;
  if (slug === "kindergartens") return <div className="ep-kids"><span className="sun">☀</span><div className="cloud"></div><div className="flower">✿</div><p>{ar ? "رسمنا اليوم عالمًا مليئًا بالألوان" : locale === "de" ? "Heute haben wir eine Welt voller Farben gemalt" : "Today we painted a world full of colour"}</p></div>;
  if (slug === "medical-labs") return <div className="ep-lab"><div className="tube"><i style={{ height: `${45 + phase * 18}%` }}></i></div><ol>{[ar ? "استلام" : locale === "de" ? "Erhalten" : "Received", ar ? "فحص" : locale === "de" ? "Testen" : "Testing", ar ? "اعتماد" : locale === "de" ? "Genehmigung" : "Approval"].map((x, i) => <li className={phase >= i ? "active" : ""} key={x}><span>{phase > i ? "✓" : i + 1}</span>{x}</li>)}</ol></div>;
  if (slug === "pharmacies") return <div className="ep-pharmacy"><div className="shelves">{[78, 42, 64, 88, 36, 70].map((v, i) => <i style={{ height: `${v}%` }} key={i}></i>)}</div><span><b>{phase ? "15" : "16"}</b>{ar ? "طلب تجهيز" : locale === "de" ? "Vorbereitungsanfragen" : "prep requests"}</span></div>;
  if (slug === "sports-clubs") return <div className="ep-sports"><div className="activity-ring"><strong>{phase ? "84" : "68"}</strong><small>MOVE</small></div><div><b>18:30</b><span>{ar ? "القوة" : locale === "de" ? "STÄRKE" : "STRENGTH"}</span></div></div>;
  if (slug === "beauty-salons") return <div className="ep-beauty"><span>L</span><div><small>17:00</small><b>{ar ? "لحظة مخصصة لكِ" : locale === "de" ? "Ein Moment, der für Sie gemacht ist" : "A moment made for you"}</b><i></i></div></div>;
  if (slug === "accounting") return <div className="ep-ledger"><header><b>{phase ? "92%" : "82%"}</b><span>{ar ? "مكتمل" : locale === "de" ? "vollständig" : "complete"}</span></header><div>{[72, 96, 58, phase ? 90 : 36].map((v, i) => <i style={{ height: `${v}%` }} key={i}></i>)}</div><footer><span>01</span><span>02</span><span>03</span><span>04</span></footer></div>;
  if (slug === "architecture") return <div className="ep-plan"><div className="room a"></div><div className="room b"></div><div className="room c"></div><span>R0{phase + 3}</span><i></i></div>;
  if (slug === "recruitment") return <div className="ep-candidates">{["أ", "س", "م"].map((x, i) => <div className={phase >= i ? "active" : ""} key={x}><span>{x}</span><i></i><small>{[ar ? "فرز" : locale === "de" ? "Bildschirm" : "Screen", ar ? "مقابلة" : locale === "de" ? "Interview" : "Interview", ar ? "قرار" : locale === "de" ? "Entscheidung" : "Decision"][i]}</small></div>)}</div>;
  if (slug === "training-institutes") return <div className="ep-level"><span>A2</span><i>→</i><strong>B1</strong><div><b>{phase ? "86%" : "72%"}</b><small>{ar ? "نتيجة الاختبار" : locale === "de" ? "Platzierungsergebnis" : "placement score"}</small></div></div>;
  if (slug === "automotive") return <div className="ep-car"><div className="car-body"><i></i><span></span><span></span></div><ol><li className="done">✓</li><li className={phase ? "done" : ""}>{phase ? "✓" : "2"}</li><li>3</li></ol></div>;
  if (slug === "logistics") return <div className="ep-route"><span className="point start">✓</span><i></i><span className={`truck phase-${phase}`}>⇢</span><span className="point end">⌖</span><small>{ar ? "موعد متوقع 15:40" : locale === "de" ? "ETA 15:40" : "ETA 15:40"}</small></div>;
  if (slug === "hospitality") return <div className="ep-room"><div className="window"><i></i></div><div><small>{ar ? "إطلالة المدينة" : locale === "de" ? "STADTBLICK" : "CITY VIEW"}</small><b>{ar ? "هدوء في قلب بغداد" : locale === "de" ? "Ruhe im Herzen von Bagdad" : "Calm in the heart of Baghdad"}</b><span>20 — 23 AUG</span></div></div>;
  if (slug === "events") return <div className="ep-tables">{Array.from({ length: 8 }, (_, i) => <span className={phase && i < 3 ? "selected" : ""} key={i}><i></i><i></i><i></i><i></i></span>)}<strong>{ar ? "المسرح" : locale === "de" ? "BÜHNE" : "STAGE"}</strong></div>;
  if (slug === "manufacturing") return <div className="ep-line"><div className="conveyor">{[1, 2, 3].map(x => <span className={phase >= x - 1 ? "active" : ""} key={x}>{phase > x - 1 ? "✓" : x}</span>)}</div><footer><b>{phase ? "84%" : "78%"}</b><small>{ar ? "كفاءة الخط" : locale === "de" ? "Linieneffizienz" : "line efficiency"}</small></footer></div>;
  if (slug === "insurance") return <div className="ep-insurance"><div><span>✓</span><b>{ar ? "أساسية" : locale === "de" ? "Essentiell" : "Essential"}</b><i></i><i></i></div><div className="featured"><span>⬡</span><b>{ar ? "موسعة" : locale === "de" ? "Erweitert" : "Extended"}</b><i></i><i></i><i></i></div></div>;
  return <div className="ep-pilgrimage"><div><span>01</span><b>{ar ? "الوصول" : locale === "de" ? "Ankunft" : "Arrival"}</b></div><i></i><div><span>02</span><b>{ar ? "الزيارة" : locale === "de" ? "Besuchen" : "Visit"}</b></div><i></i><div><span>03</span><b>{ar ? "العودة" : locale === "de" ? "Zurückkehren" : "Return"}</b></div></div>;
}

export function ExpandedIndustryPreview({ demo, locale, slug }: Props) {
  const [phase, setPhase] = useState(0);
  const [selected, setSelected] = useState(0);
  const ar = locale === "ar";
  const config = configs[slug as keyof typeof configs];
  const image = industryImages[slug];
  const t = (pair: Pair) => pair[locale === "ar" ? 0 : locale === "de" ? 2 : 1] ?? pair[1];
  const title = (row: DemoRow) => t(row[1]);
  const meta = (row: DemoRow) => t(row[2]);
  const status = (row: DemoRow) => t(row[3]);

  if (!config) return null;
  const run = () => setPhase(value => value >= 2 ? 0 : value + 1);

  return <div className={`specialized-canvas expanded-preview ep-${config.layout} sector-${slug}`}>
    <header className="ep-header">
      <div className="ep-brand"><span>{config.mark}</span><div><small>{t(config.kicker)}</small><b>{t(demo.brand)}</b></div></div>
      <button className="specialized-action" type="button" onClick={run}>{phase ? (phase === 2 ? (ar ? "أعد التجربة ↻" : locale === "de" ? "Demo zurücksetzen ↻" : "Reset demo ↻") : (ar ? "انتقل إلى الخطوة الأخيرة ←" : locale === "de" ? "Gehen Sie zum letzten Schritt →" : "Move to final step →")) : t(demo.action)}</button>
    </header>
    <div className="ep-layout">
      <section className="ep-spotlight">
        <div className="ep-spotlight-copy"><span>0{phase + 1} / 03</span><h3>{t(config.visualTitle)}</h3><p>{t(config.visualMeta)}</p></div>
        <div className={`ep-visual-stage${image ? " has-photo" : ""}`}>
          {image && <div className="ep-sector-photo" role="img" aria-label={image.alt[locale]} style={{ backgroundImage: `url(${image.src})`, backgroundPosition: image.position }}><span>{image.alt[locale]}</span></div>}
          <div className="ep-functional-view"><SectorVisual slug={slug} locale={locale} phase={phase} /></div>
        </div>
        <div className={`specialized-result${phase ? " show" : ""}`} role="status" aria-live="polite">✓ {phase ? t(demo.result) : ""}</div>
      </section>
      <section className="ep-client-panel">
        <header><span>{t(demo.client.label)}</span><b>{t(demo.client.title)}</b></header>
        <div>{demo.client.rows.map((row, index) => <button className={selected === index ? "selected" : ""} type="button" onClick={() => setSelected(index)} key={row[1][1]}><i>{row[0]}</i><span><b>{title(row)}</b><small>{meta(row)}</small></span><em>{status(row)}</em></button>)}</div>
      </section>
      <aside className="ep-admin-panel">
        <header><span>{t(demo.admin.label)}</span><b>{t(demo.admin.title)}</b></header>
        {demo.admin.rows.map((row, index) => <article className={phase > index ? "done" : ""} key={row[1][1]}><i>{row[0]}</i><div><b>{title(row)}</b><small>{meta(row)}</small></div><em>{phase > index ? "✓" : status(row)}</em></article>)}
        <footer>{demo.stats.map(stat => <span key={stat[1][1]}><b>{stat[0]}</b><small>{t(stat[1])}</small></span>)}</footer>
      </aside>
    </div>
  </div>;
}

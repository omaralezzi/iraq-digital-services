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
  "law-firms": { mark: "§", kicker: ["ملف قانوني خاص", "Private legal matter"], visualTitle: ["الاستشارة #L-204", "Consultation #L-204"], visualMeta: ["قائمة مستندات • موعد • مهلة", "Documents • meeting • deadline"], layout: "brief" },
  "private-schools": { mark: "ر", kicker: ["بوابة ولي الأمر", "Parent portal"], visualTitle: ["الصف الرابع — أ", "Grade four — A"], visualMeta: ["الثلاثاء، 18 آب", "Tuesday, 18 August"], layout: "portal" },
  kindergartens: { mark: "✿", kicker: ["حكاية اليوم", "Today’s story"], visualTitle: ["ألوان وأشكال جديدة", "New colours and shapes"], visualMeta: ["تحديث من مجموعة الأقحوان", "Update from Daisy group"], layout: "story" },
  "medical-labs": { mark: "⚗", kicker: ["تتبّع العينة", "Sample tracking"], visualTitle: ["العينة #B-142", "Sample #B-142"], visualMeta: ["هوية خيالية • رمز تحقق", "Fictional identity • verification"], layout: "tracker" },
  pharmacies: { mark: "✚", kicker: ["مخزون الفرع", "Branch inventory"], visualTitle: ["فرع المنصور", "Mansour branch"], visualMeta: ["توافر لحظي وطلب تجهيز", "Live availability and preparation"], layout: "shelf" },
  "sports-clubs": { mark: "H", kicker: ["جدول اليوم", "Today’s schedule"], visualTitle: ["تمارين القوة", "Strength training"], visualMeta: ["18:30 • 4 مقاعد متبقية", "18:30 • 4 places left"], layout: "arena" },
  "beauty-salons": { mark: "L", kicker: ["موعدك القادم", "Your next appointment"], visualTitle: ["تصفيف مع نور", "Styling with Noor"], visualMeta: ["الثلاثاء • 17:00", "Tuesday • 17:00"], layout: "editorial" },
  accounting: { mark: "∑", kicker: ["الإقفال الشهري", "Monthly close"], visualTitle: ["تموز 2026", "July 2026"], visualMeta: ["8 من 9 مهام مكتملة", "8 of 9 tasks complete"], layout: "ledger" },
  architecture: { mark: "A", kicker: ["لوحة المشروع", "Project sheet"], visualTitle: ["منزل الجادرية — R03", "Jadriya House — R03"], visualMeta: ["مخطط الطابق الأرضي", "Ground-floor plan"], layout: "blueprint" },
  recruitment: { mark: "◎", kicker: ["خط التوظيف", "Hiring pipeline"], visualTitle: ["مصمم واجهات", "UI designer"], visualMeta: ["46 مرشحًا • 8 مقابلات", "46 candidates • 8 interviews"], layout: "pipeline" },
  "training-institutes": { mark: "B1", kicker: ["نتيجة المستوى", "Placement result"], visualTitle: ["الإنجليزية — B1", "English — B1"], visualMeta: ["مجموعة مسائية متاحة", "Evening group available"], layout: "lesson" },
  automotive: { mark: "M", kicker: ["حالة المركبة", "Vehicle status"], visualTitle: ["Camry 2022 • B2", "Camry 2022 • B2"], visualMeta: ["فحص مكتمل • قرار مطلوب", "Inspection complete • decision needed"], layout: "garage" },
  logistics: { mark: "W", kicker: ["تتبّع مباشر", "Live tracking"], visualTitle: ["الشحنة #W-2048", "Shipment #W-2048"], visualMeta: ["مركز الفرز ← المنصور", "Sorting hub → Mansour"], layout: "route" },
  hospitality: { mark: "D", kicker: ["إقامة مختارة", "Selected stay"], visualTitle: ["غرفة دجلة", "Dijla Room"], visualMeta: ["20 — 23 آب • ضيفان", "20 — 23 Aug • two guests"], layout: "suite" },
  events: { mark: "180", kicker: ["مخطط المناسبة", "Event plan"], visualTitle: ["قاعة النخيل", "Palm Hall"], visualMeta: ["18 طاولة • باقة المساء", "18 tables • Evening package"], layout: "floor" },
  manufacturing: { mark: "02", kicker: ["خط الإنتاج", "Production line"], visualTitle: ["الدفعة #B-71", "Batch #B-71"], visualMeta: ["240 وحدة • فحص جودة", "240 units • quality check"], layout: "factory" },
  insurance: { mark: "⬡", kicker: ["طلب عرض توضيحي", "Illustrative quote"], visualTitle: ["تغطية موسعة", "Extended cover"], visualMeta: ["مزايا وحدود واستثناءات واضحة", "Clear benefits, limits and exclusions"], layout: "compare" },
  "religious-travel": { mark: "☾", kicker: ["برنامج المجموعة", "Group itinerary"], visualTitle: ["النجف وكربلاء", "Najaf and Karbala"], visualMeta: ["5 أيام • 34 مشاركًا", "5 days • 34 travellers"], layout: "itinerary" },
};

function SectorVisual({ slug, locale, phase }: { slug: string; locale: Locale; phase: number }) {
  const ar = locale === "ar";
  if (slug === "law-firms") return <div className="ep-law"><span>§</span><div><small>{ar ? "سري" : "PRIVATE"}</small><b>{ar ? "مذكرة الاستشارة" : "Consultation brief"}</b><i></i><i></i><i></i></div></div>;
  if (slug === "private-schools") return <div className="ep-school"><div><b>07:42</b><small>{ar ? "تسجيل الحضور" : "Attendance"}</small></div><ol>{[ar ? "العربية" : "Arabic", ar ? "الرياضيات" : "Maths", ar ? "العلوم" : "Science"].map((x, i) => <li className={phase > i ? "done" : ""} key={x}><span>0{i + 1}</span>{x}</li>)}</ol></div>;
  if (slug === "kindergartens") return <div className="ep-kids"><span className="sun">☀</span><div className="cloud"></div><div className="flower">✿</div><p>{ar ? "رسمنا اليوم عالمًا مليئًا بالألوان" : "Today we painted a world full of colour"}</p></div>;
  if (slug === "medical-labs") return <div className="ep-lab"><div className="tube"><i style={{ height: `${45 + phase * 18}%` }}></i></div><ol>{[ar ? "استلام" : "Received", ar ? "فحص" : "Testing", ar ? "اعتماد" : "Approval"].map((x, i) => <li className={phase >= i ? "active" : ""} key={x}><span>{phase > i ? "✓" : i + 1}</span>{x}</li>)}</ol></div>;
  if (slug === "pharmacies") return <div className="ep-pharmacy"><div className="shelves">{[78, 42, 64, 88, 36, 70].map((v, i) => <i style={{ height: `${v}%` }} key={i}></i>)}</div><span><b>{phase ? "15" : "16"}</b>{ar ? "طلب تجهيز" : "prep requests"}</span></div>;
  if (slug === "sports-clubs") return <div className="ep-sports"><div className="activity-ring"><strong>{phase ? "84" : "68"}</strong><small>MOVE</small></div><div><b>18:30</b><span>{ar ? "القوة" : "STRENGTH"}</span></div></div>;
  if (slug === "beauty-salons") return <div className="ep-beauty"><span>L</span><div><small>17:00</small><b>{ar ? "لحظة مخصصة لكِ" : "A moment made for you"}</b><i></i></div></div>;
  if (slug === "accounting") return <div className="ep-ledger"><header><b>{phase ? "92%" : "82%"}</b><span>{ar ? "مكتمل" : "complete"}</span></header><div>{[72, 96, 58, phase ? 90 : 36].map((v, i) => <i style={{ height: `${v}%` }} key={i}></i>)}</div><footer><span>01</span><span>02</span><span>03</span><span>04</span></footer></div>;
  if (slug === "architecture") return <div className="ep-plan"><div className="room a"></div><div className="room b"></div><div className="room c"></div><span>R0{phase + 3}</span><i></i></div>;
  if (slug === "recruitment") return <div className="ep-candidates">{["أ", "س", "م"].map((x, i) => <div className={phase >= i ? "active" : ""} key={x}><span>{x}</span><i></i><small>{[ar ? "فرز" : "Screen", ar ? "مقابلة" : "Interview", ar ? "قرار" : "Decision"][i]}</small></div>)}</div>;
  if (slug === "training-institutes") return <div className="ep-level"><span>A2</span><i>→</i><strong>B1</strong><div><b>{phase ? "86%" : "72%"}</b><small>{ar ? "نتيجة الاختبار" : "placement score"}</small></div></div>;
  if (slug === "automotive") return <div className="ep-car"><div className="car-body"><i></i><span></span><span></span></div><ol><li className="done">✓</li><li className={phase ? "done" : ""}>{phase ? "✓" : "2"}</li><li>3</li></ol></div>;
  if (slug === "logistics") return <div className="ep-route"><span className="point start">✓</span><i></i><span className={`truck phase-${phase}`}>⇢</span><span className="point end">⌖</span><small>{ar ? "موعد متوقع 15:40" : "ETA 15:40"}</small></div>;
  if (slug === "hospitality") return <div className="ep-room"><div className="window"><i></i></div><div><small>{ar ? "إطلالة المدينة" : "CITY VIEW"}</small><b>{ar ? "هدوء في قلب بغداد" : "Calm in the heart of Baghdad"}</b><span>20 — 23 AUG</span></div></div>;
  if (slug === "events") return <div className="ep-tables">{Array.from({ length: 8 }, (_, i) => <span className={phase && i < 3 ? "selected" : ""} key={i}><i></i><i></i><i></i><i></i></span>)}<strong>{ar ? "المسرح" : "STAGE"}</strong></div>;
  if (slug === "manufacturing") return <div className="ep-line"><div className="conveyor">{[1, 2, 3].map(x => <span className={phase >= x - 1 ? "active" : ""} key={x}>{phase > x - 1 ? "✓" : x}</span>)}</div><footer><b>{phase ? "84%" : "78%"}</b><small>{ar ? "كفاءة الخط" : "line efficiency"}</small></footer></div>;
  if (slug === "insurance") return <div className="ep-insurance"><div><span>✓</span><b>{ar ? "أساسية" : "Essential"}</b><i></i><i></i></div><div className="featured"><span>⬡</span><b>{ar ? "موسعة" : "Extended"}</b><i></i><i></i><i></i></div></div>;
  return <div className="ep-pilgrimage"><div><span>01</span><b>{ar ? "الوصول" : "Arrival"}</b></div><i></i><div><span>02</span><b>{ar ? "الزيارة" : "Visit"}</b></div><i></i><div><span>03</span><b>{ar ? "العودة" : "Return"}</b></div></div>;
}

export function ExpandedIndustryPreview({ demo, locale, slug }: Props) {
  const [phase, setPhase] = useState(0);
  const [selected, setSelected] = useState(0);
  const ar = locale === "ar";
  const config = configs[slug as keyof typeof configs];
  const image = industryImages[slug];
  const t = (pair: Pair) => pair[ar ? 0 : 1];
  const title = (row: DemoRow) => t(row[1]);
  const meta = (row: DemoRow) => t(row[2]);
  const status = (row: DemoRow) => t(row[3]);

  if (!config) return null;
  const run = () => setPhase(value => value >= 2 ? 0 : value + 1);

  return <div className={`specialized-canvas expanded-preview ep-${config.layout} sector-${slug}`}>
    <header className="ep-header">
      <div className="ep-brand"><span>{config.mark}</span><div><small>{t(config.kicker)}</small><b>{t(demo.brand)}</b></div></div>
      <button className="specialized-action" type="button" onClick={run}>{phase ? (phase === 2 ? (ar ? "أعد التجربة ↻" : "Reset demo ↻") : (ar ? "انتقل إلى الخطوة الأخيرة ←" : "Move to final step →")) : t(demo.action)}</button>
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

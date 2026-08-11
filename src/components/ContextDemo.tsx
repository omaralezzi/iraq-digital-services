import { getContextDemo, type Pair } from "@/src/content/contextDemos";
import type { Locale } from "@/src/content/siteSettings";
import { DomainPreview } from "@/src/components/DomainPreview";
import { StaticDesignGallery } from "@/src/components/StaticDesignGallery";

export function ContextDemo({ locale, slug, kind }: { locale: Locale; slug: string; kind: "service" | "industry" }) {
  const demo = getContextDemo(kind, slug);
  if (!demo) return null;

  const ar = locale === "ar";
  const text = (pair: Pair) => pair[ar ? 0 : 1];

  return <section className={`context-demo container tone-${demo.tone}`} aria-labelledby={`${kind}-${slug}-demo-title`}>
    <div className="context-demo-heading">
      <div>
        <span className="eyebrow">{ar ? "نموذج توضيحي تفاعلي" : "Interactive illustrative demo"}</span>
        <h2 id={`${kind}-${slug}-demo-title`}>{text(demo.headline)}</h2>
        <p>{text(demo.description)}</p>
      </div>
      <div className="fictional-badge"><span>i</span>{ar ? "بيانات خيالية — لا يُحفظ أو يُرسل أي شيء" : "Fictional data — nothing is stored or sent"}</div>
    </div>

    <DomainPreview demo={demo} locale={locale} slug={slug} />
    <p className="context-demo-note">{ar ? "يوضح هذا النموذج رحلة مستخدم وواجهة محتملتين. ويُخصّص التصميم والحقول والربط الفعلي بعد فهم نشاطك. هذا ليس مشروعًا تابعًا لعميل حقيقي." : "This demo illustrates a possible journey and interface. Design, fields and integrations are tailored after understanding your operation; it is not a real client project."}</p>
    <StaticDesignGallery locale={locale} slug={slug} />
  </section>;
}

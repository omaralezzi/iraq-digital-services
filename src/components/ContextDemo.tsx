import { getContextDemo, type Pair } from "@/src/content/contextDemos";
import type { Locale } from "@/src/content/siteSettings";
import { DomainPreview } from "@/src/components/DomainPreview";
import { StaticDesignGallery } from "@/src/components/StaticDesignGallery";

export function ContextDemo({ locale, slug, kind }: { locale: Locale; slug: string; kind: "service" | "industry" }) {
  const demo = getContextDemo(kind, slug);
  if (!demo) return null;

  const ar = locale === "ar";
  const text = (pair: Pair) => pair[locale === "ar" ? 0 : locale === "de" ? 2 : 1] ?? pair[1];

  return <section className={`context-demo container tone-${demo.tone}`} aria-labelledby={`${kind}-${slug}-demo-title`}>
    <div className="context-demo-heading">
      <div>
        <span className="eyebrow">{ar ? "جرّب واجهة تفاعلية" : locale === "de" ? "Probieren Sie eine interaktive Schnittstelle aus" : "Try an interactive interface"}</span>
        <h2 id={`${kind}-${slug}-demo-title`}>{text(demo.headline)}</h2>
        <p>{text(demo.description)}</p>
      </div>
      <div className="fictional-badge"><span>i</span>{ar ? "تجربة آمنة — لا تُدخل بيانات حقيقية" : locale === "de" ? "Sichere Vorschau – Geben Sie keine echten Daten ein" : "Safe preview — do not enter real data"}</div>
    </div>

    <DomainPreview demo={demo} locale={locale} slug={slug} />
    <p className="context-demo-note">{ar ? "تساعدك هذه التجربة على تصوّر رحلة المستخدم. يُخصّص التصميم والحقول والتكاملات بعد فهم نشاطك، وجميع الأسماء والبيانات المعروضة أمثلة غير حقيقية." : locale === "de" ? "Diese Vorschau hilft Ihnen, sich ein Bild von der User Journey zu machen. Design, Felder und Integrationen werden nach dem Verständnis Ihres Betriebs angepasst und alle angezeigten Namen und Daten sind fiktive Beispiele." : "This preview helps you picture the user journey. Design, fields and integrations are tailored after understanding your operation, and all displayed names and data are fictional examples."}</p>
    <StaticDesignGallery locale={locale} slug={slug} />
  </section>;
}

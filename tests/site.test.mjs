import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("central settings preserve final provider, contact, language and brand data", async () => {
  const settings = await read("src/content/siteSettings.ts");
  assert.match(settings, /Omar Al-Ezzi/);
  assert.match(settings, /Vautierstr\. 57/);
  assert.match(settings, /name: "sifrsifr\.one"/);
  assert.match(settings, /domain: "sifrsifr\.one"/);
  assert.match(settings, /info@sifrsifr\.one/);
  assert.match(settings, /\+964 776 209 3683/);
  assert.match(settings, /Freiberuflich tätig/);
  assert.match(settings, /supported: \["ar", "en"\]/);
  assert.doesNotMatch(settings, /future:|"de"|\[PROJECT_NAME\]|\[اسم المشروع\]|\[DOMAIN_TO_BE_SELECTED_LATER\]|\[NEW_BUSINESS_EMAIL\]|\[VERIFY|\[TO_BE_ADDED\]/);
  assert.doesNotMatch(settings, /ArabVergleich/);
});

test("Arabic, English, services, industries and B2B legal routes are data-driven", async () => {
  const [services, industries, legal, localeLayout] = await Promise.all([
    read("src/content/services.ts"), read("src/content/industries.ts"),
    read("src/content/legalContent.ts"), read("app/[locale]/layout.tsx"),
  ]);
  assert.match(services, /automation/);
  assert.match(industries, /clinics/);
  assert.match(legal, /B2B-only scope/);
  assert.match(legal, /ستة أشهر/);
  assert.match(legal, /Vercel/);
  assert.match(legal, /Resend/);
  assert.doesNotMatch(legal, /slug: "withdrawal"|14-day withdrawal|14 يومًا/);
  assert.match(localeLayout, /LocaleRuntime/);
});

test("every service and industry detail page includes a contextual interactive demo", async () => {
  const [demos, preview, expandedPreview, servicePage, industryPage] = await Promise.all([
    read("src/content/contextDemos.ts"),
    read("src/components/DomainPreview.tsx"),
    read("src/components/ExpandedIndustryPreview.tsx"),
    read("app/[locale]/services/[slug]/page.tsx"),
    read("app/[locale]/industries/[slug]/page.tsx"),
  ]);
  const serviceSlugs = ["websites", "web-apps", "commerce", "management-systems", "booking-crm", "automation", "performance-care"];
  const originalIndustrySlugs = ["clinics", "restaurants", "retail", "construction", "consulting", "travel", "education", "maintenance", "distribution", "startups"];
  const expandedIndustrySlugs = [
    "law-firms", "private-schools", "kindergartens", "medical-labs", "pharmacies", "sports-clubs", "beauty-salons", "accounting",
    "architecture", "recruitment", "training-institutes", "automotive", "logistics", "hospitality", "events", "manufacturing", "insurance", "religious-travel",
  ];
  const industrySlugs = [...originalIndustrySlugs, ...expandedIndustrySlugs];
  for (const slug of [...serviceSlugs, ...industrySlugs]) {
    assert.match(demos, new RegExp(`(?:\\"|\\s)${slug}(?:\\"|:)`));
  }
  for (const slug of [...serviceSlugs, ...originalIndustrySlugs]) if (slug !== "startups") assert.match(preview, new RegExp(`slug === \\"${slug}\\"`));
  for (const slug of expandedIndustrySlugs) assert.match(expandedPreview, new RegExp(`\\"${slug}\\"`));
  assert.match(preview, /startup-preview/);
  assert.match(preview, /ExpandedIndustryPreview/);
  assert.match(preview, /setStep/);
  assert.match(preview, /setSelected/);
  assert.match(preview, /setCount/);
  assert.match(preview, /نقل المشروع إلى قيد التنفيذ/);
  const gallery = await read("src/components/StaticDesignGallery.tsx");
  assert.match(gallery, /static-design-grid/);
  assert.match(gallery, /نموذج موقع توضيحي/);
  assert.match(gallery, /PhotoWebsiteArtwork/);
  assert.match(gallery, /photoSiteCopy/);
  assert.match(gallery, /SpecialtyArtwork/);
  assert.match(gallery, /photoAssets/);
  for (const slug of [...serviceSlugs, ...industrySlugs]) assert.match(gallery, new RegExp(`(?:\\"|\\s)${slug}(?:\\"|:)`));
  for (const asset of ["retail-products.webp", "restaurant-menu.webp", "iraqi-commerce.webp", "travel-destinations.webp", "construction-projects.webp"]) await access(new URL(`public/demo-assets/${asset}`, root));
  const industryImages = await read("src/content/industryImages.ts");
  for (const slug of ["law-firms", "private-schools", "kindergartens", "medical-labs", "pharmacies", "sports-clubs", "beauty-salons", "accounting", "architecture", "recruitment", "training-institutes", "automotive", "logistics", "hospitality", "events", "manufacturing", "insurance", "religious-travel"]) {
    assert.match(industryImages, new RegExp(`\\"${slug}\\"|${slug}:`));
  }
  assert.match(expandedPreview, /ep-sector-photo/);
  assert.match(gallery, /industryImages/);
  assert.match(servicePage, /ContextDemo.+kind="service"/s);
  assert.match(industryPage, /ContextDemo.+kind="industry"/s);
  assert.match(demos, /عيادة الشفاء/);
  assert.match(demos, /مقهى النخلة/);
});

test("forms include server validation, honeypot, consent and rate limiting", async () => {
  const [contact, project, security, delivery] = await Promise.all([
    read("app/api/contact/route.ts"), read("app/api/project/route.ts"), read("src/lib/formSecurity.ts"), read("src/lib/enquiryEmail.ts"),
  ]);
  for (const source of [contact, project]) {
    assert.match(source, /input\.website/);
    assert.match(source, /rateLimited/);
    assert.match(source, /consent/);
    assert.match(source, /crypto\.randomUUID/);
    assert.match(source, /429/);
  }
  assert.match(security, /replace\(/);
  assert.match(contact, /sendEnquiryEmail/);
  assert.match(project, /sendEnquiryEmail/);
  assert.match(delivery, /process\.env\.ENQUIRY_RECIPIENT_EMAIL/);
  assert.match(delivery, /process\.env\.RESEND_API_KEY/);
  assert.doesNotMatch(`${contact}\n${project}\n${delivery}`, /ishtaar\.it@gmail\.com/);
});

test("public legal and discovery content contains no launch placeholders", async () => {
  const [legal, legalPage, settings, footer, contact, wizard, sitemap, robots] = await Promise.all([
    read("src/content/legalContent.ts"), read("app/[locale]/legal/[slug]/page.tsx"),
    read("src/content/siteSettings.ts"), read("src/components/SiteFooter.tsx"),
    read("src/components/ContactForm.tsx"), read("src/components/ProjectWizard.tsx"),
    read("app/sitemap.ts"), read("app/robots.ts"),
  ]);
  const publicCopy = `${legal}\n${legalPage}\n${settings}\n${footer}\n${contact}\n${wizard}`;
  assert.doesNotMatch(publicCopy, /\[VERIFY|\[TO_BE|\[NEW_BUSINESS|\[DEFINE RETENTION PERIODS\]|مسودة تحتاج|Draft requiring|النسخة المحلية|local version|not enabled yet|Steuernummer|USt-IdNr\.|Wirtschafts-Identifikationsnummer|Handelsregister number/);
  assert.match(publicCopy, /info@sifrsifr\.one/);
  assert.match(publicCopy, /\+964 776 209 3683/);
  assert.match(publicCopy, /Freiberuflich tätig/);
  assert.doesNotMatch(publicCopy, /slug: "withdrawal"|Consumer withdrawal right|حق التراجع للمستهلك/);
  assert.match(sitemap, /https:\/\/sifrsifr\.one/);
  assert.match(robots, /https:\/\/sifrsifr\.one\/sitemap\.xml/);
  assert.doesNotMatch(`${sitemap}\n${robots}`, /example\.invalid/);
});

test("starter preview markers and dependency are removed", async () => {
  const [page, layout, pkg] = await Promise.all([read("app/page.tsx"), read("app/layout.tsx"), read("package.json")]);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(pkg, /react-loading-skeleton/);
});

test("the site can be installed across supported desktop and mobile browsers", async () => {
  const [manifest, layout, runtime, prompt, worker] = await Promise.all([
    read("app/manifest.ts"),
    read("app/layout.tsx"),
    read("src/components/LocaleRuntime.tsx"),
    read("src/components/InstallAppPrompt.tsx"),
    read("public/sw.js"),
  ]);
  assert.match(manifest, /display: "standalone"/);
  assert.match(manifest, /app-icon-192\.png/);
  assert.match(manifest, /app-icon-512\.png/);
  assert.match(layout, /appleWebApp/);
  assert.match(runtime, /InstallAppPrompt/);
  assert.match(prompt, /beforeinstallprompt/);
  assert.match(prompt, /إضافة إلى الشاشة الرئيسية/);
  assert.match(prompt, /app-icon-512\.png/);
  assert.match(worker, /addEventListener\("fetch"/);
  for (const icon of ["app-icon-192.png", "app-icon-512.png", "apple-touch-icon.png", "favicon.svg", "brand/sifrsifr-one-logo.svg", "brand/sifrsifr-one-mark.svg"]) await access(new URL(`public/${icon}`, root));
});

test("the approved sifrsifr.one identity is used across navigation and metadata", async () => {
  const [header, footer, brand, layout, manifest, home] = await Promise.all([
    read("src/components/SiteHeader.tsx"),
    read("src/components/SiteFooter.tsx"),
    read("src/components/BrandLogo.tsx"),
    read("app/layout.tsx"),
    read("app/manifest.ts"),
    read("app/[locale]/page.tsx"),
  ]);
  for (const source of [header, footer, brand, layout, manifest, home]) assert.match(source, /sifrsifr\.one/);
  assert.match(layout, /favicon\.svg/);
  assert.match(brand, /sifrsifr-one-logo\.svg/);
  assert.doesNotMatch(`${header}\n${footer}`, /wordmark-mark|\[اسم المشروع\]/);
});

test("home navigation and unanchored locale pages start at the top", async () => {
  const [header, runtime] = await Promise.all([
    read("src/components/SiteHeader.tsx"),
    read("src/components/LocaleRuntime.tsx"),
  ]);
  assert.match(header, /window\.scrollTo\(\{ top: 0/);
  assert.match(header, /window\.history\.replaceState/);
  assert.match(runtime, /if \(!window\.location\.hash\) window\.scrollTo/);
});

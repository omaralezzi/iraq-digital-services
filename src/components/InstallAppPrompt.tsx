"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import type { Locale } from "@/src/content/siteSettings";

type InstallChoice = { outcome: "accepted" | "dismissed"; platform: string };
type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<InstallChoice>;
};
type InstallGuide = "ios" | "mac-safari" | "browser";

function isStandalone() {
  const iosNavigator = navigator as Navigator & { standalone?: boolean };
  return window.matchMedia("(display-mode: standalone)").matches || iosNavigator.standalone === true;
}

function getInstallGuide(): InstallGuide {
  const agent = navigator.userAgent;
  const ios = /iPad|iPhone|iPod/i.test(agent) || (/Macintosh/i.test(agent) && navigator.maxTouchPoints > 1);
  const safari = /Safari/i.test(agent) && !/Chrome|CriOS|Edg|OPR|Android/i.test(agent);
  if (ios) return "ios";
  if (safari && /Macintosh/i.test(agent)) return "mac-safari";
  return "browser";
}

export function InstallAppPrompt({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [visible, setVisible] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);
  const [guide, setGuide] = useState<InstallGuide | null>(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js").catch(() => undefined);
    const localPreview = window.location.hostname === "localhost" && new URLSearchParams(window.location.search).get("install-preview") === "1";
    if (!localPreview && (isStandalone() || sessionStorage.getItem("installSuggestionDismissed"))) return;

    const reveal = window.setTimeout(() => setVisible(true), 650);
    const capturePrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as InstallPromptEvent);
      setVisible(true);
    };
    const confirmInstall = () => {
      setInstalled(true);
      setVisible(true);
      window.setTimeout(() => setVisible(false), 3200);
    };

    window.addEventListener("beforeinstallprompt", capturePrompt);
    window.addEventListener("appinstalled", confirmInstall);
    return () => {
      window.clearTimeout(reveal);
      window.removeEventListener("beforeinstallprompt", capturePrompt);
      window.removeEventListener("appinstalled", confirmInstall);
    };
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("installSuggestionDismissed", "true");
    setVisible(false);
  };

  const requestInstall = async () => {
    if (!installPrompt) {
      setGuide(getInstallGuide());
      return;
    }
    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    setInstallPrompt(null);
    if (choice.outcome === "accepted") setInstalled(true);
  };

  const guides = {
    ios: {
      title: ar ? "التثبيت على iPhone أو iPad" : locale === "de" ? "Auf iPhone oder iPad installieren" : "Install on iPhone or iPad",
      body: ar ? "افتح الموقع في Safari، واضغط زر المشاركة، ثم اختر «إضافة إلى الشاشة الرئيسية» واضغط «إضافة»." : locale === "de" ? "Öffnen Sie die Site in Safari, tippen Sie auf „Teilen“, wählen Sie „Zum Startbildschirm hinzufügen“ und tippen Sie dann auf „Hinzufügen“." : "Open the site in Safari, tap Share, choose “Add to Home Screen”, then tap “Add”.",
      mark: "↥",
    },
    "mac-safari": {
      title: ar ? "التثبيت على Mac" : locale === "de" ? "Auf Mac installieren" : "Install on Mac",
      body: ar ? "من قائمة «ملف» في Safari اختر «إضافة إلى Dock». سيظهر الموقع كتطبيق مستقل." : locale === "de" ? "Öffnen Sie in Safari das Menü „Datei“ und wählen Sie „Zum Dock hinzufügen“. Die Website wird als eigenständige App geöffnet." : "In Safari, open the File menu and choose “Add to Dock”. The site will open as a standalone app.",
      mark: "+",
    },
    browser: {
      title: ar ? "التثبيت من المتصفح" : locale === "de" ? "Installieren Sie es über Ihren Browser" : "Install from your browser",
      body: ar ? "افتح قائمة المتصفح، ثم اختر «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية». قد يظهر خيار التثبيت أيضًا بجوار شريط العنوان." : locale === "de" ? "Öffnen Sie das Browsermenü und wählen Sie dann „App installieren“ oder „Zum Startbildschirm hinzufügen“. Das Installationssymbol wird möglicherweise auch in der Adressleiste angezeigt." : "Open the browser menu, then choose “Install app” or “Add to Home Screen”. The install icon may also appear in the address bar.",
      mark: "⋮",
    },
  } satisfies Record<InstallGuide, { title: string; body: string; mark: string }>;

  return <>
    {visible && <aside className={`install-suggestion${installed ? " installed" : ""}`} aria-live="polite" aria-label={ar ? "تثبيت sifrsifr.one كتطبيق" : locale === "de" ? "Installieren Sie sifrsifr.one als App" : "Install sifrsifr.one as an app"}>
      <span className="install-app-icon" aria-hidden="true"><img src="/app-icon-512.png" alt="" width="48" height="48" /></span>
      <span className="install-copy">
        <small>{installed ? (ar ? "أصبح جاهزًا" : locale === "de" ? "Gebrauchsfertig" : "Ready to use") : (ar ? "وصول مباشر" : locale === "de" ? "Direkter Zugriff" : "Direct access")}</small>
        <strong>{installed ? (ar ? "تم تثبيت sifrsifr.one على جهازك" : locale === "de" ? "sifrsifr.one ist auf Ihrem Gerät installiert" : "sifrsifr.one is installed on your device") : (ar ? "ثبّت sifrsifr.one على جهازك" : locale === "de" ? "Installieren Sie sifrsifr.one auf Ihrem Gerät" : "Install sifrsifr.one on your device")}</strong>
        <em>{ar ? "افتحه من الشاشة الرئيسية أو سطح المكتب، مثل أي تطبيق." : locale === "de" ? "Öffnen Sie es von Ihrem Startbildschirm oder Desktop aus, genau wie eine App." : "Open it from your home screen or desktop, just like an app."}</em>
      </span>
      {!installed && <button className="install-action" type="button" onClick={requestInstall}><span aria-hidden="true">↓</span>{ar ? "تثبيت" : locale === "de" ? "Installieren" : "Install"}</button>}
      <button className="install-dismiss" type="button" aria-label={ar ? "إغلاق اقتراح التثبيت" : locale === "de" ? "Installationsvorschlag verwerfen" : "Dismiss install suggestion"} onClick={dismiss}>×</button>
    </aside>}

    {guide && <div className="install-guide-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setGuide(null); }}>
      <section className="install-guide" role="dialog" aria-modal="true" aria-labelledby="install-guide-title">
        <button className="install-guide-close" type="button" aria-label={ar ? "إغلاق التعليمات" : locale === "de" ? "Anweisungen schließen" : "Close instructions"} onClick={() => setGuide(null)}>×</button>
        <span className="install-guide-mark" aria-hidden="true">{guides[guide].mark}</span>
        <small>{ar ? "خطوة واحدة فقط" : locale === "de" ? "Nur ein Schritt" : "Just one step"}</small>
        <h2 id="install-guide-title">{guides[guide].title}</h2>
        <p>{guides[guide].body}</p>
        <button className="button primary full" type="button" onClick={() => setGuide(null)}>{ar ? "فهمت" : locale === "de" ? "Habe es" : "Got it"}</button>
      </section>
    </div>}
  </>;
}

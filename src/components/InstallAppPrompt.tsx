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
      title: ar ? "التثبيت على iPhone أو iPad" : "Install on iPhone or iPad",
      body: ar ? "افتح الموقع في Safari، واضغط زر المشاركة، ثم اختر «إضافة إلى الشاشة الرئيسية» واضغط «إضافة»." : "Open the site in Safari, tap Share, choose “Add to Home Screen”, then tap “Add”.",
      mark: "↥",
    },
    "mac-safari": {
      title: ar ? "التثبيت على Mac" : "Install on Mac",
      body: ar ? "من قائمة «ملف» في Safari اختر «إضافة إلى Dock». سيظهر الموقع كتطبيق مستقل." : "In Safari, open the File menu and choose “Add to Dock”. The site will open as a standalone app.",
      mark: "+",
    },
    browser: {
      title: ar ? "التثبيت من المتصفح" : "Install from your browser",
      body: ar ? "افتح قائمة المتصفح، ثم اختر «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية». قد يظهر خيار التثبيت أيضًا بجوار شريط العنوان." : "Open the browser menu, then choose “Install app” or “Add to Home Screen”. The install icon may also appear in the address bar.",
      mark: "⋮",
    },
  } satisfies Record<InstallGuide, { title: string; body: string; mark: string }>;

  return <>
    {visible && <aside className={`install-suggestion${installed ? " installed" : ""}`} aria-live="polite" aria-label={ar ? "تثبيت sifr.one كتطبيق" : "Install sifr.one as an app"}>
      <span className="install-app-icon" aria-hidden="true"><img src="/app-icon-512.png" alt="" width="48" height="48" /></span>
      <span className="install-copy">
        <small>{installed ? (ar ? "أصبح جاهزًا" : "Ready to use") : (ar ? "وصول مباشر" : "Direct access")}</small>
        <strong>{installed ? (ar ? "تم تثبيت sifr.one على جهازك" : "sifr.one is installed on your device") : (ar ? "ثبّت sifr.one على جهازك" : "Install sifr.one on your device")}</strong>
        <em>{ar ? "افتحه من الشاشة الرئيسية أو سطح المكتب، مثل أي تطبيق." : "Open it from your home screen or desktop, just like an app."}</em>
      </span>
      {!installed && <button className="install-action" type="button" onClick={requestInstall}><span aria-hidden="true">↓</span>{ar ? "تثبيت" : "Install"}</button>}
      <button className="install-dismiss" type="button" aria-label={ar ? "إغلاق اقتراح التثبيت" : "Dismiss install suggestion"} onClick={dismiss}>×</button>
    </aside>}

    {guide && <div className="install-guide-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setGuide(null); }}>
      <section className="install-guide" role="dialog" aria-modal="true" aria-labelledby="install-guide-title">
        <button className="install-guide-close" type="button" aria-label={ar ? "إغلاق التعليمات" : "Close instructions"} onClick={() => setGuide(null)}>×</button>
        <span className="install-guide-mark" aria-hidden="true">{guides[guide].mark}</span>
        <small>{ar ? "خطوة واحدة فقط" : "Just one step"}</small>
        <h2 id="install-guide-title">{guides[guide].title}</h2>
        <p>{guides[guide].body}</p>
        <button className="button primary full" type="button" onClick={() => setGuide(null)}>{ar ? "فهمت" : "Got it"}</button>
      </section>
    </div>}
  </>;
}

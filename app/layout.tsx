import type { Metadata, Viewport } from "next";
import { Noto_Kufi_Arabic, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const arabic = Noto_Kufi_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const latin = Plus_Jakarta_Sans({
  variable: "--font-latin",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: { default: "sifrsifr.one | حلول رقمية للسوق العراقي", template: "%s | sifrsifr.one" },
  description: "مواقع وتطبيقات وأنظمة وأتمتة أعمال موجّهة للعراق، تُدار وتُنفّذ من ألمانيا مع تواصل واضح بالعربية.",
  applicationName: "sifrsifr.one",
  category: "technology",
  creator: "sifrsifr.one",
  publisher: "sifrsifr.one",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { url: "/app-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/app-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: "sifrsifr.one" },
};

export const viewport: Viewport = { themeColor: "#081827", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${arabic.variable} ${latin.variable}`}>{children}</body>
    </html>
  );
}

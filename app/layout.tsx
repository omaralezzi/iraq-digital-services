import type { Metadata } from "next";
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
  title: { default: "حلول رقمية للسوق العراقي", template: "%s | حلول رقمية للعراق" },
  description: "مواقع وتطبيقات وأنظمة وأتمتة أعمال موجّهة للعراق، تُدار وتُنفّذ من ألمانيا مع تواصل واضح بالعربية.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${arabic.variable} ${latin.variable}`}>{children}</body>
    </html>
  );
}

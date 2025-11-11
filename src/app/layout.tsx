import type { Metadata } from "next";
import { Cairo, Roboto, Tajawal } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "تنفس الأرض – جامعة صحار",
  description:
    "منصة فكرية من جامعة صحار لعرض حلول ذكية تربط بين المناخ والتنوع الحيوي من خلال نظام رباعي الأركان.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${tajawal.variable} ${cairo.variable} ${roboto.variable} bg-[var(--surface-light)] text-slate-900 antialiased`}
      >
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(31,138,92,0.15),_transparent_50%),_radial-gradient(circle_at_bottom,_rgba(94,182,215,0.18),_transparent_40%)]">
          <SiteHeader />
          <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

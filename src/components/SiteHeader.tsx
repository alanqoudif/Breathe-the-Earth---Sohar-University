"use client";

import { useState } from "react";
import Link from "next/link";

type NavItem = {
  href: string;
  label: string;
};

const overviewNav: NavItem[] = [
  { href: "/", label: "الرئيسية" },
  { href: "/#idea", label: "الفكرة" },
  { href: "/#system", label: "النظام الذكي" },
  { href: "/#axes", label: "المحاور" },
];

const axisNav: NavItem[] = [
  { href: "/axis-1", label: "المحور ١" },
  { href: "/axis-2", label: "المحور ٢" },
  { href: "/axis-3", label: "المحور ٣" },
  { href: "/axis-4", label: "المحور ٤" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((current) => !current);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-emerald-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4">
        <Link href="/" className="flex flex-col text-right">
          <span className="text-lg font-semibold text-emerald-900">
            تنفس الأرض – جامعة صحار
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600">
            Breathe the Earth
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end gap-4">
          <nav className="hidden items-center gap-6 text-sm font-medium text-emerald-800 md:flex">
            {overviewNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-emerald-800/80 transition hover:text-emerald-950"
              >
                {item.label}
              </Link>
            ))}
            <span
              className="h-5 w-px bg-emerald-100"
              aria-hidden="true"
            />
            <div className="flex items-center gap-3 text-xs font-semibold text-emerald-600">
              <span className="text-[11px] font-medium tracking-[0.4em] text-emerald-400">
                المحاور
              </span>
              {axisNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-emerald-600/80 transition hover:text-emerald-800"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
          <button
            type="button"
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 px-4 py-2 text-sm font-medium text-emerald-800 transition hover:bg-white md:hidden"
          >
            {isOpen ? "إغلاق القائمة" : "قائمة"}
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span
                className={`absolute inset-x-0 top-0 block h-0.5 rounded-full bg-emerald-800 transition ${
                  isOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-1.5 block h-0.5 rounded-full bg-emerald-800 transition ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-3 block h-0.5 rounded-full bg-emerald-800 transition ${
                  isOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          id="mobile-nav"
          className="border-t border-emerald-100 bg-white/90 px-4 py-4 md:hidden"
        >
          <div className="rounded-3xl border border-emerald-100 bg-white/95 p-4 shadow-lg shadow-emerald-100/80">
            <div className="space-y-5 text-right">
              <div>
                <p className="text-xs font-semibold text-emerald-600">
                  الروابط الرئيسية
                </p>
                <div className="mt-2 grid gap-1.5">
                  {overviewNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="rounded-2xl px-3 py-2 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="border-t border-emerald-50 pt-3">
                <p className="text-xs font-semibold text-emerald-600">
                  المحاور التفصيلية
                </p>
                <div className="mt-2 grid gap-1.5">
                  {axisNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="rounded-2xl px-3 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50/60"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

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
  { href: "/#participate", label: "شاركنا" },
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

  const renderLinks = (items: NavItem[]) =>
    items.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        onClick={closeMenu}
        className="rounded-full border border-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-900 transition hover:border-emerald-200 hover:bg-emerald-50"
      >
        {item.label}
      </Link>
    ));

  return (
    <header className="sticky top-0 z-30 border-b border-emerald-100 bg-[#f6fbf7]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex flex-col text-right">
          <span className="text-lg font-semibold text-emerald-900">
            تنفس الأرض – جامعة صحار
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600">
            Breathe the Earth
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/#participate"
            className="hidden rounded-full bg-gradient-to-l from-[#1f8a5c] via-[#00a884] to-[#5eb6d7] px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-200/60 sm:inline-flex"
          >
            شارك فكرتك
          </Link>
          <button
            type="button"
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-controls="site-nav"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-white sm:hidden"
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
      <nav
        id="site-nav"
        className="hidden border-t border-emerald-100 bg-transparent px-4 py-3 sm:flex"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {renderLinks(overviewNav)}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {renderLinks(axisNav)}
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="border-t border-emerald-100 bg-white px-4 py-4 sm:hidden">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-2">{renderLinks(overviewNav)}</div>
            <hr className="border-emerald-100" />
            <div className="flex flex-wrap gap-2">{renderLinks(axisNav)}</div>
            <Link
              href="/#participate"
              onClick={closeMenu}
              className="w-full rounded-full bg-gradient-to-l from-[#1f8a5c] via-[#00a884] to-[#5eb6d7] px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-200/60"
            >
              شارك فكرتك
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

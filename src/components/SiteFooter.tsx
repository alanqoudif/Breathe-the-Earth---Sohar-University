import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-emerald-100 bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-emerald-900/70 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-emerald-900">
          © {new Date().getFullYear()} جامعة صحار – كل الحقوق محفوظة.
        </p>
        <div className="flex gap-4">
          <Link
            href="/axis-1"
            className="font-medium text-emerald-800 transition hover:text-emerald-600"
          >
            المحاور
          </Link>
          <Link
            href="/#participate"
            className="font-medium text-emerald-800 transition hover:text-emerald-600"
          >
            شاركنا
          </Link>
        </div>
      </div>
    </footer>
  );
}

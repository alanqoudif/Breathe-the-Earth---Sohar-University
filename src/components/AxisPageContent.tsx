import Link from "next/link";
import type { AxisDetail } from "@/data/axis";

type AxisPageContentProps = {
  axis: AxisDetail;
};

export function AxisPageContent({ axis }: AxisPageContentProps) {
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-[#0f4d3c] via-[#1d745c] to-[#4ba48d] text-white shadow-xl shadow-emerald-200/40">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(9,18,12,0.4), rgba(17,95,69,0.6)), url(${axis.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative flex flex-col gap-6 px-6 py-12 lg:flex-row lg:items-end">
          <div className="flex-1 space-y-4 text-white">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-100">
              {axis.systemTitleEn}
            </p>
            <p className="text-2xl font-semibold">{axis.systemTitleAr}</p>
            <h1 className="text-4xl font-black">{axis.titleAr}</h1>
            <p className="en-copy text-left text-base">{axis.titleEn}</p>
          </div>
          <div className="flex flex-col gap-3 text-white/85 lg:w-64">
            <p className="text-sm font-semibold text-white">كلمات مفتاحية</p>
            <div className="flex flex-wrap gap-2">
              {axis.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-white/40 px-3 py-1 text-xs"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-50 bg-[#f9fdf9] p-8 text-slate-900 shadow-md shadow-emerald-100/60">
        <p className="text-lg text-slate-800">{axis.summaryAr}</p>
        <p className="en-copy mt-4 text-left text-sm text-slate-600">
          {axis.summaryEn}
        </p>
      </section>

      <section className="grid gap-8 rounded-3xl border border-emerald-50 bg-white/90 p-8 text-slate-900 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm font-semibold text-emerald-700">النص العربي</p>
          {axis.paragraphsAr.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="space-y-3 rounded-2xl bg-emerald-50 p-6 text-left text-slate-900">
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-600">
            English Insight
          </p>
          {axis.paragraphsEn.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-relaxed text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="flex flex-wrap gap-4 rounded-3xl border border-emerald-50 bg-[#f0f9f4] p-6 text-emerald-900">
        <Link
          href="/"
          className="rounded-full border border-emerald-300 px-6 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-white"
        >
          الرجوع للصفحة الرئيسية
        </Link>
      </section>
    </div>
  );
}

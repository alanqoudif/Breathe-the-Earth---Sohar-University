import Link from "next/link";
import type { AxisDetail } from "@/data/axis";

type AxisCardProps = {
  axis: AxisDetail;
};

export function AxisCard({ axis }: AxisCardProps) {
  return (
    <Link
      href={`/${axis.slug}`}
      className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-6 text-right shadow-lg shadow-emerald-100/80 transition hover:-translate-y-1 hover:border-emerald-200"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 transition group-hover:opacity-40"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(255,255,255,0.9), rgba(224,242,231,0.8)), url(${axis.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative flex flex-col gap-2 text-emerald-950">
        <span className="text-xs uppercase tracking-[0.4em] text-emerald-600">
          {axis.titleEn}
        </span>
        <h3 className="text-2xl font-semibold text-emerald-900">
          {axis.titleAr}
        </h3>
        <p className="text-sm text-slate-700">{axis.summaryAr}</p>
        <span className="en-copy mt-2 block text-left text-xs text-slate-500">
          {axis.summaryEn}
        </span>
      </div>
    </Link>
  );
}

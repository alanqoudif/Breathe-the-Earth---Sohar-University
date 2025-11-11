import Link from "next/link";
import type { AxisDetail } from "@/data/axis";

const axisOrderLabels = ["الأول", "الثاني", "الثالث", "الرابع"];

type AxisCardProps = {
  axis: AxisDetail;
};

export function AxisCard({ axis }: AxisCardProps) {
  const orderLabel = axisOrderLabels[axis.order - 1] ?? axis.order;

  return (
    <Link
      href={`/${axis.slug}`}
      className="group relative overflow-hidden rounded-3xl border border-emerald-50 bg-[#fdfefc] p-6 text-right shadow-lg shadow-emerald-100/60 transition hover:-translate-y-1 hover:border-emerald-200"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-25 transition group-hover:opacity-45"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(255,255,255,0.95), rgba(226,244,236,0.85)), url(${axis.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative flex flex-col gap-3 text-emerald-950">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-full bg-emerald-50/80 px-3 py-1 text-xs font-semibold text-emerald-700">
            المحور {orderLabel}
          </span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-emerald-500">
            {axis.systemTitleEn}
          </span>
        </div>
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

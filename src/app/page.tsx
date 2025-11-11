import Link from "next/link";
import { AxisCard } from "@/components/AxisCard";
import { HeroIllustration } from "@/components/HeroIllustration";
import { SystemIcon } from "@/components/SystemIcon";
import { axes, smartSystemPoints } from "@/data/axis";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="relative grid gap-10 overflow-hidden rounded-[36px] border border-emerald-100 bg-white/70 p-6 text-emerald-900 shadow-xl shadow-emerald-100/80 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-[36px] bg-gradient-to-br from-emerald-50 via-white to-teal-50"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-16 top-6 h-48 w-48 rounded-full bg-emerald-200/40 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-teal-200/30 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative z-10 space-y-6 lg:space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/80 px-4 py-1 text-xs text-emerald-600 shadow-sm">
            <span className="font-semibold text-emerald-900">جامعة صحار</span>
            <span className="uppercase tracking-[0.4em] text-emerald-500">
              Sohar University
            </span>
          </div>
          <p className="text-sm text-emerald-600/90">
            حلول فكرية من جامعة صحار لأزمتين توأمتين: المناخ والتنوع الحيوي.
          </p>
          <h1 className="text-4xl font-black leading-snug text-emerald-950 md:text-5xl">
            حين ترتفع حرارتي، تختفي ألوان حياتي…
            <br />
            <span className="bg-gradient-to-l from-emerald-600 to-teal-400 bg-clip-text text-transparent">
              فهل يمكن أن ينقذني الذكاء؟
            </span>
          </h1>
          <p className="en-copy text-left text-xs font-medium text-emerald-500">
            When my temperature rises, the colors of life disappear… can
            intelligence save me?
          </p>
          <p className="text-lg leading-8 text-slate-700">
            “تنفس الأرض – جامعة صحار” منصة فكرية تربط بين التكنولوجيا والبيئة،
            وتعرض نظامًا ذكيًا بأربع نقاط يعمل كجسر بين العلم والمناخ.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#system"
              className="rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200/80 transition hover:bg-emerald-500"
            >
              استكشف النظام الذكي
            </Link>
            <Link
              href="/axis-1"
              className="rounded-full border border-emerald-200 px-8 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
            >
              ابدأ بالمحور الأول
            </Link>
          </div>
          <div className="flex items-center gap-2 text-sm text-emerald-700">
            <span
              className="h-2 w-2 rounded-full bg-emerald-400"
              aria-hidden="true"
            />
            <p>
              شعارنا: الذكاء الاصطناعي لا يراقب الطبيعة فقط، بل يتعلم منها ليعيد
              توازنها.
            </p>
          </div>
        </div>
        <div className="relative z-10 flex items-center justify-center">
          <div className="w-full max-w-sm rounded-[32px] border border-emerald-100 bg-white/95 p-4 shadow-[0_35px_80px_rgba(16,185,129,0.18)]">
            <div className="rounded-[28px] bg-gradient-to-b from-[#0f4d3c] via-[#1d745c] to-[#3f9f85] p-6">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      <section
        id="idea"
        className="rounded-3xl border border-emerald-50 bg-[#f9fdf9] p-8 text-slate-900 shadow-md shadow-emerald-100/60"
      >
        <p className="text-sm font-semibold text-emerald-600">
          الفكرة الأساسية
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-emerald-900">
          نظام ذكي لمناخٍ متوازن وطبيعةٍ متجددة
        </h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <p className="text-lg leading-9 text-slate-700">
            هذا الموقع يعرض فكرة فكرية أصيلة من جامعة صحار تهدف إلى ربط الحلول
            البيئية بالتقنيات الذكية لمواجهة الأزمتين العالميتين: التغير المناخي
            وفقدان التنوع البيولوجي. الفكرة تنطلق من مبدأ أن الذكاء الاصطناعي لا
            يراقب الطبيعة فقط، بل يتعلّم منها.
          </p>
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6 text-left">
            <p className="en-copy text-base leading-relaxed text-slate-600">
              This platform showcases an original idea from Sohar University that
              links environmental solutions with intelligent technologies to
              tackle climate change and biodiversity loss. AI becomes a student
              of nature—not just a watcher—to restore balance.
            </p>
          </div>
        </div>
      </section>

      <section
        id="system"
        className="space-y-6 rounded-3xl border border-emerald-50 bg-[#fcfffd] p-8 text-slate-900 shadow-md shadow-emerald-100/60"
      >
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-emerald-600">
            النظام الذكي من أربع نقاط
          </p>
          <h2 className="text-3xl font-semibold text-emerald-900">
            جدول يربط النقطة بالفكرة والهدف البيئي
          </h2>
        </div>
        <div className="hidden overflow-hidden rounded-3xl border border-emerald-100 md:block">
          <table className="min-w-full border-collapse text-right text-sm text-slate-700">
            <thead className="bg-emerald-50 text-emerald-900">
              <tr>
                <th className="px-4 py-3 font-normal">النقطة</th>
                <th className="px-4 py-3 font-normal">الفكرة</th>
                <th className="px-4 py-3 font-normal">الهدف البيئي</th>
              </tr>
            </thead>
            <tbody>
              {smartSystemPoints.map((row) => (
                <tr
                  key={row.point}
                  className="border-t border-emerald-100 bg-white transition hover:bg-emerald-50/40"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-end gap-3">
                      <div>
                        <p className="font-semibold text-emerald-900">
                          {row.point}
                        </p>
                        <p className="en-copy text-right text-[11px] text-slate-500">
                          {row.pointEn}
                        </p>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50">
                        <SystemIcon variant={row.icon} />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-slate-700">{row.idea}</p>
                    <p className="en-copy mt-1 text-left text-[11px] text-slate-500">
                      {row.ideaEn}
                    </p>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-slate-700">{row.goal}</p>
                    <p className="en-copy mt-1 text-left text-[11px] text-slate-500">
                      {row.goalEn}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="space-y-4 md:hidden">
          {smartSystemPoints.map((row, index) => (
            <div
              key={row.point}
              className="rounded-2xl border border-emerald-100 bg-white/90 p-5 shadow-sm shadow-emerald-100/40"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-right">
                  <p className="text-xs text-emerald-600">
                    النقطة {index + 1}
                  </p>
                  <p className="text-lg font-semibold text-emerald-900">
                    {row.point}
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50">
                  <SystemIcon variant={row.icon} />
                </div>
              </div>
              <p className="mt-3 text-slate-700">{row.idea}</p>
              <p className="mt-2 text-sm text-emerald-700">{row.goal}</p>
              <p className="en-copy mt-3 text-left text-[11px] text-slate-500">
                {row.pointEn} · {row.goalEn}
              </p>
            </div>
          ))}
        </div>
        <p className="en-copy text-left text-sm text-slate-500">
          Each pillar transforms intelligent sensing into predictive analysis,
          responsive action, and community collaboration.
        </p>
      </section>

      <section
        id="axes"
        className="space-y-6 rounded-3xl border border-emerald-50 bg-[#f9fdf9] p-8 text-slate-900 shadow-md shadow-emerald-100/60"
      >
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-emerald-600">
            المحاور الأربعة
          </p>
          <h2 className="text-3xl font-semibold text-emerald-900">
            مناخ، وعي، جامعة، حل متكامل
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {axes.map((axis) => (
            <AxisCard key={axis.slug} axis={axis} />
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-emerald-50 bg-[#f9fdf9] p-8 text-slate-900 shadow-md shadow-emerald-100/60">
        <p className="text-sm font-semibold text-emerald-600">
          الأثر والرؤية المستقبلية
        </p>
        <h2 className="text-3xl font-semibold text-emerald-900">
          نحو جامعة خضراء وذكية
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <p className="text-lg leading-9 text-slate-700">
            رؤية جامعة صحار تقوم على دمج البحث العلمي بالمسؤولية البيئية. النظام
            الذكي ليس مجرد فكرة، بل مسار نحو جامعة صديقة للمناخ تشارك في صناعة
            المستقبل الأخضر لعُمان والعالم.
          </p>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-left">
            <p className="en-copy text-base leading-relaxed text-slate-600">
              Sohar University envisions a smart green campus where research and
              responsibility walk side by side. The intelligent system is a path
              toward a climate-friendly university that contributes to Oman’s and
              the world’s green future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

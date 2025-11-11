import Link from "next/link";
import { GlobeCanvas } from "@/components/GlobeCanvas";
import { AxisCard } from "@/components/AxisCard";
import { IdeaForm } from "@/components/IdeaForm";
import { HeroIllustration } from "@/components/HeroIllustration";
import { SystemIcon } from "@/components/SystemIcon";
import { axes, smartSystemPoints } from "@/data/axis";

export default function Home() {
  return (
    <>
      <section className="grid gap-10 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-2xl shadow-black/30 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/70">
            <span>جامعة صحار</span>
            <span className="text-white/40">Sohar University</span>
          </div>
          <p className="text-sm text-emerald-200">
            حلول فكرية من جامعة صحار لأزمتين توأمتين: المناخ والتنوع الحيوي.
          </p>
          <h1 className="text-4xl font-black leading-snug text-white md:text-5xl">
            حين ترتفع حرارتي، تختفي ألوان حياتي…
            <br />
            <span className="text-transparent bg-gradient-to-l from-[#4CAF50] to-[#8BC6EC] bg-clip-text">
              فهل يمكن أن ينقذني الذكاء؟
            </span>
          </h1>
          <p className="en-copy text-left text-sm">
            When my temperature rises, the colors of life disappear… can
            intelligence save me?
          </p>
          <p className="text-lg text-white/80">
            “تنفس الأرض – جامعة صحار” منصة فكرية تربط بين التكنولوجيا والبيئة،
            وتعرض نظامًا ذكيًا بأربع نقاط يعمل كجسر بين العلم والمناخ.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#system"
              className="rounded-full bg-gradient-to-l from-[#4CAF50] to-[#8BC6EC] px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30"
            >
              استكشف النظام الذكي
            </Link>
            <Link
              href="/axis-1"
              className="rounded-full border border-white/30 px-8 py-3 text-sm text-white/90 transition hover:bg-white/10"
            >
              ابدأ بالمحور الأول
            </Link>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
            <p>
              شعارنا: الذكاء الاصطناعي لا يراقب الطبيعة فقط، بل يتعلم منها ليعيد
              توازنها.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <HeroIllustration />
          <GlobeCanvas />
        </div>
      </section>

      <section
        id="idea"
        className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 text-white"
      >
        <p className="text-sm uppercase tracking-[0.4em] text-white/70">
          الفكرة الأساسية
        </p>
        <h2 className="mt-3 text-3xl font-semibold">
          نظام ذكي لمناخٍ متوازن وطبيعةٍ متجددة
        </h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <p className="text-lg leading-9 text-white/85">
            هذا الموقع يعرض فكرة فكرية أصيلة من جامعة صحار تهدف إلى ربط الحلول
            البيئية بالتقنيات الذكية لمواجهة الأزمتين العالميتين: التغير المناخي
            وفقدان التنوع البيولوجي. الفكرة تنطلق من مبدأ أن الذكاء الاصطناعي لا
            يراقب الطبيعة فقط، بل يتعلم منها.
          </p>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="en-copy text-base leading-relaxed">
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
        className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-emerald-900/30 p-8 text-white"
      >
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">
            النظام الذكي من أربع نقاط
          </p>
          <h2 className="text-3xl font-semibold">
            جدول يربط النقطة بالفكرة والهدف البيئي
          </h2>
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <table className="min-w-full border-collapse text-right text-sm">
            <thead className="bg-white/10 text-white/80">
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
                  className="border-t border-white/10 bg-white/5 transition hover:bg-white/10"
                >
                  <td className="px-4 py-4 text-white">
                    <div className="flex items-center justify-end gap-3">
                      <div>
                        <p className="font-semibold">{row.point}</p>
                        <p className="en-copy text-right text-[11px] text-white/70">
                          {row.pointEn}
                        </p>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                        <SystemIcon variant={row.icon} />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-white/80">
                    <p>{row.idea}</p>
                    <p className="en-copy mt-1 text-left text-[11px] text-white/70">
                      {row.ideaEn}
                    </p>
                  </td>
                  <td className="px-4 py-4 text-white/80">
                    <p>{row.goal}</p>
                    <p className="en-copy mt-1 text-left text-[11px] text-white/70">
                      {row.goalEn}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="en-copy text-left text-sm">
          Each pillar transforms intelligent sensing into predictive analysis,
          responsive action, and community collaboration.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-white">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">
            المحاور الأربعة
          </p>
          <h2 className="text-3xl font-semibold">
            مناخ، وعي، جامعة، حل متكامل
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {axes.map((axis) => (
            <AxisCard key={axis.slug} axis={axis} />
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/70 p-8 text-white">
        <p className="text-sm uppercase tracking-[0.4em] text-white/70">
          الأثر والرؤية المستقبلية
        </p>
        <h2 className="text-3xl font-semibold">نحو جامعة خضراء وذكية</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <p className="text-lg leading-9 text-white/85">
            رؤية جامعة صحار تقوم على دمج البحث العلمي بالمسؤولية البيئية. النظام
            الذكي ليس مجرد فكرة، بل مسار نحو جامعة صديقة للمناخ تشارك في صناعة
            المستقبل الأخضر لعُمان والعالم.
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="en-copy text-base leading-relaxed">
              Sohar University envisions a smart green campus where research and
              responsibility walk side by side. The intelligent system is a path
              toward a climate-friendly university that contributes to Oman’s and
              the world’s green future.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-white/10 bg-slate-900/50 p-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4 text-white">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">
            شاركنا رؤيتك
          </p>
          <h2 className="text-3xl font-semibold">قنوات المشاركة</h2>
          <p className="text-lg text-white/85">
            نموذج بسيط يستقبل أفكاركم البيئية الذكية مع الاسم والبريد والفكرة،
            ليبقى الإنسان شريكًا في حماية الأرض.
          </p>
          <p className="en-copy text-left text-sm">
            Submit your eco-intelligent proposal and join Sohar University’s
            collaborative climate lab.
          </p>
          <ul className="space-y-3 text-sm text-white/75">
            <li>• مشاركة الفكرة عبر النموذج.</li>
            <li>• تلقي تحديثات المجتمع البحثي.</li>
            <li>• الدعوة للمشاركة في مشاريع جامعة صحار.</li>
          </ul>
        </div>
        <IdeaForm />
      </section>
    </>
  );
}

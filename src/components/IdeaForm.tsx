"use client";

import { FormEvent, useState } from "react";

type IdeaState = {
  name: string;
  email: string;
  idea: string;
};

const initialState: IdeaState = { name: "", email: "", idea: "" };

export function IdeaForm() {
  const [form, setForm] = useState<IdeaState>(initialState);
  const [status, setStatus] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("تم حفظ رسالتك (تجريبيًا) – شكرًا لإبداعك!");
    setForm(initialState);
  };

  return (
    <form
      id="idea-form"
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl border border-emerald-100 bg-white p-6 text-slate-900 shadow-lg shadow-emerald-100/80"
    >
      <div className="space-y-1">
        <label className="text-lg font-semibold text-emerald-900">
          هل لديك فكرة بيئية ذكية؟
        </label>
        <span className="en-copy text-left text-sm text-slate-600">
          Share your eco-intelligent idea with the Sohar University team.
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm">
          الاسم الكامل
          <input
            type="text"
            required
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            className="w-full rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none"
            placeholder="اكتب اسمك هنا"
          />
        </label>
        <label className="space-y-2 text-sm">
          البريد الإلكتروني
          <input
            type="email"
            required
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            className="w-full rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none"
            placeholder="example@su.edu.om"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm">
        فكرتك البيئية
        <textarea
          required
          rows={4}
          value={form.idea}
          onChange={(event) =>
            setForm((current) => ({ ...current, idea: event.target.value }))
          }
          className="w-full rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none"
          placeholder="صف الحل الذكي أو التأثير الذي تتخيله..."
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-gradient-to-l from-[#1f8a5c] via-[#00a884] to-[#5eb6d7] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-200/70"
      >
        أرسل اقتراحك
      </button>
      {status && (
        <p className="text-center text-sm text-emerald-700" role="status">
          {status}
        </p>
      )}
    </form>
  );
}

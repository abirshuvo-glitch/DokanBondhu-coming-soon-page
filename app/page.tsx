/* app/page.tsx */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DokanBondhu — স্মার্ট বাকির হিসাব, একদম সহজ",
  description:
    "DokanBondhu হলো মুদিখানা দোকানের জন্য তৈরি স্মার্ট বাকি ও ক্যাশ ফ্লো ম্যানেজমেন্ট অ্যাপ। অফলাইনেও চলে, গ্রাহককে কল ও SMS করে দেনা তোলায় সাহায্য করে।",
};

const benefits = [
  "📘 ১ ক্লিকেই বাকি লিখে রাখুন — খাতার ঝামেলা বাদ",
  "📱 অফলাইনে থাকলেও কাজ করবে, অনলাইনে এলে অটো সিঙ্ক",
  "📞 এক ট্যাপে গ্রাহককে কল ও SMS রিমাইন্ডার",
  "🇧🇩 পুরো ইন্টারফেস বাংলা — মুদিখানার জন্য বানানো",
];

const steps = [
  {
    title: "১. অ্যাপ ইনস্টল করুন",
    desc: "সবচেয়ে আগে আপনার দোকানের নাম, মোবাইল নম্বর দিয়ে সাইন আপ করুন।",
  },
  {
    title: "২. গ্রাহক আর বাকি যোগ করুন",
    desc: "প্রতিটা বাকি লেখা থাকবে সাজানোভাবে — কে কত টাকা পাবে, সব পরিষ্কার।",
  },
  {
    title: "৩. কল/SMS দিয়ে টাকা তুলুন",
    desc: "এক ট্যাপে গ্রাহককে কল ও SMS রিমাইন্ডার পাঠিয়ে দেনা তোলা সহজ হয়ে যাবে।",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Top bar */}
      <header className="border-b border-white/5 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/90 shadow-lg shadow-emerald-500/40">
              <span className="text-xl">ড</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight">
                DokanBondhu
              </span>
              <span className="text-[11px] text-slate-400">
                মুদিখানার স্মার্ট বাকি সহকারী
              </span>
            </div>
          </div>

          <div className="hidden items-center gap-3 text-xs text-slate-300 sm:flex">
            <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 font-medium text-emerald-300">
              Coming soon
            </span>
            <span className="text-[11px] text-slate-400">
              dokanbondhu.com
            </span>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:pt-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[11px] text-slate-300">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              শীঘ্রই আসছে — প্রথম পর্যায়ে বাংলাদেশ জুড়ে নির্বাচিত মুদিখানা দোকানে
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                দোকানের{" "}
                <span className="text-emerald-400">
                  বাকি আর খাতা
                </span>{" "}
                এবার থাকবে ফোনে — পরিষ্কার, নিরাপদ, স্মার্ট।
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                DokanBondhu আপনাকে সাহায্য করবে গ্রাহকের বাকি, পরিশোধ, ক্যাশফ্লো
                আর কল/SMS রিমাইন্ডার — সব এক জায়গায় রাখতে।{" "}
                <span className="text-slate-100">
                  খাতা হারিয়ে গেলে কিংবা ফোন বদলালেও ডেটা থাকবে সুরক্ষিত।
                </span>
              </p>
            </div>

            {/* Benefits */}
            <ul className="space-y-2 text-sm text-slate-200">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 rounded-xl border border-white/5 bg-slate-900/60 px-3 py-2"
                >
                  <span className="mt-0.5 text-xs text-emerald-400">●</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* CTA row */}
            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
              <a
  href="https://wa.me/61466273011?text=Salam,%20ami%20DokanBondhu%20app-er%20early%20access%20pete%20chai."
  target="_blank"
  className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400 active:scale-[0.98]"
>
  📲 WhatsApp এ আগ্রহ জানাতে চান
</a>

              <p className="text-xs text-slate-400 sm:ml-2">
                প্রথম ১,০০০ দোকান পাবেন বিশেষ early-access সুবিধা।
              </p>
            </div>
            {/* Phone capture (non-interactive for now – pure HTML form) */}
            <form
              className="mt-1 flex flex-col gap-2 rounded-2xl border border-white/5 bg-slate-900/70 p-3 sm:flex-row sm:items-center"
              action="#"
              method="POST"
            >

              <div className="flex-1 space-y-1">
                <label
                  htmlFor="phone"
                  className="text-[11px] font-medium uppercase tracking-wide text-slate-400"
                >
                  আপনার মোবাইল নম্বর (ঐচ্ছিক)
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-emerald-400/70 focus:bg-slate-900 focus:ring-2 focus:ring-emerald-500/40"
                />
              </div>
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center rounded-xl bg-slate-50 px-4 py-2 text-[13px] font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-100 sm:mt-6 sm:self-end"
              >
                লঞ্চের আগে আমাকে জানাবেন
              </button>
            </form>
          </div>

          {/* Right: Fake phone preview */}
          <div className="flex justify-center md:justify-end">
            <div className="relative h-[420px] w-[220px] rounded-[2.3rem] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-3 shadow-[0_0_80px_rgba(16,185,129,0.35)]">
              <div className="absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-full bg-black/60" />
              <div className="mt-7 space-y-3 rounded-2xl bg-slate-900/70 p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] text-slate-400">আজকের মোট বিক্রি</p>
                    <p className="text-lg font-semibold text-slate-50">
                      ৳ ১২,৫০০
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] text-emerald-300">
                    +৳ ২,৩০০ আজ কালেকশন
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] font-medium text-slate-300">
                    গ্রাহকের বাকি
                  </p>
                  <div className="space-y-1.5">
                    {[
                      { name: "রাকিব - বাসা", due: "৳ ১,৮০০" },
                      { name: "সুমন - দোকান", due: "৳ ৯৫০" },
                      { name: "মিঠু - পাশের গলি", due: "৳ ৪৫০" },
                    ].map((c) => (
                      <div
                        key={c.name}
                        className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-900/90 px-2.5 py-1.5"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-[11px] text-slate-100">
                            {c.name}
                          </p>
                          <p className="text-[10px] text-slate-500">
                            বাকি আছে: {c.due}
                          </p>
                        </div>
                        <button className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-300">
                          কল / SMS
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-1 pt-1">
                  <p className="text-[11px] text-slate-400">
                    অফলাইন মোড সক্রিয় ✅
                  </p>
                  <p className="text-[10px] text-slate-500">
                    নেট না থাকলেও হিসাব সেভ থাকবে। নেট এলে নিজে থেকেই সিঙ্ক হবে।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-white/5 bg-slate-950/70">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:py-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-sm font-semibold tracking-tight text-slate-100 sm:text-base">
              কীভাবে কাজ করবে DokanBondhu?
            </h2>
            <p className="max-w-md text-[12px] text-slate-400">
              আমরা প্রথমে সীমিত সংখ্যক দোকানে দিয়ে বাস্তব ব্যবহার দেখে ফিচার
              ফাইনাল করব। আপনার ফিডব্যাকের ওপর ভিত্তি করে পুরো বাংলাদেশে রোলআউট
              হবে।
            </p>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/5 bg-slate-900/80 p-4"
              >
                <p className="text-[12px] font-semibold text-slate-100">
                  {s.title}
                </p>
                <p className="mt-1 text-[12px] text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-slate-950/90">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-5 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DokanBondhu. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span>Made for মুদিখানা দোকান in Bangladesh 🇧🇩</span>
            <span className="text-slate-600">dokanbondhu.com</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

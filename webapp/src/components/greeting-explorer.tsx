"use client";

import { useEffect, useMemo, useState } from "react";

type Greeting = {
  phrase: string;
  transliteration: string;
  meaning: string;
  context: string;
  tip: string;
};

const GREETINGS: Greeting[] = [
  {
    phrase: "مرحباً",
    transliteration: "Marḥaban",
    meaning: "أشهر كلمة ترحيب عامة بين الجميع.",
    context: "مناسبة لكل المواقف الاجتماعية والرسمية.",
    tip: "يمكن تعزيزها بذكر اسم الشخص لتصبح أكثر ودية.",
  },
  {
    phrase: "أهلاً وسهلاً",
    transliteration: "Ahlan wa sahlān",
    meaning: "تحية دافئة تعكس كرماً ورغبة في استقبال الضيف.",
    context: "مثالية عند استقبال الأشخاص في منزلك أو مكتبك.",
    tip: "أضف عبارة مثل «تشرّفنا» لتأكيد الحفاوة.",
  },
  {
    phrase: "حيَّاك الله",
    transliteration: "Ḥayyāk Allāh",
    meaning: "دعاء جميل يعني «أحياك الله» أو «بارك الله فيك».",
    context: "يُستخدم بين الأصدقاء والزملاء لإظهار التقدير.",
    tip: "رد مناسب لها هو «وحيّاك» أو «الله يحييك».",
  },
  {
    phrase: "صباح النور",
    transliteration: "Ṣabāḥ an-nūr",
    meaning: "رد أنيق على «صباح الخير» يحمل تفاؤلاً.",
    context: "مخصص لبداية اليوم في بيئات العمل والاجتماعات.",
    tip: "يمكنك استعمال «صباح الورد» لإضافة لمسة شاعرية.",
  },
  {
    phrase: "يا هلا ومرحبا",
    transliteration: "Yā hala wa marḥabā",
    meaning: "تحية خليجية الأصل تُظهر حماساً كبيراً بلقاء الشخص.",
    context: "مميزة للمناسبات العائلية واللقاءات الودية.",
    tip: "تتبع عادة بابتسامة ولمسة يد حارة.",
  },
  {
    phrase: "أشرقت الأنوار بقدومك",
    transliteration: "Ashraqat al-anwār bi-qadūmik",
    meaning: "تعظيم لقدر الشخص وتعبير لطيف عن الفرح بقدومه.",
    context: "تستخدم في المناسبات الاحتفالية أو لقاء الأحبة بعد غياب.",
    tip: "احرص على ألا تُستخدم في مواقف رسمية جداً حتى لا تبدو مبالغاً فيها.",
  },
];

export function GreetingExplorer() {
  const [index, setIndex] = useState(0);

  const currentGreeting = useMemo(() => GREETINGS[index], [index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % GREETINGS.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const goTo = (newIndex: number) => {
    const normalized = (newIndex + GREETINGS.length) % GREETINGS.length;
    setIndex(normalized);
  };

  return (
    <section
      id="greetings"
      className="glass-panel flex flex-col gap-6 rounded-3xl p-8 shadow-lg sm:p-12"
    >
      <header className="flex flex-col gap-2 text-right">
        <h2 className="text-3xl font-semibold text-foreground">
          جولة في أجمل التحيات العربية
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-300">
          استكشف تحية جديدة كل بضع ثوانٍ، أو انتقل بينها بنفسك للتعرّف على
          سياقاتها ونصائح استخدامها.
        </p>
      </header>

      <div className="rounded-2xl border border-purple-200/60 bg-white/70 p-6 text-right shadow-inner transition dark:border-slate-700/60 dark:bg-slate-900/60">
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-sm text-purple-500 dark:text-purple-300">
              التحية رقم {index + 1}
            </span>
            <h3 className="mt-1 text-4xl font-bold text-foreground">
              {currentGreeting.phrase}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-300">
              {currentGreeting.transliteration}
            </p>
          </div>
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200">
            {currentGreeting.meaning}
          </p>
          <div className="grid gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
            <div className="rounded-xl bg-purple-50/80 p-4 dark:bg-purple-900/40">
              <p className="font-semibold text-purple-600 dark:text-purple-300">
                متى نستخدمها؟
              </p>
              <p>{currentGreeting.context}</p>
            </div>
            <div className="rounded-xl bg-amber-50/80 p-4 dark:bg-amber-900/30">
              <p className="font-semibold text-amber-600 dark:text-amber-300">
                لمسة إضافية
              </p>
              <p>{currentGreeting.tip}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          {GREETINGS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goTo(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === index
                  ? "w-8 bg-purple-500"
                  : "w-2 bg-slate-300 dark:bg-slate-700"
              }`}
              aria-label={`Go to greeting ${idx + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="rounded-full border border-purple-200/60 px-5 py-2 text-sm text-slate-600 transition hover:border-purple-400 hover:text-foreground dark:border-slate-700/60 dark:text-slate-200"
          >
            السابقة
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="rounded-full bg-purple-500 px-5 py-2 text-sm text-white shadow-sm transition hover:bg-purple-600"
          >
            التالية
          </button>
        </div>
      </div>
    </section>
  );
}

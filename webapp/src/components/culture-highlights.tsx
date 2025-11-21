const highlights = [
  {
    title: "لغة الجسد",
    description:
      "إظهار الحفاوة يبدأ بابتسامة صادقة ونبرة صوت دافئة. في اللقاءات الرسمية يكفي المصافحة، أما بين الأقارب فيُتبعها غالباً عناق خفيف.",
    emoji: "🤝",
  },
  {
    title: "التحية حسب الوقت",
    description:
      "استخدم «صباح الخير» أو «مساء الخير» لتحديد الوقت. يرد الطرف الآخر بعبارات مثل «صباح النور» أو «مساء الأنوار» حفاظاً على الإيقاع الجميل.",
    emoji: "🕰️",
  },
  {
    title: "التدرّج في الرسمية",
    description:
      "في بيئة العمل، ابدأ بتحية رسمية ثم التزم بالألقاب. مع مرور الوقت يمكن الانتقال لتحيات أكثر وداً إذا سمح السياق.",
    emoji: "🏢",
  },
  {
    title: "الضيافة العربية",
    description:
      "يُستحب أن تُتبع التحية بدعوة بسيطة مثل «تفضل» أو «شرفتنا» مع تقديم القهوة أو الشاي إن أمكن، فذلك جزء أصيل من الثقافة.",
    emoji: "☕",
  },
];

export function CultureHighlights() {
  return (
    <section
      id="culture"
      className="glass-panel flex flex-col gap-6 rounded-3xl p-8 shadow-lg sm:p-12"
    >
      <header className="flex flex-col gap-2 text-right">
        <h2 className="text-3xl font-semibold text-foreground">
          ملامح من الذائقة العربية في التحية
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-300">
          التفصيل في التحية يمنح انطباعاً عميقاً بالاهتمام. هذه أبرز اللمسات
          التي تميز التواصل اليومي في المجتمعات العربية.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {highlights.map((highlight) => (
          <article
            key={highlight.title}
            className="relative overflow-hidden rounded-2xl border border-purple-200/50 bg-white/70 p-6 text-right shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700/60 dark:bg-slate-900/60"
          >
            <span className="absolute left-4 top-4 text-3xl" aria-hidden>
              {highlight.emoji}
            </span>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-foreground">
                {highlight.title}
              </h3>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                {highlight.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

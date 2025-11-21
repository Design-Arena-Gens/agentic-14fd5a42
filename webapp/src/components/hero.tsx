export function Hero() {
  return (
    <section className="glass-panel relative overflow-hidden rounded-3xl p-10 text-right shadow-lg sm:p-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-100/40 via-transparent to-amber-100/30 dark:from-purple-600/20 dark:via-transparent dark:to-pink-500/10" />
      <div className="flex flex-col gap-6">
        <span className="inline-flex w-fit items-center justify-end gap-2 rounded-full border border-purple-200/60 px-4 py-1 text-sm text-slate-600 dark:border-slate-700/60 dark:text-slate-200">
          أهلاً وسهلاً بك
        </span>
        <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          مرحباً بك في فضاء التحية العربي الحديث
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-200">
          صُمم هذا الفضاء الرقمي ليحتفي بجمال اللغة العربية، ويقدم لك باقة من
          العبارات الودية والنصائح الثقافية لتبادل التحية بأناقة مع العائلة
          والأصدقاء وزملاء العمل.
        </p>
        <div className="flex flex-wrap justify-end gap-3 text-sm font-medium">
          <a
            href="#greetings"
            className="rounded-full bg-purple-500 px-6 py-2 text-white shadow-sm transition hover:bg-purple-600"
          >
            اكتشف التحيات
          </a>
          <a
            href="#culture"
            className="rounded-full border border-purple-200/60 px-6 py-2 text-slate-600 transition hover:border-purple-400 hover:text-foreground dark:border-slate-700/60 dark:text-slate-200 dark:hover:border-purple-400"
          >
            اطّلع على الثقافة
          </a>
        </div>
      </div>
    </section>
  );
}

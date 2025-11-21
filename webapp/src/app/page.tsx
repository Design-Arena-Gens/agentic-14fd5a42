import { CultureHighlights } from "@/components/culture-highlights";
import { Footer } from "@/components/footer";
import { GreetingExplorer } from "@/components/greeting-explorer";
import { Hero } from "@/components/hero";

export default function Home() {
  const quickPhrases = [
    {
      title: "للضيوف الأعزاء",
      description:
        "تحية مناسبة عند استقبال الأصدقاء والعائلة في المنزل أو المناسبات الخاصة.",
      phrases: ["يا مرحباً مليون، نورتوا المكان!", "تفضلوا علينا، البيت بيتكم."],
    },
    {
      title: "لبيئة العمل",
      description:
        "عبارات تجمع بين الود والاحترافية لبدء الاجتماعات أو التواصل عبر البريد.",
      phrases: [
        "أسعد الله أوقاتكم بكل خير، يسعدني لقاؤكم اليوم.",
        "تحية طيبة وبعد، أتمنى أن تكونوا بخير وعافية.",
      ],
    },
    {
      title: "للأصدقاء",
      description: "تحية خفيفة وشاعرية لإضفاء أجواء من التفاؤل والمرح.",
      phrases: ["أهلاً بالقلوب الحلوة، اشتقنا لضحكاتكم!", "يا مساء الورد والياسمين."],
    },
  ];

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-12 px-4 py-16 sm:px-6 sm:py-24">
      <Hero />
      <GreetingExplorer />
      <section className="glass-panel rounded-3xl p-8 text-right shadow-lg sm:p-12">
        <header className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold text-foreground">
            عبارات جاهزة لتشارك بها دفء التحية
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            استخدم هذه الصيغ بحسب السياق، ويمكنك تعديلها بإضافة أسماء الأشخاص أو
            تفاصيل المناسبة.
          </p>
        </header>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {quickPhrases.map((category) => (
            <article
              key={category.title}
              className="flex flex-col gap-4 rounded-2xl border border-purple-200/50 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {category.description}
                </p>
              </div>
              <ul className="flex flex-col gap-3 text-sm text-slate-700 dark:text-slate-200">
                {category.phrases.map((phrase) => (
                  <li
                    key={phrase}
                    className="rounded-xl bg-purple-50/60 p-3 leading-6 dark:bg-purple-900/30"
                  >
                    {phrase}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <CultureHighlights />
      <section className="glass-panel rounded-3xl p-8 text-right shadow-lg sm:p-12">
        <header className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold text-foreground">
            نصائح سريعة لتبادل التحايا عبر الرسائل
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            لا يقتصر الترحيب على اللقاءات الوجاهية، فهذه الصياغات تلائم البريد
            الإلكتروني أو المحادثات الفورية.
          </p>
        </header>
        <div className="mt-6 grid gap-4 text-sm text-slate-700 dark:text-slate-200 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/70 p-5 shadow-sm dark:bg-slate-900/60">
            <p className="font-semibold text-purple-600 dark:text-purple-300">
              بريد رسمي
            </p>
            <p className="mt-2 leading-7">
              <span className="font-semibold">الموضوع:</span> ترحيب وتعريف سريع
            </p>
            <p className="leading-7">
              <span className="font-semibold">النص:</span> يسعدني التواصل معكم.
              أتشرف بالتعاون مع فريقكم الموقر، وأتطلع إلى لقاء قريب عبر الاتصال
              المرئي.
            </p>
          </div>
          <div className="rounded-2xl bg-white/70 p-5 shadow-sm dark:bg-slate-900/60">
            <p className="font-semibold text-purple-600 dark:text-purple-300">
              رسالة ودية
            </p>
            <p className="mt-2 leading-7">
              مساء الفرح عليكم! اشتقنا لجمعة الأسبوع الماضي، فلنكررها قريباً مع
              فنجان قهوة وحديث طويل.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

"use client";

import { useLanguage } from "./LanguageProvider";
import { ui } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const experience = [
  {
    en: {
      role: "AI Committee Member (Volunteer)",
      company: "SDC | Saudi Developers Community",
      period: "Sep 2026 – Present",
      points: [
        "Translate AI and tech research into accessible content for the developer community",
      ],
    },
    ar: {
      role: "عضوة لجنة الذكاء الاصطناعي (تطوع)",
      company: "SDC | المجتمع السعودي للمطورين",
      period: "سبتمبر 2026 – حاليًا",
      points: [
        "ترجمة أبحاث الذكاء الاصطناعي والتقنية إلى محتوى مفهوم لمجتمع المطورين",
      ],
    },
  },
  {
    en: {
      role: "Software Developer, Trainee (Tamheer)",
      company: "Khalifa A. Algosaibi Group, Dammam",
      period: "Dec 2025 – Jun 2026",
      points: [
        "Built the IT equipment management system (ASP.NET Core MVC, EF Core, SQL Server)",
        "Built a web-based meeting recording, analysis, and reporting platform on a local open-source AI model, eliminating subscription costs and improving data privacy",
        "Customized the iTop ITSM system for ticket workflows and asset tracking",
        "Automated reporting",
      ],
    },
    ar: {
      role: "مطورة برمجيات، متدربة (تمهير)",
      company: "مجموعة خليفة أ. القصيبي، الدمام",
      period: "ديسمبر 2025 – يونيو 2026",
      points: [
        "بناء نظام إدارة معدات IT (ASP.NET Core MVC وEF Core وSQL Server)",
        "بناء منصة ويب لتسجيل الاجتماعات وتحليلها وإعداد التقارير عنها باستخدام نموذج ذكاء اصطناعي محلي مفتوح المصدر، ما ألغى تكاليف الاشتراكات وحسّن خصوصية البيانات",
        "تخصيص نظام iTop ITSM لسير عمل التذاكر وتتبع الأصول",
        "أتمتة التقارير",
      ],
    },
  },
  {
    en: {
      role: ".NET Web Developer, Trainee (Volunteer)",
      company: "IAU, Deanship of Scientific Research & Innovation",
      period: "Aug 2025 – Jan 2026",
      points: [
        "Fixed backend issues in an ASP.NET Core MVC research-management system",
        "Implemented full Arabic–English localization with .resx and culture middleware",
        "Optimized queries with EF Core and LINQ",
      ],
    },
    ar: {
      role: "مطورة ويب .NET، متدربة (تطوع)",
      company: "جامعة الإمام عبدالرحمن بن فيصل — عمادة البحث العلمي والابتكار",
      period: "أغسطس 2025 – يناير 2026",
      points: [
        "إصلاح مشاكل الخلفية في نظام إدارة البحوث المبني بـ ASP.NET Core MVC",
        "تنفيذ تعريب كامل عربي–إنجليزي عبر ملفات .resx وculture middleware",
        "تحسين الاستعلامات باستخدام EF Core وLINQ",
      ],
    },
  },
  {
    en: {
      role: "IT Trainee (COOP)",
      company: "GAC Saudi Arabia, Dammam",
      period: "Jun 2025 – Aug 2025",
      points: [
        "Analyzed 10 months of IT ticket data and built dashboards",
        "Handled daily IT support tickets",
      ],
    },
    ar: {
      role: "متدربة IT (برنامج تعاوني)",
      company: "GAC السعودية، الدمام",
      period: "يونيو 2025 – أغسطس 2025",
      points: [
        "تحليل 10 أشهر من بيانات تذاكر IT وبناء لوحات معلومات",
        "معالجة تذاكر الدعم الفني اليومية",
      ],
    },
  },
];

export function Experience() {
  const { locale } = useLanguage();
  const t = ui[locale];

  return (
    <section id="experience" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-brand-teal-dark sm:text-4xl">
            {t.experience}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-teal" />
        </Reveal>

        <div className="space-y-8">
          {experience.map((item, index) => {
            const data = item[locale];
            return (
              <Reveal key={data.company} delay={index * 80}>
                <div className="border-s-2 border-brand-teal ps-5">
                  <p className="font-semibold text-brand-teal-dark">
                    {data.role}
                  </p>
                  <p className="text-sm text-brand-teal">{data.company}</p>
                  <p className="mb-3 text-xs text-zinc-500">{data.period}</p>
                  <ul className="space-y-1.5">
                    {data.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm text-zinc-600 before:me-2 before:text-brand-teal before:content-['•']"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

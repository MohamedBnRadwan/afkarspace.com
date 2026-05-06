import { notFound } from "next/navigation";
import { ProjectHighlights } from "@/components/sections/home-sections";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

export default async function ProjectsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = getDictionary(locale as Locale);

  return (
    <div>
      <section className="section-shell section-gap">
        <div className="max-w-3xl">
          <span className="eyebrow">{dictionary.nav.projects}</span>
          <h1 className="font-display mt-6 text-5xl leading-tight sm:text-6xl">
            {dictionary.sections.projects}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">{dictionary.sections.projectsLead}</p>
        </div>
      </section>
      <ProjectHighlights locale={locale as Locale} dictionary={dictionary} />
    </div>
  );
}

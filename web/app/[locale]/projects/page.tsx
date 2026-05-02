import { notFound } from "next/navigation";
import { GenericContentPage } from "@/components/sections/page-templates";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { localePath } from "@/lib/routing";

export default async function ProjectsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = getDictionary(locale as Locale);

  return (
    <GenericContentPage
      eyebrow={dictionary.nav.projects}
      title={dictionary.sections.projects}
      text={dictionary.sections.projectsLead}
      image="/images/projects/project-office.svg"
      cta={dictionary.common.viewProjects}
      ctaHref={localePath(locale as Locale, "/contact")}
    />
  );
}

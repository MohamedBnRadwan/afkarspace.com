import { notFound } from "next/navigation";
import { GenericContentPage } from "@/components/sections/page-templates";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { localePath } from "@/lib/routing";

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = getDictionary(locale as Locale);

  return (
    <GenericContentPage
      eyebrow={dictionary.nav.about}
      title={dictionary.sections.about}
      text={dictionary.sections.aboutLead}
      image="/images/about/about-story.jpg"
      cta={dictionary.nav.contact}
      ctaHref={localePath(locale as Locale, "/contact")}
    />
  );
}

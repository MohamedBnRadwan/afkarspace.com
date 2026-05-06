import { ContactSection, ProjectHighlights, AboutHighlight, ProcessSection, ServicesOverview } from "@/components/sections/home-sections";
import { HeroSection } from "@/components/sections/hero-section";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);

  return (
    <>
      <HeroSection locale={locale as Locale} dictionary={dictionary} />
      <ServicesOverview locale={locale as Locale} dictionary={dictionary} />
      <ProjectHighlights locale={locale as Locale} dictionary={dictionary} />
      <AboutHighlight locale={locale as Locale} dictionary={dictionary} />
      <ProcessSection locale={locale as Locale} dictionary={dictionary} />
      <ContactSection locale={locale as Locale} dictionary={dictionary} />
    </>
  );
}

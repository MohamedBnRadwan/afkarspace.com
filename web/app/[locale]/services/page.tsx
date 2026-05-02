import { notFound } from "next/navigation";
import { ServiceListingPage } from "@/components/sections/page-templates";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

export default async function ServicesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <ServiceListingPage locale={locale as Locale} dictionary={getDictionary(locale as Locale)} />;
}

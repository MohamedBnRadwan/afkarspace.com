import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/sections/page-templates";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

export default async function CurtainsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <ServiceDetailPage
      locale={locale as Locale}
      dictionary={getDictionary(locale as Locale)}
      slug="curtains"
    />
  );
}

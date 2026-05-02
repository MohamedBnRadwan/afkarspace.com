import Link from "next/link";
import { SiteIcon } from "@/components/ui/site-icon";
import { iconNameFromAssetPath } from "@/lib/icon-map";
import { Locale } from "@/lib/i18n";

type ServiceCardProps = {
  locale: Locale;
  item: {
    slug: string;
    icon: string;
    title: string;
    short: string;
  };
  cta: string;
};

export function ServiceCard({ locale, item, cta }: ServiceCardProps) {
  return (
    <Link
      href={`/${locale}/services/${item.slug}`}
      className="group glass-panel flex h-full flex-col rounded-[28px] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/70"
    >
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-accentSoft text-accent dark:text-white">
        <SiteIcon name={iconNameFromAssetPath(item.icon)} className="h-7 w-7" />
      </div>
      <h3 className="font-display mb-3 text-2xl">{item.title}</h3>
      <p className="mb-8 text-sm leading-7 text-muted">{item.short}</p>
      <span className="mt-auto text-sm font-semibold text-accent">{cta}</span>
    </Link>
  );
}

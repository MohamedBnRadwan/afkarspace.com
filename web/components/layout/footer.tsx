import Image from "next/image";
import Link from "next/link";
import siteConfig from "@/data/site-config.json";
import { SiteIcon } from "@/components/ui/site-icon";
import { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/routing";

export function Footer({
  locale,
  dictionary
}: {
  locale: Locale;
  dictionary: any;
}) {
  return (
    <footer className="border-t border-line/70">
      <div className="section-shell grid gap-10 py-10 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link href={localePath(locale)} className="flex items-center gap-3">
            <Image
              src={siteConfig.brand.logoIcon}
              alt={siteConfig.brand.name}
              width={38}
              height={38}
              className="h-9 w-9 rounded-2xl dark:hidden"
            />
            <Image
              src={siteConfig.brand.darkLogoIcon}
              alt={siteConfig.brand.name}
              width={38}
              height={38}
              className="hidden h-9 w-9 rounded-2xl dark:block"
            />
            <span className="font-display text-2xl">{siteConfig.brand.name}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted">
            {dictionary.footer.tagline}
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-muted">
          <Link href={localePath(locale, "/services")} className="block">
            {dictionary.nav.services}
          </Link>
          <Link href={localePath(locale, "/projects")} className="block">
            {dictionary.nav.projects}
          </Link>
          <Link href={localePath(locale, "/about")} className="block">
            {dictionary.nav.about}
          </Link>
        </div>
        <div className="flex flex-col gap-3 text-sm text-muted">
          <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-3">
            <span className="text-accent dark:text-white">
              <SiteIcon name="phone" className="h-[18px] w-[18px]" />
            </span>
            <span>{siteConfig.contact.phone}</span>
          </a>
          <a href={siteConfig.contact.whatsappUrl} className="flex items-center gap-3">
            <span className="text-accent dark:text-white">
              <SiteIcon name="whatsapp" className="h-[18px] w-[18px]" />
            </span>
            <span>{siteConfig.contact.whatsappDisplay}</span>
          </a>
          <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3">
            <span className="text-accent dark:text-white">
              <SiteIcon name="email" className="h-[18px] w-[18px]" />
            </span>
            <span>{siteConfig.contact.email}</span>
          </a>
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-accent dark:text-white">
              <SiteIcon name="location" className="h-[18px] w-[18px]" />
            </span>
            <p>{siteConfig.contact.address}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-line/70 py-5 text-center text-xs text-muted">
        {siteConfig.brand.name} (c) 2026. {dictionary.footer.rights}
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { SiteIcon } from "@/components/ui/site-icon";
import { iconNameFromAssetPath } from "@/lib/icon-map";
import { Locale } from "@/lib/i18n";

type ServiceCardProps = {
  locale: Locale;
  item: {
    slug: string;
    icon: string;
    image: string;
    title: string;
    short: string;
  };
  cta: string;
};

export function ServiceCard({ locale, item, cta }: ServiceCardProps) {
  return (
    <Link
      href={`/${locale}/services/${item.slug}`}
      className="group glass-panel flex h-full flex-col overflow-hidden rounded-[30px] p-3 transition duration-300 hover:-translate-y-1.5 hover:border-accent/70 hover:shadow-glow"
    >
      <div className="relative overflow-hidden rounded-[24px]">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0c1220]/8 via-transparent to-[#0c1220]/80" />
        <Image
          src={item.image}
          alt={item.title}
          width={900}
          height={720}
          className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-0 bottom-0 z-20 p-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-200">
                Afkar Service
              </p>
              <h3 className="font-display mt-2 text-3xl text-white">{item.title}</h3>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/16 bg-white/12 text-white backdrop-blur-md">
              <SiteIcon name={iconNameFromAssetPath(item.icon)} className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-5">
        <p className="mb-6 text-sm leading-7 text-muted">{item.short}</p>
        <div className="mt-auto flex items-center justify-between gap-4 border-t border-line/70 pt-4">
          <span className="text-sm font-semibold text-accent">{cta}</span>
          <span className="text-xs uppercase tracking-[0.22em] text-muted transition group-hover:text-foreground">
            Explore
          </span>
        </div>
      </div>
    </Link>
  );
}

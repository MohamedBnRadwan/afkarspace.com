"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Locale } from "@/lib/i18n";
import { swapLocaleInPath } from "@/lib/routing";

export function LanguageSwitcher({
  locale,
  label
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const nextLocale = locale === "en" ? "ar" : "en";

  return (
    <Link
      href={swapLocaleInPath(pathname, nextLocale)}
      aria-label={label}
      className="inline-flex min-w-14 items-center justify-center rounded-full border border-line/70 bg-white/70 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition hover:border-accent hover:text-accent dark:bg-slate-950/60"
    >
      {nextLocale}
    </Link>
  );
}

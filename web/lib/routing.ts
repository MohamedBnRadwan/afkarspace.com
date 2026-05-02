import { Locale } from "@/lib/i18n";

export function localePath(locale: Locale, path = "") {
  return `/${locale}${path}`;
}

export function swapLocaleInPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${locale}`;
  }

  segments[0] = locale;
  return `/${segments.join("/")}`;
}

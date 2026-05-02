"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import siteConfig from "@/data/site-config.json";
import { getLocalizedServices } from "@/lib/data";
import { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/routing";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { SiteIcon } from "@/components/ui/site-icon";
import { iconNameFromAssetPath } from "@/lib/icon-map";

export function Navbar({
  locale,
  dictionary
}: {
  locale: Locale;
  dictionary: any;
}) {
  const pathname = usePathname();
  const items = useMemo(() => getLocalizedServices(locale), [locale]);
  const [activeService, setActiveService] = useState(items[0]);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesAccordionOpen, setServicesAccordionOpen] = useState(false);

  useEffect(() => {
    setActiveService(items[0]);
  }, [items]);

  useEffect(() => {
    setMobileOpen(false);
    setServicesAccordionOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: localePath(locale), label: dictionary.nav.home },
    { href: localePath(locale, "/projects"), label: dictionary.nav.projects },
    { href: localePath(locale, "/about"), label: dictionary.nav.about },
    { href: localePath(locale, "/contact"), label: dictionary.nav.contact }
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/60 bg-surface/80 backdrop-blur-xl">
        <div className="section-shell flex h-20 items-center justify-between gap-4">
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

          <nav className="hidden items-center gap-8 lg:flex">
            <Link href={localePath(locale)} className="text-sm font-medium">
              {dictionary.nav.home}
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-sm font-medium">{dictionary.nav.services}</button>
              <AnimatePresence>
                {servicesOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-1/2 top-full mt-6 w-[min(92vw,760px)] max-h-[calc(100vh-7rem)] -translate-x-1/2 overflow-hidden rounded-[32px] border border-line/70 bg-surface/95 p-5 shadow-premium"
                  >
                    <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                      <div className="max-h-[calc(100vh-12rem)] space-y-2 overflow-y-auto pr-2">
                        {items.map((item) => (
                          <Link
                            key={item.slug}
                            href={localePath(locale, `/services/${item.slug}`)}
                            onMouseEnter={() => setActiveService(item)}
                            className={`flex items-start gap-4 rounded-3xl px-4 py-4 transition ${
                              activeService.slug === item.slug
                                ? "bg-accentSoft text-foreground"
                                : "hover:bg-white/70 dark:hover:bg-slate-900/80"
                            }`}
                          >
                            <span className="mt-1 text-accent dark:text-white">
                              <SiteIcon name={iconNameFromAssetPath(item.icon)} className="h-6 w-6" />
                            </span>
                            <div>
                              <div className="font-semibold">{item.title}</div>
                              <div className="mt-1 text-sm text-muted">{item.short}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <motion.div
                        key={activeService.slug}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 16 }}
                        transition={{ duration: 0.3 }}
                        className="glass-panel hidden max-h-[calc(100vh-12rem)] overflow-y-auto rounded-[28px] p-4 lg:block"
                      >
                        <Image
                          src={activeService.image}
                          alt={activeService.title}
                          width={640}
                          height={520}
                          className="h-[280px] w-full rounded-[22px] object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-display text-2xl">{activeService.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-muted">{activeService.short}</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
            {navLinks.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle label={dictionary.nav.theme} />
            <LanguageSwitcher locale={locale} label={dictionary.nav.language} />
            <Link
              href={localePath(locale, "/contact")}
              className="rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-surface dark:bg-white dark:text-slate-950"
            >
              {dictionary.nav.cta}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label={dictionary.nav.openMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/70 lg:hidden"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, x: locale === "ar" ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: locale === "ar" ? -30 : 30 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-surface px-5 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Link href={localePath(locale)} className="flex items-center gap-3">
                <Image
                  src={siteConfig.brand.logoIcon}
                  alt={siteConfig.brand.name}
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-2xl dark:hidden"
                />
                <Image
                  src={siteConfig.brand.darkLogoIcon}
                  alt={siteConfig.brand.name}
                  width={36}
                  height={36}
                  className="hidden h-9 w-9 rounded-2xl dark:block"
                />
                <span className="font-display text-2xl">{siteConfig.brand.name}</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label={dictionary.nav.closeMenu}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/70"
              >
                X
              </button>
            </div>

            <div className="mt-10 flex min-h-[calc(100vh-120px)] flex-col">
              <div className="space-y-3">
                <Link href={localePath(locale)} className="block text-3xl font-semibold">
                  {dictionary.nav.home}
                </Link>
                <button
                  type="button"
                  onClick={() => setServicesAccordionOpen((value) => !value)}
                  className="flex w-full items-center justify-between text-3xl font-semibold"
                >
                  {dictionary.nav.services}
                  <span className="text-lg">{servicesAccordionOpen ? "-" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {servicesAccordionOpen ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 max-h-[40vh] space-y-3 overflow-y-auto rounded-[28px] border border-line/70 p-4">
                        {items.map((item) => (
                          <Link
                            key={item.slug}
                            href={localePath(locale, `/services/${item.slug}`)}
                            className="block rounded-2xl bg-white/60 px-4 py-4 dark:bg-slate-950/40"
                          >
                            <div className="font-semibold">{item.title}</div>
                            <div className="mt-1 text-sm text-muted">{item.short}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
                {navLinks.slice(1).map((item) => (
                  <Link key={item.href} href={item.href} className="block text-3xl font-semibold">
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-auto space-y-4">
                <div className="flex items-center gap-3">
                  <ThemeToggle label={dictionary.nav.theme} />
                  <LanguageSwitcher locale={locale} label={dictionary.nav.language} />
                </div>
                <Link
                  href={localePath(locale, "/contact")}
                  className="block rounded-full bg-foreground px-6 py-4 text-center text-base font-semibold text-surface dark:bg-white dark:text-slate-950"
                >
                  {dictionary.nav.cta}
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

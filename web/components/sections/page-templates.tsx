import Image from "next/image";
import { Locale } from "@/lib/i18n";
import { getLocalizedServices } from "@/lib/data";
import { localePath } from "@/lib/routing";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";

export function ServiceListingPage({
  locale,
  dictionary
}: {
  locale: Locale;
  dictionary: any;
}) {
  const items = getLocalizedServices(locale);

  return (
    <div>
      <section className="section-shell section-gap">
        <AnimatedReveal>
          <SectionHeading
            eyebrow={dictionary.nav.services}
            title={dictionary.sections.services}
            text={dictionary.sections.servicesLead}
          />
        </AnimatedReveal>
      </section>
      <section className="section-shell pb-20 sm:pb-24 lg:pb-32">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <AnimatedReveal key={item.slug} delay={index * 0.05}>
              <ServiceCard locale={locale} item={item} cta={dictionary.common.explore} />
            </AnimatedReveal>
          ))}
        </div>
      </section>
    </div>
  );
}

export function ServiceDetailPage({
  locale,
  dictionary,
  slug
}: {
  locale: Locale;
  dictionary: any;
  slug: string;
}) {
  const service = getLocalizedServices(locale).find((item) => item.slug === slug);

  if (!service) {
    return null;
  }

  return (
    <div>
      <section className="section-shell section-gap">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
          <AnimatedReveal>
            <span className="eyebrow">{dictionary.nav.services}</span>
            <h1 className="font-display mt-6 text-5xl leading-tight sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{service.intro}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href={localePath(locale, "/contact")}>
                {dictionary.nav.cta}
              </ButtonLink>
              <ButtonLink href={localePath(locale, "/services")} variant="secondary">
                {dictionary.common.backToServices}
              </ButtonLink>
            </div>
          </AnimatedReveal>
          <AnimatedReveal delay={0.08}>
            <div className="glass-panel overflow-hidden rounded-[36px] p-4">
              <Image
                src={service.image}
                alt={service.title}
                width={960}
                height={860}
                className="h-full min-h-[360px] w-full rounded-[28px] object-cover"
              />
            </div>
          </AnimatedReveal>
        </div>
      </section>
      <section className="section-shell pb-20 sm:pb-24 lg:pb-32">
        <div className="grid gap-6 lg:grid-cols-3">
          {service.details.map((detail, index) => (
            <AnimatedReveal key={detail} delay={index * 0.06}>
              <div className="glass-panel rounded-[30px] p-8">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  0{index + 1}
                </div>
                <p className="mt-5 text-base leading-8 text-muted">{detail}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </section>
    </div>
  );
}

export function GenericContentPage({
  eyebrow,
  title,
  text,
  image,
  cta,
  ctaHref
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  cta: string;
  ctaHref: string;
}) {
  return (
    <section className="section-shell section-gap">
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <AnimatedReveal>
          <SectionHeading eyebrow={eyebrow} title={title} text={text} />
          <div className="mt-8">
            <ButtonLink href={ctaHref}>{cta}</ButtonLink>
          </div>
        </AnimatedReveal>
        <AnimatedReveal delay={0.08}>
          <div className="glass-panel overflow-hidden rounded-[36px] p-4">
            <Image
              src={image}
              alt={title}
              width={960}
              height={860}
              className="h-full min-h-[420px] w-full rounded-[28px] object-cover"
            />
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

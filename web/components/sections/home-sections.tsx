import Image from "next/image";
import { Locale } from "@/lib/i18n";
import { getLocalizedServices, processSteps, projectCards } from "@/lib/data";
import { localePath } from "@/lib/routing";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";

export function ServicesOverview({
  locale,
  dictionary
}: {
  locale: Locale;
  dictionary: any;
}) {
  const items = getLocalizedServices(locale);

  return (
    <section className="section-shell section-gap">
      <AnimatedReveal>
        <SectionHeading
          eyebrow={dictionary.nav.services}
          title={dictionary.sections.services}
          text={dictionary.sections.servicesLead}
        />
      </AnimatedReveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <AnimatedReveal key={item.slug} delay={index * 0.06}>
            <ServiceCard locale={locale} item={item} cta={dictionary.common.discover} />
          </AnimatedReveal>
        ))}
      </div>
    </section>
  );
}

export function ProjectHighlights({
  locale,
  dictionary
}: {
  locale: Locale;
  dictionary: any;
}) {
  const cards = projectCards[locale];

  return (
    <section className="section-shell section-gap">
      <AnimatedReveal>
        <SectionHeading
          eyebrow={dictionary.nav.projects}
          title={dictionary.sections.projects}
          text={dictionary.sections.projectsLead}
        />
      </AnimatedReveal>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {cards.map((card, index) => (
          <AnimatedReveal key={card.title} delay={index * 0.08}>
            <div className="glass-panel overflow-hidden rounded-[32px]">
              <Image
                src={card.image}
                alt={card.title}
                width={800}
                height={960}
                className="h-[320px] w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {card.category}
                </p>
                <h3 className="font-display mt-3 text-2xl">{card.title}</h3>
              </div>
            </div>
          </AnimatedReveal>
        ))}
      </div>
    </section>
  );
}

export function AboutHighlight({
  locale,
  dictionary
}: {
  locale: Locale;
  dictionary: any;
}) {
  const expertise =
    locale === "ar"
      ? ["سكني", "تجاري", "صناعي", "تنفيذ متكامل"]
      : ["Residential", "Commercial", "Industrial", "Turnkey"];

  return (
    <section className="section-shell section-gap">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <AnimatedReveal>
          <div className="glass-panel overflow-hidden rounded-[36px] p-4">
            <Image
              src="/images/about/about-story.svg"
              alt="Afkar about"
              width={960}
              height={920}
              className="h-full min-h-[420px] w-full rounded-[28px] object-cover"
            />
          </div>
        </AnimatedReveal>
        <AnimatedReveal delay={0.08} className="flex items-center">
          <div>
            <SectionHeading
              eyebrow={dictionary.nav.about}
              title={dictionary.sections.about}
              text={dictionary.sections.aboutLead}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {expertise.map((item, index) => (
                <div key={index} className="rounded-[24px] border border-line/70 p-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                    0{index + 1}
                  </div>
                  <p className="mt-3 text-sm text-muted">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href={localePath(locale, "/about")}>{dictionary.nav.about}</ButtonLink>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export function ProcessSection({
  locale,
  dictionary
}: {
  locale: Locale;
  dictionary: any;
}) {
  return (
    <section className="section-shell section-gap">
      <AnimatedReveal>
        <SectionHeading
          eyebrow={dictionary.sections.process}
          title={dictionary.sections.process}
          text={dictionary.sections.processLead}
        />
      </AnimatedReveal>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {processSteps[locale].map((step, index) => (
          <AnimatedReveal key={step.title} delay={index * 0.08}>
            <div className="glass-panel rounded-[30px] p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                0{index + 1}
              </div>
              <h3 className="font-display mt-6 text-3xl">{step.title}</h3>
              <p className="mt-4 text-base leading-8 text-muted">{step.text}</p>
            </div>
          </AnimatedReveal>
        ))}
      </div>
    </section>
  );
}

export function ContactSection({
  locale,
  dictionary
}: {
  locale: Locale;
  dictionary: any;
}) {
  return (
    <section className="section-shell pb-20 sm:pb-24 lg:pb-32">
      <AnimatedReveal>
        <div className="glass-panel rounded-[36px] p-8 sm:p-10 lg:p-14">
          <SectionHeading
            eyebrow={dictionary.nav.contact}
            title={dictionary.sections.contact}
            text={dictionary.sections.contactLead}
          />
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href={localePath(locale, "/contact")}>{dictionary.nav.contact}</ButtonLink>
            <ButtonLink href="https://wa.me/966500000000" variant="secondary">
              {dictionary.common.whatsapp}
            </ButtonLink>
          </div>
        </div>
      </AnimatedReveal>
    </section>
  );
}

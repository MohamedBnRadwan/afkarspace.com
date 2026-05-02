import Image from "next/image";
import { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/routing";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { ButtonLink } from "@/components/ui/button-link";

export function HeroSection({
  locale,
  dictionary
}: {
  locale: Locale;
  dictionary: any;
}) {
  return (
    <section className="section-shell section-gap">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <AnimatedReveal>
            <span className="eyebrow">{dictionary.hero.eyebrow}</span>
          </AnimatedReveal>
          <AnimatedReveal delay={0.08}>
            <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[1.04] sm:text-6xl lg:text-7xl">
              {dictionary.hero.title}
            </h1>
          </AnimatedReveal>
          <AnimatedReveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {dictionary.hero.subtitle}
            </p>
          </AnimatedReveal>
          <AnimatedReveal delay={0.22}>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href={localePath(locale, "/services")}>
                {dictionary.hero.primaryCta}
              </ButtonLink>
              <ButtonLink href={localePath(locale, "/projects")} variant="secondary">
                {dictionary.hero.secondaryCta}
              </ButtonLink>
            </div>
          </AnimatedReveal>
          <AnimatedReveal delay={0.28}>
            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              {dictionary.hero.stats.map((stat: any) => (
                <div key={stat.label} className="glass-panel rounded-[24px] p-5">
                  <div className="text-2xl font-semibold">{stat.value}</div>
                  <div className="mt-2 text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedReveal>
        </div>

        <AnimatedReveal className="relative">
          <div className="absolute inset-0 -z-10 bg-grid bg-[size:18px_18px] opacity-70" />
          <div className="glass-panel overflow-hidden rounded-[36px] p-4">
            <Image
              src="/images/hero/hero-main.svg"
              alt="Afkar premium interior collage"
              width={900}
              height={900}
              className="h-full min-h-[420px] w-full rounded-[28px] object-cover"
              priority
            />
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

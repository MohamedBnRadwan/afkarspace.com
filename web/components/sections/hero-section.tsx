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
      <AnimatedReveal>
        <div className="glass-panel relative overflow-hidden rounded-[40px] p-4 sm:p-5">
          <div className="relative min-h-[620px] overflow-hidden rounded-[32px]">
            <Image
              src="/images/hero/hero-main.png"
              alt="Afkar premium interior collage"
              width={1440}
              height={1120}
              className="absolute inset-0 h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1220]/12 via-[#11213c]/38 to-[#0c1220]/78 dark:from-[#0c1220]/16 dark:via-[#11213c]/46 dark:to-[#0c1220]/82" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.24),transparent_30%)]" />

            <div className="relative flex min-h-[620px] flex-col justify-between p-6 sm:p-8 lg:p-12">
              <div className="max-w-3xl">
                <AnimatedReveal>
                  <span className="eyebrow border-white/20 bg-white/10 text-white backdrop-blur-md">
                    {dictionary.hero.eyebrow}
                  </span>
                </AnimatedReveal>
                <AnimatedReveal delay={0.08}>
                  <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[1.02] text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                    {dictionary.hero.title}
                  </h1>
                </AnimatedReveal>
                <AnimatedReveal delay={0.16}>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
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
              </div>

              <AnimatedReveal delay={0.28}>
                <div className="mt-12 grid gap-4 md:max-w-4xl md:grid-cols-3">
                  {dictionary.hero.stats.map((stat: any) => (
                    <div
                      key={stat.label}
                      className="rounded-[24px] border border-white/14 bg-white/10 p-5 text-white shadow-premium backdrop-blur-md"
                    >
                      <div className="text-2xl font-semibold">{stat.value}</div>
                      <div className="mt-2 text-sm text-slate-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </AnimatedReveal>
      <div className="mx-auto mt-8 max-w-5xl text-center">
        <p className="text-sm uppercase tracking-[0.26em] text-accent">
          Interior design, finishing, facades, furniture, and fit-out crafted with a cooler, sharper visual language.
        </p>
      </div>
    </section>
  );
}

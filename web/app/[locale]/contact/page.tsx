import { notFound } from "next/navigation";
import siteConfig from "@/data/site-config.json";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteIcon, type IconName } from "@/components/ui/site-icon";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = getDictionary(locale as Locale);
  const contactItems = [
    {
      key: "mobile",
      href: `tel:${siteConfig.contact.phone}`,
      icon: "phone" as IconName,
      value: siteConfig.contact.phone
    },
    {
      key: "whatsapp",
      href: siteConfig.contact.whatsappUrl,
      icon: "whatsapp" as IconName,
      value: siteConfig.contact.whatsappDisplay
    },
    {
      key: "email",
      href: `mailto:${siteConfig.contact.email}`,
      icon: "email" as IconName,
      value: siteConfig.contact.email
    }
  ];

  return (
    <div>
      <section className="section-shell section-gap">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedReveal>
            <SectionHeading
              eyebrow={dictionary.nav.contact}
              title={dictionary.sections.contact}
              text={dictionary.sections.contactLead}
            />
            <div className="mt-10 grid gap-4">
              {contactItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="glass-panel flex items-center gap-4 rounded-[28px] p-6 transition hover:border-accent/70"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accentSoft">
                    <span className="text-accent dark:text-white">
                      <SiteIcon name={item.icon} className="h-6 w-6" />
                    </span>
                  </div>
                  <span className="text-lg font-semibold sm:text-xl">{item.value}</span>
                </a>
              ))}
              <div className="glass-panel flex items-start gap-4 rounded-[28px] p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accentSoft">
                  <span className="text-accent dark:text-white">
                    <SiteIcon name="location" className="h-6 w-6" />
                  </span>
                </div>
                <p className="pt-3 text-lg font-semibold sm:text-xl">{siteConfig.contact.address}</p>
              </div>
            </div>
            <div className="mt-8">
              <ButtonLink href={siteConfig.contact.whatsappUrl}>
                {dictionary.common.whatsapp}
              </ButtonLink>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.08}>
            <div className="glass-panel overflow-hidden rounded-[36px] p-4">
              <iframe
                src={siteConfig.contact.mapUrl}
                width="100%"
                height="560"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[28px] border-0"
                title="Afkar location map"
              />
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
}

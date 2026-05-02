export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

type ServiceTranslation = {
  title: string;
  short: string;
  intro: string;
  details: string[];
};

type Dictionary = {
  meta: {
    siteName: string;
    title: string;
    description: string;
  };
  nav: {
    home: string;
    services: string;
    projects: string;
    about: string;
    contact: string;
    cta: string;
    language: string;
    theme: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { label: string; value: string }[];
  };
  sections: {
    services: string;
    servicesLead: string;
    projects: string;
    projectsLead: string;
    about: string;
    aboutLead: string;
    process: string;
    processLead: string;
    contact: string;
    contactLead: string;
  };
  common: {
    explore: string;
    discover: string;
    viewProjects: string;
    whatsapp: string;
    callUs: string;
    sendEmail: string;
    visitStudio: string;
    backToServices: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
  services: Record<string, ServiceTranslation>;
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    meta: {
      siteName: "Afkar",
      title: "Afkar | Premium Interior Design & Fit-Out",
      description:
        "Afkar delivers premium interior design, finishing, factory outfitting, glass facades, furniture, curtains, and turnkey fit-out services."
    },
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      cta: "Start a Project",
      language: "Language",
      theme: "Theme",
      openMenu: "Open menu",
      closeMenu: "Close menu"
    },
    hero: {
      eyebrow: "Designing spaces with precision",
      title: "Premium spaces shaped for living, working, and building better.",
      subtitle:
        "Afkar blends interior design, fit-out execution, facade expertise, and furniture detailing into one refined project experience.",
      primaryCta: "Explore Services",
      secondaryCta: "View Projects",
      stats: [
        { label: "Design to delivery", value: "360" },
        { label: "Fit-out coordination", value: "End-to-end" },
        { label: "Crafted finishes", value: "Premium" }
      ]
    },
    sections: {
      services: "Integrated services",
      servicesLead:
        "A calm, highly detailed approach from concept planning to final installation.",
      projects: "Selected projects",
      projectsLead:
        "Spaces defined by clarity, material honesty, and tailored execution.",
      about: "Why Afkar",
      aboutLead:
        "We unify design intelligence with technical delivery, helping clients move from idea to reality without fragmentation.",
      process: "How we work",
      processLead:
        "Short, transparent phases keep the work elegant, coordinated, and on schedule.",
      contact: "Let's build something lasting",
      contactLead:
        "Share your scope, timeline, and ambitions. We'll shape the right team and next step."
    },
    common: {
      explore: "Explore",
      discover: "Discover",
      viewProjects: "View Projects",
      whatsapp: "WhatsApp",
      callUs: "Call Us",
      sendEmail: "Send Email",
      visitStudio: "Visit Studio",
      backToServices: "Back to services"
    },
    footer: {
      tagline:
        "Premium interior design, finishing, facades, furniture, and fit-out services.",
      rights: "All rights reserved."
    },
    services: {
      "interior-design": {
        title: "Interior Design",
        short: "Concept-driven interiors with spatial clarity and premium detailing.",
        intro:
          "We create residential and commercial interiors that balance visual calm, function, and technical readiness.",
        details: [
          "Concept design and material direction",
          "Space planning, mood boards, and joinery intent",
          "Design packages prepared for execution teams"
        ]
      },
      finishing: {
        title: "Finishing",
        short: "High-precision finishing packages with coordinated site execution.",
        intro:
          "From surface systems to final detailing, our finishing work is managed to preserve quality at every visible touchpoint.",
        details: [
          "Wall, ceiling, flooring, and bespoke finish coordination",
          "Site sequencing and quality-control oversight",
          "Premium touchpoints for hospitality, office, and home environments"
        ]
      },
      "factory-outfitting": {
        title: "Factory Outfitting",
        short: "Technical fit-out strategies tailored for operational industrial environments.",
        intro:
          "We help shape efficient, durable factory spaces that support workflow, staff movement, and brand presentation.",
        details: [
          "Administrative zones, staff areas, and customer-facing spaces",
          "Durable material specifications for demanding environments",
          "Layout refinement aligned with operations and safety needs"
        ]
      },
      "glass-facades": {
        title: "Glass Facades",
        short: "Contemporary facade systems that elevate light, identity, and performance.",
        intro:
          "Our facade solutions focus on elegant proportion, clean detailing, and buildable execution for modern envelopes.",
        details: [
          "Facade concept development and visual studies",
          "Glass and framing coordination",
          "Brand-aligned exterior expression for commercial buildings"
        ]
      },
      furniture: {
        title: "Furniture Solutions",
        short: "Tailored furniture systems that complete the design story.",
        intro:
          "We specify and coordinate furniture with attention to use, scale, comfort, and visual continuity.",
        details: [
          "Loose and built-in furniture planning",
          "Custom pieces, supplier alignment, and finish matching",
          "Residential, hospitality, retail, and office support"
        ]
      },
      curtains: {
        title: "Curtains & Decoration",
        short: "Soft furnishing layers that refine light, texture, and atmosphere.",
        intro:
          "Curtains, decorative treatments, and final styling choices are curated to make the space feel complete.",
        details: [
          "Curtain systems, fabrics, and blackout solutions",
          "Decor styling and accessory direction",
          "Finishing touches for residential and commercial projects"
        ]
      }
    }
  },
  ar: {
    meta: {
      siteName: "أفكار",
      title: "أفكار | تصميم داخلي وتشطيبات فاخرة",
      description:
        "أفكار تقدم خدمات التصميم الداخلي والتشطيبات وتجهيز المصانع والواجهات الزجاجية والأثاث والستائر وأعمال الفيت آوت المتكاملة."
    },
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      projects: "المشاريع",
      about: "من نحن",
      contact: "تواصل",
      cta: "ابدأ مشروعك",
      language: "اللغة",
      theme: "المظهر",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة"
    },
    hero: {
      eyebrow: "نصمم المساحات بدقة وهدوء",
      title: "مساحات فاخرة مصممة للحياة والعمل والبناء بصورة أفضل.",
      subtitle:
        "أفكار تجمع بين التصميم الداخلي والتنفيذ والواجهات والأثاث ضمن تجربة مشروع واحدة أنيقة ومتكاملة.",
      primaryCta: "استكشف الخدمات",
      secondaryCta: "شاهد المشاريع",
      stats: [
        { label: "من الفكرة إلى التسليم", value: "360" },
        { label: "تنسيق الفيت آوت", value: "متكامل" },
        { label: "جودة التشطيب", value: "فاخرة" }
      ]
    },
    sections: {
      services: "خدمات متكاملة",
      servicesLead:
        "منهج هادئ ودقيق يبدأ من التصور وينتهي بالتنفيذ والتركيب النهائي.",
      projects: "مشاريع مختارة",
      projectsLead:
        "مساحات تتشكل بالوضوح وصدق المواد والتنفيذ المصمم بعناية.",
      about: "لماذا أفكار",
      aboutLead:
        "نوحّد الذكاء التصميمي مع التنفيذ الفني لننقل العميل من الفكرة إلى الواقع دون تشتت.",
      process: "آلية العمل",
      processLead:
        "مراحل قصيرة وواضحة تحافظ على أناقة المشروع وتنسيقه والتزامه بالجدول.",
      contact: "لنصنع شيئًا يدوم",
      contactLead:
        "شاركنا نطاق المشروع والمدة والطموح، وسنرسم لك الخطوة التالية والفريق المناسب."
    },
    common: {
      explore: "استكشف",
      discover: "اكتشف",
      viewProjects: "عرض المشاريع",
      whatsapp: "واتساب",
      callUs: "اتصل بنا",
      sendEmail: "أرسل بريدًا",
      visitStudio: "زرنا",
      backToServices: "العودة إلى الخدمات"
    },
    footer: {
      tagline:
        "خدمات التصميم الداخلي والتشطيبات والواجهات والأثاث والفيت آوت بمستوى فاخر.",
      rights: "جميع الحقوق محفوظة."
    },
    services: {
      "interior-design": {
        title: "التصميم الداخلي",
        short: "تصميمات داخلية مدروسة تقودها الفكرة وتفاصيل راقية.",
        intro:
          "نصمم مساحات سكنية وتجارية تجمع بين الهدوء البصري والوظيفة والاستعداد الفني للتنفيذ.",
        details: [
          "تصميم مفاهيمي وتوجيه للمواد والخامات",
          "تخطيط المساحات ولوحات المزاج وتصورات النجارة",
          "حزم تصميم جاهزة لفرق التنفيذ"
        ]
      },
      finishing: {
        title: "التشطيبات",
        short: "باقات تشطيب دقيقة مع تنسيق تنفيذي متكامل في الموقع.",
        intro:
          "من أنظمة الأسطح إلى اللمسات النهائية، تتم إدارة أعمال التشطيب لدينا للحفاظ على الجودة في كل نقطة مرئية.",
        details: [
          "تنسيق الجدران والأسقف والأرضيات والتفاصيل الخاصة",
          "تسلسل التنفيذ والرقابة على الجودة",
          "لمسات فاخرة للمساحات السكنية والتجارية والضيافة"
        ]
      },
      "factory-outfitting": {
        title: "تجهيز المصانع",
        short: "حلول فيت آوت تقنية مهيأة للبيئات الصناعية التشغيلية.",
        intro:
          "نساعد في تشكيل مساحات مصانع عملية ومتينة تدعم سير العمل وحركة الأفراد وصورة العلامة.",
        details: [
          "مناطق إدارية وخدمية ومساحات استقبال العملاء",
          "اختيار مواد مناسبة للبيئات الشاقة",
          "تحسين المخططات بما ينسجم مع التشغيل والسلامة"
        ]
      },
      "glass-facades": {
        title: "الواجهات الزجاجية",
        short: "أنظمة واجهات معاصرة تعزز الضوء والهوية والأداء.",
        intro:
          "حلول الواجهات لدينا ترتكز على التناسب الأنيق والتفاصيل النظيفة والتنفيذ القابل للبناء.",
        details: [
          "تطوير مفاهيم الواجهة والدراسات البصرية",
          "تنسيق الزجاج وأنظمة الإطارات",
          "تعبير خارجي متناسق مع هوية المشروع"
        ]
      },
      furniture: {
        title: "حلول الأثاث",
        short: "أنظمة أثاث مصممة لتكمل القصة البصرية للمكان.",
        intro:
          "نحدد وننسق الأثاث بعناية تراعي الاستخدام والمقياس والراحة والاستمرارية البصرية.",
        details: [
          "تخطيط الأثاث الحر والمثبت",
          "قطع مخصصة وتنسيق الموردين ومطابقة التشطيبات",
          "دعم للمشاريع السكنية والتجارية والضيافة"
        ]
      },
      curtains: {
        title: "الستائر والديكور",
        short: "طبقات ناعمة تصقل الضوء والملمس والأجواء.",
        intro:
          "نختار الستائر والمعالجات الديكورية واللمسات الأخيرة لتجعل المساحة مكتملة ومتناغمة.",
        details: [
          "أنظمة الستائر والأقمشة والحلول التعتيمية",
          "تنسيق الديكور والإكسسوارات",
          "اللمسات الأخيرة للمشاريع السكنية والتجارية"
        ]
      }
    }
  }
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function getDirection(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

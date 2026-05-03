import { Locale, dictionaries } from "@/lib/i18n";

export type ServiceSlug =
  | "interior-design"
  | "finishing"
  | "factory-outfitting"
  | "glass-facades"
  | "furniture"
  | "curtains";

export type ServiceItem = {
  slug: ServiceSlug;
  icon: string;
  image: string;
  svg: string;
};

export const services: ServiceItem[] = [
  {
    slug: "interior-design",
    icon: "/icons/interior-design.svg",
    svg: "/images/mega-menu/interior-design.svg",
    image: "/images/services/interior-design.png"
  },
  {
    slug: "finishing",
    icon: "/icons/finishing.svg",
    svg: "/images/mega-menu/finishing.svg",
    image: "/images/services/finishing.png"
  },
  {
    slug: "factory-outfitting",
    icon: "/icons/factory.svg",
    svg: "/images/mega-menu/factory.svg",
    image: "/images/services/factory.png"
  },
  {
    slug: "glass-facades",
    icon: "/icons/glass-facade.svg",
    svg: "/images/mega-menu/glass-facades.svg",
    image: "/images/services/glass-facades.png"
  },
  {
    slug: "furniture",
    icon: "/icons/furniture.svg",
    svg: "/images/mega-menu/furniture.svg",
    image: "/images/services/furniture.png"
  },
  {
    slug: "curtains",
    icon: "/icons/curtains.svg",
    svg: "/images/mega-menu/curtains.svg",
    image: "/images/services/curtains.png"
  }
];

export const projectCards = {
  en: [
    {
      title: "Executive Workspace",
      category: "Office Fit-Out",
      image: "/images/projects/project-office.svg"
    },
    {
      title: "Private Residence",
      category: "Interior Styling",
      image: "/images/projects/project-residence.svg"
    },
    {
      title: "Retail Facade",
      category: "Glass Facade",
      image: "/images/projects/project-retail.svg"
    }
  ],
  ar: [
    {
      title: "مساحة تنفيذية",
      category: "فيت آوت مكتبي",
      image: "/images/projects/project-office.svg"
    },
    {
      title: "سكن خاص",
      category: "تنسيق داخلي",
      image: "/images/projects/project-residence.svg"
    },
    {
      title: "واجهة تجارية",
      category: "واجهة زجاجية",
      image: "/images/projects/project-retail.svg"
    }
  ]
} as const;

export const processSteps = {
  en: [
    {
      title: "Discover",
      text: "We translate your ambition into a clear scope, timeline, and visual direction."
    },
    {
      title: "Design",
      text: "Concepts, materials, and technical coordination align before execution begins."
    },
    {
      title: "Deliver",
      text: "Our team manages refinement on site so the final result remains faithful to the vision."
    }
  ],
  ar: [
    {
      title: "الاكتشاف",
      text: "نحوّل طموحك إلى نطاق واضح وجدول زمني واتجاه بصري محدد."
    },
    {
      title: "التصميم",
      text: "تتناسق المفاهيم والخامات والتنسيق الفني قبل بدء التنفيذ."
    },
    {
      title: "التسليم",
      text: "يدير فريقنا التفاصيل في الموقع ليبقى الناتج النهائي وفيًا للرؤية."
    }
  ]
} as const;

export function getLocalizedServices(locale: Locale) {
  const dictionary = dictionaries[locale];

  return services.map((service) => ({
    ...service,
    ...dictionary.services[service.slug]
  }));
}

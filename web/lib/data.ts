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
};

export const services: ServiceItem[] = [
  {
    slug: "interior-design",
    icon: "/icons/interior-design.svg",
    image: "/images/mega-menu/interior-design.svg"
  },
  {
    slug: "finishing",
    icon: "/icons/finishing.svg",
    image: "/images/mega-menu/finishing.svg"
  },
  {
    slug: "factory-outfitting",
    icon: "/icons/factory.svg",
    image: "/images/mega-menu/factory.svg"
  },
  {
    slug: "glass-facades",
    icon: "/icons/glass-facade.svg",
    image: "/images/mega-menu/glass-facades.svg"
  },
  {
    slug: "furniture",
    icon: "/icons/furniture.svg",
    image: "/images/mega-menu/furniture.svg"
  },
  {
    slug: "curtains",
    icon: "/icons/curtains.svg",
    image: "/images/mega-menu/curtains.svg"
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

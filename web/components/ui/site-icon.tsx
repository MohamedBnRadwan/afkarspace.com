type IconName =
  | "interior-design"
  | "finishing"
  | "factory"
  | "glass-facade"
  | "furniture"
  | "curtains"
  | "phone"
  | "email"
  | "location"
  | "whatsapp";

type SiteIconProps = {
  name: IconName;
  className?: string;
};

function svgProps(className = "") {
  return {
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className
  };
}

export function SiteIcon({ name, className = "h-6 w-6" }: SiteIconProps) {
  switch (name) {
    case "interior-design":
      return (
        <svg {...svgProps(className)}>
          <rect x="10" y="16" width="44" height="32" rx="8" stroke="currentColor" strokeWidth="3" />
          <path
            d="M20 42V28C20 25.7909 21.7909 24 24 24H40C42.2091 24 44 25.7909 44 28V42"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path d="M26 32H38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "finishing":
      return (
        <svg {...svgProps(className)}>
          <path d="M18 24L28 14L50 36L40 46L18 24Z" stroke="currentColor" strokeWidth="3" />
          <path d="M14 50H50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M24 20L44 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "factory":
      return (
        <svg {...svgProps(className)}>
          <path
            d="M14 48V24L28 32V24L42 32V16H50V48H14Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M20 48V40M28 48V40M36 48V40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "glass-facade":
      return (
        <svg {...svgProps(className)}>
          <rect x="16" y="12" width="32" height="40" rx="6" stroke="currentColor" strokeWidth="3" />
          <path d="M24 18V46M40 18V46M16 32H48" stroke="currentColor" strokeWidth="3" />
        </svg>
      );
    case "furniture":
      return (
        <svg {...svgProps(className)}>
          <rect x="14" y="24" width="36" height="16" rx="6" stroke="currentColor" strokeWidth="3" />
          <path
            d="M20 40V48M44 40V48M18 24V20C18 17.7909 19.7909 16 22 16H42C44.2091 16 46 17.7909 46 20V24"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    case "curtains":
      return (
        <svg {...svgProps(className)}>
          <path d="M16 16H48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path
            d="M20 16V48C20 48 24 44 28 48C32 52 36 44 40 48C44 52 44 48 44 48V16"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "phone":
      return (
        <svg {...svgProps(className)}>
          <path
            d="M23 16H41C43.2091 16 45 17.7909 45 20V44C45 46.2091 43.2091 48 41 48H23C20.7909 48 19 46.2091 19 44V20C19 17.7909 20.7909 16 23 16Z"
            stroke="currentColor"
            strokeWidth="3"
          />
          <circle cx="32" cy="41" r="2" fill="currentColor" />
        </svg>
      );
    case "email":
      return (
        <svg {...svgProps(className)}>
          <rect x="12" y="18" width="40" height="28" rx="6" stroke="currentColor" strokeWidth="3" />
          <path
            d="M18 24L32 34L46 24"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "location":
      return (
        <svg {...svgProps(className)}>
          <path
            d="M32 50C32 50 44 38.8 44 28C44 21.3726 38.6274 16 32 16C25.3726 16 20 21.3726 20 28C20 38.8 32 50 32 50Z"
            stroke="currentColor"
            strokeWidth="3"
          />
          <circle cx="32" cy="28" r="4" stroke="currentColor" strokeWidth="3" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...svgProps(className)}>
          <path
            d="M32 14C22.0589 14 14 21.6112 14 31C14 35.2181 15.657 39.0754 18.4092 42L16 50L24.3126 47.9211C26.6433 48.6311 29.1234 49 31.6875 49C41.6286 49 50 41.3888 50 32C50 22.6112 41.9411 14 32 14Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M26 26C27 32 31 36 37 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export type { IconName };

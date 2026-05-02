import type { IconName } from "@/components/ui/site-icon";

export function iconNameFromAssetPath(path: string): IconName {
  const key = path.replace("/icons/", "").replace(".svg", "");

  switch (key) {
    case "interior-design":
    case "finishing":
    case "factory":
    case "glass-facade":
    case "furniture":
    case "curtains":
    case "phone":
    case "email":
    case "location":
    case "whatsapp":
      return key;
    default:
      return "interior-design";
  }
}

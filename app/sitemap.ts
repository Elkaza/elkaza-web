import type { MetadataRoute } from "next";
import { localizedPathPairs } from "@/lib/i18nPaths";
import { SITE_IS_PRELAUNCH } from "@/lib/siteStatus";

const baseUrl = "https://elkaza.at";
const excludedDraftPaths = new Set([
  "/insights",
  "/leistungen/ki-automatisierung",
  "/leistungen/digitalstrategie",
  "/leistungen/digitale-produkte",
]);

export const dynamic = "force-static";

function absoluteUrl(path: string) {
  return `${baseUrl}${path === "/" ? "" : path}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  if (SITE_IS_PRELAUNCH) return [];

  return localizedPathPairs
    .filter(({ dePath }) => !excludedDraftPaths.has(dePath) && !dePath.startsWith("/insights/"))
    .flatMap(({ dePath, enPath }) => {
    const languages = {
      "de-AT": absoluteUrl(dePath),
      en: absoluteUrl(enPath),
      "x-default": absoluteUrl(dePath),
    };

    return [
      {
        url: absoluteUrl(dePath),
        alternates: { languages },
      },
      {
        url: absoluteUrl(enPath),
        alternates: { languages },
      },
    ];
    });
}

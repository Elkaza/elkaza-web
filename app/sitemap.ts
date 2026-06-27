import type { MetadataRoute } from "next";
import { localizedPathPairs } from "@/lib/i18nPaths";

const baseUrl = "https://elkaza.at";

export const dynamic = "force-static";

function absoluteUrl(path: string) {
  return `${baseUrl}${path === "/" ? "" : path}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return localizedPathPairs
    .filter(({ dePath }) => dePath !== "/insights" && !dePath.startsWith("/insights/"))
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

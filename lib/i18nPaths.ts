export function mapDeToEn(pathname: string): string {
  if (pathname === "/") return "/en";
  const map: Record<string, string> = {
    "/leistungen": "/en/services",
    "/leistungen/digitalstrategie": "/en/services/digital-strategy",
    "/leistungen/ki-automatisierung": "/en/services/ai-automation",
    "/leistungen/digitale-produkte": "/en/services/digital-products",
    "/case-studies": "/en/case-studies",
    "/insights": "/en/insights",
    "/ueber-uns": "/en/about",
    "/kontakt": "/en/contact",
    "/impressum": "/en/imprint",
    "/datenschutz": "/en/privacy",
  };
  if (map[pathname]) return map[pathname];
  if (pathname.startsWith("/case-studies/")) return "/en" + pathname; // same slug
  if (pathname.startsWith("/insights/")) return "/en" + pathname; // same slug
  return "/en";
}

export function mapEnToDe(pathname: string): string {
  if (pathname === "/en") return "/";
  const map: Record<string, string> = {
    "/en/services": "/leistungen",
    "/en/services/digital-strategy": "/leistungen/digitalstrategie",
    "/en/services/ai-automation": "/leistungen/ki-automatisierung",
    "/en/services/digital-products": "/leistungen/digitale-produkte",
    "/en/case-studies": "/case-studies",
    "/en/insights": "/insights",
    "/en/about": "/ueber-uns",
    "/en/contact": "/kontakt",
    "/en/imprint": "/impressum",
    "/en/privacy": "/datenschutz",
  };
  if (map[pathname]) return map[pathname];
  if (pathname.startsWith("/en/case-studies/")) return pathname.replace("/en", "");
  if (pathname.startsWith("/en/insights/")) return pathname.replace("/en", "");
  return "/";
}

export function getAlternates(pathname: string) {
  const isEnglish = pathname.startsWith("/en");
  const dePath = isEnglish ? mapEnToDe(pathname) : pathname;
  const enPath = isEnglish ? pathname : mapDeToEn(pathname);
  return { dePath, enPath };
}


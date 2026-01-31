export function mapDeToEn(pathname: string): string {
  if (pathname === "/") return "/en";
  const map: Record<string, string> = {
    "/leistungen": "/en/services",
    "/leistungen/networking": "/en/services/networking",
    "/leistungen/security-baseline": "/en/services/security-baseline",
    "/leistungen/managed-ops": "/en/services/managed-ops",
    "/pakete": "/en/packages",
    "/referenzen": "/en/case-studies",
    "/insights": "/en/insights",
    "/ueber-uns": "/en/about",
    "/kontakt": "/en/contact",
    "/impressum": "/en/imprint",
    "/datenschutz": "/en/privacy",
  };
  if (map[pathname]) return map[pathname];
  if (pathname.startsWith("/referenzen/")) return "/en/case-studies" + pathname.replace("/referenzen", "");
  if (pathname.startsWith("/insights/")) return "/en" + pathname;
  return "/en";
}

export function mapEnToDe(pathname: string): string {
  if (pathname === "/en") return "/";
  const map: Record<string, string> = {
    "/en/services": "/leistungen",
    "/en/services/networking": "/leistungen/networking",
    "/en/services/security-baseline": "/leistungen/security-baseline",
    "/en/services/managed-ops": "/leistungen/managed-ops",
    "/en/packages": "/pakete",
    "/en/case-studies": "/referenzen",
    "/en/insights": "/insights",
    "/en/about": "/ueber-uns",
    "/en/contact": "/kontakt",
    "/en/imprint": "/impressum",
    "/en/privacy": "/datenschutz",
  };
  if (map[pathname]) return map[pathname];
  if (pathname.startsWith("/en/case-studies/")) return "/referenzen" + pathname.replace("/en/case-studies", "");
  if (pathname.startsWith("/en/insights/")) return pathname.replace("/en", "");
  return "/";
}

export function getAlternates(pathname: string) {
  const isEnglish = pathname.startsWith("/en");
  const dePath = isEnglish ? mapEnToDe(pathname) : pathname;
  const enPath = isEnglish ? pathname : mapDeToEn(pathname);
  return { dePath, enPath };
}

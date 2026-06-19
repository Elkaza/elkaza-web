export function mapDeToEn(pathname: string): string {
  if (pathname === "/") return "/en";
  const map: Record<string, string> = {
    "/leistungen": "/en/services",
    "/leistungen/networking": "/en/services/networking",
    "/leistungen/security-baseline": "/en/services/security-baseline",
    "/leistungen/managed-ops": "/en/services/managed-ops",
    "/leistungen/automation": "/en/services/automation",
    "/leistungen/cloud-saas-security": "/en/services/cloud-saas-security",
    "/leistungen/endpoint-security": "/en/services/endpoint-security",
    "/leistungen/ai-adoption": "/en/services/ai-adoption",
    "/leistungen/ki-automatisierung": "/en/services/ai-automation",
    "/leistungen/digitalstrategie": "/en/services/digital-strategy",
    "/leistungen/digitale-produkte": "/en/services/digital-products",
    "/leistungen/nis2-compliance": "/en/services/nis2-compliance",
    "/leistungen/ransomware-resilience": "/en/services/ransomware-resilience",
    "/leistungen/zero-trust": "/en/services/zero-trust",
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
    "/en/services/automation": "/leistungen/automation",
    "/en/services/cloud-saas-security": "/leistungen/cloud-saas-security",
    "/en/services/endpoint-security": "/leistungen/endpoint-security",
    "/en/services/ai-adoption": "/leistungen/ai-adoption",
    "/en/services/ai-automation": "/leistungen/ki-automatisierung",
    "/en/services/digital-strategy": "/leistungen/digitalstrategie",
    "/en/services/digital-products": "/leistungen/digitale-produkte",
    "/en/services/nis2-compliance": "/leistungen/nis2-compliance",
    "/en/services/ransomware-resilience": "/leistungen/ransomware-resilience",
    "/en/services/zero-trust": "/leistungen/zero-trust",
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

export default async function sitemap() {
  const base = "https://elkaza.at";
  const routes = [
    "",
    "/leistungen",
    "/leistungen/digitalstrategie",
    "/leistungen/ki-automatisierung",
    "/leistungen/digitale-produkte",
    "/case-studies",
    "/case-studies/beispiel-projekt",
    "/insights",
    "/insights/ki-strategie-fuer-kmus",
    "/ueber-uns",
    "/kontakt",
    "/impressum",
    "/datenschutz",
    // English
    "/en",
    "/en/services",
    "/en/services/digital-strategy",
    "/en/services/ai-automation",
    "/en/services/digital-products",
    "/en/case-studies",
    "/en/case-studies/sample-project",
    "/en/insights",
    "/en/insights/ai-strategy-for-smes",
    "/en/about",
    "/en/contact",
    "/en/imprint",
    "/en/privacy",
  ];
  return routes.map((r) => ({ url: `${base}${r}`, lastModified: new Date() }));
}

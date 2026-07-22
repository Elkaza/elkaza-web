const checks = [
  {
    name: "elkaza.at homepage",
    url: "https://elkaza.at/",
    mustInclude: ["Projekt in Vorbereitung", "Projektstatus ansehen", "Keine Aufträge"],
    mustNotInclude: ["15-Minuten Erstgespräch", "Kostenloses Erstgespräch", "Assessment anfragen", "Angebot anfordern"],
  },
  {
    name: "elkaza.at concepts page",
    url: "https://elkaza.at/leistungen/",
    mustInclude: ["Geplante", "Projekt in Vorbereitung"],
    mustNotInclude: ["15-Minuten Erstgespräch", "Assessment anfragen", "Angebot anfordern"],
  },
  {
    name: "elkaza.org about page",
    url: "https://elkaza.org/about",
    mustInclude: ["Mohamed Elkaza", "Profil"],
    mustNotInclude: ["Gute Passung"],
  },
  {
    name: "elkaza.org projects page",
    url: "https://elkaza.org/projects",
    mustInclude: ["Engineering Case Studies"],
    mustNotInclude: [],
  },
];

const failures = [];

async function fetchText(url) {
  const response = await fetch(url, {
    redirect: "follow",
    headers: {
      "user-agent": "elkaza-production-verifier/1.0",
      "cache-control": "no-cache",
    },
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return response.text();
}

for (const check of checks) {
  try {
    const html = await fetchText(`${check.url}${check.url.includes("?") ? "&" : "?"}verify=${Date.now()}`);
    const missing = check.mustInclude.filter((text) => !html.includes(text));
    const forbidden = check.mustNotInclude.filter((text) => html.includes(text));

    if (missing.length > 0 || forbidden.length > 0) {
      failures.push({ ...check, missing, forbidden });
      console.error(`FAIL ${check.name}`);
      if (missing.length > 0) console.error(`  missing: ${missing.join(", ")}`);
      if (forbidden.length > 0) console.error(`  forbidden: ${forbidden.join(", ")}`);
    } else {
      console.log(`OK   ${check.name}`);
    }
  } catch (error) {
    failures.push({ ...check, error });
    console.error(`FAIL ${check.name}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (failures.length > 0) {
  process.exitCode = 1;
}

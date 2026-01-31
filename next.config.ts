import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Referrer-Policy",
    value: "no-referrer-when-downgrade",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), microphone=(), camera=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // German: Old service routes -> new routes
      {
        source: "/leistungen/ki-automatisierung",
        destination: "/leistungen/networking",
        permanent: true,
      },
      {
        source: "/leistungen/digitale-produkte",
        destination: "/leistungen/security-baseline",
        permanent: true,
      },
      {
        source: "/leistungen/digitalstrategie",
        destination: "/leistungen/managed-ops",
        permanent: true,
      },
      // German: case-studies -> referenzen
      {
        source: "/case-studies",
        destination: "/referenzen",
        permanent: true,
      },
      {
        source: "/case-studies/:slug",
        destination: "/referenzen/:slug",
        permanent: true,
      },
      // English: Old service routes -> new routes
      {
        source: "/en/services/ai-automation",
        destination: "/en/services/networking",
        permanent: true,
      },
      {
        source: "/en/services/digital-products",
        destination: "/en/services/security-baseline",
        permanent: true,
      },
      {
        source: "/en/services/digital-strategy",
        destination: "/en/services/managed-ops",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

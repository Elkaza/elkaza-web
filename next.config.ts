import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withAnalyzer = withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" });

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
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Report-only CSP to start with — tune directives as needed.
  {
    key: "Content-Security-Policy-Report-Only",
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; connect-src 'self' https:; font-src 'self' data:; frame-ancestors 'self';",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Export static HTML for serving from static hosts (Apache, etc.)
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {},
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

export default withAnalyzer(nextConfig);

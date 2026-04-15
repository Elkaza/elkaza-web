/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    images: {
        unoptimized: true,
    },
    experimental: {
        // Enable instrumentation for Sentry and performance monitoring
        instrumentationHook: true,
    },
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    { key: "X-Frame-Options", value: "DENY" },
                    { key: "X-XSS-Protection", value: "1; mode=block" },
                    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                    { key: "Permissions-Policy", value: "geolocation=()" },
                ],
            },
        ];
    },
};

export default nextConfig;

/**
 * Font Loading Optimization Guide
 * 
 * Current State:
 * - Using system fonts (fastest, no requests needed)
 * - Tailwind CSS with @import
 * - No web fonts = no FOUT/FOIT issues
 * 
 * If adding web fonts in the future:
 */

// Usage:
// Add to app/layout.tsx in the <head>:

/*
<link
  rel="preload"
  as="font"
  href="/fonts/your-font.woff2"
  type="font/woff2"
  crossOrigin="anonymous"
/>

@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/your-font.woff2') format('woff2');
  font-display: swap; // Shows fallback immediately, swaps when ready
  font-weight: 400;
  font-style: normal;
}
*/

export const fontOptimizationGuide = {
  currentSetup: 'system-fonts',
  benefits: [
    'Fastest possible load - no network requests',
    'No FOUT (Flash of Unstyled Text)',
    'No FOIT (Flash of Invisible Text)',
    'Best Core Web Vitals scores',
    'Consistent with user OS preferences',
  ],
  ifAddingWebFonts: {
    step1: 'Use font-display: swap for FOUT strategy',
    step2: 'Add rel="preload" for critical fonts',
    step3: 'Use woff2 format (98% browser support, ~70% smaller than TTF)',
    step4: 'Limit to 2 font families max',
    step5: 'Self-host instead of Google Fonts to reduce connections',
    step6: 'Use CSS font-loading API to track completion',
  },
  performanceTargets: {
    firstContentfulPaint: '<1.8s',
    largestContentfulPaint: '<2.5s',
    cumulativeLayoutShift: '<0.1',
    timeToInteractive: '<3.5s',
  },
};

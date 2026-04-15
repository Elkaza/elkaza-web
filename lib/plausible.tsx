'use client';

import Script from 'next/script';

/**
 * Plausible Analytics component for tracking
 * Add this to your root layout.tsx
 * 
 * Requires environment variable:
 * NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain (e.g., elkaza.at)
 * 
 * Plausible is GDPR-compliant and doesn't require cookie consent
 * See: https://plausible.io
 */

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export function PlausibleAnalytics() {
  if (!PLAUSIBLE_DOMAIN) {
    return null;
  }

  return (
    <Script
      defer
      data-domain={PLAUSIBLE_DOMAIN}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}

/**
 * Track custom events with Plausible
 * Usage: trackEvent('form_submitted', { value: 'contact-form' });
 */
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  if (typeof window === 'undefined') return;

  // Plausible exposes window.plausible function
  const plausible = (window as any).plausible;
  if (!plausible) {
    console.warn('Plausible Analytics not loaded');
    return;
  }

  try {
    plausible(eventName, { props: properties || {} });
  } catch (error) {
    console.error('Failed to track event:', error);
  }
}

/**
 * Track CTA clicks
 */
export function trackCTAClick(label: string, href?: string) {
  trackEvent('cta_click', {
    label,
    href: href || window.location.pathname,
  });
}

/**
 * Track form submissions
 */
export function trackFormSubmission(formName: string, success: boolean) {
  trackEvent('form_submission', {
    form: formName,
    success,
  });
}

/**
 * Track page views (optional - Plausible does this automatically)
 */
export function trackPageView(title?: string) {
  trackEvent('page_view', {
    title: title || document.title,
  });
}

/**
 * Track conversion goals
 */
export function trackConversion(goalName: string, value?: number) {
  trackEvent(goalName, {
    revenue: value,
  });
}

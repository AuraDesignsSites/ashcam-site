// Simplified Web Vitals tracking for Core Web Vitals monitoring
// This will be integrated with GA4 when the actual tracking ID is provided

interface WebVitalsMetric {
  name: 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB' | 'INP';
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

// Placeholder GA4 tracking ID - replace with actual ID when available
const GA4_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 tracking ID

// Function to send Web Vitals to GA4
export function sendToGA4(metric: WebVitalsMetric) {
  // Only send if GA4 is properly configured
  if (GA4_TRACKING_ID === 'G-XXXXXXXXXX') {
    console.log('Web Vitals (GA4 not configured):', metric);
    return;
  }

  // Send to GA4 using gtag
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
}

// Simplified Web Vitals tracking using web-vitals library approach
export function getCLS(onPerfEntry?: (metric: WebVitalsMetric) => void) {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          onPerfEntry?.({
            name: 'CLS',
            value: (entry as any).value,
            delta: (entry as any).value,
            id: 'cls-' + Date.now(),
            navigationType: 'navigate',
          });
        }
      }
    });

    observer.observe({ type: 'layout-shift', buffered: true });
  } catch (error) {
    console.warn('CLS tracking not supported:', error);
  }
}

export function getLCP(onPerfEntry?: (metric: WebVitalsMetric) => void) {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      onPerfEntry?.({
        name: 'LCP',
        value: lastEntry.startTime,
        delta: lastEntry.startTime,
        id: 'lcp-' + Date.now(),
        navigationType: 'navigate',
      });
    });

    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (error) {
    console.warn('LCP tracking not supported:', error);
  }
}

export function getFID(onPerfEntry?: (metric: WebVitalsMetric) => void) {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        onPerfEntry?.({
          name: 'FID',
          value: (entry as any).processingStart - (entry as any).startTime,
          delta: (entry as any).processingStart - (entry as any).startTime,
          id: 'fid-' + Date.now(),
          navigationType: 'navigate',
        });
      }
    });

    observer.observe({ type: 'first-input', buffered: true });
  } catch (error) {
    console.warn('FID tracking not supported:', error);
  }
}

// Initialize all Web Vitals tracking
export function initWebVitals() {
  if (typeof window === 'undefined') return;

  // Track all Core Web Vitals with error handling
  try {
    getCLS(sendToGA4);
    getLCP(sendToGA4);
    getFID(sendToGA4);
  } catch (error) {
    console.warn('Web Vitals initialization failed:', error);
  }
}
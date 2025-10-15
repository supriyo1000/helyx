// lib/gtag.js

export const GA_MEASUREMENT_ID = "G-WZJ7T2Z5QF"

// Log a pageview
export const pageview = (url:string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

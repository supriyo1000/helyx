// components/SeoJsonLd.tsx
export default function SeoJsonLd() {
    const base = "https://helyx.quobotic.com";
    const data = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Helyx",
        url: base,
        publisher: {
            "@type": "Organization",
            name: "Quobotic Consulting Pvt Ltd",
            logo: { "@type": "ImageObject", url: `${base}/logo.jpeg` }
        },
        potentialAction: {
            "@type": "SearchAction",
            target: `${base}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

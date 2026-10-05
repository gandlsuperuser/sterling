import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sterlingwellhead.com"),
  title: { default: "Sterling Wellhead | Pressure-Control Equipment", template: "%s | Sterling Wellhead" },
  description: "Field-ready wellhead and high-pressure flow equipment, backed by responsive service and verified inventory.",
  openGraph: {
    type: "website",
    siteName: "Sterling Wellhead",
    title: "Sterling Wellhead | Pressure-Control Equipment",
    description: "Field-ready wellhead and high-pressure flow equipment, backed by responsive service and verified inventory.",
    images: [{ url: "/images/sterling-hero.png", width: 2048, height: 1024, alt: "Sterling Wellhead pressure-control equipment" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sterling Wellhead",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://sterlingwellhead.com",
    email: "sales@sterlingwellhead.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "217 Main St",
      addressLocality: "Jourdanton",
      addressRegion: "TX",
      postalCode: "78026",
      addressCountry: "US",
    },
  };
  return (
    <html lang="en">
      <body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />{children}</body>
    </html>
  );
}

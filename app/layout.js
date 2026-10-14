import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sterlingwellhead.com"),
  title: { default: "Sterling Wellhead | Pressure-Control Equipment", template: "%s | Sterling Wellhead" },
  description: "Quality wellhead and high-pressure flow equipment with standard parts in local inventory and select custom parts available in as little as 10–14 days.",
  openGraph: {
    type: "website",
    siteName: "Sterling Wellhead",
    title: "Sterling Wellhead | Pressure-Control Equipment",
    description: "Standard pressure-control parts in local inventory, with select custom parts available in as little as 10–14 days.",
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
    telephone: "+1-512-373-0384",
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

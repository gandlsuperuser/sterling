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
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

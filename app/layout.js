import "./globals.css";

export const metadata = {
  title: "Sterling Wellhead | Pressure-Control Equipment",
  description: "Field-ready wellhead and high-pressure flow equipment, backed by responsive service and verified inventory.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

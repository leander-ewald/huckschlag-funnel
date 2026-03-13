import type { Metadata, Viewport } from "next";
import { Poppins, Ubuntu } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Spedition Huckschlag | E-Commerce Fulfillment & Logistikpartner",
  description:
    "Finde in nur 60 Sekunden die passende Logistiklösung für dein Unternehmen. Spedition Huckschlag — Kontraktlogistik, Warehousing und E-Commerce Fulfillment seit 40+ Jahren.",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${poppins.variable} ${ubuntu.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

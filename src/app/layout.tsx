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
  title: "Logistikpartner werden | Spedition Huckschlag",
  description:
    "Werden Sie Logistikpartner der Spedition Huckschlag GmbH. Attraktive Konditionen, pünktliche Bezahlung und langfristige Partnerschaft im Nahverkehr.",
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

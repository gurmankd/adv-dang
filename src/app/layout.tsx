import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Advocate Dharmendra Singh Dang | Rudrapur & Nainital High Court",
    template: "%s | Advocate Dharmendra Singh Dang",
  },
  description:
    "Practicing Advocate since 2009. Criminal matters, cheque bounce cases (NI Act 138), and family disputes. District & Sessions Court Rudrapur and High Court Nainital.",
  alternates: {
    canonical: site.url,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: site.url,
    title: "Advocate Dharmendra Singh Dang | Rudrapur & Nainital High Court",
    description:
      "Criminal law, cheque bounce cases and family matters. Free initial consultation. In-person within 50 km or video consultation.",
    siteName: "Advocate Dharmendra Singh Dang",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Advocate Dharmendra Singh Dang",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advocate Dharmendra Singh Dang",
    description:
      "Criminal law, cheque bounce cases and family matters. Practicing since 2009.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}

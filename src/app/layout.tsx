import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { siteConfig } from "@/config/site";

const ogImageUrl = new URL(siteConfig.ogImagePath, siteConfig.url).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  authors: [{ name: siteConfig.name }],
  robots: {
    index: false,
    follow: false,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.productName,
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: siteConfig.title,
    description: siteConfig.ogDescription,
    url: "/",
    images: [
      {
        url: siteConfig.ogImagePath,
        secureUrl: ogImageUrl,
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: siteConfig.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.twitterDescription,
    images: [
      {
        url: siteConfig.ogImagePath,
        alt: siteConfig.twitterImageAlt,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

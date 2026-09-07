import type { Metadata } from "next";
import { localeContent, siteConfig, type Locale } from "@/config/site";

type MetadataLocale = Locale | "root";

export function createPageMetadata(locale: MetadataLocale): Metadata {
  const copy = localeContent[locale];
  const path = locale === "root" ? "/" : `/${locale}`;
  const ogImageUrl = new URL(copy.ogImagePath, siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),
    title: copy.title,
    description: copy.description,
    authors: [{ name: siteConfig.name }],
    robots: {
      index: false,
      follow: false,
    },
    formatDetection: {
      telephone: false,
    },
    alternates: {
      canonical: path,
      languages: {
        ko: "/ko",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.productName,
      locale: copy.ogLocale,
      alternateLocale: [copy.alternateLocale],
      title: copy.title,
      description: copy.ogDescription,
      url: path,
      images: [
        {
          url: copy.ogImagePath,
          secureUrl: ogImageUrl,
          type: "image/jpeg",
          width: 1200,
          height: 630,
          alt: copy.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.twitterDescription,
      images: [
        {
          url: copy.ogImagePath,
          alt: copy.twitterImageAlt,
        },
      ],
    },
  };
}

import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Script from "next/script"

// تحديد اسم النشاط التجاري بشكل ثابت لضمان الاتساق
const BUSINESS_NAME = "شريطي سيارات"
const BUSINESS_PHONE = "0593719965"
const BUSINESS_PHONE_INTERNATIONAL = "+966593719965"

export const metadata: Metadata = {
  title: "شراء سيارات تشليح في الرياض - أفضل الأسعار والدفع الفوري",
  description: `نشتري سيارات تشليح في الرياض بأفضل الأسعار مع نقل الملكية فوراً. اتصل بنا على ${BUSINESS_PHONE} للحصول على خدمة تقييم مجانية، دفع كاش فوري، وسحب مجاني لجميع أنواع السيارات المصدومة والتالفة في جميع أحياء الرياض.`,
  keywords: `شراء سيارات تشليح في الرياض, سيارات مصدومة, بيع سيارة تشليح, أفضل سعر, شريطي سيارات, الرياض, نقل ملكية, دفع كاش, سيارات حادث, سيارات تالفة, شراء سيارات قديمة, ${BUSINESS_PHONE}`,
  alternates: {
    canonical: "https://tshlih-ryd.com",
  },
  openGraph: {
    title: "شراء سيارات تشليح في الرياض - أفضل الأسعار والدفع الفوري",
    description: `نشتري سيارات تشليح في الرياض بأفضل الأسعار مع نقل الملكية فوراً. اتصل بنا على ${BUSINESS_PHONE} للحصول على خدمة تقييم مجانية، دفع كاش فوري، وسحب مجاني.`,
    url: "https://tshlih-ryd.com",
    siteName: BUSINESS_NAME,
    locale: "ar_SA",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="u8pEtqq-ldMwRKV7VDeBC15U22VJIcv41OncF5L72Hg" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="SA-01" />
        <meta name="geo.placename" content="Riyadh" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="شراء سيارات تشليح في الرياض - أفضل الأسعار والدفع الفوري" />
        <meta
          name="twitter:description"
          content={`نشتري سيارات تشليح في الرياض بأفضل الأسعار مع نقل الملكية فوراً. اتصل بنا على ${BUSINESS_PHONE} للحصول على خدمة تقييم مجانية، دفع كاش فوري، وسحب مجاني.`}
        />
        <meta name="twitter:image" content="https://tshlih-ryd.com/logo.jpg" />
        <meta name="format-detection" content="telephone=yes" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content={BUSINESS_NAME} />
        <meta name="apple-mobile-web-app-title" content={BUSINESS_NAME} />
        <meta name="msapplication-starturl" content="/" />
        <link rel="canonical" href="https://tshlih-ryd.com" />
        <link rel="alternate" hrefLang="ar-sa" href="https://tshlih-ryd.com" />
      </head>
      <body>
        {/* تحديث بيانات Schema.org لتكون متطابقة مع اسم النشاط التجاري في Google Ads */}
        <div itemScope itemType="https://schema.org/LocalBusiness">
          <meta itemProp="name" content={BUSINESS_NAME} />
          <meta itemProp="image" content="https://tshlih-ryd.com/logo.jpg" />
          <meta
            itemProp="description"
            content={`نشتري سيارات تشليح في الرياض بأفضل الأسعار مع نقل الملكية فوراً. اتصل بنا على ${BUSINESS_PHONE} للحصول على خدمة تقييم مجانية، دفع كاش فوري، وسحب مجاني.`}
          />
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <meta itemProp="addressLocality" content="الرياض" />
            <meta itemProp="addressRegion" content="منطقة الرياض" />
            <meta itemProp="addressCountry" content="SA" />
          </div>
          <link itemProp="telephone" href={`tel:${BUSINESS_PHONE_INTERNATIONAL}`} />
          <meta itemProp="telephone" content={BUSINESS_PHONE} />
          <div itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
            <meta itemProp="telephone" content={BUSINESS_PHONE} />
            <meta itemProp="contactType" content="customer service" />
            <meta itemProp="areaServed" content="SA" />
            <meta itemProp="availableLanguage" content="Arabic" />
          </div>
        </div>

        {children}

        {/* تحديث بيانات JSON-LD لتكون متطابقة مع اسم النشاط التجاري في Google Ads */}
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: BUSINESS_NAME,
              image: "https://tshlih-ryd.com/logo.jpg",
              description: `نشتري سيارات تشليح في الرياض بأفضل الأسعار مع نقل الملكية فوراً. اتصل بنا على ${BUSINESS_PHONE} للحصول على خدمة تقييم مجانية، دفع كاش فوري، وسحب مجاني.`,
              url: "https://tshlih-ryd.com",
              telephone: BUSINESS_PHONE,
              address: {
                "@type": "PostalAddress",
                addressLocality: "الرياض",
                addressRegion: "منطقة الرياض",
                addressCountry: "SA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "24.7136",
                longitude: "46.6753",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: BUSINESS_PHONE,
                  contactType: "customer service",
                  areaServed: "SA",
                  availableLanguage: ["Arabic"],
                  contactOption: ["TollFree", "HearingImpairedSupported"],
                },
              ],
              priceRange: "$$",
              openingHours: "Mo-Su 08:00-22:00",
              sameAs: ["https://www.facebook.com/tshlih.ryd", "https://www.instagram.com/tshlih.ryd"],
            }),
          }}
        />
      </body>
    </html>
  )
}

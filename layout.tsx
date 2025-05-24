import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "شريطي سيارات - شراء سيارات تشليح بالرياض",
  description: "نشتري السيارات المصدومة والتالفة بأفضل الأسعار مع نقل الملكية فوراً. اتصل بنا الآن للحصول على أفضل سعر لسيارتك. دفع كاش فوري ونقل مجاني لجميع مدن المملكة.",
  keywords: "شراء سيارات تشليح, سيارات مصدومة, بيع سيارة تشليح, أفضل سعر, شريطي سيارات, الرياض, نقل ملكية, دفع كاش"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}

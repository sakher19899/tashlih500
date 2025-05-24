"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Phone, MessageCircle, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BuyAccidentCarsRiyadh() {
  const phoneNumber = "0593719965"
  const internationalPhoneNumber = "+966593719965"
  const [isClient, setIsClient] = useState(false)

  // This ensures the component only renders fully on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Safe navigation function for links
  const navigateTo = (url: string) => {
    if (typeof window !== "undefined") {
      // استخدام الرقم الدولي للاتصال إذا كان رابط هاتف
      if (url.startsWith("tel:")) {
        window.location.href = `tel:${internationalPhoneNumber}`
      } else if (url.includes("wa.me")) {
        window.location.href = `https://wa.me/966593719965`
      } else {
        window.location.href = url
      }
    }
  }

  // If not client-side yet, render a simple loading state
  if (!isClient) {
    return <div className="flex min-h-screen items-center justify-center">جاري التحميل...</div>
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-primary">
            {isClient && <Car className="h-6 w-6" />}
            <Link href="/" className="hover:text-primary/80">
              شريطي سيارات
            </Link>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="gap-1 text-sm"
            onClick={() => navigateTo(`tel:${phoneNumber}`)}
          >
            {isClient && <Phone className="h-4 w-4" />}
            {phoneNumber}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            {isClient && (
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-06%2019.53.49%20-%20A%20professional%20advertisement%20image%20for%20a%20junk%20car%20buying%20service%20in%20Saudi%20Arabia.%20The%20image%20should%20feature%20a%20damaged%20car%20being%20towed%20onto%20a%20flatbed%20tr-e0I48TrMee1aNb9HlTJNuYVnl6V2xF.webp"
                alt="شراء سيارات حادث في الرياض"
                fill
                sizes="100vw"
                className="object-cover brightness-[0.4]"
                priority
              />
            )}
          </div>
          <div className="container relative z-10 py-12 md:py-24 text-white">
            <div className="max-w-3xl space-y-4 text-right">
              <div className="inline-block bg-secondary/90 px-3 py-2 md:px-4 md:py-2 rounded-lg mb-2">
                <h1 className="text-2xl md:text-5xl font-bold">شراء سيارات حادث في الرياض</h1>
              </div>
              <p className="text-base md:text-xl opacity-90">
                نشتري السيارات المتضررة من الحوادث بأفضل الأسعار مع خدمة سحب مجانية في جميع أنحاء الرياض
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto text-right">
              <h2 className="text-3xl font-bold text-primary mb-6">شراء سيارات حادث في الرياض</h2>

              <p className="mb-4">
                هل تعرضت سيارتك لحادث؟ هل تبحث عن طريقة للتخلص منها والحصول على أفضل سعر؟ نحن متخصصون في{" "}
                <strong>شراء سيارات حادث في الرياض</strong> بأعلى الأسعار وبطريقة سهلة وسريعة.
              </p>

              <p className="mb-4">
                نشتري جميع أنواع السيارات المتضررة من الحوادث مهما كان حجم الضرر. سواء كانت السيارة متضررة بشكل بسيط أو
                كبير، نحن نقدم لك أفضل سعر ممكن مع خدمة سحب مجانية من موقعك في الرياض.
              </p>

              <div className="bg-primary/5 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold mb-3">مميزات خدمتنا لشراء سيارات الحوادث</h3>
                <ul className="list-disc mr-6 space-y-2">
                  <li>تقييم مجاني وعادل للسيارة المتضررة من الحادث</li>
                  <li>أسعار منافسة تتناسب مع حجم الضرر</li>
                  <li>دفع نقدي فوري عند الاتفاق</li>
                  <li>خدمة سحب مجانية للسيارة من موقعك</li>
                  <li>إنهاء جميع الإجراءات القانونية ونقل الملكية</li>
                  <li>فريق فني متخصص في تقييم سيارات الحوادث</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">أنواع سيارات الحوادث التي نشتريها</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">سيارات متضررة من الأمام</h4>
                  <p className="text-sm text-muted-foreground">
                    نشتري السيارات المتضررة من الأمام نتيجة الاصطدام الأمامي، مهما كان حجم الضرر.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">سيارات متضررة من الخلف</h4>
                  <p className="text-sm text-muted-foreground">
                    نشتري السيارات المتضررة من الخلف نتيجة الاصطدام الخلفي، سواء كان الضرر بسيطاً أو كبيراً.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">سيارات متضررة من الجانب</h4>
                  <p className="text-sm text-muted-foreground">
                    نشتري السيارات المتضررة من الجانب نتيجة الاصطدام الجانبي، مهما كان حجم الضرر.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">سيارات منقلبة</h4>
                  <p className="text-sm text-muted-foreground">
                    نشتري السيارات التي تعرضت للانقلاب نتيجة الحوادث، مهما كان حجم الضرر.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">سيارات متضررة من الحريق</h4>
                  <p className="text-sm text-muted-foreground">
                    نشتري السيارات المتضررة من الحريق نتيجة الحوادث، مهما كان حجم الضرر.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">سيارات غير قابلة للإصلاح</h4>
                  <p className="text-sm text-muted-foreground">
                    نشتري السيارات التي تعرضت لحوادث كبيرة وأصبحت غير قابلة للإصلاح.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">كيف تبيع سيارة الحادث في الرياض؟</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3">
                    1
                  </div>
                  <h4 className="font-bold mb-2">التواصل معنا</h4>
                  <p className="text-sm">اتصل بنا أو أرسل رسالة عبر الواتساب مع وصف للحادث وصور للسيارة</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3">
                    2
                  </div>
                  <h4 className="font-bold mb-2">تقييم السيارة</h4>
                  <p className="text-sm">نقوم بتقييم سيارتك المتضررة من الحادث وتقديم عرض سعر مناسب</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3">
                    3
                  </div>
                  <h4 className="font-bold mb-2">إتمام البيع</h4>
                  <p className="text-sm">دفع المبلغ نقداً وسحب السيارة مجاناً من موقعك في الرياض</p>
                </div>
              </div>

              <div className="bg-secondary/10 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold mb-3">تواصل معنا الآن</h3>
                <p className="mb-4">
                  لا تتردد في التواصل معنا لبيع سيارتك المتضررة من الحادث والحصول على أفضل سعر في الرياض.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="gap-2" onClick={() => navigateTo(`tel:${phoneNumber}`)}>
                    {isClient && <Phone className="h-4 w-4" />}
                    اتصل الآن
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-2 bg-green-600 text-white hover:bg-white hover:text-green-600"
                    onClick={() => navigateTo(`https://wa.me/966593719965`)}
                  >
                    {isClient && <MessageCircle className="h-4 w-4" />}
                    واتساب
                  </Button>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">روابط ذات صلة</h3>

              <div className="space-y-2 mb-6">
                <div>
                  <Link href="/شراء-سيارات-تشليح-بالرياض" className="text-primary hover:underline">
                    شراء سيارات تشليح بالرياض
                  </Link>
                </div>
                <div>
                  <Link href="/نشتري-السيارات-المصدومة-بالرياض" className="text-primary hover:underline">
                    نشتري السيارات المصدومة بالرياض
                  </Link>
                </div>
                <div>
                  <Link href="/بيع-سيارة-تشليح-في-الرياض" className="text-primary hover:underline">
                    بيع سيارة تشليح في الرياض
                  </Link>
                </div>
                <div>
                  <Link href="/" className="text-primary hover:underline">
                    الصفحة الرئيسية
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-slate-900 text-white">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} شريطي سيارات - شراء سيارات حادث في الرياض - جميع الحقوق محفوظة</p>
          <div className="mt-2">
            <a
              href="http://sakhrs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary/80 transition-colors"
            >
              برعاية sakhr
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button (Mobile) */}
      <div className="fixed bottom-4 left-4 z-50 md:hidden">
        <Button
          size="icon"
          className="h-14 w-14 rounded-full shadow-xl bg-primary hover:bg-primary/90"
          onClick={() => navigateTo(`tel:${phoneNumber}`)}
        >
          {isClient && <Phone className="h-6 w-6 text-white" />}
        </Button>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Phone, MessageCircle, Car, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// تحديد اسم النشاط التجاري بشكل ثابت لضمان الاتساق
const BUSINESS_NAME = "شريطي سيارات"

export default function ContactPage() {
  const phoneNumber = "0593719965"
  const internationalPhoneNumber = "+966593719965"
  const [isClient, setIsClient] = useState(false)

  // This ensures the component only renders fully on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // تحديث دالة الاتصال لاستخدام الرقم الدولي
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
            <Link href="/" className="hover:text-primary/80" itemProp="name">
              {BUSINESS_NAME}
            </Link>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="gap-1 text-sm font-bold"
            onClick={() => navigateTo(`tel:${phoneNumber}`)}
            aria-label="اتصل بنا"
            itemProp="telephone"
            content={internationalPhoneNumber}
          >
            {isClient && <Phone className="h-4 w-4" />}
            اتصل الآن: {phoneNumber}
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-06%2019.58.19%20-%20A%20high-quality%20promotional%20image%20of%20a%20junk%20car%20removal%20process%20in%20Saudi%20Arabia.%20The%20image%20should%20depict%20a%20customer%20handing%20over%20car%20keys%20to%20a%20professi-Blhe7FfRWWMNcdsfBost4aT3fNlrE7.webp"
                alt="اتصل بنا - شريطي سيارات"
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
                <h1 className="text-2xl md:text-5xl font-bold">اتصل بنا</h1>
              </div>
              <p className="text-base md:text-xl opacity-90">تواصل معنا لبيع سيارتك التشليح بأفضل سعر في الرياض</p>
            </div>
          </div>
        </section>

        {/* Quick Contact Section - NEW */}
        <section className="py-4 bg-secondary/10">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              <h3 className="text-xl font-bold">للتواصل السريع:</h3>
              <Button size="lg" className="gap-2 px-6" onClick={() => navigateTo(`tel:${phoneNumber}`)}>
                {isClient && <Phone className="h-5 w-5" />}
                {phoneNumber}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 px-6"
                onClick={() => navigateTo(`https://wa.me/966593719965`)}
              >
                {isClient && <MessageCircle className="h-5 w-5" />}
                واتساب: {phoneNumber}
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="bg-primary/5 p-6 rounded-xl text-right">
                  <h2 className="text-2xl font-bold text-primary mb-6">معلومات الاتصال</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{isClient && <Phone className="h-6 w-6 text-primary" />}</div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">رقم الهاتف</h3>
                        <p className="text-xl font-bold text-primary mb-1" itemProp="telephone">
                          <span>0593719965</span>
                        </p>
                        <p className="text-muted-foreground">{internationalPhoneNumber}</p>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-primary"
                          onClick={() => navigateTo(`tel:${internationalPhoneNumber}`)}
                        >
                          اتصل الآن
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1">{isClient && <MessageCircle className="h-6 w-6 text-primary" />}</div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">واتساب</h3>
                        <p className="text-xl font-bold text-primary mb-1">{phoneNumber}</p>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-primary"
                          onClick={() => navigateTo(`https://wa.me/966593719965`)}
                        >
                          تواصل عبر واتساب
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1">{isClient && <MapPin className="h-6 w-6 text-primary" />}</div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">المنطقة</h3>
                        <p className="text-muted-foreground">نخدم جميع أحياء الرياض والمناطق المجاورة</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1">{isClient && <Clock className="h-6 w-6 text-primary" />}</div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">ساعات العمل</h3>
                        <p className="text-muted-foreground">جميع أيام الأسبوع من 8 صباحاً حتى 10 مساءً</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-6 rounded-xl shadow-md text-right">
                  <h2 className="text-2xl font-bold text-primary mb-6">تواصل معنا مباشرة</h2>

                  <div className="space-y-4">
                    <div className="flex flex-col gap-3">
                      <p className="text-xl font-bold text-primary text-center mb-2">
                        <span itemProp="telephone">+966593719965</span>
                      </p>
                      <Button
                        size="lg"
                        className="gap-2 w-full"
                        onClick={() => navigateTo(`tel:${internationalPhoneNumber}`)}
                      >
                        {isClient && <Phone className="h-5 w-5" />}
                        اتصل الآن: <span>0593719965</span>
                      </Button>

                      <Button
                        size="lg"
                        variant="outline"
                        className="gap-2 w-full bg-green-600 text-white hover:bg-white hover:text-green-600"
                        onClick={() => navigateTo(`https://wa.me/966593719965`)}
                      >
                        {isClient && <MessageCircle className="h-5 w-5" />}
                        تواصل عبر واتساب: <span>0593719965</span>
                      </Button>
                    </div>

                    <div className="bg-secondary/10 p-4 rounded-lg mt-6">
                      <h3 className="font-bold mb-2">لماذا تختار خدمتنا؟</h3>
                      <ul className="list-disc mr-6 space-y-1 text-sm">
                        <li>أفضل سعر لشراء سيارات التشليح في الرياض</li>
                        <li>دفع نقدي فوري</li>
                        <li>خدمة سحب مجانية للسيارة</li>
                        <li>إنهاء جميع الإجراءات القانونية</li>
                        <li>خدمة سريعة ومهنية</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Areas We Serve */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-primary mb-6 text-right">المناطق التي نخدمها</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-primary/5 p-3 rounded-lg text-center">
                    <h3 className="font-bold">شمال الرياض</h3>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg text-center">
                    <h3 className="font-bold">جنوب الرياض</h3>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg text-center">
                    <h3 className="font-bold">شرق الرياض</h3>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg text-center">
                    <h3 className="font-bold">غرب الرياض</h3>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg text-center">
                    <h3 className="font-bold">وسط الرياض</h3>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg text-center">
                    <h3 className="font-bold">الدرعية</h3>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg text-center">
                    <h3 className="font-bold">الخرج</h3>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg text-center">
                    <h3 className="font-bold">جميع الأحياء</h3>
                  </div>
                </div>
              </div>

              {/* Related Links */}
              <div className="mt-12 text-right">
                <h2 className="text-2xl font-bold text-primary mb-6">روابط ذات صلة</h2>

                <div className="space-y-2">
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
                    <Link href="/أفضل-سعر-لشراء-سيارات-التشليح-في-الرياض" className="text-primary hover:underline">
                      أفضل سعر لشراء سيارات التشليح في الرياض
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
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-slate-900 text-white">
        <div className="container text-center">
          <p>
            © {new Date().getFullYear()} {BUSINESS_NAME} - جميع الحقوق محفوظة
          </p>
          <div className="mt-2">
            <a
              href="https://sakhrs.com"
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
      <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-3 md:hidden">
        <Button
          size="icon"
          className="h-14 w-14 rounded-full shadow-xl bg-primary hover:bg-primary/90"
          onClick={() => navigateTo(`tel:${phoneNumber}`)}
        >
          {isClient && <Phone className="h-6 w-6 text-white" />}
        </Button>
        <div className="bg-white px-3 py-1 rounded-lg shadow-lg text-primary font-bold text-sm">{phoneNumber}</div>
      </div>

      <Button
        variant="outline"
        className="gap-2 bg-green-600 text-white hover:bg-white hover:text-green-600 hidden"
        onClick={() => navigateTo(`https://wa.me/966593719965`)}
      >
        {isClient && <MessageCircle className="h-4 w-4" />}
        واتساب
      </Button>
    </div>
  )
}

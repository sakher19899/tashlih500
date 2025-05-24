"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Phone, MessageCircle, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BuyJunkCarsRiyadh() {
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
            className="gap-1 text-sm font-bold"
            onClick={() => navigateTo(`tel:${internationalPhoneNumber}`)}
            aria-label="اتصل بنا"
          >
            {isClient && <Phone className="h-4 w-4" />}
            <span itemProp="telephone">0593719965</span>
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-06%2019.52.06%20-%20A%20professional%20advertisement-style%20image%20for%20a%20junk%20car%20buying%20service%20in%20Saudi%20Arabia.%20The%20image%20should%20feature%20a%20wrecked%20car%20being%20loaded%20onto%20a%20tow-Ht0zw6SbFPQqihqM5Nq7m4iN42f4wC.webp"
                alt="شراء سيارات تشليح بالرياض"
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
                <h1 className="text-2xl md:text-5xl font-bold">شراء سيارات تشليح بالرياض</h1>
              </div>
              <p className="text-base md:text-xl opacity-90">
                نشتري السيارات المصدومة والتالفة بأفضل الأسعار مع نقل الملكية فوراً في جميع أحياء الرياض
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact Section - NEW */}
        <section className="py-4 bg-secondary/10">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              <h3 className="text-xl font-bold">للتواصل السريع:</h3>
              <Button size="lg" className="gap-2 px-6" onClick={() => navigateTo(`tel:${internationalPhoneNumber}`)}>
                {isClient && <Phone className="h-5 w-5" />}
                <span itemProp="telephone">0593719965</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 px-6"
                onClick={() => navigateTo(`https://wa.me/966593719965`)}
              >
                {isClient && <MessageCircle className="h-5 w-5" />}
                واتساب: <span>0593719965</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto text-right">
              <h2 className="text-3xl font-bold text-primary mb-6">شراء سيارات تشليح بالرياض</h2>

              <p className="mb-4">
                نحن نقدم خدمة <strong>شراء سيارات تشليح بالرياض</strong> بأفضل الأسعار وبطريقة سهلة وسريعة. إذا كنت
                تمتلك سيارة مصدومة أو تالفة في الرياض، فنحن نوفر لك الحل الأمثل لبيعها بسعر مناسب ودون أي متاعب.
              </p>

              <p className="mb-4">
                تتميز خدمتنا في <strong>شراء سيارات تشليح بالرياض</strong> بالعديد من المزايا التي تجعلنا الخيار الأفضل
                لعملائنا:
              </p>

              <ul className="list-disc mr-6 mb-6 space-y-2">
                <li>تقييم عادل ومجاني للسيارة</li>
                <li>أسعار منافسة تناسب حالة السيارة</li>
                <li>دفع نقدي فوري</li>
                <li>خدمة سحب مجانية من أي مكان في الرياض</li>
                <li>إنهاء جميع الإجراءات القانونية ونقل الملكية</li>
                <li>فريق محترف ذو خبرة طويلة</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mb-4">أنواع السيارات التي نشتريها في الرياض</h3>

              <p className="mb-4">نحن نشتري جميع أنواع السيارات في الرياض بغض النظر عن حالتها:</p>

              <ul className="list-disc mr-6 mb-6 space-y-2">
                <li>سيارات مصدومة</li>
                <li>سيارات معطلة</li>
                <li>سيارات قديمة</li>
                <li>سيارات محترقة</li>
                <li>سيارات غارقة</li>
                <li>سيارات بدون استمارة</li>
                <li>سيارات بدون فحص</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mb-4">مناطق الرياض التي نغطيها</h3>

              <p className="mb-4">نقدم خدماتنا في جميع أحياء الرياض بما في ذلك:</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
                <div className="bg-primary/5 p-2 rounded text-center">شمال الرياض</div>
                <div className="bg-primary/5 p-2 rounded text-center">جنوب الرياض</div>
                <div className="bg-primary/5 p-2 rounded text-center">شرق الرياض</div>
                <div className="bg-primary/5 p-2 rounded text-center">غرب الرياض</div>
                <div className="bg-primary/5 p-2 rounded text-center">وسط الرياض</div>
                <div className="bg-primary/5 p-2 rounded text-center">ضواحي الرياض</div>
              </div>

              <div className="bg-secondary/10 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold mb-3">تواصل معنا الآن</h3>
                <p className="mb-2">لا تتردد في التواصل معنا للحصول على تقييم مجاني لسيارتك وأفضل عرض سعر في الرياض.</p>
                <p className="mb-4 font-bold text-lg text-primary">اتصل الآن: {phoneNumber}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="gap-2" onClick={() => navigateTo(`tel:${phoneNumber}`)}>
                    {isClient && <Phone className="h-4 w-4" />}
                    اتصل الآن: {phoneNumber}
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
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-slate-900 text-white">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} شريطي سيارات - شراء سيارات تشليح بالرياض - جميع الحقوق محفوظة</p>
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
    </div>
  )
}

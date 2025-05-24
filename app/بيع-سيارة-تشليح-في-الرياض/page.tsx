"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Phone, MessageCircle, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SellJunkCarRiyadh() {
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-06%2019.58.19%20-%20A%20high-quality%20promotional%20image%20of%20a%20junk%20car%20removal%20process%20in%20Saudi%20Arabia.%20The%20image%20should%20depict%20a%20customer%20handing%20over%20car%20keys%20to%20a%20professi-Blhe7FfRWWMNcdsfBost4aT3fNlrE7.webp"
                alt="بيع سيارة تشليح في الرياض"
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
                <h1 className="text-2xl md:text-5xl font-bold">بيع سيارة تشليح في الرياض</h1>
              </div>
              <p className="text-base md:text-xl opacity-90">
                أسهل وأسرع طريقة لبيع سيارتك التشليح بأفضل سعر في الرياض
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto text-right">
              <h2 className="text-3xl font-bold text-primary mb-6">بيع سيارة تشليح في الرياض</h2>

              <p className="mb-4">
                هل ترغب في <strong>بيع سيارة تشليح في الرياض</strong>؟ نحن نقدم لك أفضل خدمة لبيع سيارتك التشليح بسهولة
                وسرعة وبأعلى سعر ممكن. لا داعي للقلق بشأن الإجراءات المعقدة أو البحث عن مشترين، نحن نتولى كل شيء عنك.
              </p>

              <p className="mb-4">
                سواء كانت سيارتك قديمة، مصدومة، معطلة، أو غير صالحة للاستخدام، نحن نشتريها منك بسعر مناسب ودفع نقدي
                فوري.
              </p>

              <div className="bg-primary/5 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold mb-3">لماذا تختار خدمتنا لبيع سيارة التشليح في الرياض؟</h3>
                <ul className="list-disc mr-6 space-y-2">
                  <li>أفضل سعر لسيارتك التشليح في الرياض</li>
                  <li>تقييم مجاني وعادل للسيارة</li>
                  <li>دفع نقدي فوري عند الاتفاق</li>
                  <li>خدمة سحب مجانية للسيارة من موقعك</li>
                  <li>إنهاء جميع الإجراءات القانونية ونقل الملكية</li>
                  <li>خدمة سريعة ومريحة دون تعقيدات</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">خطوات بيع سيارة التشليح في الرياض</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3">
                    1
                  </div>
                  <h4 className="font-bold mb-2">التواصل معنا</h4>
                  <p className="text-sm">اتصل بنا أو أرسل رسالة عبر الواتساب مع وصف لحالة السيارة</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3">
                    2
                  </div>
                  <h4 className="font-bold mb-2">الفحص والتقييم</h4>
                  <p className="text-sm">نقوم بفحص السيارة وتقديم عرض سعر مناسب لحالتها</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3">
                    3
                  </div>
                  <h4 className="font-bold mb-2">إتمام البيع</h4>
                  <p className="text-sm">دفع المبلغ نقداً وإنهاء إجراءات نقل الملكية وسحب السيارة</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">أنواع سيارات التشليح التي نشتريها في الرياض</h3>

              <p className="mb-4">نحن نشتري جميع أنواع سيارات التشليح في الرياض:</p>

              <ul className="list-disc mr-6 mb-6 space-y-2">
                <li>سيارات مصدومة</li>
                <li>سيارات معطلة</li>
                <li>سيارات قديمة</li>
                <li>سيارات محترقة</li>
                <li>سيارات غارقة</li>
                <li>سيارات بدون استمارة</li>
                <li>سيارات بدون فحص</li>
                <li>سيارات متوقفة عن العمل</li>
              </ul>

              <div className="bg-secondary/10 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold mb-3">تواصل معنا الآن</h3>
                <p className="mb-4">لا تتردد في التواصل معنا لبيع سيارتك التشليح في الرياض والحصول على أفضل سعر.</p>
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
          <p>© {new Date().getFullYear()} شريطي سيارات - بيع سيارة تشليح في الرياض - جميع الحقوق محفوظة</p>
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

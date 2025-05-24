"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Phone, MessageCircle, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// تحديد اسم النشاط التجاري بشكل ثابت لضمان الاتساق
const BUSINESS_NAME = "شريطي سيارات"

export default function AboutPage() {
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
          >
            {isClient && <Phone className="h-4 w-4" />}
            <span itemProp="telephone">{phoneNumber}</span>
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
                alt="من نحن - شريطي سيارات"
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
                <h1 className="text-2xl md:text-5xl font-bold">من نحن</h1>
              </div>
              <p className="text-base md:text-xl opacity-90">
                تعرف على {BUSINESS_NAME} - خبراء شراء السيارات التالفة والمصدومة في الرياض
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto text-right">
              <h2 className="text-3xl font-bold text-primary mb-6">{BUSINESS_NAME}</h2>

              <p className="mb-4 text-lg">
                نحن شركة متخصصة في شراء سيارات التشليح والسيارات المصدومة والتالفة في الرياض بأفضل الأسعار. تأسست شركتنا
                منذ أكثر من 10 سنوات بهدف تقديم خدمة متميزة لأصحاب السيارات التالفة والمتضررة.
              </p>

              <p className="mb-4">
                نمتلك فريقًا من الخبراء المتخصصين في تقييم السيارات التالفة بشكل عادل ودقيق، مما يضمن حصولك على أفضل سعر
                ممكن لسيارتك. كما نقدم خدمة سحب مجانية للسيارة من موقعك في أي مكان في الرياض.
              </p>

              <div className="bg-primary/5 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold mb-3">رؤيتنا</h3>
                <p className="mb-4">
                  نسعى لأن نكون الخيار الأول والأفضل لشراء سيارات التشليح في الرياض، من خلال تقديم خدمة متميزة وأسعار
                  عادلة وتعامل احترافي مع العملاء.
                </p>

                <h3 className="text-xl font-bold mb-3">مهمتنا</h3>
                <p>
                  تقديم حلول سريعة وسهلة لأصحاب السيارات التالفة والمتضررة، وتوفير تجربة بيع سلسة وخالية من التعقيدات،
                  مع ضمان الحصول على أفضل سعر ممكن.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">لماذا تختارنا؟</h3>

              <ul className="list-disc mr-6 mb-6 space-y-2">
                <li>خبرة طويلة في مجال شراء سيارات التشليح</li>
                <li>تقييم عادل ودقيق للسيارات</li>
                <li>أسعار منافسة وأفضل من السوق</li>
                <li>دفع نقدي فوري</li>
                <li>خدمة سحب مجانية للسيارة من موقعك</li>
                <li>إنهاء جميع الإجراءات القانونية ونقل الملكية</li>
                <li>فريق محترف ومتعاون</li>
                <li>تغطية شاملة لجميع أحياء الرياض</li>
              </ul>

              <div className="bg-secondary/10 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold mb-3">تواصل معنا</h3>
                <p className="mb-4">
                  نحن جاهزون لاستقبال استفساراتكم وطلباتكم على مدار الأسبوع. لا تتردد في التواصل معنا للحصول على تقييم
                  مجاني لسيارتك.
                </p>
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
    </div>
  )
}

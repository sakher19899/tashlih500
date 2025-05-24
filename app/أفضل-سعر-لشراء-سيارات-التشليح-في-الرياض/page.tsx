"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Phone, MessageCircle, Car, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BestPriceJunkCarsRiyadh() {
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
          {/* تعديل زر الاتصال في الهيدر */}
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-06%2019.58.14%20-%20A%20professional%20and%20visually%20appealing%20image%20showing%20a%20junk%20car%20being%20assessed%20by%20a%20buyer%20in%20Saudi%20Arabia.%20The%20scene%20should%20include%20a%20salvage%20yard%20fill-yOXGrv5bAZ83CXxc6FacwI9MlN0IPZ.webp"
                alt="أفضل سعر لشراء سيارات التشليح في الرياض"
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
                <h1 className="text-2xl md:text-5xl font-bold">أفضل سعر لشراء سيارات التشليح في الرياض</h1>
              </div>
              <p className="text-base md:text-xl opacity-90">
                نقدم أعلى الأسعار لشراء سيارات التشليح في الرياض مع تقييم عادل ودفع فوري
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto text-right">
              <h2 className="text-3xl font-bold text-primary mb-6">أفضل سعر لشراء سيارات التشليح في الرياض</h2>

              <p className="mb-4">
                هل تبحث عن <strong>أفضل سعر لشراء سيارات التشليح في الرياض</strong>؟ نحن نقدم لك أعلى الأسعار في السوق
                لشراء سيارتك التشليح مهما كانت حالتها. نحن نؤمن بتقديم قيمة عادلة لسيارتك بناءً على تقييم احترافي ودقيق.
              </p>

              <p className="mb-4">
                نحن نتميز عن غيرنا بتقديم أسعار منافسة وعادلة لجميع أنواع السيارات التشليح في الرياض. فريقنا من الخبراء
                يقوم بتقييم سيارتك بدقة لضمان حصولك على أفضل سعر ممكن.
              </p>

              <div className="bg-primary/5 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold mb-3">لماذا نقدم أفضل الأسعار في الرياض؟</h3>
                <ul className="list-disc mr-6 space-y-2">
                  <li>خبرة طويلة في سوق سيارات التشليح</li>
                  <li>شبكة واسعة من المشترين والموزعين</li>
                  <li>تقييم احترافي ودقيق للسيارات</li>
                  <li>لدينا خبرة في تقييم السيارات بشكل دقيق</li>
                  <li>لدينا القدرة على إعادة تدوير جميع أجزاء السيارة</li>
                  <li>نتعامل مع جميع الماركات والموديلات</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">كيف نحدد سعر سيارتك التشليح؟</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-start gap-3 mb-2">
                    {isClient && <DollarSign className="h-6 w-6 text-primary flex-shrink-0 mt-1" />}
                    <h4 className="font-bold">نوع وموديل السيارة</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    يؤثر نوع وموديل السيارة بشكل كبير على السعر، حيث تختلف قيمة السيارات من نوع لآخر.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-start gap-3 mb-2">
                    {isClient && <DollarSign className="h-6 w-6 text-primary flex-shrink-0 mt-1" />}
                    <h4 className="font-bold">حالة السيارة</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    نقيم حالة السيارة ومدى الضرر الذي تعرضت له، وكلما كانت الحالة أفضل كان السعر أعلى.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-start gap-3 mb-2">
                    {isClient && <DollarSign className="h-6 w-6 text-primary flex-shrink-0 mt-1" />}
                    <h4 className="font-bold">سنة الصنع</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    السيارات الأحدث عادة ما تكون قيمتها أعلى، حتى في حالة التشليح، بسبب جودة المواد المستخدمة فيها.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-start gap-3 mb-2">
                    {isClient && <DollarSign className="h-6 w-6 text-primary flex-shrink-0 mt-1" />}
                    <h4 className="font-bold">الطلب في السوق</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    بعض الموديلات تكون مطلوبة أكثر من غيرها، مما يؤثر على سعر شراء السيارة.
                  </p>
                </div>
              </div>

              <div className="bg-secondary/10 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold mb-3">احصل على تقييم مجاني لسيارتك الآن</h3>
                <p className="mb-4">
                  لا تتردد في التواصل معنا للحصول على تقييم مجاني لسيارتك التشليح ومعرفة أفضل سعر يمكننا تقديمه لك في
                  الرياض.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="gap-2" onClick={() => navigateTo(`tel:${phoneNumber}`)}>
                    {isClient && <Phone className="h-4 w-4" />}
                    اتصل الآن للتقييم
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

              <h3 className="text-2xl font-bold text-primary mb-4">شهادات عملائنا</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-sm text-muted-foreground mb-2">
                    "حصلت على أفضل سعر لسيارتي المصدومة من شريطي سيارات. كانت العملية سهلة وسريعة والدفع كان فوري."
                  </p>
                  <p className="font-bold">- أحمد، الرياض</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-sm text-muted-foreground mb-2">
                    "قارنت بين عدة شركات لبيع سيارتي التشليح، ووجدت أن شريطي سيارات يقدم أفضل سعر في الرياض."
                  </p>
                  <p className="font-bold">- محمد، الرياض</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-sm text-muted-foreground mb-2">
                    "سيارتي كانت قديمة جداً ومعطلة، لكنني حصلت على سعر جيد من شريطي سيارات. أنصح بهم بشدة."
                  </p>
                  <p className="font-bold">- خالد، الرياض</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-sm text-muted-foreground mb-2">
                    "تعاملت مع شريطي سيارات لبيع سيارتي المصدومة، وكانت التجربة ممتازة من حيث السعر والخدمة."
                  </p>
                  <p className="font-bold">- سعد، الرياض</p>
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
          <p>
            © {new Date().getFullYear()} شريطي سيارات - أفضل سعر لشراء سيارات التشليح في الرياض - جميع الحقوق محفوظة
          </p>
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

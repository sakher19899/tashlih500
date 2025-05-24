"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Phone,
  MessageCircle,
  Car,
  CheckCircle,
  MapPin,
  DollarSign,
  Clock,
  Shield,
  Star,
  PenToolIcon as Tool,
  Truck,
  Award,
  ThumbsUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

// تحديد اسم النشاط التجاري بشكل ثابت لضمان الاتساق
const BUSINESS_NAME = "شريطي سيارات"

export default function Home() {
  // تغيير تعريف رقم الهاتف ليشمل النسخة الدولية
  const phoneNumber = "0593719965"
  const internationalPhoneNumber = "+966593719965"
  const [isClient, setIsClient] = useState(false)
  const [imageError, setImageError] = useState(false)

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

  const handleImageError = () => {
    setImageError(true)
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
          <div className="flex items-center gap-4 font-bold text-xl text-primary">
            {isClient && <Car className="h-6 w-6" />}
            <span itemProp="name">{BUSINESS_NAME}</span>
            <Link href="/about" className="text-sm font-normal hover:text-primary/80">
              من نحن
            </Link>
            <Link href="/contact" className="text-sm font-normal hover:text-primary/80">
              اتصل بنا
            </Link>
          </div>
          {/* تحديث زر الاتصال في الهيدر */}
          <Button
            variant="outline"
            size="sm"
            className="gap-1 text-sm font-bold"
            onClick={() => navigateTo(`tel:${internationalPhoneNumber}`)}
            aria-label="اتصل بنا"
          >
            {isClient && <Phone className="h-4 w-4" />}
            <span itemProp="telephone">{phoneNumber}</span>
          </Button>
        </div>
      </header>

      {/* Floating Contact Bar (Desktop) */}
      <div className="hidden md:flex fixed top-20 left-4 z-40 flex-col gap-3">
        <Button
          size="icon"
          className="h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-primary/90"
          onClick={() => navigateTo(`tel:${phoneNumber}`)}
          aria-label="اتصل بنا"
        >
          {isClient && <Phone className="h-5 w-5 text-white" />}
        </Button>
        <Button
          size="icon"
          className="h-12 w-12 rounded-full shadow-lg bg-green-600 hover:bg-green-700"
          onClick={() => navigateTo(`https://wa.me/966593719965`)}
          aria-label="تواصل معنا عبر واتساب"
        >
          {isClient && <MessageCircle className="h-5 w-5 text-white" />}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          {isClient && (
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-06%2019.58.14%20-%20A%20professional%20and%20visually%20appealing%20image%20showing%20a%20junk%20car%20being%20assessed%20by%20a%20buyer%20in%20Saudi%20Arabia.%20The%20scene%20should%20include%20a%20salvage%20yard%20fill-yOXGrv5bAZ83CXxc6FacwI9MlN0IPZ.webp"
              alt="شراء سيارات تشليح في الرياض"
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
              <h1 className="text-2xl md:text-5xl font-bold">شراء سيارات تشليح في الرياض</h1>
            </div>
            <p className="text-base md:text-xl opacity-90">
              نشتري السيارات المصدومة والتالفة بأفضل الأسعار مع نقل الملكية فوراً في جميع أحياء الرياض
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-white/20">
              <p className="text-lg md:text-xl font-bold">🚗💰 نشتري سيارتك التشليح بأعلى سعر في الرياض! 💰🚗</p>
              <p className="mt-2 text-sm md:text-base">
                هل تمتلك سيارة تشليح أو حادثة أو غير قابلة للإصلاح في الرياض؟ 🤔 لا تقلق، نحن هنا لمساعدتك!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                size="lg"
                className="gap-2 text-base md:text-lg bg-primary hover:bg-primary/90 w-full sm:w-auto"
                onClick={() => navigateTo(`tel:${phoneNumber}`)}
              >
                {isClient && <Phone className="h-5 w-5" />}
                اتصل الآن
              </Button>
              <Button
                variant="outline"
                className="gap-2 text-base md:text-lg border-white text-white bg-green-600/80 hover:bg-white hover:text-green-600 w-full sm:w-auto"
                onClick={() => navigateTo(`https://wa.me/966593719965`)}
              >
                {isClient && <MessageCircle className="h-5 w-5 text-white" />}
                <span className="text-white">واتساب</span>
              </Button>
            </div>
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

      {/* Introduction Section - New */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary">شراء سيارات تشليح في الرياض بأفضل الأسعار</h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-2 mb-4 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto text-right">
            <p className="mb-4 text-lg">
              نحن شركة متخصصة في <strong>شراء سيارات تشليح في الرياض</strong> بجميع أنواعها وموديلاتها. نقدم خدمة
              متكاملة تشمل تقييم السيارة، تقديم أفضل سعر، الدفع الفوري، ونقل الملكية بسرعة وسهولة.
            </p>
            <p className="mb-4">
              إذا كنت تمتلك سيارة مصدومة، متضررة من حادث، قديمة، أو غير صالحة للاستخدام في الرياض أو ضواحيها، فنحن
              الخيار الأمثل لك. نشتري السيارات بغض النظر عن حالتها، سواء كانت محترقة، غارقة، أو معطلة تماماً.
            </p>
            <p className="mb-4">
              نغطي جميع أحياء الرياض بما فيها: شمال الرياض، جنوب الرياض، شرق الرياض، غرب الرياض، وسط الرياض، حي النرجس،
              حي الياسمين، حي الملقا، حي العليا، حي الورود، حي الربيع، وجميع الأحياء الأخرى.
            </p>
            <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-primary/10">
              <h3 className="text-xl font-bold mb-2">لماذا تختار خدمتنا لشراء سيارات التشليح في الرياض؟</h3>
              <ul className="space-y-2 mr-6 list-disc">
                <li>تقييم مجاني وعادل للسيارة</li>
                <li>أفضل الأسعار في سوق سيارات التشليح بالرياض</li>
                <li>دفع نقدي فوري</li>
                <li>خدمة سحب مجانية للسيارة من موقعك</li>
                <li>إنهاء إجراءات نقل الملكية بسرعة</li>
                <li>فريق محترف ذو خبرة طويلة في مجال شراء سيارات التشليح</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary">خدماتنا في شراء سيارات التشليح</h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-2 mb-4 rounded-full"></div>
            <p className="text-muted-foreground mt-2">نشتري جميع أنواع السيارات المصدومة والتالفة في الرياض</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-right border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-end">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    {isClient && <DollarSign className="h-7 w-7" />}
                  </div>
                </div>
                <h3 className="text-xl font-bold">أفضل سعر في الرياض</h3>
                <p className="text-muted-foreground mt-2">
                  نقدم أعلى سعر لشراء السيارات المصدومة والتشليح في جميع أحياء الرياض
                </p>
              </CardContent>
            </Card>

            <Card className="text-right border-t-4 border-t-secondary shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-end">
                  <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                    {isClient && <Clock className="h-7 w-7" />}
                  </div>
                </div>
                <h3 className="text-xl font-bold">خدمة فورية في الرياض</h3>
                <p className="text-muted-foreground mt-2">نصلك أينما كنت في الرياض ونشتري سيارتك فوراً مع الدفع كاش</p>
              </CardContent>
            </Card>

            <Card className="text-right border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-end">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    {isClient && <Shield className="h-7 w-7" />}
                  </div>
                </div>
                <h3 className="text-xl font-bold">نقل الملكية</h3>
                <p className="text-muted-foreground mt-2">
                  نقوم بإنهاء جميع إجراءات نقل الملكية بسرعة وسهولة في الرياض
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3-Step Process Section */}
      <section className="py-12 bg-primary/5">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary">خدمة مميزة وسريعة في 3 خطوات فقط!</h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-2 mb-4 rounded-full"></div>
            <p className="text-muted-foreground mt-2">عملية بيع سهلة وسريعة في الرياض</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-right relative">
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">التواصل معنا</h3>
              <p className="text-muted-foreground">
                اتصل بنا أو أرسل رسالة عبر واتساب لتحديد موعد الفحص والتقييم في الرياض.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-right relative">
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">التقييم والعرض</h3>
              <p className="text-muted-foreground">
                يقوم فريقنا بفحص السيارة وتقديم عرض سعر مناسب خلال دقائق في موقعك بالرياض!
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-right relative">
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">الدفع الفوري والاستلام</h3>
              <p className="text-muted-foreground">
                بمجرد الاتفاق، نقوم بالدفع فورًا وسحب السيارة دون أي تكلفة عليك في الرياض!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cars We Buy - New Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary">أنواع السيارات التي نشتريها في الرياض</h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-2 mb-4 rounded-full"></div>
            <p className="text-muted-foreground mt-2">نشتري جميع أنواع وموديلات السيارات مهما كانت حالتها</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-primary/5 p-5 rounded-lg text-right">
              <div className="flex justify-end mb-3">
                <div className="p-2 rounded-full bg-primary/10">
                  {isClient && <Car className="h-6 w-6 text-primary" />}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">سيارات مصدومة</h3>
              <p className="text-sm text-muted-foreground">
                نشتري السيارات المصدومة بجميع أنواعها سواء كانت الأضرار بسيطة أو كبيرة في الرياض.
              </p>
            </div>

            <div className="bg-primary/5 p-5 rounded-lg text-right">
              <div className="flex justify-end mb-3">
                <div className="p-2 rounded-full bg-primary/10">
                  {isClient && <Tool className="h-6 w-6 text-primary" />}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">سيارات معطلة</h3>
              <p className="text-sm text-muted-foreground">
                نشتري السيارات المعطلة التي تحتاج إلى إصلاحات كبيرة أو غير صالحة للإصلاح في الرياض.
              </p>
            </div>

            <div className="bg-primary/5 p-5 rounded-lg text-right">
              <div className="flex justify-end mb-3">
                <div className="p-2 rounded-full bg-primary/10">
                  {isClient && <Truck className="h-6 w-6 text-primary" />}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">سيارات قديمة</h3>
              <p className="text-sm text-muted-foreground">
                نشتري السيارات القديمة التي مضى على تصنيعها سنوات طويلة في الرياض.
              </p>
            </div>

            <div className="bg-primary/5 p-5 rounded-lg text-right">
              <div className="flex justify-end mb-3">
                <div className="p-2 rounded-full bg-primary/10">
                  {isClient && <ThumbsUp className="h-6 w-6 text-primary" />}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">سيارات بدون أوراق</h3>
              <p className="text-sm text-muted-foreground">
                نشتري السيارات التي ليس لديها استمارة أو رخصة سير في الرياض.
              </p>
            </div>

            <div className="bg-primary/5 p-5 rounded-lg text-right">
              <div className="flex justify-end mb-3">
                <div className="p-2 rounded-full bg-primary/10">
                  {isClient && <Award className="h-6 w-6 text-primary" />}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">سيارات محترقة</h3>
              <p className="text-sm text-muted-foreground">
                نشتري السيارات التي تعرضت للحريق بغض النظر عن حجم الضرر في الرياض.
              </p>
            </div>

            <div className="bg-primary/5 p-5 rounded-lg text-right">
              <div className="flex justify-end mb-3">
                <div className="p-2 rounded-full bg-primary/10">
                  {isClient && <Star className="h-6 w-6 text-primary" />}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">جميع الماركات</h3>
              <p className="text-sm text-muted-foreground">
                نشتري جميع ماركات السيارات: تويوتا، نيسان، هيونداي، كيا، فورد، شيفروليه وغيرها في الرياض.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Riyadh Areas We Serve - New Section */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary">مناطق الرياض التي نخدمها</h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-2 mb-4 rounded-full"></div>
            <p className="text-muted-foreground mt-2">نصل إليك أينما كنت في الرياض وضواحيها</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-3 rounded-lg text-center shadow-sm">
              <h3 className="font-bold">شمال الرياض</h3>
              <p className="text-xs text-muted-foreground mt-1">حي النرجس، الياسمين، الملقا</p>
            </div>
            <div className="bg-white p-3 rounded-lg text-center shadow-sm">
              <h3 className="font-bold">جنوب الرياض</h3>
              <p className="text-xs text-muted-foreground mt-1">حي السويدي، العزيزية، الشفا</p>
            </div>
            <div className="bg-white p-3 rounded-lg text-center shadow-sm">
              <h3 className="font-bold">شرق الرياض</h3>
              <p className="text-xs text-muted-foreground mt-1">حي الروضة، الرائد، الفيصلية</p>
            </div>
            <div className="bg-white p-3 rounded-lg text-center shadow-sm">
              <h3 className="font-bold">غرب الرياض</h3>
              <p className="text-xs text-muted-foreground mt-1">حي عرقة، العقيق، الرحمانية</p>
            </div>
            <div className="bg-white p-3 rounded-lg text-center shadow-sm">
              <h3 className="font-bold">وسط الرياض</h3>
              <p className="text-xs text-muted-foreground mt-1">حي العليا، الملز، الديرة</p>
            </div>
            <div className="bg-white p-3 rounded-lg text-center shadow-sm">
              <h3 className="font-bold">الدرعية</h3>
              <p className="text-xs text-muted-foreground mt-1">الدرعية وضواحيها</p>
            </div>
            <div className="bg-white p-3 rounded-lg text-center shadow-sm">
              <h3 className="font-bold">الخرج</h3>
              <p className="text-xs text-muted-foreground mt-1">الخرج وضواحيها</p>
            </div>
            <div className="bg-white p-3 rounded-lg text-center shadow-sm">
              <h3 className="font-bold">جميع الأحياء</h3>
              <p className="text-xs text-muted-foreground mt-1">نغطي كافة أحياء الرياض</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-medium">نصلك أينما كنت في الرياض خلال وقت قصير</p>
            <Button className="mt-4 gap-2" onClick={() => navigateTo(`tel:${phoneNumber}`)}>
              {isClient && <Phone className="h-4 w-4" />}
              اتصل بنا الآن لشراء سيارتك
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              لماذا نحن الخيار الأفضل لشراء سيارات التشليح في الرياض؟
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-2 mb-4 rounded-full"></div>
            <p className="text-muted-foreground mt-2">أفضل شريطي سيارات في الرياض</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-right">
            <div className="flex items-start gap-3 bg-primary/5 p-4 rounded-lg">
              <div className="mt-1">{isClient && <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />}</div>
              <div>
                <p className="font-medium">شراء جميع أنواع السيارات في الرياض</p>
                <p className="text-sm text-muted-foreground">
                  نشتري السيارات التالفة، المحروقة، الغارقة، بدون استمارة، بدون تأمين، أو حتى المعطلة تمامًا في جميع
                  أنحاء الرياض!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-primary/5 p-4 rounded-lg">
              <div className="mt-1">{isClient && <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />}</div>
              <div>
                <p className="font-medium">تقييم مجاني وسعر تنافسي في الرياض</p>
                <p className="text-sm text-muted-foreground">
                  نقدم لك أفضل سعر في سوق سيارات التشليح بالرياض بناءً على حالة السيارة.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-primary/5 p-4 rounded-lg">
              <div className="mt-1">{isClient && <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />}</div>
              <div>
                <p className="font-medium">دفع فوري كاش في الرياض 💵</p>
                <p className="text-sm text-muted-foreground">
                  لا نؤجل الدفع! بمجرد الاتفاق، تحصل على المبلغ فورًا دون أي تأخير في الرياض.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-primary/5 p-4 rounded-lg">
              <div className="mt-1">{isClient && <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />}</div>
              <div>
                <p className="font-medium">نقل السيارة مجانًا في الرياض 🚛</p>
                <p className="text-sm text-muted-foreground">
                  لا داعي للقلق بشأن السحب أو النقل، فريقنا يتولى الأمر بالكامل مجانًا في جميع أنحاء الرياض!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-primary/5 p-4 rounded-lg">
              <div className="mt-1">{isClient && <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />}</div>
              <div>
                <p className="font-medium">نتعامل مع جميع المدن والمناطق في الرياض</p>
                <p className="text-sm text-muted-foreground">أينما كنت في الرياض، نحن نصل إليك!</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-primary/5 p-4 rounded-lg">
              <div className="mt-1">{isClient && <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />}</div>
              <div>
                <p className="font-medium">إجراءات سريعة وسهلة في الرياض</p>
                <p className="text-sm text-muted-foreground">
                  نوفر لك تجربة بيع بلا تعقيدات ولا أوراق مرهقة في الرياض!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-secondary/10 p-4 md:p-6 rounded-xl text-right">
            <p className="text-lg md:text-xl font-bold mb-3">
              🚗💰 نشتري سيارتك التشليح بأفضل سعر في الرياض! خدمة سريعة وسهلة! 💰🚗
            </p>
            <p className="mb-2 text-sm md:text-base">
              هل لديك سيارة تشليح، حادثة، قديمة، أو غير قابلة للاستخدام في الرياض وتبحث عن طريقة سريعة ومريحة لبيعها؟ 🤔
              لا تبحث أكثر، نحن الحل الأمثل لك!
            </p>
            <p className="mb-4 font-bold text-lg text-primary">اتصل الآن: {phoneNumber}</p>
            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
              <Button className="gap-2 w-full sm:w-auto" onClick={() => navigateTo(`tel:${phoneNumber}`)}>
                {isClient && <Phone className="h-4 w-4" />}
                اتصل الآن: {phoneNumber}
              </Button>
              <Button
                variant="outline"
                className="gap-2 border-primary bg-green-600 text-white hover:bg-white hover:text-green-600 hover:border-green-600 w-full sm:w-auto"
                onClick={() => navigateTo(`https://wa.me/966593719965`)}
              >
                {isClient && <MessageCircle className="h-4 w-4" />}
                واتساب
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">خدماتنا المتميزة في شراء سيارات التشليح بالرياض</h2>
            <p className="text-muted-foreground mt-2">نشتري جميع أنواع السيارات المصدومة في الرياض</p>
          </div>

          {isClient && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-06%2019.52.06%20-%20A%20professional%20advertisement-style%20image%20for%20a%20junk%20car%20buying%20service%20in%20Saudi%20Arabia.%20The%20image%20should%20feature%20a%20wrecked%20car%20being%20loaded%20onto%20a%20tow-Ht0zw6SbFPQqihqM5Nq7m4iN42f4wC.webp"
                  alt="خدمة سحب السيارات في الرياض"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-06%2019.53.49%20-%20A%20professional%20advertisement%20image%20for%20a%20junk%20car%20buying%20service%20in%20Saudi%20Arabia.%20The%20image%20should%20feature%20a%20damaged%20car%20being%20towed%20onto%20a%20flatbed%20tr-e0I48TrMee1aNb9HlTJNuYVnl6V2xF.webp"
                  alt="شراء السيارات المصدومة في الرياض"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-06%2019.52.51%20-%20A%20realistic%20and%20detailed%20image%20of%20a%20salvage%20yard%20in%20Saudi%20Arabia%20with%20a%20tow%20truck%20actively%20removing%20a%image%20of%20a%20salvage%20yard%20in%20Saudi%20Arabia%20with%20a%20tow%20truck%20actively%20removing%20a%2wrecked%20wrecked car.%20The%20scene%20should%20showcase%20multiple%20-ggKD9EB8fQAgsnGe3hvPvwA5uy7EDL.webp"
                  alt="ساحة سيارات التشليح في الرياض"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-06%2019.58.12%20-%20A%20high-quality%20advertisement%20image%20for%20a%20junk%20car%20removal%20service%20in%20Saudi%20Arabia.%20The%20image%20should%20feature%20a%20damaged%20car%20being%20lifted%20onto%20a%20tow%20truc-uOALNKJxgunRoHoQcrrmP2JtnKRfsH.webp"
                  alt="رفع السيارات التالفة في الرياض"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-06%2019.58.19%20-%20A%20high-quality%20promotional%20image%20of%20a%20junk%20car%20removal%20process%20in%20Saudi%20Arabia.%20The%20image%20should%20depict%20a%20customer%20handing%20over%20car%20keys%20to%20a%20professi-Blhe7FfRWWMNcdsfBost4aT3fNlrE7.webp"
                  alt="شراء السيارات كاش في الرياض"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-06%2019.52.23%20-%20A%20visually%20appealing%20image%20showcasing%20a%20junk%20car%20being%20appraised%20by%20a%20professional%20buyer%20in%20Saudi%20Arabia.%20The%20scene%20should%20include%20a%20salvage%20yard%20with-jbHNHVIuctHgyeqgXze3425OSRYLKj.webp"
                  alt="تقييم السيارات المصدومة في الرياض"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md sm:col-span-2 lg:col-span-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-06%2019.52.35%20-%20A%20high-quality%20image%20depicting%20a%20junk%20car%20being%20lifted%20onto%20a%20tow%20truck%20in%20a%20professional%20salvage%20yard%20in%20Saudi%20Arabia.%20The%20setting%20includes%20several%20w-I8qHJbfFcdB2mC9HZaHKx9vGlsQjaF.webp"
                  alt="خدمة متكاملة لشراء السيارات في الرياض"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md sm:col-span-2 lg:col-span-1">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-06%2019.58.17%20-%20A%20realistic%20and%20clean%20advertisement%20image%20of%20a%20junk%20car%20being%20towed%20away%20in%20Saudi%20Arabia.%20The%20scene%20should%20feature%20a%20professional%20salvage%20yard%20with%20mu-31MoKd1Lo36N3DuNkbUI0vHSDj8Tbu.webp"
                  alt="ساحة سيارات احترافية في الرياض"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Internal Links Section - New */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary">مواضيع ذات صلة</h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-2 mb-4 rounded-full"></div>
            <p className="text-muted-foreground mt-2">تعرف على المزيد حول خدماتنا</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              href="/شراء-سيارات-تشليح-بالرياض"
              className="bg-primary/5 p-5 rounded-lg text-right hover:bg-primary/10 transition-colors"
            >
              <h3 className="text-lg font-bold mb-2 text-primary">شراء سيارات تشليح بالرياض</h3>
              <p className="text-sm text-muted-foreground">
                تعرف على خدمتنا المتميزة في شراء سيارات التشليح بالرياض بأفضل الأسعار.
              </p>
            </Link>

            <Link
              href="/نشتري-السيارات-المصدومة-بالرياض"
              className="bg-primary/5 p-5 rounded-lg text-right hover:bg-primary/10 transition-colors"
            >
              <h3 className="text-lg font-bold mb-2 text-primary">نشتري السيارات المصدومة بالرياض</h3>
              <p className="text-sm text-muted-foreground">
                خدمة متخصصة في شراء السيارات المصدومة والتالفة في جميع أنحاء الرياض.
              </p>
            </Link>

            <Link
              href="/بيع-سيارة-تشليح-في-الرياض"
              className="bg-primary/5 p-5 rounded-lg text-right hover:bg-primary/10 transition-colors"
            >
              <h3 className="text-lg font-bold mb-2 text-primary">بيع سيارة تشليح في الرياض</h3>
              <p className="text-sm text-muted-foreground">
                دليلك الشامل لبيع سيارتك التشليح بأفضل سعر وبطريقة سهلة وسريعة.
              </p>
            </Link>

            <Link
              href="/أفضل-سعر-لشراء-سيارات-التشليح-في-الرياض"
              className="bg-primary/5 p-5 rounded-lg text-right hover:bg-primary/10 transition-colors"
            >
              <h3 className="text-lg font-bold mb-2 text-primary">أفضل سعر لشراء سيارات التشليح في الرياض</h3>
              <p className="text-sm text-muted-foreground">
                نقدم أعلى الأسعار لشراء سيارات التشليح في الرياض مع تقييم عادل ودفع فوري.
              </p>
            </Link>

            <Link
              href="/شراء-سيارات-حادث-في-الرياض"
              className="bg-primary/5 p-5 rounded-lg text-right hover:bg-primary/10 transition-colors"
            >
              <h3 className="text-lg font-bold mb-2 text-primary">شراء سيارات حادث في الرياض</h3>
              <p className="text-sm text-muted-foreground">
                خدمة متخصصة في شراء السيارات المتضررة من الحوادث بمختلف أنواعها في الرياض.
              </p>
            </Link>

            <Link
              href="/شراء-سيارات-قديمة-في-الرياض"
              className="bg-primary/5 p-5 rounded-lg text-right hover:bg-primary/10 transition-colors"
            >
              <h3 className="text-lg font-bold mb-2 text-primary">شراء سيارات قديمة في الرياض</h3>
              <p className="text-sm text-muted-foreground">
                نشتري السيارات القديمة مهما كان عمرها أو حالتها في جميع أنحاء الرياض.
              </p>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="gap-2" onClick={() => navigateTo(`tel:${phoneNumber}`)}>
              {isClient && <Phone className="h-4 w-4" />}
              اتصل بنا لمعرفة المزيد
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-12">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">الأسئلة الشائعة حول شراء سيارات التشليح في الرياض</h2>
            <p className="text-muted-foreground mt-2">إجابات على استفساراتكم</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
            {[
              {
                q: "كيف يمكنني بيع سيارتي التشليح في الرياض؟",
                a: "يمكنك التواصل معنا عبر الهاتف أو الواتساب وسنقوم بتقييم سيارتك وتقديم أفضل سعر لها في الرياض.",
              },
              {
                q: "ما هي خطوات بيع سيارة تشليح في الرياض؟",
                a: "اتصل بنا وأرسل صور للسيارة، سنقدم لك عرض سعر، وعند الموافقة نأتي لموقعك في الرياض ونتمم عملية الشراء مع الدفع كاش.",
              },
              {
                q: "أين توجد أماكن شراء السيارات التشليح بالرياض؟",
                a: "نحن نغطي جميع مناطق الرياض ونصل إليك أينما كنت لشراء سيارتك المصدومة أو التالفة.",
              },
              {
                q: "كم سعر سيارتي التشليح في الرياض؟",
                a: "يعتمد السعر على نوع السيارة وموديلها وحالتها، اتصل بنا وسنقدم لك تقييم مجاني وعادل في الرياض.",
              },
              {
                q: "هل تشترون السيارات المصدومة في الرياض؟",
                a: "نعم، نشتري السيارات المصدومة مهما كانت حالتها في جميع أنحاء الرياض، تواصل معنا وسنقدم لك أفضل سعر.",
              },
              {
                q: "هل تقومون بنقل ملكية السيارات التشليح في الرياض؟",
                a: "نعم، نقوم بإنهاء جميع إجراءات نقل الملكية بسرعة وسهولة دون أي عناء عليك في الرياض.",
              },
              {
                q: "هل تشترون السيارات القديمة في الرياض؟",
                a: "نعم، نشتري جميع أنواع السيارات القديمة مهما كان عمرها أو حالتها في الرياض.",
              },
              {
                q: "هل تشترون السيارات بدون استمارة في الرياض؟",
                a: "نعم، نشتري السيارات بدون استمارة أو رخصة سير في الرياض ونتولى جميع الإجراءات القانونية.",
              },
              {
                q: "كم يستغرق بيع سيارة تشليح في الرياض؟",
                a: "عملية البيع سريعة جداً، يمكن إتمامها خلال ساعات من التواصل معنا في الرياض.",
              },
              {
                q: "هل تقدمون خدمة سحب السيارات في الرياض؟",
                a: "نعم، نقدم خدمة سحب مجانية للسيارات من أي مكان في الرياض وضواحيها.",
              },
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-bold">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">تواصل معنا الآن لبيع سيارتك في الرياض</h2>
            <div className="h-1 w-20 bg-white mx-auto mt-2 mb-4 rounded-full"></div>
            <p className="mt-2 opacity-90">نحن جاهزون لشراء سيارتك بأفضل سعر في الرياض</p>
          </div>

          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/20">
            <p className="text-center mb-2 text-base md:text-lg">
              🚀 لا تضيع وقتك، بيع سيارتك اليوم بأفضل سعر في الرياض! 🚀
            </p>
            <p className="text-center mb-4 text-xl md:text-2xl font-bold">{phoneNumber}</p>

            <div className="flex flex-col gap-3 md:gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 text-base md:text-lg w-full"
                onClick={() => navigateTo(`tel:${phoneNumber}`)}
              >
                {isClient && <Phone className="h-5 w-5" />}
                اتصل الآن: {phoneNumber}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-base md:text-lg w-full border-white text-white bg-green-600/80 hover:bg-white hover:text-green-600"
                onClick={() => navigateTo(`https://wa.me/966593719965`)}
              >
                {isClient && <MessageCircle className="h-5 w-5" />}
                <span className="text-white">واتساب: {phoneNumber}</span>
              </Button>
            </div>

            <div className="mt-4 md:mt-6 flex justify-center">
              <div className="flex items-center gap-2 text-center">
                <MapPin className="h-5 w-5" />
                <span className="text-sm md:text-base">نخدم جميع أحياء الرياض والمناطق المجاورة</span>
              </div>
            </div>

            <div className="mt-3 md:mt-4 text-center">
              <p className="text-sm md:text-base">✅ خدمة مضمونة ✅ رضا العميل أولويتنا ✅ أسرع استجابة في الرياض</p>
            </div>
          </div>
        </div>
      </section>

      {/* Keywords Section with links */}
      <section className="py-8 bg-slate-100 text-xs text-slate-600">
        <div className="container text-center">
          <p className="mb-2">الكلمات المفتاحية</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { text: "شراء سيارات تشليح في الرياض", link: "/شراء-سيارات-تشليح-بالرياض" },
              { text: "شراء سيارات تشليح بالرياض", link: "/شراء-سيارات-تشليح-بالرياض" },
              { text: "نشتري السيارات المصدومة بالرياض", link: "/نشتري-السيارات-المصدومة-بالرياض" },
              { text: "بيع سيارة تشليح في الرياض", link: "/بيع-سيارة-تشليح-في-الرياض" },
              { text: "بيع سيارة تشليح مع نقل الملكية", link: "/بيع-سيارة-تشليح-في-الرياض" },
              { text: "أفضل سعر لشراء سيارات التشليح في الرياض", link: "/أفضل-سعر-لشراء-سيارات-التشليح-في-الرياض" },
              { text: "شريطي سيارات تشليح يدفع كاش", link: "/" },
              { text: "بيع سيارة مصدومة بسعر جيد في الرياض", link: "/نشتري-السيارات-المصدومة-بالرياض" },
              { text: "أفضل مشتري سيارات تشليح في الرياض", link: "/" },
              { text: "أعلى سعر لشراء السيارات المصدومة في الرياض", link: "/نشتري-السيارات-المصدومة-بالرياض" },
              { text: "أسرع طريقة لبيع سيارة تالفة في الرياض", link: "/بيع-سيارة-تشليح-في-الرياض" },
              { text: "شراء سيارات قديمة في الرياض", link: "/شراء-سيارات-قديمة-في-الرياض" },
              { text: "شراء سيارات حادث في الرياض", link: "/شراء-سيارات-حادث-في-الرياض" },
              { text: "شراء سيارات معطلة في الرياض", link: "/" },
              { text: "شراء سيارات محترقة في الرياض", link: "/" },
              { text: "شراء سيارات بدون استمارة في الرياض", link: "/" },
              { text: "سحب سيارات تشليح في الرياض", link: "/" },
              { text: "تقييم سيارات تشليح في الرياض", link: "/" },
              { text: "دفع كاش لسيارات التشليح في الرياض", link: "/" },
              { text: "خدمة شراء سيارات تشليح في شمال الرياض", link: "/" },
              { text: "خدمة شراء سيارات تشليح في جنوب الرياض", link: "/" },
              { text: "خدمة شراء سيارات تشليح في شرق الرياض", link: "/" },
              { text: "خدمة شراء سيارات تشليح في غرب الرياض", link: "/" },
            ].map((keyword, index) => (
              <Link
                key={index}
                href={keyword.link}
                className="bg-white px-2 py-1 rounded-full hover:bg-primary/5 transition-colors"
              >
                {keyword.text}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-slate-900 text-white">
        <div className="container text-center">
          {/* تحديث اسم النشاط التجاري في الفوتر */}
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

      {/* Floating Contact Buttons (Mobile) */}
      <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-3 md:hidden">
        <Button
          size="icon"
          className="h-16 w-16 rounded-full shadow-xl bg-primary hover:bg-primary/90 animate-pulse"
          onClick={() => navigateTo(`tel:${internationalPhoneNumber}`)}
          aria-label="اتصل بنا"
        >
          {isClient && <Phone className="h-7 w-7 text-white" />}
        </Button>
        <div className="bg-white px-3 py-1 rounded-lg shadow-lg text-primary font-bold text-sm" itemProp="telephone">
          0593719965
        </div>
        <Button
          size="icon"
          className="h-16 w-16 rounded-full shadow-xl bg-green-600 hover:bg-green-700 text-white animate-pulse border-2 border-white"
          onClick={() => navigateTo(`https://wa.me/966593719965`)}
          aria-label="تواصل معنا عبر واتساب"
        >
          {isClient && <MessageCircle className="h-7 w-7 text-white" />}
        </Button>
      </div>
    </div>
  )
}

import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Smartphone, BarChart2, Link, ShoppingBag, Settings, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import aliIcon from "@assets/icon_1776260788092.png";
import featureGraphic from "@assets/feature-graphic_1776260865698.png";
import screen1 from "@assets/Screenshot_2026-04-14-15-55-05-36_ab7e72048c18df7d929ceacdc9fd_1776260787988.jpg";
import screen2 from "@assets/Screenshot_2026-04-14-15-55-27-97_ab7e72048c18df7d929ceacdc9fd_1776260788013.jpg";
import screen3 from "@assets/Screenshot_2026-04-14-15-55-43-20_ab7e72048c18df7d929ceacdc9fd_1776260788041.jpg";
import screen4 from "@assets/Screenshot_2026-04-14-15-56-02-43_ab7e72048c18df7d929ceacdc9fd_1776260788066.jpg";

const screenshots = [screen1, screen2, screen3, screen4];

function AliAffiliateHero() {
  const { lang } = useI18n();
  const isRtl = lang === 'ar';

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div 
            className="w-full max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 rounded-full bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
              <BarChart2 className="w-3.5 h-3.5 mr-2 inline-block" />
              {isRtl ? 'الإصدار 1.0.0 متاح الآن' : 'Version 1.0.0 is now available'}
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              {isRtl ? (
                <>
                  <span className="inline-block">تتبع الطلبات،</span>{' '}
                  <span className="text-primary inline-block">اكسب العمولات،</span>{' '}
                  <span className="inline-block">أنشئ الروابط</span>
                </>
              ) : (
                <>
                  <span className="inline-block">Track Orders,</span>{' '}
                  <span className="text-primary inline-block">Earn Commissions,</span>{' '}
                  <span className="inline-block">Generate Links</span>
                </>
              )}
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {isRtl
                ? 'لوحة تحكم متكاملة لمنتسبي برنامج AliExpress للعمولات. تابع أرباحك وطلباتك وأنشئ روابط العمولة بسهولة من هاتفك.'
                : 'A complete dashboard for AliExpress Affiliate members. Track your earnings, monitor orders, and generate affiliate links effortlessly from your phone.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button 
                size="lg" 
                className="w-full sm:w-auto h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 transition-all hover:shadow-primary/40 hover:-translate-y-1 text-lg group"
                data-testid="button-ali-download-google-play"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.aliaffiliate.app', '_blank')}
              >
                <Smartphone className={`${isRtl ? 'ml-2' : 'mr-2'} w-5 h-5`} />
                Google Play
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto h-14 px-8 rounded-full border-2 hover:bg-secondary transition-all hover:-translate-y-1 text-lg group"
                data-testid="button-ali-download-apk"
                onClick={() => window.open('https://drive.usercontent.google.com/download?id=15ZguRilnoyU0Zh4IsUZyCJf_RCJCYGwz&export=download&authuser=0', '_blank')}
              >
                <Download className={`${isRtl ? 'ml-2' : 'mr-2'} w-5 h-5 group-hover:text-primary transition-colors`} />
                {isRtl ? 'تحميل مباشر (APK)' : 'Direct Download (APK)'}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto h-14 px-8 rounded-full border-2 hover:bg-secondary transition-all hover:-translate-y-1 text-lg group"
                data-testid="button-ali-download-apkpure"
                onClick={() => window.open('https://apkpure.com/p/com.aliaffiliate.app', '_blank')}
              >
                <ExternalLink className={`${isRtl ? 'ml-2' : 'mr-2'} w-5 h-5 group-hover:text-primary transition-colors`} />
                APKPure
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                {isRtl ? 'مجاني تماماً' : '100% Free'}
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-primary" />
                {isRtl ? 'يدعم Android' : 'Supports Android'}
              </div>
              <div className="flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-yellow-500" />
                {isRtl ? 'تطوير: Rabah coupons' : 'Dev: Rabah coupons'}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
      >
        <div className="rounded-3xl overflow-hidden premium-shadow border border-border/50">
          <img
            src={featureGraphic}
            alt="Ali Affiliate Feature"
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

function AliAffiliateFeatures() {
  const { lang } = useI18n();
  const isRtl = lang === 'ar';

  const features = [
    {
      icon: BarChart2,
      title: isRtl ? 'لوحة التحكم الرئيسية' : 'Main Dashboard',
      desc: isRtl
        ? 'ملخص شامل لأداء حسابك: إحصائيات الطلبات المدفوعة والمستلمة، العمولات المُسوّاة، الطلبات الملغاة، وبطاقة ملخص تُقارن العمولات عبر فترات زمنية مختلفة.'
        : 'Comprehensive account performance summary: paid and received order statistics, settled commissions, cancelled orders, and a summary card comparing commissions across different time periods.',
      color: 'text-orange-500',
      bg: 'bg-orange-500/10',
    },
    {
      icon: ShoppingBag,
      title: isRtl ? 'متابعة الطلبات' : 'Order Tracking',
      desc: isRtl
        ? 'تصفح الطلبات في تبويبات: مدفوعة، مستلمة (هذا الشهر)، مستلمة (الشهر الماضي)، مُسوّاة، وملغاة. مع عرض تفاصيل كل طلب: صورة المنتج، العنوان، رقم الطلب، المبلغ، والعمولة.'
        : 'Browse orders in tabs: paid, received (this month), received (last month), settled, and cancelled. With full order details: product image, title, order number, amount, and commission.',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
    },
    {
      icon: Link,
      title: isRtl ? 'توليد روابط الأفلييت' : 'Affiliate Link Generator',
      desc: isRtl
        ? 'حوّل رابط أي منتج AliExpress إلى رابط عمولة مختصر بنقرة واحدة. اختر معرّف التتبع من حساباتك المرتبطة وانسخ الرابط بسرعة للمشاركة.'
        : 'Convert any AliExpress product link into a shortened affiliate link with one click. Choose your tracking ID from linked accounts and quickly copy the link for sharing.',
      color: 'text-green-500',
      bg: 'bg-green-500/10',
    },
    {
      icon: Settings,
      title: isRtl ? 'الإعدادات المتقدمة' : 'Advanced Settings',
      desc: isRtl
        ? 'أدخل بيانات AliExpress API (App Key وApp Secret) واختبرها مباشرة. تبديل بين الوضع الفاتح والداكن، اختيار اللغة مع دعم كامل لـ RTL.'
        : 'Enter AliExpress API credentials (App Key and App Secret) and test them directly. Toggle between light and dark mode, choose language with full RTL support.',
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {isRtl ? 'كل ما تحتاجه لإدارة عمولاتك' : 'Everything You Need to Manage Your Commissions'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            {isRtl
              ? 'اكتشف كيف يمكن لتطبيق Ali Affiliate أن يغير طريقة إدارتك لبرنامج AliExpress Affiliate.'
              : 'Discover how Ali Affiliate can transform the way you manage your AliExpress Affiliate program.'}
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8"
        >
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="bg-card rounded-2xl p-6 md:p-8 premium-shadow border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <div className={`w-14 h-14 rounded-xl ${feat.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${feat.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {feat.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function AliAffiliateGallery() {
  const { lang } = useI18n();
  const isRtl = lang === 'ar';

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: isRtl ? 'rtl' : 'ltr', align: 'center', skipSnaps: false },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="gallery" className="py-24 overflow-hidden relative">
      <div className="absolute inset-0 hero-gradient opacity-50 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {isRtl ? 'نظرة داخل التطبيق' : 'Inside the App'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            {isRtl
              ? 'واجهة داكنة وعصرية مصممة خصيصاً لمنتسبي AliExpress Affiliate'
              : 'A sleek dark interface designed specifically for AliExpress Affiliate members'}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="overflow-hidden py-10" ref={emblaRef}>
            <div className="flex touch-pan-y" style={{ marginLeft: 'calc(1rem * -1)' }}>
              {screenshots.map((src, index) => (
                <div
                  className="flex-[0_0_80%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_22%] min-w-0 pl-4 relative"
                  key={index}
                >
                  <div className="device-mockup mx-auto transition-transform duration-500 hover:scale-105">
                    <img
                      src={src}
                      alt={`Ali Affiliate screenshot ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              onClick={scrollPrev}
              data-testid="button-gallery-prev"
            >
              {isRtl ? <ChevronRight /> : <ChevronLeft />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              onClick={scrollNext}
              data-testid="button-gallery-next"
            >
              {isRtl ? <ChevronLeft /> : <ChevronRight />}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function AliAffiliate() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AliAffiliateHero />
        <AliAffiliateFeatures />
        <AliAffiliateGallery />
        <Contact appName="Ali Affiliate" appIcon={aliIcon} appTagline="Rabah coupons" />
      </main>
      <Footer />
    </div>
  );
}

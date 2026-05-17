import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ar' | 'en';

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    'nav.features': 'المميزات',
    'nav.gallery': 'الصور',
    'nav.contact': 'اتصل بنا',
    'nav.download': 'تحميل التطبيق',
    
    'hero.badge': 'الإصدار 1.1.0 متاح الآن',
    'hero.title': 'أفضل العروض والأسعار بضغطة زر واحدة',
    'hero.subtitle': 'تطبيق يساعدك في الحصول على أفضل سعر ممكن لأي منتج من منتجات علي اكسبراس بضغطة زر واحدة، انسخ رابط المنتج، قم بلصقه في التطبيق، وتمتع بأفضل الخصومات، تحديث للعروض الرائجة و الكوبونات بشكل دوري، حمل التطبيق ووفر أموالك!',
    'hero.size': 'الحجم 43.65 Mo',
    'hero.android': 'يدعم Android',
    'hero.dev': 'تطوير: Rabah coupons',
    'hero.download.apk': 'تحميل مباشر (APK)',
    'hero.download.play': 'Google Play',
    'hero.download.apkpure': 'Uptodown',
    
    'features.title': 'كل ما تحتاجه لتتسوق بذكاء',
    'features.subtitle': 'اكتشف كيف يمكن لتطبيق Offres 365 أن يغير طريقة تسوقك للأبد.',
    'feat.links.title': 'احصل على 8 عروض حصرية لكل منتج!',
    'feat.links.desc': 'كل رابط قد يعطيك خصماً مختلفاً (Super Deals، Bundle، Coin وغيرها)',
    'feat.coupons.title': 'كودات خصم جاهزة',
    'feat.coupons.desc': 'كوبونات مناسبة لسعر المنتج، تنسخها بلمسة واحدة',
    'feat.price.title': 'السعر',
    'feat.price.desc': 'التطبيق يقوم بجلب السعر الحالي والسعر الاصلي، بالاضافة الى السعر النهائي بعد تطبيق جميع الخصومات والكوبونات',
    'feat.details.title': 'تفاصيل شاملة للمنتج',
    'feat.details.desc': 'صورة، عنوان، سعر، نسبة الخصم، الطلبات، تقييم المتجر وتفاصيل الشحن',
    'feat.share.title': 'مشاركة سهلة',
    'feat.share.desc': 'قالب رسالة تفاصيل المنتج والعرض جاهز لتشاركه مباشرة',
    'feat.trending.title': 'عروض رائجة يومياً',
    'feat.trending.desc': 'عروض مختارة بعناية يتم تحديثها يومياً حسب بلدك',
    'feat.categories.title': 'رموز ترويجية مصنفة',
    'feat.categories.desc': 'رموز ترويجية حصرية على تطبيقنا يتم تحديثها بشكل دوري، بالاضافة الى اقتراح كوبونات مناسبة لكل عرض',
    'feat.countries.title': 'يدعم 7 دول',
    'feat.countries.desc': 'عروض وكوبونات مخصصة لكل دولة لتوفير أقصى',
    'feat.darkmode.title': 'الوضع الليلي واللغات',
    'feat.darkmode.desc': 'يدعم التطبيق الوضع الليلي واللغتين العربية والإنجليزية',

    'gallery.title': 'نظرة داخل التطبيق',
    'gallery.subtitle': 'واجهة عصرية وسهلة الاستخدام مصممة لراحتك',

    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'هل لديك استفسار أو اقتراح؟ يسعدنا سماع ذلك.',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'رسالتك',
    'contact.submit': 'إرسال الرسالة',
    'contact.submitting': 'جاري الإرسال...',
    'contact.success': 'تم إرسال رسالتك بنجاح!',

    'footer.rights': 'جميع الحقوق محفوظة © Offres 365',
    'nav.language': 'اللغة',
    'nav.appearance': 'المظهر',
    'nav.delete_account': 'حذف الحساب',
    'nav.privacy_policy': 'سياسة الخصوصية',
    'delete.confirm': 'الرجاء إدخال بياناتك لحذف حسابك نهائياً.',
    'delete.success': 'تم حذف الحساب بنجاح',
    'delete.error': 'خطأ في حذف الحساب',
    'password': 'كلمة المرور',
  },
  en: {
    'nav.features': 'Features',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.download': 'Download App',
    'nav.language': 'Language',
    'nav.appearance': 'Appearance',
    'nav.delete_account': 'Delete Account',
    'nav.privacy_policy': 'Privacy Policy',
    'delete.confirm': 'Please enter your credentials to permanently delete your account.',
    'delete.success': 'Account deleted successfully',
    'delete.error': 'Error deleting account',
    'password': 'Password',
    
    'hero.badge': 'Version 1.1.0 Available Now',
    'hero.title': 'The Best Deals & Prices with One Click',
    'hero.subtitle': 'An app that helps you get the best possible price for any product on AliExpress with just one click. \n Copy the product link, paste it into the app, and enjoy the best discounts. Get regular updates on trending deals and coupons. \n Download the app and start saving money!',
    'hero.size': 'Size: 43.65 Mo',
    'hero.android': 'Supports Android',
    'hero.dev': 'Developer: Rabah coupons',
    'hero.download.apk': 'Direct Download (APK)',
    'hero.download.play': 'Google Play',
    'hero.download.apkpure': 'Uptodown',
    
    'features.title': 'Everything you need to shop smarter',
    'features.subtitle': 'Discover how Offres 365 can change the way you shop forever.',
    'feat.links.title': 'Get 8 exclusive offers for every product!',
    'feat.links.desc': 'Each link might give you a different discount (Super Deals, Bundle, Coin, etc.)',
    'feat.coupons.title': 'Ready-to-use Coupons',
    'feat.coupons.desc': 'Discount codes tailored to the product price, copied with one touch.',
    'feat.price.title': 'Price',
    'feat.price.desc': 'The app retrieves the current price and the original price, along with the final price after applying all discounts and coupons.',
    'feat.details.title': 'Comprehensive Details',
    'feat.details.desc': 'Image, title, original price, discount %, orders, store rating, and shipping.',
    'feat.share.title': 'Easy Sharing',
    'feat.share.desc': 'Ready-made message templates with offer details to share instantly.',
    'feat.trending.title': 'Daily Trending Offers',
    'feat.trending.desc': 'Carefully selected deals updated daily based on your country',
    'feat.categories.title': 'Categorized promo codes',
    'feat.categories.desc': 'Exclusive promo codes on our app, updated regularly, plus suggested coupons tailored for each deal.',
    'feat.countries.title': 'Supports 7 Countries',
    'feat.countries.desc': 'Customized offers and coupons for each country to maximize savings.',
    'feat.darkmode.title': 'Dark Mode & Bilingual',
    'feat.darkmode.desc': 'The app fully supports Dark Mode, Arabic, and English languages.',

    'gallery.title': 'Inside the App',
    'gallery.subtitle': 'A modern, user-friendly interface designed for your comfort.',

    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Have a question or suggestion? We would love to hear from you.',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.message': 'Your Message',
    'contact.submit': 'Send Message',
    'contact.submitting': 'Sending...',
    'contact.success': 'Your message has been sent successfully!',

    'footer.rights': 'All rights reserved © Offres 365',
  }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    return (localStorage.getItem('app_lang') as Language) || 'ar';
  });

  const setLang = (newLang: Language) => {
    localStorage.setItem('app_lang', newLang);
    window.location.reload();
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('app_lang') as Language;
    const currentLang = savedLang || 'ar';
    
    // Update HTML dir and lang attributes
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    document.title = currentLang === 'ar' ? 'Offres 365 | عروض 365' : 'Offres 365 | Best Deals';
    
    // Ensure state is synced if needed, though reload handles most
    if (lang !== currentLang) {
      setLangState(currentLang);
    }
  }, [lang]);

  const t = (key: string): string => {
    // @ts-ignore
    return translations[lang][key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

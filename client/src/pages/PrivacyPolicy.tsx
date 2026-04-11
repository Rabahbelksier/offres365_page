import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  const { t, lang } = useI18n();

  const content = {
    ar: {
      title: "سياسة الخصوصية",
      intro: "مقدمة",
      introText: "مرحبًا بك في تطبيق Offres365. نحن نلتزم بحماية خصوصيتك وبياناتك الشخصية. توضح هذه السياسة كيفية جمع المعلومات واستخدامها وحمايتها عند استخدامك للتطبيق.",
      section1: "المعلومات التي نجمعها",
      section1Item1: "1. المعلومات التي تقدمها مباشرةً:",
      section1List: [
        "الاسم الأول والاسم الأخير",
        "عنوان البريد الإلكتروني",
        "تاريخ الميلاد",
        "كلمة المرور (يتم تشفيرها وتخزينها بشكل آمن)",
        "بلد الشحن"
      ],
      section1Item2: "2. المعلومات التي يتم جمعها تلقائيًا:",
      section1List2: [
        "بيانات استخدام التطبيق (الصفحات التي تزورها، الميزات المستخدمة)",
        "معلومات الجهاز (نوع الجهاز، نظام التشغيل)",
        "عنوان IP لأغراض أمنية وتقنية"
      ],
      section2: "كيفية استخدام المعلومات",
      section2Text: "نستخدم المعلومات التي نجمعها للأغراض التالية:",
      section2List: [
        "إنشاء حسابك وإدارته",
        "تقديم العروض المناسبة لبلدك",
        "إرسال إشعارات مهمة تتعلق بالتطبيق",
        "تحسين أداء التطبيق وتجربة المستخدم",
        "الرد على استفساراتك وطلبات الدعم"
      ],
      section3: "حماية البيانات",
      section3List: [
        "تشفير كلمات المرور قبل التخزين",
        "استخدام بروتوكول HTTPS المشفر لنقل البيانات",
        "تخزين البيانات على خوادم آمنة",
        "تقييد الوصول إلى البيانات على الموظفين المصرح لهم فقط"
      ],
      section4: "مشاركة البيانات مع أطراف ثالثة",
      section4Text: "نحن لا نبيع بياناتك الشخصية ولا نشاركها لأغراض تجارية. قد تتم المشاركة فقط في الحالات التالية:",
      section4List: [
        "مع مزودي الخدمات التقنية اللازمين لتشغيل التطبيق",
        "عند وجود التزام قانوني رسمي",
        "لاستخدام واجهة برمجة تطبيقات شركاء العروض لجلب بيانات المنتجات (دون مشاركة بياناتك الشخصية)"
      ],
      section5: "الروابط الخارجية وخدمة العروض",
      section5Text: "يستخدم التطبيق واجهات برمجة تطبيقات الشركاء لجلب بيانات المنتجات وتوليد روابط العروض. عند الضغط على أي رابط عرض، سيتم توجيهك إلى موقع خارجي يخضع لسياسة الخصوصية الخاصة به. نحن غير مسؤولين عن محتوى أو سياسات المواقع الخارجية.",
      section6: "حقوقك",
      section6List: [
        "الوصول إلى بياناتك الشخصية",
        "طلب تصحيح المعلومات غير الدقيقة",
        "طلب حذف حسابك وبياناتك نهائيًا",
        "طلب نسخة من بياناتك"
      ],
      section6Contact: "لممارسة هذه الحقوق، يرجى التواصل معنا عبر: offres365contact@gmail.com",
      section7: "التخزين المحلي",
      section7Text: "قد يستخدم التطبيق التخزين المحلي على جهازك لحفظ تفضيلاتك وبيانات الجلسة، ويتم تخزين هذه البيانات محليًا فقط.",
      section8: "خصوصية الأطفال",
      section8Text: "التطبيق مخصص للمستخدمين الذين تبلغ أعمارهم 18 عامًا أو أكثر. نحن لا نجمع بيانات الأطفال دون قصد.",
      section9: "التعديلات على السياسة",
      section9Text: "نحتفظ بالحق في تحديث هذه السياسة في أي وقت. سيتم إخطارك بأي تغييرات جوهرية من خلال إشعارات داخل التطبيق. استمرار استخدامك للتطبيق بعد التحديث يعني موافقتك على النسخة المعدلة.",
      contact: "التواصل معنا",
      contactEmail: "📧 البريد الإلكتروني: offres365contact@gmail.com",
      contactWeb: "🌐 الموقع الإلكتروني: https://offres365_page.up.railway.app"
    },
    en: {
      title: "Privacy Policy",
      intro: "Introduction",
      introText: "Welcome to Offres365. We are committed to protecting your privacy and personal data. This policy explains how we collect, use, and protect information when you use the app.",
      section1: "Information We Collect",
      section1Item1: "1. Information you provide directly:",
      section1List: [
        "First name and last name",
        "Email address",
        "Date of birth",
        "Password (encrypted and stored securely)",
        "Shipping country"
      ],
      section1Item2: "2. Information collected automatically:",
      section1List2: [
        "App usage data (pages visited, features used)",
        "Device information (device type, OS)",
        "IP address for security and technical purposes"
      ],
      section2: "How We Use Information",
      section2Text: "We use the information we collect for the following purposes:",
      section2List: [
        "Creating and managing your account",
        "Providing offers suitable for your country",
        "Sending important notifications regarding the app",
        "Improving app performance and user experience",
        "Responding to your inquiries and support requests"
      ],
      section3: "Data Protection",
      section3List: [
        "Password encryption before storage",
        "Using encrypted HTTPS protocol for data transfer",
        "Storing data on secure servers",
        "Restricting data access to authorized personnel only"
      ],
      section4: "Data Sharing with Third Parties",
      section4Text: "We do not sell your personal data or share it for commercial purposes. Sharing may only occur in the following cases:",
      section4List: [
        "With technical service providers necessary for app operation",
        "When there is a formal legal obligation",
        "To use offer partner APIs to fetch product data (without sharing your personal data)"
      ],
      section5: "External Links and Offer Service",
      section5Text: "The app uses partner APIs to fetch product data and generate offer links. When clicking any offer link, you will be directed to an external site subject to its own privacy policy. We are not responsible for the content or policies of external sites.",
      section6: "Your Rights",
      section6List: [
        "Access to your personal data",
        "Request correction of inaccurate information",
        "Request permanent deletion of your account and data",
        "Request a copy of your data"
      ],
      section6Contact: "To exercise these rights, please contact us at: offres365contact@gmail.com",
      section7: "Local Storage",
      section7Text: "The app may use local storage on your device to save your preferences and session data, and this data is stored locally only.",
      section8: "Children's Privacy",
      section8Text: "The app is intended for users aged 18 or older. We do not intentionally collect data from children.",
      section9: "Policy Amendments",
      section9Text: "We reserve the right to update this policy at any time. You will be notified of any material changes through in-app notifications. Your continued use of the app after the update means your consent to the modified version.",
      contact: "Contact Us",
      contactEmail: "📧 Email: offres365contact@gmail.com",
      contactWeb: "🌐 Website: https://offres365_page.up.railway.app"
    }
  };

  const t_policy = lang === 'ar' ? content.ar : content.en;

  return (
    <div className="min-h-screen bg-background flex flex-col pt-20">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-primary">{t_policy.title}</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t_policy.intro}</h2>
              <p className="text-muted-foreground">{t_policy.introText}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t_policy.section1}</h2>
              <h3 className="text-xl font-medium mb-2">{t_policy.section1Item1}</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {t_policy.section1List.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <h3 className="text-xl font-medium mt-4 mb-2">{t_policy.section1Item2}</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {t_policy.section1List2.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t_policy.section2}</h2>
              <p className="mb-4 text-muted-foreground">{t_policy.section2Text}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {t_policy.section2List.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t_policy.section3}</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {t_policy.section3List.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t_policy.section4}</h2>
              <p className="mb-4 text-muted-foreground">{t_policy.section4Text}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {t_policy.section4List.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t_policy.section5}</h2>
              <p className="text-muted-foreground">{t_policy.section5Text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t_policy.section6}</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {t_policy.section6List.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 font-medium">{t_policy.section6Contact}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t_policy.section7}</h2>
              <p className="text-muted-foreground">{t_policy.section7Text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t_policy.section8}</h2>
              <p className="text-muted-foreground">{t_policy.section8Text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t_policy.section9}</h2>
              <p className="text-muted-foreground">{t_policy.section9Text}</p>
            </section>

            <section className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h2 className="text-2xl font-semibold mb-4">{t_policy.contact}</h2>
              <p className="text-lg mb-2">{t_policy.contactEmail}</p>
              <p className="text-lg">{t_policy.contactWeb}</p>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AliAffiliatePrivacyPolicy() {
  const { lang } = useI18n();

  const content = {
    ar: {
      title: "سياسة الخصوصية — Ali Affiliate",
      effectiveDate: "ساري من: أبريل 2025",
      highlights: [
        "لا نجمع أي بيانات شخصية إطلاقاً",
        "لا تحليلات ولا تتبّع من أي نوع",
        "مفاتيح API الخاصة بك مُخزَّنة محلياً ومشفّرة على جهازك",
        "لا نُرسل بياناتك إلى خوادم خارجية",
      ],
      sections: [
        {
          title: "المعلومات التي نجمعها",
          content: "لا يجمع تطبيق Ali Affiliate أي معلومات تعريف شخصية ولا يخزّنها ولا يُرسلها. لا نجمع الأسماء أو عناوين البريد الإلكتروني أو أرقام الهواتف أو بيانات الموقع أو معرّفات الأجهزة أو أي معلومات شخصية أخرى.",
        },
        {
          title: "تخزين بيانات اعتماد API",
          content: "يُخزَّن مفتاح تطبيق AliExpress Affiliate وسرّه حصراً على جهازك باستخدام التخزين المحلي الآمن. هذه البيانات:",
          list: [
            "مُخزَّنة على جهازك فقط ولا تُرفع إلى أي خدمة سحابية.",
            "تُستخدم فقط لتوقيع طلبات API المُرسَلة إلى علي اكسبراس.",
            "تُنقل عبر HTTPS إلى الخادم الخلفي للتطبيق لغرض وحيد هو توليد توقيعات طلبات AliExpress API.",
            "لا يُخزّنها الخادم الخلفي ولا يسجّلها ولا يحتفظ بها.",
            "تبقى تحت سيطرتك الكاملة — يمكنك حذفها في أي وقت من شاشة الإعدادات.",
          ],
        },
        {
          title: "كيف تتدفق البيانات",
          content: "عند طلب البيانات (طلبات، عمولات، روابط أفلييت)، يُرسل التطبيق بيانات اعتمادك إلى خادم خلفي آمن عبر HTTPS. يستخدم الخادم هذه البيانات فقط لتوقيع طلب API، ثم يُعيّد الطلب فوراً إلى AliExpress ويُعيد النتيجة إلى جهازك. لا يُخزَّن أي شيء في الخادم الخلفي.",
        },
        {
          title: "لا تحليلات ولا تتبّع",
          content: "لا يستخدم Ali Affiliate أي حزم تحليلات أو أدوات الإبلاغ عن الأعطال أو أُطر الإعلانات أو مكتبات التتبّع. لا نراقب كيفية استخدامك للتطبيق. لا توجد حزم طرف ثالث تجمع بيانات سلوكية.",
        },
        {
          title: "عدم مشاركة البيانات مع أطراف ثالثة",
          content: "لا نبيع أي معلومات عن المستخدمين ولا نتاجر بها ولا نؤجّرها ولا نشاركها مع أطراف ثالثة. التواصل الخارجي الوحيد الذي يُجريه التطبيق هو مع AliExpress Affiliate API نيابةً عنك، باستخدام البيانات التي قدّمتها.",
        },
        {
          title: "أمان البيانات",
          content: "نحن نأخذ أمان بيانات اعتمادك على محمل الجد:",
          list: [
            "يتم تشفير جميع الاتصالات الشبكية باستخدام HTTPS/TLS.",
            "تُخزَّن بيانات الاعتماد محلياً باستخدام آليات التخزين الآمنة للمنصة.",
            "لا يحتفظ الخادم الخلفي ببيانات اعتمادك ولا يسجّلها.",
            "لا تُرسَل أي بيانات إلى أي خادم آخر غير AliExpress API.",
          ],
        },
        {
          title: "خصوصية الأطفال",
          content: "لا يستهدف Ali Affiliate الأفراد الذين تقل أعمارهم عن 13 عاماً. لا نجمع عن علم أي معلومات من الأطفال دون سن 13. إن كنت تعتقد أن طفلاً استخدم هذا التطبيق، فاعلم أنه لم تُجمع أي بيانات شخصية.",
        },
        {
          title: "التغييرات على هذه السياسة",
          content: "قد نُحدّث سياسة الخصوصية هذه من وقت لآخر. ستنعكس أي تغييرات في التطبيق. نشجّعك على مراجعة هذه السياسة بصفة دورية. يُعدّ استمرار استخدامك للتطبيق بعد أي تغييرات موافقةً على السياسة المحدّثة.",
        },
        {
          title: "التواصل",
          content: "إن كانت لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه أو طريقة التعامل مع معلوماتك، يُرجى التواصل مع المطوّر عبر صفحة التطبيق في متجر التطبيقات.",
        },
      ],
      note: "هذه الوثيقة قابلة للتغيير. يُرجى مراجعتها بصفة دورية.",
    },
    en: {
      title: "Privacy Policy — Ali Affiliate",
      effectiveDate: "Effective: April 2025",
      highlights: [
        "We collect absolutely no personal data",
        "No analytics or tracking of any kind",
        "Your API keys are stored locally and encrypted on your device",
        "We do not send your data to external servers",
      ],
      sections: [
        {
          title: "Information We Collect",
          content: "Ali Affiliate does not collect, store, or transmit any personally identifiable information. We do not collect names, email addresses, phone numbers, location data, device identifiers, or any other personal information.",
        },
        {
          title: "API Credential Storage",
          content: "Your AliExpress Affiliate App Key and Secret are stored exclusively on your device using secure local storage. This data:",
          list: [
            "Stored on your device only and never uploaded to any cloud service.",
            "Used solely to sign API requests sent to AliExpress.",
            "Transmitted via HTTPS to the app's backend server for the sole purpose of generating AliExpress API request signatures.",
            "Never stored, logged, or retained by the backend server.",
            "Remains fully under your control — you can delete it at any time from the Settings screen.",
          ],
        },
        {
          title: "How Data Flows",
          content: "When you request data (orders, commissions, affiliate links), the app sends your credentials to a secure backend server via HTTPS. The server uses these credentials only to sign the API request, then immediately forwards the request to AliExpress and returns the result to your device. Nothing is stored on the backend server.",
        },
        {
          title: "No Analytics or Tracking",
          content: "Ali Affiliate does not use any analytics packages, crash reporting tools, advertising frameworks, or tracking libraries. We do not monitor how you use the app. There are no third-party packages collecting behavioral data.",
        },
        {
          title: "No Third-Party Data Sharing",
          content: "We do not sell, trade, rent, or share any user information with third parties. The only external communication the app makes is with the AliExpress Affiliate API on your behalf, using the credentials you provided.",
        },
        {
          title: "Data Security",
          content: "We take the security of your credentials seriously:",
          list: [
            "All network communications are encrypted using HTTPS/TLS.",
            "Credentials are stored locally using platform-secure storage mechanisms.",
            "The backend server does not retain or log your credentials.",
            "No data is sent to any server other than the AliExpress API.",
          ],
        },
        {
          title: "Children's Privacy",
          content: "Ali Affiliate is not directed at individuals under the age of 13. We do not knowingly collect any information from children under 13. If you believe a child has used this app, please note that no personal data was collected.",
        },
        {
          title: "Changes to This Policy",
          content: "We may update this Privacy Policy from time to time. Any changes will be reflected in the app. We encourage you to review this policy periodically. Your continued use of the app after any changes constitutes your consent to the updated policy.",
        },
        {
          title: "Contact",
          content: "If you have any questions or concerns about this Privacy Policy or how your information is handled, please contact the developer via the app's page on the App Store.",
        },
      ],
      note: "This document is subject to change. Please review it periodically.",
    },
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
          <h1 className="text-4xl font-bold mb-2 text-primary">{t_policy.title}</h1>
          <p className="text-muted-foreground mb-8">{t_policy.effectiveDate}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {t_policy.highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-primary/5 border border-primary/10 rounded-xl px-4 py-3">
                <span className="text-primary font-bold text-lg">✔</span>
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            {t_policy.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <p className="text-muted-foreground">{section.content}</p>
                {section.list && (
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                    {section.list.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <p className="text-muted-foreground italic">{t_policy.note}</p>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

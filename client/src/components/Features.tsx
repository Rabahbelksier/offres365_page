import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { 
  Link, Ticket, Calculator, ListFilter, 
  MessageSquare, TrendingUp, Tags, Globe, Moon 
} from "lucide-react";

export function Features() {
  const { t } = useI18n();

  const features = [
    { icon: Link, titleKey: 'feat.links.title', descKey: 'feat.links.desc', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { icon: Ticket, titleKey: 'feat.coupons.title', descKey: 'feat.coupons.desc', color: 'text-primary', bg: 'bg-primary/10' },
    { icon: Calculator, titleKey: 'feat.price.title', descKey: 'feat.price.desc', color: 'text-green-500', bg: 'bg-green-500/10' },
    { icon: ListFilter, titleKey: 'feat.details.title', descKey: 'feat.details.desc', color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { icon: MessageSquare, titleKey: 'feat.share.title', descKey: 'feat.share.desc', color: 'text-pink-500', bg: 'bg-pink-500/10' },
    { icon: TrendingUp, titleKey: 'feat.trending.title', descKey: 'feat.trending.desc', color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { icon: Tags, titleKey: 'feat.categories.title', descKey: 'feat.categories.desc', color: 'text-teal-500', bg: 'bg-teal-500/10' },
    { icon: Globe, titleKey: 'feat.countries.title', descKey: 'feat.countries.desc', color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
    { icon: Moon, titleKey: 'feat.darkmode.title', descKey: 'feat.darkmode.desc', color: 'text-slate-500', bg: 'bg-slate-500/10' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
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
            {t('features.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            {t('features.subtitle')}
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
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
                  {t(feat.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(feat.descKey)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

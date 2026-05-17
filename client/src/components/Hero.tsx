import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Download, Smartphone, Star, ChevronRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import featureBanner from '@assets/1000102621_1776265752452.png';

export function Hero() {
  const { t, lang } = useI18n();
  const isRtl = lang === 'ar';

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-8 ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Content */}
          <motion.div 
            className="flex-1 text-center lg:text-start"
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 rounded-full bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
              <Star className="w-3.5 h-3.5 mr-2 inline-block fill-primary" />
              {t('hero.badge')}
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              {t('hero.title').split(' ').map((word, i) => (
                <span key={i} className={i > 3 ? "text-primary inline-block" : "inline-block"}>
                  {word}&nbsp;
                </span>
              ))}
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Button 
                size="lg" 
                className="w-full sm:w-auto h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 transition-all hover:shadow-primary/40 hover:-translate-y-1 text-lg group"



                
                
                onClick={() => window.open('https://raw.githubusercontent.com/Rabahbelksier/File_app/main/Offers%20365%20V1.1.0.apk?raw=true', '_blank')}
              >
                <Download className={`${isRtl ? 'ml-2' : 'mr-2'} w-5 h-5`} />
                {t('hero.download.apk')}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto h-14 px-8 rounded-full border-2 hover:bg-secondary transition-all hover:-translate-y-1 text-lg group"


                

                
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.offers365.app', '_blank')}
              >
                <Smartphone className={`${isRtl ? 'ml-2' : 'mr-2'} w-5 h-5 group-hover:text-primary transition-colors`} />
                {t('hero.download.play')}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto h-14 px-8 rounded-full border-2 hover:bg-secondary transition-all hover:-translate-y-1 text-lg group"


                

                
                onClick={() => window.open('https://offers-365.en.uptodown.com/android', '_blank')}
                data-testid="button-download-apkpure"
              >
                <ExternalLink className={`${isRtl ? 'ml-2' : 'mr-2'} w-5 h-5 group-hover:text-primary transition-colors`} />
                {t('hero.download.apkpure')}
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                {t('hero.size')}
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-primary" />
                {t('hero.android')}
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                {t('hero.dev')}
              </div>
            </div>
          </motion.div>

          {/* Feature Banner */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="rounded-3xl overflow-hidden premium-shadow border border-border/50">
              <img
                src={featureBanner}
                alt="Offres 365 Feature"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

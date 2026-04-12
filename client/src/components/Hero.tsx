import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Download, Smartphone, Star, ChevronRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Main mockup images
import mockupAr from '@assets/IMG_20260227_043809_1772163543644.jpg';
import mockupEn from '@assets/IMG_20260227_043728_1772163543667.jpg';

export function Hero() {
  const { t, lang } = useI18n();
  const isRtl = lang === 'ar';
  const mockupImg = isRtl ? mockupAr : mockupEn;

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



                
                
                onClick={() => window.open('https://drive.usercontent.google.com/download?id=1NPVMMFFSzwSdAdDt2lVcey0KuvsB0G04&export=download&authuser=0', '_blank')}
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


                

                
                onClick={() => window.open('https://apkpure.com/p/com.offers365.app', '_blank')}
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

          {/* Mockup */}
          <motion.div 
            className="flex-1 w-full max-w-sm lg:max-w-md xl:max-w-lg perspective-1000"
            initial={{ opacity: 0, scale: 0.8, rotateY: isRtl ? -15 : 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative mx-auto w-[280px] sm:w-[320px]">
              {/* Decorative background blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-3xl -z-10"></div>
              
              <div className="device-mockup relative z-10 aspect-[9/19]">
                <img 
                  src={mockupImg} 
                  alt="App interface mockup" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

// Static Imports for Arabic
import ar1 from '@assets/Screenshot_2026-02-27-03-51-20-14_2c05e4041aef5218eaa893165b90_1772162653754.jpg';
import ar2 from '@assets/Screenshot_2026-02-27-03-52-17-25_2c05e4041aef5218eaa893165b90_1772162653777.jpg';
import ar3 from '@assets/Screenshot_2026-02-27-03-53-22-98_2c05e4041aef5218eaa893165b90_1772162653786.jpg';
import ar4 from '@assets/Screenshot_2026-02-27-03-53-38-56_2c05e4041aef5218eaa893165b90_1772162653810.jpg';
import ar5 from '@assets/Screenshot_2026-02-27-03-53-46-60_2c05e4041aef5218eaa893165b90_1772162653851.jpg';
import ar6 from '@assets/Screenshot_2026-02-27-03-54-05-88_2c05e4041aef5218eaa893165b90_1772162653864.jpg';
import ar7 from '@assets/Screenshot_2026-02-27-03-54-30-50_2c05e4041aef5218eaa893165b90_1772162653885.jpg';

// Static Imports for English
import en1 from '@assets/Screenshot_2026-02-27-03-57-56-38_2c05e4041aef5218eaa893165b90_1772162653894.jpg';
import en2 from '@assets/Screenshot_2026-02-27-03-59-17-09_2c05e4041aef5218eaa893165b90_1772162653903.jpg';
import en3 from '@assets/Screenshot_2026-02-27-03-59-45-31_2c05e4041aef5218eaa893165b90_1772162653918.jpg';
import en4 from '@assets/Screenshot_2026-02-27-04-00-09-07_2c05e4041aef5218eaa893165b90_1772162653928.jpg';
import en5 from '@assets/Screenshot_2026-02-27-04-00-16-52_2c05e4041aef5218eaa893165b90_1772162653939.jpg';
import en6 from '@assets/Screenshot_2026-02-27-04-00-49-83_2c05e4041aef5218eaa893165b90_1772162653951.jpg';
import en7 from '@assets/Screenshot_2026-02-27-04-01-04-98_2c05e4041aef5218eaa893165b90_1772162653963.jpg';

const arImages = [ar1, ar2, ar3, ar4, ar5, ar6, ar7];
const enImages = [en1, en2, en3, en4, en5, en6, en7];

export function Gallery() {
  const { t, lang } = useI18n();
  const images = lang === 'ar' ? arImages : enImages;
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
            {t('gallery.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            {t('gallery.subtitle')}
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
              {images.map((src, index) => (
                <div 
                  className="flex-[0_0_80%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_22%] min-w-0 pl-4 relative" 
                  key={index}
                >
                  <div className="device-mockup mx-auto transition-transform duration-500 hover:scale-105">
                    <img 
                      src={src} 
                      alt={`App screenshot ${index + 1}`} 
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
            >
              {isRtl ? <ChevronRight /> : <ChevronLeft />}
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full w-12 h-12 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              onClick={scrollNext}
            >
              {isRtl ? <ChevronLeft /> : <ChevronRight />}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

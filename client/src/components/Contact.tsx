import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateContact } from "@/hooks/use-contacts";
import { useState } from "react";
import { Send } from "lucide-react";

export function Contact() {
  const { t, lang } = useI18n();
  const isRtl = lang === 'ar';
  const mutation = useCreateContact();
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData, {
      onSuccess: () => {
        setFormData({ name: '', email: '', message: '' });
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row gap-16 lg:gap-24 ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
          
          <motion.div 
            className="flex-1 lg:py-12"
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              {t('contact.subtitle')}
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  O
                </div>
                <div>
                  <h4 className="font-bold text-lg">Offres 365</h4>
                  <p className="text-muted-foreground">Rabah coupons</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-background rounded-3xl p-8 sm:p-10 premium-shadow border border-border/50">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">{t('contact.name')}</label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-14 rounded-xl bg-secondary/50 border-border focus-visible:ring-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">{t('contact.email')}</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-14 rounded-xl bg-secondary/50 border-border focus-visible:ring-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">{t('contact.message')}</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="resize-none rounded-xl bg-secondary/50 border-border focus-visible:ring-primary py-4"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={mutation.isPending}
                  className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 transition-all text-lg group mt-4"
                >
                  {mutation.isPending ? t('contact.submitting') : (
                    <>
                      <Send className={`${isRtl ? 'ml-2' : 'mr-2'} w-5 h-5 group-hover:scale-110 transition-transform`} />
                      {t('contact.submit')}
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

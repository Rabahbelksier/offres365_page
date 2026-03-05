import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Globe, Menu, Shield, UserMinus, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import appIcon from "@assets/icon_1772163543674.png";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "wouter";

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
  };

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <a className="flex items-center gap-2">
              <img 
                src={appIcon} 
                alt="Offres 365 Icon" 
                className="w-10 h-10 rounded-xl shadow-lg shadow-primary/30 object-contain"
              />
              <span className="font-display font-bold text-2xl tracking-tight text-foreground">
                Offres <span className="text-primary">365</span>
              </span>
            </a>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <a href="/#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{t('nav.features')}</a>
          <a href="/#gallery" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{t('nav.gallery')}</a>
          <a href="/#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{t('nav.contact')}</a>
        </nav>

        <div className="flex items-center gap-3">
          <Button className="hidden sm:flex rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:-translate-y-0.5">
            {t('nav.download')}
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={lang === 'ar' ? 'right' : 'left'} className="w-[300px] sm:w-[400px]">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-2xl font-display font-bold">
                  Offres <span className="text-primary">365</span>
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col gap-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t('nav.appearance')}</h3>
                  <div className="flex flex-col gap-2">
                    <Button 
                      variant="ghost" 
                      className="justify-start gap-3 h-12 rounded-xl"
                      onClick={() => setTheme('light')}
                    >
                      <Sun className="w-5 h-5" />
                      <span>Light Mode</span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="justify-start gap-3 h-12 rounded-xl"
                      onClick={() => setTheme('dark')}
                    >
                      <Moon className="w-5 h-5" />
                      <span>Dark Mode</span>
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t('nav.language')}</h3>
                  <Button 
                    variant="ghost" 
                    className="justify-start gap-3 h-12 rounded-xl w-full"
                    onClick={toggleLang}
                  >
                    <Globe className="w-5 h-5" />
                    <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
                  </Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Account & Safety</h3>
                  <div className="flex flex-col gap-2">
                    <Link href="/privacy-policy">
                      <Button variant="ghost" className="justify-start gap-3 h-12 rounded-xl w-full" onClick={() => setIsOpen(false)}>
                        <Shield className="w-5 h-5" />
                        <span>{t('nav.privacy_policy')}</span>
                      </Button>
                    </Link>
                    <Link href="/delete-account">
                      <Button variant="ghost" className="justify-start gap-3 h-12 rounded-xl w-full text-destructive hover:text-destructive hover:bg-destructive/10" onClick={() => setIsOpen(false)}>
                        <UserMinus className="w-5 h-5" />
                        <span>{t('nav.delete_account')}</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

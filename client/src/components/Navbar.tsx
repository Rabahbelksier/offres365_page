import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Globe, Menu, Shield, UserMinus, LayoutGrid, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import offresIcon from "@assets/icon_1772163543674.png";
import aliIcon from "@assets/icon_1776260788092.png";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "wouter";

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const isAliAffiliate = location.startsWith('/ali-affiliate');

  const toggleLang = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
  };

  const privacyPolicyPath = isAliAffiliate ? '/ali-affiliate/privacy-policy' : '/privacy-policy';

  const currentIcon = isAliAffiliate ? aliIcon : offresIcon;
  const currentName = isAliAffiliate ? (
    <>Ali <span className="text-primary">Affiliate</span></>
  ) : (
    <>Offres <span className="text-primary">365</span></>
  );

  const homeLink = isAliAffiliate ? '/ali-affiliate' : '/';

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href={homeLink}>
            <div className="flex items-center gap-2 cursor-pointer">
              <img 
                src={currentIcon} 
                alt={isAliAffiliate ? "Ali Affiliate Icon" : "Offres 365 Icon"}
                className="w-10 h-10 rounded-xl shadow-lg shadow-primary/30 object-contain"
              />
              <span className="font-display font-bold text-2xl tracking-tight text-foreground">
                {currentName}
              </span>
            </div>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <a href={`${homeLink}#features`} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{t('nav.features')}</a>
          <a href={`${homeLink}#gallery`} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{t('nav.gallery')}</a>
          <a href={`${homeLink}#contact`} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{t('nav.contact')}</a>
        </nav>

        <div className="flex items-center gap-3">
          <Button className="hidden sm:flex rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:-translate-y-0.5">
            {t('nav.download')}
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary" data-testid="button-menu-open">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={lang === 'ar' ? 'right' : 'left'} className="w-[300px] sm:w-[400px]">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-2xl font-display font-bold">
                  {currentName}
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
                      data-testid="button-theme-light"
                    >
                      <Sun className="w-5 h-5" />
                      <span>Light Mode</span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="justify-start gap-3 h-12 rounded-xl"
                      onClick={() => setTheme('dark')}
                      data-testid="button-theme-dark"
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
                    data-testid="button-language-toggle"
                  >
                    <Globe className="w-5 h-5" />
                    <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
                  </Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {lang === 'ar' ? 'كل التطبيقات' : 'All Apps'}
                  </h3>
                  <div className="flex flex-col gap-2">
                    <Link href="/">
                      <Button
                        variant={!isAliAffiliate ? "secondary" : "ghost"}
                        className="justify-start gap-3 h-12 rounded-xl w-full"
                        onClick={() => setIsOpen(false)}
                        data-testid="link-app-offres365"
                      >
                        <img src={offresIcon} alt="Offres 365" className="w-6 h-6 rounded-lg object-contain" />
                        <span>Offres 365</span>
                        <ChevronRight className="w-4 h-4 ml-auto opacity-50" />
                      </Button>
                    </Link>
                    <Link href="/ali-affiliate">
                      <Button
                        variant={isAliAffiliate ? "secondary" : "ghost"}
                        className="justify-start gap-3 h-12 rounded-xl w-full"
                        onClick={() => setIsOpen(false)}
                        data-testid="link-app-ali-affiliate"
                      >
                        <img src={aliIcon} alt="Ali Affiliate" className="w-6 h-6 rounded-lg object-contain" />
                        <span>Ali Affiliate</span>
                        <ChevronRight className="w-4 h-4 ml-auto opacity-50" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {lang === 'ar' ? 'القانونية والمعلومات' : 'Legal & Info'}
                  </h3>
                  <div className="flex flex-col gap-2">
                    <Link href={privacyPolicyPath}>
                      <Button variant="ghost" className="justify-start gap-3 h-12 rounded-xl w-full" onClick={() => setIsOpen(false)} data-testid="link-privacy-policy">
                        <Shield className="w-5 h-5" />
                        <span>{t('nav.privacy_policy')}</span>
                      </Button>
                    </Link>
                    {!isAliAffiliate && (
                      <Link href="/delete-account">
                        <Button variant="ghost" className="justify-start gap-3 h-12 rounded-xl w-full text-destructive hover:text-destructive hover:bg-destructive/10" onClick={() => setIsOpen(false)} data-testid="link-delete-account">
                          <UserMinus className="w-5 h-5" />
                          <span>{t('nav.delete_account')}</span>
                        </Button>
                      </Link>
                    )}
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

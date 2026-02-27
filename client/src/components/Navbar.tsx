import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Globe } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const { theme, setTheme } = useTheme();

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
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-primary/70 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
            O
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-foreground">
            Offres <span className="text-primary">365</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{t('nav.features')}</a>
          <a href="#gallery" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{t('nav.gallery')}</a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{t('nav.contact')}</a>
        </nav>

        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleLang}
            className="rounded-full hover:bg-primary/10 hover:text-primary"
            title="Toggle Language"
          >
            <Globe className="w-5 h-5" />
            <span className="sr-only">Language</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full hover:bg-primary/10 hover:text-primary"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button className="hidden sm:flex rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:-translate-y-0.5">
            {t('nav.download')}
          </Button>
        </div>
      </div>
    </motion.header>
  );
}

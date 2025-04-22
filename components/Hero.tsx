'use client';

import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown } from "lucide-react";
import Button from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  const { t } = useLanguage();

  const scrollToSubscribe = () => {
    const element = document.getElementById('subscribe-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 relative">
      <div className="px-4 flex flex-col items-center justify-center gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 px-4 py-2 rounded-full text-sm lg:text-base font-medium flex items-center gap-2"
        >
          {t('Hero.pill')}
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-center"
        >
          {t('Hero.title1')} <br /> 
          <span className="italic font-noto-serif">{t('Hero.title2.prefix')}</span> {t('Hero.title2.highlight')}
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <Button onClick={scrollToSubscribe}>
            {t('Hero.cta')}
            <ArrowDown className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 
'use client';

import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  const scrollToSubscribe = () => {
    const element = document.getElementById('subscribe-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 relative">
      <div className="px-4 flex flex-col items-center justify-center gap-6">
        <div className="border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 px-4 py-2 rounded-full text-sm lg:text-base font-medium flex items-center gap-2">
          {t('Hero.pill')}
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-center">
          {t('Hero.title1')} <br /> 
          <span className="italic font-noto-serif">{t('Hero.title2.prefix')}</span> {t('Hero.title2.highlight')}
        </h1>
        <button
          onClick={scrollToSubscribe}
          className="flex items-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors"
        >
          {t('Hero.cta')}
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
} 
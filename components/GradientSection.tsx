'use client';

import { useLanguage } from "@/contexts/LanguageContext";

export function GradientSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 z-0 dark:from-purple-800 dark:via-fuchsia-700 dark:to-pink-800"></div>
      <div className="max-w-screen-xl mx-auto relative z-10 px-6 md:px-10 text-left">
        <h2 className="text-5xl sm:text-7xl lg:text-8xl leading-snug font-bold tracking-tight text-white sm:text-left">
          {t('Message.line1')}
        </h2>
        <h2 className="text-5xl sm:text-7xl lg:text-8xl leading-snug font-bold tracking-tight text-white sm:text-center">
          {t('Message.line2.prefix')} <span className="italic font-noto-serif">{t('Message.line2.highlight')}</span>
        </h2>
        <h2 className="text-5xl sm:text-7xl lg:text-8xl leading-snug font-bold tracking-tight text-white sm:text-right">
          {t('Message.line3')}
        </h2>
      </div>
    </section>
  );
} 
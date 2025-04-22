'use client';

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export function GradientSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 z-0 dark:from-purple-800 dark:via-fuchsia-700 dark:to-pink-800"></div>
      <div className="max-w-screen-xl mx-auto relative z-10 px-6 md:px-10 text-left">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-7xl lg:text-8xl leading-snug font-bold tracking-tight text-white sm:text-left"
        >
          {t('Message.line1')}
        </motion.h2>
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl sm:text-7xl lg:text-8xl leading-snug font-bold tracking-tight text-white sm:text-center"
        >
          {t('Message.line2.prefix')} <span className="italic font-noto-serif">{t('Message.line2.highlight')}</span>
        </motion.h2>
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-5xl sm:text-7xl lg:text-8xl leading-snug font-bold tracking-tight text-white sm:text-right"
        >
          {t('Message.line3')}
        </motion.h2>
      </div>
    </section>
  );
} 
'use client';
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { FooterLanguageDropdown } from "@/components/FooterLanguageDropdown";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-700 py-6 md:py-0 text-muted-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-6 md:px-10">
        <div className="flex items-center gap-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">{t('Footer.rights').replace('{year}', currentYear.toString())}</p>
          <FooterLanguageDropdown />
          <ThemeSwitcher />
        </div>
        <div className="flex gap-4">
          <Link href="#" className="text-sm text-neutral-500 dark:text-neutral-400 font-medium hover:underline">
            {t('Footer.privacy')}
          </Link>
          <Link href="#" className="text-sm text-neutral-500 dark:text-neutral-400 font-medium hover:underline">
            {t('Footer.terms')}
          </Link>
          <Link href="#" className="text-sm text-neutral-500 dark:text-neutral-400 font-medium hover:underline">
            {t('Footer.contact')}
          </Link>
        </div>
      </div>
    </footer>
  );
} 
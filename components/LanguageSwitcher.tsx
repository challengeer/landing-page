"use client";

import { useLanguage, languages } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // Update URL without full page reload
    window.history.pushState({}, '', `/${lang}`);
  };

  return (
    <div className="flex items-center gap-2 text-sm">
      {Object.entries(languages).map(([code]) => (
        <button
          key={code}
          onClick={() => handleLanguageChange(code)}
          className={`px-2 py-1 rounded-md ${
            language === code ? 'bg-primary text-primary-foreground' : 'hover:bg-neutral-200 dark:hover:bg-neutral-700'
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
} 
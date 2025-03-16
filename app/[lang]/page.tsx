"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage, languages } from '@/contexts/LanguageContext';

export default function LanguagePage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const { setLanguage } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    // Check if the language is valid
    if (Object.keys(languages).includes(lang)) {
      // Set the language
      setLanguage(lang);
      // Redirect to the home page
      router.push('/');
    } else {
      // Redirect to the default language
      router.push('/en');
    }
  }, [lang, setLanguage, router]);

  return null;
} 
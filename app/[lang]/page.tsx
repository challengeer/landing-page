"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage, languages } from '@/contexts/LanguageContext';

interface LangParams {
  lang: string;
}

export default function LanguagePage({ params }: { params: LangParams | Promise<LangParams> }) {
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params as Promise<LangParams>);
  const { lang } = unwrappedParams;
  
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
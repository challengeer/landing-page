"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

// Import translations
import enTranslations from '@/messages/en.json';
import skTranslations from '@/messages/sk.json';

// Define available languages
export const languages = {
  en: 'English',
  sk: 'Slovak'
};

// Define translations
const translations = {
  en: enTranslations,
  sk: skTranslations
};

// Define context type
type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create provider
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('en');

  // Function to get nested translation by key path (e.g., "Navigation.features")
  const t = (key: string) => {
    const keys = key.split('.');
    let result: any = translations[language as keyof typeof translations];
    
    for (const k of keys) {
      if (result && result[k]) {
        result = result[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return result;
  };

  // Update language in localStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  // Initialize language from localStorage or URL path
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check URL path first
      const path = window.location.pathname;
      if (path.startsWith('/en')) {
        setLanguage('en');
      } else if (path.startsWith('/sk')) {
        setLanguage('sk');
      } else {
        // Fallback to localStorage or default
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && Object.keys(languages).includes(savedLanguage)) {
          setLanguage(savedLanguage);
        }
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Create hook for using the context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 
import { useLanguage } from "@/contexts/LanguageContext";

export function useLanguageChange() {
  const { setLanguage } = useLanguage();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // Update URL without full page reload
    window.history.pushState({}, '', `/${lang}`);
  };

  return handleLanguageChange;
} 
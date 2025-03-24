'use client';
import { Button } from "@/components/ui/button";
import { LanguageIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useMounted } from "@/hooks/useMounted";

export function LanguageDropdown() {
  const { t, language, setLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const mounted = useMounted();

  if (!mounted) return null;

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // Update URL without full page reload
    window.history.pushState({}, '', `/${lang}`);
    // Close dropdown after selection
    setDropdownOpen(false);
  };

  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <LanguageIcon className="h-4 w-4" />
          <span>{language.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange('en')} className={language === 'en' ? 'bg-muted' : ''}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('sk')} className={language === 'sk' ? 'bg-muted' : ''}>
          Slovak
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 
'use client';
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useMounted } from "@/hooks/useMounted";

export function FooterLanguageDropdown() {
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
        <Button variant="ghost" size="sm" className="flex items-center gap-2 h-8 hover:text-primary">
          <span className="text-sm">{language.toLowerCase()}</span>
          {dropdownOpen ? <ChevronUpIcon className="h-3 w-3" /> : <ChevronDownIcon className="h-3 w-3" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
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
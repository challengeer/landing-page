'use client';

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
import { useLanguageChange } from "@/hooks/useLanguageChange";

export function LanguageDropdown() {
  const { language } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const mounted = useMounted();
  const handleLanguageChange = useLanguageChange();

  if (!mounted) return null;

  const onLanguageSelect = (lang: string) => {
    handleLanguageChange(lang);
    setDropdownOpen(false);
  };

  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-1 cursor-pointer">
          <LanguageIcon className="h-4 w-4" />
          <span>{language.toUpperCase()}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onLanguageSelect('en')} className={language === 'en' ? 'bg-muted' : ''}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onLanguageSelect('sk')} className={language === 'sk' ? 'bg-muted' : ''}>
          Slovak
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 
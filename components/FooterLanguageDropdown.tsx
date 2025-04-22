'use client';

import Button from "@/components/ui/button";
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
import { useLanguageChange } from "@/hooks/useLanguageChange";

export function FooterLanguageDropdown() {
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
        <Button variant="ghost" size="sm" className="flex items-center gap-2 h-8 hover:text-primary">
          <span className="text-sm">{language.toLowerCase()}</span>
          {dropdownOpen ? <ChevronUpIcon className="h-3 w-3" /> : <ChevronDownIcon className="h-3 w-3" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
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
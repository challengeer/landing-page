'use client';
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageDropdown } from "@/components/LanguageDropdown";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-800/95 dark:supports-[backdrop-filter]:bg-neutral-800/60">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-4">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center gap-2 z-10">
            <Image
              src="/images/logo.png"
              alt="Challengeer Logo"
              width={32}
              height={32}
              className="object-contain rounded-md"
              priority
            />
            <span className="text-xl font-bold">Challengeer</span>
          </div>

          {/* Navigation - now centered */}
          {/* <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              {t('Navigation.features')}
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
              {t('Navigation.howItWorks')}
            </Link>
            <Link href="#download" className="text-sm font-medium transition-colors hover:text-primary">
              {t('Navigation.download')}
            </Link>
          </nav> */}

          {/* Language dropdown */}
          <div className="flex items-center gap-4 z-10">
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </header>
  );
} 
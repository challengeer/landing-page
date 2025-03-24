"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronUpIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { LanguageIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useTheme } from "next-themes";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

// Pexels images of people having fun
const images = [
  "/images/carousel/basketball.png",
  "/images/carousel/climbing.png",
  "/images/carousel/running.png",
  "/images/carousel/cycling.png",
  "/images/carousel/hiking.png",
  "/images/carousel/yoga.png",
  "/images/carousel/skiing.png",
];

export default function Home() {
  const { t, language, setLanguage } = useLanguage();
  const [footerDropdownOpen, setFooterDropdownOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // Update URL without full page reload
    window.history.pushState({}, '', `/${lang}`);
    // Close dropdown after selection
    setFooterDropdownOpen(false);
  };

  return (
    <div className="flex min-h-screen flex-col dark:bg-neutral-900">

      {/* Header - change this later */}
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-neutral-800/95 dark:supports-[backdrop-filter]:bg-neutral-800/60">
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
            <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8">
              <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
                {t('Navigation.features')}
              </Link>
              <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
                {t('Navigation.howItWorks')}
              </Link>
              <Link href="#download" className="text-sm font-medium transition-colors hover:text-primary">
                {t('Navigation.download')}
              </Link>
            </nav>

            {/* Language dropdown */}
            <div className="flex items-center gap-4 z-10">
              <DropdownMenu>
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
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">

        {/* Hero section */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="max-w-screen-md mx-auto px-6 md:px-10 items-center justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-center">
              {t('Hero.title')}
            </h1>
            <div className="flex flex-row items-center justify-center gap-4 mt-8">
              <Link href="#">
                <Image
                  src="/images/store-badges/app-store.svg"
                  alt="App Store Download"
                  width={150}
                  height={50}
                  className="object-contain"
                  priority
                />
              </Link>
              <Link href="#">
                <Image
                  src="/images/store-badges/google-play.svg"
                  alt="Google Play Download"
                  width={150}
                  height={50}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
          </div>
        </section>

        <section id="infinite-scroll" className="mt-12 mb-24">
          <div className="relative flex overflow-x-hidden w-full">
            <div className="flex animate-marquee">
              {images.map((image, index) => (
                <div key={index} className="h-[300px] md:h-[400px] lg:h-[500px] aspect-[2/3] relative mr-2 md:mr-3">
                  <Image src={image} alt={image} className="object-cover rounded-2xl" unoptimized fill />
                </div>
              ))}
            </div>

            <div className="absolute top-0 flex animate-marquee2">
              {images.map((image, index) => (
                <div key={index} className="h-[300px] md:h-[400px] lg:h-[500px] aspect-[2/3] relative mr-2 md:mr-3">
                  <Image src={image} alt={image} className="object-cover rounded-2xl" unoptimized fill />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gradient section */}
        <section className="py-24 md:py-36 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 z-0 dark:from-purple-800 dark:via-fuchsia-700 dark:to-pink-800"></div>
          <div className="max-w-screen-xl mx-auto relative z-10 px-6 md:px-10 text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-snug tracking-tight text-white md:text-left">
              Something that with
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-snug tracking-tight text-white md:text-center">
              friends it is easier
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-snug tracking-tight text-white md:text-right">
              to push yourself
            </h2>
          </div>
        </section>

        {/* Features section */}
        <section id="features" className="py-24 md:py-32 relative">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="md:flex">
              {/* Left column - Features content */}
              <div className="md:w-1/2 md:pr-12">
                {/* Feature 1 */}
                <div
                  className="feature-item min-h-screen flex flex-col justify-center py-16 transition-opacity"
                  id="feature-1"
                >
                  <div className="max-w-md">
                    <h3 className="text-2xl md:text-5xl font-bold mb-6">
                      {t('Features.feature1.title') || "Create Challenges"}
                    </h3>
                    <p className="text-base md:text-xl text-muted-foreground">
                      {t('Features.feature1.description') || "Create custom challenges for yourself or invite friends to join. Set goals, timeframes, and rewards to stay motivated."}
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div
                  className="feature-item min-h-screen flex flex-col justify-center py-16 transition-opacity"
                  id="feature-2"
                >
                  <div className="max-w-md">
                    <h3 className="text-2xl md:text-5xl font-bold mb-6">
                      {t('Features.feature2.title') || "Track Progress"}
                    </h3>
                    <p className="text-base md:text-xl text-muted-foreground">
                      {t('Features.feature2.description') || "Monitor your achievements with detailed statistics and visualizations. See your improvement over time and stay motivated."}
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div
                  className="feature-item min-h-screen flex flex-col justify-center py-16 transition-opacity"
                  id="feature-3"
                >
                  <div className="max-w-md">
                    <h3 className="text-2xl md:text-5xl font-bold mb-6">
                      {t('Features.feature3.title') || "Compete with Friends"}
                    </h3>
                    <p className="text-base md:text-xl text-muted-foreground">
                      {t('Features.feature3.description') || "Join leaderboards and friendly competitions. Share achievements and celebrate successes together."}
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div
                  className="feature-item min-h-screen flex flex-col justify-center py-16 transition-opacity"
                  id="feature-4"
                >
                  <div className="max-w-md">
                    <h3 className="text-2xl md:text-5xl font-bold mb-6">
                      {t('Features.feature4.title') || "Earn Rewards"}
                    </h3>
                    <p className="text-base md:text-xl text-muted-foreground">
                      {t('Features.feature4.description') || "Unlock achievements and earn rewards as you complete challenges. Redeem points for exclusive content and benefits."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right column - Phone mockup */}
              <div className="hidden md:flex w-1/2 sticky top-0 h-screen justify-center items-center pt-20 pb-6">
                <div className="relative w-full h-full max-h-[600px]">
                  <Image
                    src="/images/mockups/phone.png"
                    alt="Challengeer App Mockup"
                    className="object-contain"
                    fill
                  />
                </div>
              </div>
            </div>

            {/* Mobile mockup (only visible on mobile) */}
            <div className="md:hidden w-full mb-16">
              <div className="flex justify-center">
                <Image
                  src="/images/mockups/phone.png"
                  alt="Challengeer App Mockup"
                  width={280}
                  height={560}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Download section */}
        <section className="py-12 md:py-24 overflow-hidden">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="text-center bg-muted dark:bg-neutral-800 rounded-2xl py-12 px-4">
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">{t('Download.title')}</h2>
              <div className="flex flex-row items-center justify-center gap-4 mt-8">
                <Link href="#">
                  <Image
                    src="/images/store-badges/app-store.svg"
                    alt="App Store Download"
                    width={150}
                    height={50}
                    className="object-contain"
                    priority
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/store-badges/google-play.svg"
                    alt="Google Play Download"
                    width={150}
                    height={50}
                    className="object-contain"
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0 text-muted-foreground">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-6 md:px-10">
          <div className="flex items-center gap-4">
            <p className="text-sm font-medium">{t('Footer.rights').replace('{year}', currentYear.toString())}</p>
            <DropdownMenu open={footerDropdownOpen} onOpenChange={setFooterDropdownOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2 h-8 hover:text-primary">
                  <span className="text-sm">{language.toLowerCase()}</span>
                  {footerDropdownOpen ? <ChevronUpIcon className="h-3 w-3" /> : <ChevronDownIcon className="h-3 w-3" />}
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
            <ThemeSwitcher />
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              {t('Footer.privacy')}
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              {t('Footer.terms')}
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              {t('Footer.contact')}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 
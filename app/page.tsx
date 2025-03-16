"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { LanguageIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "@/contexts/LanguageContext";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

// Pexels images of people having fun
const communityImages = [
  {
    src: "/images/carousel/basketball.png",
    alt: "People jumping at sunset"
  },
  {
    src: "/images/carousel/climbing.png",
    alt: "Friends enjoying time together"
  },
  {
    src: "/images/carousel/running.png",
    alt: "Group celebrating outdoors"
  },
  {
    src: "/images/carousel/cycling.png",
    alt: "People at a concert"
  },
  {
    src: "/images/carousel/hiking.png",
    alt: "Friends hiking in mountains"
  },
  {
    src: "/images/carousel/yoga.png",
    alt: "People exercising together"
  },
  {
    src: "/images/carousel/skiing.png",
    alt: "Friends enjoying a meal"
  }
];

export default function Home() {
  const { t, language, setLanguage } = useLanguage();
  const currentYear = new Date().getFullYear();
  const isMobile = window.innerWidth < 768;
  const [footerDropdownOpen, setFooterDropdownOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // Update URL without full page reload
    window.history.pushState({}, '', `/${lang}`);
    // Close dropdown after selection
    setFooterDropdownOpen(false);
  };

  return (
    <div className="flex min-h-screen flex-col">

      {/* Header - change this later */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-6 md:px-10 py-4">
          <div className="flex items-center justify-between relative">
            {/* Logo */}
            <div className="flex items-center gap-2 z-10">
              <Image
                src="/icon.png"
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
      <main className="flex-1 ">

        {/* Hero section */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container items-center justify-center">
            <h1 className="text-4xl sm:text-7xl font-bold text-center">
              {t('Hero.title')}
            </h1>
            <div className="flex flex-row items-center justify-center gap-4 sm:gap-8 mt-8">
              <Link href="#">
                <Image
                  src="/app-store.svg"
                  alt="App Store Download"
                  width={isMobile ? 150 : 200}
                  height={isMobile ? 50 : 60}
                  className="object-contain"
                  priority
                />
              </Link>
              <Link href="#">
                <Image
                  src="/google-play.svg"
                  alt="Google Play Download"
                  width={isMobile ? 150 : 200}
                  height={isMobile ? 50 : 60}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Infinite scroll section */}
        <section id="infinite-scroll" className="pt-12 pb-24 overflow-hidden">
          <div className="container-fluid px-0">
            <Carousel
              className="max-w-full"
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
                containScroll: "trimSnaps",
                slidesToScroll: 1,
                inViewThreshold: 0.6,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4" >
                {communityImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <div className="relative aspect-[2/3] w-full overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover rounded-lg"
                        unoptimized
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>

        {/* Gradient section */}
        <section className="py-24 md:py-36 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 z-0"></div>
          <div className="container relative z-10 px-6 md:px-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-7xl font-bold text-white leading-tight">
                Something that with friends it is easier to push yourself
              </h2>
            </div>
          </div>
        </section>

        {/* Download section */}
        <section className="py-12 md:py-24 overflow-hidden">
          <div className="container px-6 md:px-10">
            <div className="text-center bg-muted rounded-lg py-12">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">Download for IOS/Android</h2>
              <div className="flex flex-row items-center justify-center gap-4 sm:gap-8 mt-8">
                <Link href="#">
                  <Image
                    src="/app-store.svg"
                    alt="App Store Download"
                    width={isMobile ? 150 : 200}
                    height={isMobile ? 50 : 60}
                    className="object-contain"
                    priority
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/google-play.svg"
                    alt="Google Play Download"
                    width={isMobile ? 150 : 200}
                    height={isMobile ? 50 : 60}
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
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-6 md:px-10">
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
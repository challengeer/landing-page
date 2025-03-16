"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrophyIcon, UsersIcon, BoltIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { DevicePhoneMobileIcon, LanguageIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  const { t, language, setLanguage } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // Update URL without full page reload
    window.history.pushState({}, '', `/${lang}`);
  };

  return (
    <div className="flex min-h-screen flex-col">
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
            
            {/* Navigation - centered */}
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
        <section className="py-6 md:py-12 lg:py-16 xl:py-24">
          <div className="container px-6 md:px-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold sm:text-2xl xl:text-6xl/none">
                    {t('Hero.title')}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {t('Hero.description')}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild className="p-6">
                    <Link href="#download" className="inline-flex items-center">
                      {t('Hero.downloadNow')}
                      <ChevronRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="p-6">
                    <Link href="#how-it-works">{t('Hero.learnMore')}</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[500px] w-[250px] overflow-hidden rounded-xl border-8 border-foreground/10 shadow-xl">
                  <Image
                    src="/UserPage.png"
                    alt="Challengeer app screenshot"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section id="features" className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  {t('Features.badge')}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {t('Features.title')}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  {t('Features.description')}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <TrophyIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{t('Features.createChallenges.title')}</h3>
                <p className="text-center text-muted-foreground">
                  {t('Features.createChallenges.description')}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <UsersIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{t('Features.socialLeaderboards.title')}</h3>
                <p className="text-center text-muted-foreground">
                  {t('Features.socialLeaderboards.description')}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <BoltIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{t('Features.achievementTracking.title')}</h3>
                <p className="text-center text-muted-foreground">
                  {t('Features.achievementTracking.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works section */}
        <section id="how-it-works" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {t('HowItWorks.title')}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  {t('HowItWorks.description')}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">{t('HowItWorks.steps.1.title')}</h3>
                <p className="text-center text-muted-foreground">
                  {t('HowItWorks.steps.1.description')}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">{t('HowItWorks.steps.2.title')}</h3>
                <p className="text-center text-muted-foreground">
                  {t('HowItWorks.steps.2.description')}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">{t('HowItWorks.steps.3.title')}</h3>
                <p className="text-center text-muted-foreground">
                  {t('HowItWorks.steps.3.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action section */}
        <section className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-6 md:px-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {t('CallToAction.title')}
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    {t('CallToAction.description')}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="gap-2 p-6" size="lg">
                    <Link href="#download" className="flex-row items-center gap-2">
                      <div className="flex items-center gap-2">
                        <DevicePhoneMobileIcon className="h-5 w-5" />
                        {t('CallToAction.appStore')}
                      </div>
                    </Link>
                  </Button>
                  <Button variant="outline" className="gap-2 p-6" size="lg">
                    <Link href="#download" className="flex-row items-center gap-2">
                      <div className="flex items-center gap-2">
                        <DevicePhoneMobileIcon className="h-5 w-5" />
                        {t('CallToAction.googlePlay')}
                      </div>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[250px] w-[125px] overflow-hidden rounded-xl border-4 border-foreground/10 shadow-xl">
                    <Image
                      src="/placeholder.svg?height=500&width=250"
                      alt="Challengeer app screenshot"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[250px] w-[125px] overflow-hidden rounded-xl border-4 border-foreground/10 shadow-xl">
                    <Image
                      src="/placeholder.svg?height=500&width=250"
                      alt="Challengeer app screenshot"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download section, email subscription? */}
        <section id="download" className="py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-6 md:px-10 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                {t('Download.title')}
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                {t('Download.description')}
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2 sm:flex-row">
                <Input 
                  type="email" 
                  placeholder={t('Download.emailPlaceholder')} 
                  className="max-w-lg flex-1 p-6" 
                />
                <Button type="submit" className="p-6">{t('Download.subscribe')}</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                {t('Download.privacyText')}{" "}
                <Link href="/terms" className="underline underline-offset-2">
                  {t('Download.termsLink')}
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-6">
              <Button size="lg" className="p-6">
                <Link href="#" className="inline-flex items-center gap-2">
                  <DevicePhoneMobileIcon className="h-5 w-5" />
                  {t('Download.downloadAppStore')}
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="p-6">
                <Link href="#" className="inline-flex items-center gap-2">
                  <DevicePhoneMobileIcon className="h-5 w-5" />
                  {t('Download.downloadGooglePlay')}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-6 md:px-10">
          <div className="flex items-center gap-2">
            <Image src="/icon.png" alt="Challengeer Logo" width={32} height={32} className="object-contain rounded-md" />
            <p className="text-sm font-medium">{t('Footer.rights').replace('{year}', currentYear.toString())}</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              {t('Footer.privacy')}
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              {t('Footer.terms')}
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              {t('Footer.contact')}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 
'use client';
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
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
  );
} 
'use client';
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { EmailSubscribe } from "@/components/EmailSubscribe";

export function Download() {
  const { t } = useLanguage();

  return (
    <section id="subscribe-section" className="py-12 md:py-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="text-center bg-neutral-100 dark:bg-neutral-800 rounded-2xl py-12 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">{t('Download.title')}</h2>
          <div className="flex flex-row items-center justify-center gap-4 mt-8">
            {/* <Link href="#"> */}
              <Image
                src="/images/store-badges/app-store.svg"
                alt="App Store Download"
                width={150}
                height={50}
                className="object-contain"
                priority
              />
            {/* </Link> */}
            {/* <Link href="#"> */}
              <Image
                src="/images/store-badges/google-play.svg"
                alt="Google Play Download"
                width={150}
                height={50}
                className="object-contain"
                priority
              />
            {/* </Link> */}
          </div>
          <div className="mt-12">
            <EmailSubscribe />
          </div>
        </div>
      </div>
    </section>
  );
} 
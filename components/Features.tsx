'use client';
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState, useRef } from "react";

export function Features() {
  const { t } = useLanguage();
  const [currentFeature, setCurrentFeature] = useState(1);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const featureId = parseInt(entry.target.getAttribute('data-feature') || '1');
            setCurrentFeature(featureId);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '-40% 0px -40% 0px'
      }
    );

    // Observe all feature items
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item) => {
      observerRef.current?.observe(item);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="md:flex">
          {/* Left column - Features content */}
          <div className="md:w-1/2 md:pr-12 relative">
            {/* Features Container */}
            <div className="relative">
              {/* Feature 1 */}
              <div
                className="feature-item min-h-screen flex flex-col justify-center py-16 transition-opacity"
                id="feature-1"
                data-feature="1"
              >
                {/* Mobile mockup */}
                <div className="md:hidden w-full mb-8">
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
                <div className="max-w-md">
                  <h3 className="text-2xl md:text-5xl font-bold mb-6">
                    {t('Features.feature1.title') || "Create Challenges"}
                  </h3>
                  <p className="text-base md:text-xl text-neutral-500 dark:text-neutral-400">
                    {t('Features.feature1.description') || "Create custom challenges for yourself or invite friends to join. Set goals, timeframes, and rewards to stay motivated."}
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div
                className="feature-item min-h-screen flex flex-col justify-center py-16 transition-opacity"
                id="feature-2"
                data-feature="2"
              >
                {/* Mobile mockup */}
                <div className="md:hidden w-full mb-8">
                  <div className="flex justify-center">
                    <Image
                      src="/images/mockups/phone.png"
                      alt="Challengeer App Mockup"
                      width={280}
                      height={560}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="max-w-md">
                  <h3 className="text-2xl md:text-5xl font-bold mb-6">
                    {t('Features.feature2.title') || "Track Progress"}
                  </h3>
                  <p className="text-base md:text-xl text-neutral-500 dark:text-neutral-400">
                    {t('Features.feature2.description') || "Monitor your achievements with detailed statistics and visualizations. See your improvement over time and stay motivated."}
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div
                className="feature-item min-h-screen flex flex-col justify-center py-16 transition-opacity"
                id="feature-3"
                data-feature="3"
              >
                {/* Mobile mockup */}
                <div className="md:hidden w-full mb-8">
                  <div className="flex justify-center">
                    <Image
                      src="/images/mockups/phone.png"
                      alt="Challengeer App Mockup"
                      width={280}
                      height={560}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="max-w-md">
                  <h3 className="text-2xl md:text-5xl font-bold mb-6">
                    {t('Features.feature3.title') || "Compete with Friends"}
                  </h3>
                  <p className="text-base md:text-xl text-neutral-500 dark:text-neutral-400">
                    {t('Features.feature3.description') || "Join leaderboards and friendly competitions. Share achievements and celebrate successes together."}
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div
                className="feature-item min-h-screen flex flex-col justify-center py-16 transition-opacity"
                id="feature-4"
                data-feature="4"
              >
                {/* Mobile mockup */}
                <div className="md:hidden w-full mb-8">
                  <div className="flex justify-center">
                    <Image
                      src="/images/mockups/phone.png"
                      alt="Challengeer App Mockup"
                      width={280}
                      height={560}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="max-w-md">
                  <h3 className="text-2xl md:text-5xl font-bold mb-6">
                    {t('Features.feature4.title') || "Earn Rewards"}
                  </h3>
                  <p className="text-base md:text-xl text-neutral-500 dark:text-neutral-400">
                    {t('Features.feature4.description') || "Unlock achievements and earn rewards as you complete challenges. Redeem points for exclusive content and benefits."}
                  </p>
                </div>
              </div>
            </div>

            {/* Step Indicator */}
            {/* <div className="hidden md:flex sticky left-0 bottom-[20vh] z-50">
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`h-0.5 md:h-1.5 w-12 md:w-20 rounded-full transition-all duration-300 ${
                      currentFeature === step
                        ? "bg-purple-500"
                        : "bg-neutral-500/30 dark:bg-neutral-400/30"
                    }`}
                  />
                ))}
              </div>
            </div> */}
          </div>

          {/* Right column - Phone mockup (desktop only) */}
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
      </div>
    </section>
  );
} 
'use client';
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export function Features() {
  const { t } = useLanguage();

  return (
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
  );
} 
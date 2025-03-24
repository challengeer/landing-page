'use client';

export function GradientSection() {
  return (
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
  );
} 
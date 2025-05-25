import { Hero } from "@/components/Hero";
import { InfiniteScroll } from "@/components/InfiniteScroll";
import { GradientSection } from "@/components/GradientSection";
import { Features } from "@/components/Features";
import { Download } from "@/components/Download";
import { EmailSubscribe } from "@/components/EmailSubscribe";

export const metadata = {
  title: 'Challengeer - Challenge Your Friends. Prove Your Skills.',
  description: 'Challenge Your Friends. Prove Your Skills.',
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col dark:bg-neutral-900">
      <main className="flex-1">
        <Hero />
        <InfiniteScroll />
        <GradientSection />
        <Features />
        <EmailSubscribe />
      </main>
    </div>
  );
} 
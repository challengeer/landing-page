import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InfiniteScroll } from "@/components/InfiniteScroll";
import { GradientSection } from "@/components/GradientSection";
import { Features } from "@/components/Features";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col dark:bg-neutral-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <InfiniteScroll />
        <GradientSection />
        <Features />
      </main>
      <Footer />
    </div>
  );
} 
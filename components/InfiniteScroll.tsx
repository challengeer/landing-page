'use client';
import Image from "next/image";

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

export function InfiniteScroll() {
  return (
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
  );
} 
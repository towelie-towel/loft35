import React from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Props {
  images: string[];
}

const HorizontalImageScroll: React.FC<Props> = ({ images }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.utils.toArray(".card").forEach((card: any, index: number) => {
        const scrollContainer = card.parentNode;
        const cardWidth = card.offsetWidth;
        const containerWidth = scrollContainer.offsetWidth;
        const totalScroll = containerWidth - cardWidth;

        gsap.to(card, {
          scrollTrigger: {
            trigger: scrollContainer,
            start: "left 100%",
            end: "right 100%",
            scrub: true,
            invalidateOnRefresh: true,
          },
          x: -totalScroll,
        });

        if (index === 0) {
          gsap.set(scrollContainer, {
            scrollLeft: -totalScroll,
          });
        }
      });
    }
  }, []);

  return (
    <div className="flex h-screen items-center space-x-4 overflow-x-scroll">
      {images.map((image, index) => (
        <div className="relative flex-shrink-0" key={index}>
          <Image
            src={image}
            alt={image}
            width={500}
            height={500}
            sizes="(max-width: 425px) 50vw,
              (max-width: 768px) 75vw,
              (max-width: 1024px) 100vw"
          />
        </div>
      ))}
    </div>
  );
};

export default HorizontalImageScroll;

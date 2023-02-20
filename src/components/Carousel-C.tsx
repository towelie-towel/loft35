import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import type { IStoreImage } from "../utils/data";

interface IProps {
  images: IStoreImage[];
}

const CardSlider: React.FC<IProps> = ({ images }) => {
  gsap.registerPlugin(ScrollTrigger);

  const [cardRef, cardInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const slideRef = useRef(null);

  if (cardInView) {
    const slideTl = gsap.timeline({
      scrollTrigger: {
        trigger: slideRef.current,
        start: "top center",
        end: "+=100%",
        scrub: true,
      },
    });
    slideTl.from(slideRef.current, {
      xPercent: -100,
      duration: 2,
      ease: "power2.inOut",
    });
  }

  return (
    <div ref={cardRef} className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-2xl font-semibold">Latest Products</h2>
      <div className="overflow-x-auto whitespace-nowrap">
        {images.map(({ src, name }) => {
          return (
            <div
              ref={slideRef}
              className="mr-4 inline-block h-96 w-80 rounded-lg bg-white p-6 align-top shadow-lg"
              key={name}
            >
              <Image
                src={src}
                alt={name}
                width={560}
                height={480}
                className="mb-4 h-2/3 w-full rounded-lg"
                sizes="(max-width: 425px) 50vw,
              (max-width: 768px) 75vw,
              (max-width: 1024px) 100vw"
              />
              <h3 className="mb-2 text-lg font-semibold">Product 1</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                cursus suscipit neque, id dictum tellus ultricies in. Sed ac
                ornare nisl.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CardSlider;

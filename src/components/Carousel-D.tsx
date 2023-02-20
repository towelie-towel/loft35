import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface CardProps {
  src: string;
  name: string;
}

const Card: React.FC<CardProps> = ({ src, name }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="w-5/6 overflow-hidden rounded-md shadow-lg sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3">
        <Image src={src} alt={name} width={500} height={500} />
        <div className="bg-white py-3 px-4 text-center">
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>
      </div>
    </div>
  );
};

const CardSlider: React.FC<{ images: CardProps[] }> = ({ images }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const [scrollPos, setScrollPos] = useState(0);
  const [maxScrollPos, setMaxScrollPos] = useState(500);
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  useEffect(() => {
    if (
      sliderRef.current &&
      cardsRef.current.length > 0 &&
      cardsRef.current[0]
    ) {
      const sliderWidth = sliderRef.current.clientWidth;
      const cardWidth = cardsRef.current[0].clientWidth;
      const numCards = cardsRef.current.length;

      const totalWidth = cardWidth * numCards;
      const maxScrollPos = totalWidth - sliderWidth;
      setShowScrollButtons(maxScrollPos > 0);
      setMaxScrollPos(maxScrollPos);

      const handleWheel = (event: WheelEvent) => {
        event.preventDefault();
        const wheelDelta = event.deltaY;
        const newScrollPos = scrollPos + wheelDelta;
        setScrollPos(Math.max(0, Math.min(maxScrollPos, newScrollPos)));
      };

      sliderRef.current.addEventListener("wheel", handleWheel);

      return () => {
        sliderRef.current?.removeEventListener("wheel", handleWheel);
      };
    }
  }, [scrollPos]);

  useEffect(() => {
    if (
      sliderRef.current &&
      cardsRef.current.length > 0 &&
      cardsRef.current[0]
    ) {
      const cardWidth = cardsRef.current[0].clientWidth;

      gsap.to(sliderRef.current, {
        x: -scrollPos,
        duration: 0.3,
        ease: "power3.out",
      });

      cardsRef.current.forEach((cardRef, index) => {
        const x = index * cardWidth;
        gsap.to(cardRef, {
          x,
          duration: 0.3,
          ease: "power3.out",
        });
      });
    }
  }, [scrollPos]);

  const handlePrevClick = () => {
    if (!cardsRef.current[0]) return;
    const cardWidth = cardsRef.current[0].clientWidth;
    const newScrollPos = scrollPos - cardWidth;
    setScrollPos(Math.max(0, newScrollPos));
  };

  const handleNextClick = () => {
    if (!cardsRef.current[0] || !sliderRef.current || !cardsRef.current) return;

    const sliderWidth = sliderRef.current.clientWidth;
    const cardWidth = cardsRef.current[0].clientWidth;
    const numCards = cardsRef.current.length;

    const totalWidth = cardWidth * numCards;
    const maxScrollPos = totalWidth - sliderWidth;
    setMaxScrollPos(maxScrollPos);

    const newScrollPos = scrollPos + cardWidth;
    setScrollPos(Math.min(maxScrollPos, newScrollPos));
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-center">
        {showScrollButtons && (
          <>
            <button
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-gray-700
              bg-opacity-50 p-2 text-white shadow-md transition-colors duration-300 hover:text-gray-100 focus:outline-none"
              onClick={handlePrevClick}
              disabled={scrollPos === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-gray-700
              bg-opacity-50 p-2 text-white shadow-md transition-colors duration-300 hover:text-gray-100 focus:outline-none"
              onClick={handleNextClick}
              disabled={scrollPos === maxScrollPos}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>
      <div
        ref={sliderRef}
        className="relative flex w-full items-center justify-start overflow-hidden"
      >
        {images.map((image, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el!)}
            className="flex-shrink-0"
          >
            <Card src={image.src} name={image.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;

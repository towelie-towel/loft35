import { useEffect, useRef, useState } from "react";
import { NextSlider, PrevSlider } from "~/components/Icons";
import { gsap } from "gsap";
import Image from "next/image";

interface CardSlider {
  src: string;
  name: string;
}

const CardSlider: React.FC<{ images: CardSlider[] }> = ({ images }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const [scrollIndex, setScrollIndex] = useState(0);
  const [numCards, setNumCards] = useState(cardsRef.current.length);
  const [sliderWidth, setSliderWidth] = useState(
    sliderRef.current?.clientWidth
  );
  const [cardWidth, setCardWidth] = useState(cardsRef.current[0]?.clientWidth);

  const [showScrollButtons, setShowScrollButtons] = useState(false);

  useEffect(() => {
    setNumCards(cardsRef.current.length);
    setSliderWidth(sliderRef.current?.clientWidth);
    setCardWidth(cardsRef.current[0]?.clientWidth);
    setShowScrollButtons(true);

    gsap.to(sliderRef.current, {
      x: -(scrollIndex * (cardWidth || 0)),
      duration: 0.2,
      ease: "none",
    });
  }, [cardWidth, scrollIndex]);

  const handlePrevClick = () => {
    if (scrollIndex === 0) {
      setScrollIndex(numCards - 1);
    } else {
      setScrollIndex(scrollIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (scrollIndex === numCards - 1) {
      setScrollIndex(0);
    } else {
      setScrollIndex(scrollIndex + 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center justify-center">
        {showScrollButtons && (
          <>
            <button
              className="absolute left-0 top-1/3 z-10"
              onClick={handlePrevClick}
            >
              <PrevSlider width={25} stroke="#a1a5b7" />
            </button>
            <button
              className="absolute right-0 top-1/3 z-10"
              onClick={handleNextClick}
            >
              <NextSlider width={25} stroke="#a1a5b7" />
            </button>
          </>
        )}
      </div>
      <div
        ref={sliderRef}
        className="relative flex w-full items-center justify-start overflow-visible"
      >
        {images.map((image, index) => (
          <div
            key={index}
            ref={(item: HTMLDivElement) => (cardsRef.current[index] = item)}
            className="flex-shrink-0"
          >
            <div
              style={{ width: `${sliderWidth || 200}px` }}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative w-[90%] rounded-md pb-[25%] shadow-lg">
                <Image
                  sizes="(max-width: 425px) 50vw,
                  (max-width: 768px) 75vw,
                  (max-width: 1024px) 100vw"
                  priority
                  src={image.src}
                  alt={image.name}
                  fill
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;

// now lets code. you see this component? can you see the package.json and other configurations? How?, i want to make this "Card_Slider.tsx"... ah, you get it ".tsx" xd. So, i want it to change the images automatlicly and stand by if the user scroll it. Help me do that. Go for it tiger

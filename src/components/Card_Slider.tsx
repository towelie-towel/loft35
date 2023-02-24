import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import useInterval from "../hooks/useInterval";
import { NextSlider, PrevSlider } from "./Icons";

interface CardProps {
  src: string;
  name: string;
}

const Card: React.FC<CardProps> = ({ src, name }) => {
  return (
    <div className="flex w-[90vw] flex-col items-center justify-center">
      <div className="relative w-[80%] rounded-md pb-[25%] shadow-lg">
        <Image src={src} alt={name} fill />
      </div>
    </div>
  );
};

const CardSlider: React.FC<{ images: CardProps[] }> = ({ images }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [scrollPos, setScrollPos] = useState(0);
  const [maxScrollPos, setMaxScrollPos] = useState(500);
  const [cardWidth, setCardWidth] = useState(500);
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  useEffect(() => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.clientWidth;
      const numCards = images.length;

      const totalWidth = cardWidth * numCards;
      const maxScrollPos = totalWidth - cardWidth;

      setCardWidth(cardWidth);
      setShowScrollButtons(images.length > 1);
      setMaxScrollPos(maxScrollPos);

      gsap.to(sliderRef.current, {
        x: -scrollPos,
        duration: 0.4,
        ease: "power3.out",
      });
    }
  }, [images.length, scrollPos]);

  const handlePrevClick = () => {
    if (scrollPos === 0) {
      setScrollPos(maxScrollPos);
    } else {
      setScrollPos(scrollPos - cardWidth);
    }
  };

  useInterval(() => {
    handleNextClick();
  }, 4000);

  const handleNextClick = () => {
    if (!sliderRef.current) return;
    if (scrollPos === maxScrollPos) {
      setScrollPos(0);
    } else {
      setScrollPos(scrollPos + cardWidth);
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
              <PrevSlider stroke="#a1a5b7" />
            </button>
            <button
              className="absolute right-0 top-1/3 z-10"
              onClick={handleNextClick}
            >
              <NextSlider stroke="#a1a5b7" />
            </button>
          </>
        )}
      </div>
      <div
        ref={sliderRef}
        className="relative flex w-full items-center justify-start overflow-visible"
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0">
            <Card src={image.src} name={image.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;

/* Chat GPT
La variable maxScrollPos se declara fuera del alcance de los efectos y los manejadores de eventos del componente. Se inicializa a 0. Se utilizará para mantener un seguimiento del número máximo de píxeles que se pueden desplazar.

En el primer efecto de useEffect(), se comprueba que los elementos sliderRef y cardsRef existan y que haya al menos un elemento en cardsRef. Se calcula el ancho del slider y el ancho de una sola tarjeta. A partir de estos datos, se calcula el ancho total de todas las tarjetas y se establece el número máximo de píxeles que se pueden desplazar en la variable maxScrollPos. También se establece la variable showScrollButtons en true si el número máximo de píxeles que se pueden desplazar es mayor que 0.
*/

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { NextSlider, PrevSlider } from "./Icons";

interface CardProps {
  src: string;
  name: string;
}

const Card: React.FC<CardProps> = ({ src, name }) => {
  return (
    <div className="flex w-screen flex-col items-center justify-center">
      <div className="relative h-[120px] w-[80vw] rounded-md shadow-lg">
        <Image src={src} alt={name} fill />
        <div className="py-3 text-center">
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

      gsap.to(sliderRef.current, {
        x: -scrollPos,
        duration: 0.6,
        ease: "power3.out",
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
              className="absolute left-0 top-1/2 z-10"
              onClick={handlePrevClick}
              disabled={scrollPos === 0}
            >
              <PrevSlider stroke="#a1a5b7" />
            </button>
            <button
              className="absolute right-0 top-1/2 z-10"
              onClick={handleNextClick}
              disabled={scrollPos === maxScrollPos}
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

/* Chat GPT
La variable maxScrollPos se declara fuera del alcance de los efectos y los manejadores de eventos del componente. Se inicializa a 0. Se utilizará para mantener un seguimiento del número máximo de píxeles que se pueden desplazar.

En el primer efecto de useEffect(), se comprueba que los elementos sliderRef y cardsRef existan y que haya al menos un elemento en cardsRef. Se calcula el ancho del slider y el ancho de una sola tarjeta. A partir de estos datos, se calcula el ancho total de todas las tarjetas y se establece el número máximo de píxeles que se pueden desplazar en la variable maxScrollPos. También se establece la variable showScrollButtons en true si el número máximo de píxeles que se pueden desplazar es mayor que 0.
*/

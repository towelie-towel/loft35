import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import useInterval from "../hooks/useInterval";
import { NextSlider, PrevSlider } from "./Icons";
import { Card } from "./Card";

interface CardSlider {
  src: string;
  name: string;
}

const CardSlider: React.FC<{ images: CardSlider[] }> = ({ images }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const [scrollPos, setScrollPos] = useState(0);
  const [numCards, setNumCards] = useState(cardsRef.current.length);
  const [sliderWidth, setSliderWidth] = useState(
    sliderRef.current?.clientWidth
  );
  const [cardWidth, setCardWidth] = useState(
    cardsRef.current[0]?.clientWidth || 400
  );
  const [totalWidth, setTotalWidth] = useState(cardWidth * numCards);
  const [maxScrollPos, setMaxScrollPos] = useState(totalWidth);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  useEffect(() => {
    setNumCards(cardsRef.current.length);
    setSliderWidth(sliderRef.current?.clientWidth);
    setCardWidth(cardsRef.current[0]?.clientWidth || 400);
    setTotalWidth(
      (cardsRef.current[0]?.clientWidth || 400) * cardsRef.current.length
    );
    setMaxScrollPos(
      (cardsRef.current[0]?.clientWidth || 400) * cardsRef.current.length
    );
    setShowScrollButtons(true);

    console.log("CardSlider, useEffect[] (0)", {
      globalStates: {
        numCards,
        sliderWidth,
        cardWidth,
        totalWidth,
        maxScrollPos,
        showScrollButtons,
        autoScrollEnabled,
      },
    });
    console.log("CardSlider, useEffect[] (1)", {
      globalRef: {
        cardsRef,
        sliderRef,
      },
    });
  });

  useEffect(() => {
    console.log("CardSlider, useEffect [scrollPos] (0)", {
      globalStates: {
        numCards,
        sliderWidth,
        cardWidth,
        totalWidth,
        maxScrollPos,
        showScrollButtons,
        autoScrollEnabled,
      },
    });
    console.log("CardSlider, useEffect [scrollPos] (1)", {
      globalRef: {
        cardsRef,
        sliderRef,
      },
    });

    gsap.to(sliderRef.current, {
      x: -scrollPos,
      duration: 0.3,
      ease: "power3.out",
    });
  }, [scrollPos]);

  const handlePrevClick = () => {
    setAutoScrollEnabled(false);
    if (scrollPos === 0) {
      setScrollPos(maxScrollPos);
    } else {
      setScrollPos(scrollPos - cardWidth);
    }
  };

  const handleNextClick = () => {
    setAutoScrollEnabled(false);
    if (!sliderRef.current) return;
    if (scrollPos === maxScrollPos) {
      setScrollPos(0);
    } else {
      setScrollPos(scrollPos + cardWidth);
    }
  };

  useInterval(() => {
    if (autoScrollEnabled) handleNextClick();
  }, 4000);

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
          <div
            key={index}
            ref={(item: HTMLDivElement) => (cardsRef.current[index] = item)}
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

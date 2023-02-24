import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import useInterval from "../hooks/useInterval";
import { PrevSlider, NextSlider } from "./Icons";

interface SliderProps {
  images: { src: string; alt: string }[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    setShowPrev(currentIndex > 0);
    setShowNext(currentIndex < images.length - 1);
  }, [currentIndex, images]);

  useInterval(() => {
    setCurrentIndex((currentIndex + 1) % images.length);
  }, 3000);

  return (
    <div
      ref={sliderRef}
      className="relative flex w-full items-center justify-start overflow-visible"
    >
      <div className="flex-shrink-0">
        <div className="flex w-[90vw] flex-col items-center justify-center">
          <div
            className={
              "relative w-[80%] rounded-md pb-[25%] shadow-lg transition-opacity duration-500"
            }
          >
            <Image
              src={images[currentIndex]?.src || "/images/icon/placeholder.png"}
              alt={images[currentIndex]?.alt || "placeholder"}
              fill
            />
          </div>
        </div>
      </div>
      <div>
        {showPrev && (
          <button
            className="absolute left-0 top-1/3 z-10 transition-all"
            onClick={handlePrev}
          >
            <PrevSlider stroke="#a1a5b7" />
          </button>
        )}
        {showNext && (
          <button
            className="absolute right-0 top-1/3 z-10 transition-all"
            onClick={handleNext}
          >
            <NextSlider stroke="#a1a5b7" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Slider;

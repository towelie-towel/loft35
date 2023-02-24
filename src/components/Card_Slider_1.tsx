import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import useInterval from "../hooks/useInterval";
import { PrevSlider, NextSlider } from "./Icons";
import { useInView } from "react-intersection-observer";

interface SliderProps {
  images: { src: string; alt: string }[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  console.log("aaaa");

  const sliderRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({ threshold: 0 });

  const handlePrev = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    if (sliderRef.current) {
      setSliderWidth(sliderRef.current.offsetWidth);
    }
  }, []);

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
        {inView &&
          images.map((image, index) => (
            <div
              key={index}
              className="flex w-[90vw] flex-col items-center justify-center"
            >
              <div
                className={`${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                } relative w-[80%] rounded-md pb-[25%] shadow-lg transition-opacity duration-500`}
                style={{ width: `${sliderWidth}px` }}
              >
                <Image src={image.src} alt={image.alt} fill />
              </div>
            </div>
          ))}
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 transform">
        {showPrev && (
          <button
            onClick={handlePrev}
            className="mr-3 rounded-full bg-white px-3 py-1 shadow-md hover:shadow-lg focus:outline-none"
          >
            <PrevSlider />
          </button>
        )}
        {showNext && (
          <button
            onClick={handleNext}
            className="rounded-full bg-white px-3 py-1 shadow-md hover:shadow-lg focus:outline-none"
          >
            <NextSlider />
          </button>
        )}
      </div>
      <div ref={ref} className="h-1 w-1"></div>
    </div>
  );
};

export default Slider;

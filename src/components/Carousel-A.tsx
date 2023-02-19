import React, { useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

interface CardProps {
  imageUrl: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title }) => {
  return (
    <div className="m-4 w-full overflow-hidden rounded-lg bg-white shadow-lg sm:w-64">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority
          sizes="(max-width: 425px) 50vw,
              (max-width: 768px) 75vw,
              (max-width: 1024px) 100vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

const Carousel: React.FC<{ cards: CardProps[] }> = ({ cards }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  const variants = {
    visible: (index: number) => ({
      x: `-${index * 100}%`,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    }),
    hidden: {
      x: "0%",
    },
  };

  const handleScroll = () => {
    if (inView && containerRef.current) {
      const elementWidth = containerRef.current.getBoundingClientRect().width;
      const childrenCount = containerRef.current.children.length;
      controls.start(variants.visible((childrenCount - 1) * elementWidth));
    }
  };

  return (
    <div className="flex overflow-x-scroll" onScroll={handleScroll} ref={ref}>
      <motion.div
        className="flex"
        ref={containerRef}
        animate={controls}
        initial="hidden"
      >
        {cards.map((card) => (
          <motion.div key={card.title} variants={variants}>
            <Card {...card} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;

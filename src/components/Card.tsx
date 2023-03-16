import Image from "next/image";
import { useEffect } from "react";

type CardProps = {
  src: string;
  name: string;
};

export const Card: React.FC<CardProps & Record<string, unknown>> = ({
  src,
  name,
  ...restProps
}) => {
  useEffect(() => {
    return;
  });

  return (
    <div
      {...restProps}
      className="flex w-[var(--slider-width)] flex-col items-center justify-center"
    >
      <div className="relative w-[90%] rounded-md pb-[25%] shadow-lg">
        <Image priority src={src} alt={name} fill />
      </div>
    </div>
  );
};

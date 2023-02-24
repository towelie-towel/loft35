import Image from "next/image";
import { useEffect } from "react";

interface CardProps {
  src: string;
  name: string;
}

export const Card: React.FC<CardProps> = ({ src, name }) => {
  console.log("Card");
  useEffect(() => {
    console.log("Card, useEffect[]");
  });
  return (
    <div className={`flex w-[700px] flex-col items-center justify-center`}>
      <div className="relative w-[80%] rounded-md pb-[25%] shadow-lg">
        <Image src={src} alt={name} fill />
      </div>
    </div>
  );
};

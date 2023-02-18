import React from "react";
import Image from "next/image";
import type { IProduct } from "../utils/data";

interface IProps {
  product: IProduct;
}

const ProductItem: React.FC<IProps> = ({ product }) => {
  return (
    <div className={`mb-10 w-[40%] rounded-lg shadow-md`}>
      <div className="relative w-full overflow-hidden rounded-t-lg pb-[100%] shadow-2xl">
        <Image
          src={product.image.src}
          alt={product.image.name}
          fill
          priority
          sizes="(max-width: 425px) 50vw,
              (max-width: 768px) 75vw,
              (max-width: 1024px) 100vw"
        />
      </div>
      <div className="flex flex-col items-center justify-center p-5">
        <h2 className="text-lg">{product.name}</h2>
        <p>${product.price}</p>
        <button
          className="rounded bg-amber-300 py-2 px-4 text-xs shadow outline-none  hover:bg-amber-400 active:bg-amber-500"
          type="button"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;

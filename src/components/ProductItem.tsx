import React from "react";
import Image from "next/image";
import { AddToCartIcon } from "./Icons";
import type { Product } from "@prisma/client";

interface IProps {
  product: Product;
}

const ProductItem: React.FC<IProps> = ({ product }) => {
  return (
    <div className={`w-[50%] pb-4`}>
      <div className="product-card m-auto w-[92%] shadow-md">
        <div className="relative w-full overflow-hidden rounded-t-lg pb-[100%]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 425px) 50vw,
              (max-width: 768px) 75vw,
              (max-width: 1024px) 100vw"
          />
        </div>
        <div className="text-2x flex flex-col items-start justify-center p-5 font-semibold text-[var(--font-primary-color)]">
          <h2 className="text-md">{product.name}</h2>
          <h3 className="text-md my-4">CUP$ {product.price.toFixed(2)}</h3>
          <button
            className="text-md flex w-full justify-center rounded bg-[var(--light-gray-2)] py-1 px-4 text-[var(--font-secondary-color)] shadow outline-none  hover:bg-[var(--light-gray)] active:bg-[var(--light-gray-1)]"
            type="button"
          >
            <AddToCartIcon width={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

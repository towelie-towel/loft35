import Image from "next/image";
import type { IProduct } from "../utils/data";
import React from "react";

interface IProps {
  product: IProduct;
  closeProductDetail: () => void;
}

const ProductDetail: React.FC<IProps> = ({ product }) => {
  return (
    <div className="fixed top-0 left-0 z-10 h-full w-full bg-gray-900 bg-opacity-75">
      <div className="relative mx-auto my-32 w-11/12 overflow-auto rounded-lg bg-slate-600 lg:w-1/2">
        <Image
          src={product.image.src}
          alt={product.image.name}
          height={250}
          width={250}
        />
        <h1 className="mb-4 text-lg font-medium">{product.name}</h1>
        <p>{product.description}</p>
        <button className="absolute top-0 right-0 p-4">Close</button>
      </div>
    </div>
  );
};

export default ProductDetail;

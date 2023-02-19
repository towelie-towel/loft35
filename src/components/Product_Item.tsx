import React from "react";
import type { IProduct } from "../utils/data";
import ProductImage from "./Product_Image";
import ProductDescription from "./Product_Description";

interface IProps {
  product: IProduct;
}

const ProductItem: React.FC<IProps> = ({ product }) => {
  return (
    <div className={`mb-10 w-[40%] rounded-lg shadow-md`}>
      <ProductImage image={product.image} />
      <ProductDescription product={product} />
    </div>
  );
};

export default ProductItem;

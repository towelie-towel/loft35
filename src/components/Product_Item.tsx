import React from "react";
import type { IProduct } from "../utils/data";
import ProductImage from "./Product_Image";
import ProductDescription from "./Product_Description";

interface IProps {
  product: IProduct;
}

const ProductItem: React.FC<IProps> = ({ product }) => {
  return (
    <div className={`w-[50%] pb-4`}>
      <div className="product-card m-auto w-[92%] shadow-md">
        <ProductImage image={product.image} />
        <ProductDescription product={product} />
      </div>
    </div>
  );
};

export default ProductItem;

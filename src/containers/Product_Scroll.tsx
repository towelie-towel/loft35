import ProductItem from "../components/Product_Item";
import type { IProduct } from "../utils/data";

const ProductsSroll: React.FC<{ products: IProduct[] }> = ({ products }) => {
  return (
    <div className="m-auto flex max-w-screen-md flex-wrap justify-around">
      {products.map((product: IProduct) => {
        return <ProductItem product={product} key={product.slug} />;
      })}
    </div>
  );
};

export default ProductsSroll;

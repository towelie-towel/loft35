import type { IProduct } from "../utils/data";
import ProductItem from "./Product_Item";

interface IProps {
  categoryProducts: IProduct[];
  categoryGroup: string[];
}

const CategoryGroup: React.FC<IProps> = ({
  categoryProducts,
  categoryGroup,
}) => {
  return (
    <div className="w-full">
      <h1 className="mb-5 text-center">{categoryGroup.join(" & ")}</h1>
      <div className="m-auto flex w-full max-w-screen-md flex-wrap justify-around">
        {categoryProducts.map((categoryProduct) => (
          <ProductItem product={categoryProduct} key={categoryProduct.slug} />
        ))}
      </div>
    </div>
  );
};

export default CategoryGroup;

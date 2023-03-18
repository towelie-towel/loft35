import ProductItem from "./ProductItem";
import type { Product } from "@prisma/client";

//import type { IProduct } from "../utils/data";

interface IProps {
  categoryProducts?: Product[];
  categoryGroup: string;
}

const CategoryItems: React.FC<IProps> = ({
  categoryProducts,
  categoryGroup,
}) => {
  return (
    <div className="w-full">
      <div className="my-3 mx-auto w-[85%] border-b-[2px] border-solid border-[#dfe3e6]"></div>
      <h1 className="m-auto mb-3 w-[88%] text-start font-semibold text-[var(--font-terceary-color)] ">
        {categoryGroup}
      </h1>
      <div className="m-auto flex w-full flex-wrap">
        {categoryProducts?.map((categoryProduct) => (
          <ProductItem product={categoryProduct} key={categoryProduct.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;

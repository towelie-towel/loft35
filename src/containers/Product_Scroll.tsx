import CategoryGroup from "../components/Category_Group";
import ProductCategories from "../components/Product_Categories";
import type { IProduct } from "../utils/data";

interface IProps {
  products: IProduct[];
}
const categories = [
  ["Shirts"],
  ["Blouses"],
  ["T-Shirts"],
  ["Pants"],
  ["Sweaters", "Coats"],
  ["Bags"],
  ["Lencerie"],
  ["Others"],
];

const ProductsSroll: React.FC<IProps> = ({ products }) => {
  return (
    <div className="m-auto w-[95%] rounded-b-lg bg-[var(--secondary-bg-color)]">
      <ProductCategories categories={categories} />
      {categories.map((categoryGroup) => {
        const categoryProducts = products.filter((product) =>
          categoryGroup.includes(product.category)
        );
        return (
          <CategoryGroup
            key={categoryGroup.join()}
            categoryProducts={categoryProducts}
            categoryGroup={categoryGroup}
          />
        );
      })}
    </div>
  );
};

export default ProductsSroll;

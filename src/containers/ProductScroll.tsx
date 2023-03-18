import CategoryItems from "~/components/CategoryItems";
import CategoriesRow from "~/components/CategoryRow";
import type { IProduct } from "~/utils/data";

interface IProps {
  products: IProduct[];
}
const categories = [
  ["Pants"],
  ["T-Shirts"],
  ["Sweaters", "Coats"],
  ["Shirts"],
  ["Blouses"],
  ["Bags"],
  ["Lencerie"],
  ["Others"],
];

const ProductsSroll: React.FC<IProps> = ({ products }) => {
  return (
    <div className="m-auto w-[95%] rounded-b-lg bg-[var(--secondary-bg-color)]">
      <CategoriesRow categories={categories} />
      {categories.map((categoryGroup) => {
        const categoryProducts = products.filter((product) =>
          categoryGroup.includes(product.category)
        );
        return (
          <CategoryItems
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

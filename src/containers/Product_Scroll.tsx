import ProductItem from "../components/Product_Item";
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
];

const ProductsSroll: React.FC<IProps> = ({ products }) => {
  return (
    <div className="w-full">
      <div className="flex w-full flex-row items-center justify-between">
        {categories.map((category) => {
          return (
            <div
              className="rounded-lg border-[1px] border-solid border-red-500 p-1 shadow-2xl"
              key={category.join()}
            >
              {category.join(" & ")}
            </div>
          );
        })}
      </div>
      {categories.map((categoryGroup) => {
        const categoryProducts = products.filter((product) =>
          categoryGroup.includes(product.category)
        );
        return (
          <div key={categoryGroup.join()} className="w-full">
            <h1 className="mb-5 text-center">{categoryGroup.join(" & ")}</h1>
            <div className="m-auto flex w-full max-w-screen-md flex-wrap justify-around">
              {categoryProducts.map((categoryProduct) => (
                <ProductItem
                  product={categoryProduct}
                  key={categoryProduct.slug}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsSroll;

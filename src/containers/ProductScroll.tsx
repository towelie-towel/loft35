import CategoryItems from "~/components/CategoryItems";
// import CategoriesRow from "~/components/CategoryRow";

import { api } from "~/utils/api";

const ProductsSroll: React.FC = () => {
  const { data: productData } = api.product.getAll.useQuery();
  const { data: categoryData } = api.category.getAll.useQuery();

  return (
    <div className="m-auto w-[95%] rounded-b-lg bg-[var(--secondary-bg-color)]">
      {/* <CategoriesRow categories={categoryData} /> */}
      {categoryData?.map((categoryGroup) => {
        const categoryProducts = productData?.filter(
          (product) => categoryGroup.id === product.categoryId
        );
        return (
          <CategoryItems
            key={categoryGroup.id}
            categoryProducts={categoryProducts}
            categoryGroup={categoryGroup.name}
          />
        );
      })}
    </div>
  );
};

export default ProductsSroll;

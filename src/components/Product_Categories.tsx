interface IProps {
  categories: string[][];
}

const ProductCategories: React.FC<IProps> = ({ categories }) => {
  return (
    <div className="flex w-full flex-row items-center justify-between">
      {categories.map((category) => {
        return (
          <div
            className="rounded-lg border-[1px] border-solid p-1 shadow-2xl"
            key={category.join()}
          >
            {category.join(" & ")}
          </div>
        );
      })}
    </div>
  );
};

export default ProductCategories;

interface IProps {
  categories: string[][];
}

const ProductCategories: React.FC<IProps> = ({ categories }) => {
  return (
    <div className="flex w-full flex-col">
      <div className="ml-10 pb-4 text-[1rem] font-semibold">
        <h2>Productos disponibles</h2>
      </div>
      <div className="items-center overflow-x-scroll whitespace-nowrap px-0 pb-3">
        {categories.map((category) => {
          return (
            <h2
              className="mx-2 inline-block overflow-hidden rounded-md bg-[var(--primary-bg-color)] py-1 px-4 font-semibold shadow-2xl"
              key={category.join()}
            >
              {category.join(" & ")}
            </h2>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCategories;

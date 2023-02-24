interface IProps {
  categories: string[][];
}

const ProductCategories: React.FC<IProps> = ({ categories }) => {
  return (
    <div className="flex w-full flex-col">
      <div className="ml-10 pb-4 text-[1rem] font-semibold text-[var(--font-secondary-color)]">
        <h2>Productos disponibles</h2>
      </div>
      <div className="items-center overflow-x-scroll whitespace-nowrap bg-white px-0 pb-3 pt-2">
        {categories.map((category) => {
          return (
            <h2
              className="mx-3 inline-block overflow-hidden rounded-sm rounded-sm border-[1px] border-solid bg-slate-100 px-4 font-semibold shadow-2xl"
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

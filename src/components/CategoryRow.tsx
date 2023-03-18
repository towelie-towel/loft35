interface IProps {
  categories: string[][];
}

const CategoriesRow: React.FC<IProps> = ({ categories }) => {
  return (
    <div className="flex w-full flex-col pb-8">
      <div className="mx-auto w-[90%] py-4">
        <button className="text-left text-[1rem] font-semibold">
          Productos disponibles
        </button>
      </div>
      <div className=" mx-auto w-[94%] items-center overflow-x-scroll whitespace-nowrap px-0 pb-3">
        {categories.map((category) => {
          return (
            <button
              className="active:bg-[var(--light-gray) mr-2 inline-block overflow-hidden rounded-md bg-[var(--transparent-gray-1)] py-1 px-[2%] text-start font-semibold text-[var(--font-secondary-color)] shadow-2xl hover:bg-[var(--light-gray)]"
              key={category.join()}
            >
              {category.join(" & ")}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesRow;

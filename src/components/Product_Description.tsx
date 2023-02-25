import type { IProduct } from "../utils/data";

interface IProps {
  product: IProduct;
}

const ProductDescription: React.FC<IProps> = ({ product }) => {
  return (
    <div className="text-2x flex flex-col items-start justify-center p-5 font-semibold text-[var(--font-primary-color)]">
      <h2 className="text-md">{product.name}</h2>
      <h3 className="text-md my-4">CUP${product.price},00</h3>
      <button
        className="text-md w-full rounded bg-[var(--light-gray-2)] py-2 px-4 text-[var(--font-secondary-color)] shadow outline-none  hover:bg-[var(--light-gray)] active:bg-[var(--light-gray-1)]"
        type="button"
      >
        Añadir al Carrito
      </button>
    </div>
  );
};

export default ProductDescription;

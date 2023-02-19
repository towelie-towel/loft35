import type { IProduct } from "../utils/data";

interface IProps {
  product: IProduct;
}

const ProductDescription: React.FC<IProps> = ({ product }) => {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h2 className="text-lg">{product.name}</h2>
      <p>${product.price}</p>
      <button
        className="rounded bg-amber-300 py-2 px-4 text-xs shadow outline-none  hover:bg-amber-400 active:bg-amber-500"
        type="button"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductDescription;

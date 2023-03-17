import { ShoppingCart, FacebookIcon, InstagramIcon } from "./Icons";
import FindProducts from "./FindProducts";

interface IProps {
  onUploadProductClick: () => void;
}

const NavBar: React.FC<IProps> = ({ onUploadProductClick }) => {
  return (
    <nav className="my-5 mx-auto flex h-auto w-[95%] items-center justify-center">
      <div className="flex w-[90%] flex-row items-center justify-center max-md:justify-between">
        <FindProducts />
        <div className="flex w-1/3 justify-around max-md:justify-between">
          <InstagramIcon stroke="#555555" height={15} />
          <div onClick={onUploadProductClick}>
            <FacebookIcon stroke="#555555" height={15} />
          </div>
          <ShoppingCart
            onClick={() => {
              const htmlElement = document.querySelector("html");
              const currentColorScheme =
                htmlElement?.getAttribute("data-color-scheme");
              if (currentColorScheme === "light") {
                htmlElement?.setAttribute("data-color-scheme", "dark");
              } else {
                htmlElement?.setAttribute("data-color-scheme", "light");
              }
            }}
            stroke="#555555"
            height={15}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

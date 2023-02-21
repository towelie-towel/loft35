import { ShoppingCart, FacebookIcon, InstagramIcon } from "./Icons";
import FindProducts from "./FindProducts";

const NavBar: React.FC = () => {
  return (
    <nav className="my-5 mx-auto flex h-auto w-11/12 items-center justify-around rounded-2xl">
      <div className="mx-3 ml-5">
        <FindProducts />
      </div>
      <div className="mx-2 flex min-w-[80px] justify-between">
        <div className="mr-3">
          <InstagramIcon stroke="#555555" height={18} />
        </div>

        <FacebookIcon stroke="#555555" width={18} />
        <div
          className="ml-3"
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
        >
          <ShoppingCart stroke="#555555" height={18} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

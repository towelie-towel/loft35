import { ShoppingCart, FacebookIcon, InstagramIcon } from "./Icons";
import FindProducts from "./FindProducts";

const NavBar: React.FC = () => {
  return (
    <nav className="my-5 mx-auto flex h-auto w-11/12 items-center justify-between rounded-2xl px-4 py-3">
      <div></div>
      <FindProducts />
      <div className="flex justify-between">
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

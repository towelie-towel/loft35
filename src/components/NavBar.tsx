import { ShoppingCart, FacebookIcon, InstagramIcon, LoftLogo } from "./Icons";
import FindProducts from "./FindProducts";

const NavBar: React.FC = () => {
  return (
    <nav className="my-5 mx-auto flex h-auto w-11/12 items-center justify-between rounded-2xl px-4 py-3 shadow-lg">
      <LoftLogo />
      <FindProducts />
      <button
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
        Toggle color scheme
      </button>
      <div className="flex justify-between">
        <ShoppingCart height={24} />
        <InstagramIcon height={24} />
        <FacebookIcon width={24} />
      </div>
    </nav>
  );
};

export default NavBar;

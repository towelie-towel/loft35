import { ShoppingCart, FacebookIcon, InstagramIcon, LoftLogo } from "./Icons";
import FindProducts from "./FindProducts";

const Nav = () => {
  return (
    <nav className="my-5 mx-auto flex h-auto w-11/12 items-center justify-between rounded-2xl px-4 py-3 shadow-lg">
      <LoftLogo />
      <FindProducts />
      <div className="flex justify-between">
        <ShoppingCart height={24} />
        <InstagramIcon height={24} />
        <FacebookIcon width={24} />
      </div>
    </nav>
  );
};

export default Nav;

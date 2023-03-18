import {
  ShoppingCart,
  FacebookIcon,
  InstagramIcon,
  MagnifyingGlass,
} from "./Icons";
import { useState } from "react";

interface IProps {
  onUploadProductClick: () => void;
}

const NavBar: React.FC<IProps> = ({ onUploadProductClick }) => {
  const [searchValue, setSearchValue] = useState("");
  //const [isInputOpen, toggleInput] = useState(false);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("handleSearchSubmit");
  };
  return (
    <nav className="my-5 mx-auto flex h-auto w-[95%] items-center justify-center">
      <div className="flex w-[90%] flex-row items-center justify-center max-md:justify-between">
        <form
          onSubmit={handleSearchSubmit}
          className={`mr-10 flex h-10 justify-around transition-all`}
        >
          <div className="relative flex items-center">
            <input
              type="text"
              id="search"
              value={searchValue}
              onChange={handleSearchInputChange}
              placeholder="Buscar"
              className="h-full max-w-[200px] rounded-l-lg border-[1px] border-r-0 border-[#d3d5dd] bg-[#fff] px-4 font-medium text-[#555555] transition-all"
            />
            <button
              type="submit"
              className="magnifyingGlass flex h-full min-w-[40px] items-center justify-center rounded-r-lg border-[1px] border-[#d3d5dd] bg-[#f5f8fa] px-2 transition-all"
            >
              <MagnifyingGlass stroke="#a1a5b7" width={18} />
            </button>
          </div>
        </form>
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

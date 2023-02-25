import React, { useState } from "react";
import { MagnifyingGlass } from "./Icons";

const FindProducts = () => {
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
  );
};

export default FindProducts;

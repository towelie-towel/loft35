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
      className={`flex max-w-md flex-row-reverse transition-all`}
    >
      <div className="relative flex items-center">
        <input
          type="text"
          id="search"
          value={searchValue}
          onChange={handleSearchInputChange}
          placeholder="Buscar productos"
          className={`w-full rounded-full border-2 border-gray-300 bg-white py-2 px-4 italic leading-tight text-gray-700 transition-all focus:border-purple-500 focus:bg-white focus:outline-none`}
        />

        <button
          type="submit"
          className={`absolute right-9 top-0 mt-2 mr-4 transition-all`}
        ></button>
        <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
          <MagnifyingGlass stroke="gray" width={24} />
        </button>
      </div>
    </form>
  );
};

export default FindProducts;

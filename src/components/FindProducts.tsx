import React, { useState } from "react";
import { MagnifyingGlass } from "./Icons";

interface IProps {
  toggleInput: (toggle: boolean) => void;
  isInputOpen: boolean;
}

const FindProducts: React.FC<IProps> = ({ toggleInput, isInputOpen }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className={`${
        isInputOpen ? "mx-auto" : "ml-auto"
      } flex max-w-xl flex-row-reverse transition-all`}
    >
      <div className="relative flex items-center">
        <input
          type="text"
          id="search"
          value={searchValue}
          onChange={handleSearchInputChange}
          placeholder={isInputOpen ? "Buscar productos" : ""}
          className={`${
            isInputOpen ? "w-full" : "w-24"
          } rounded-full border-2 border-gray-300 bg-white py-2 px-4 italic leading-tight text-gray-700 transition-all focus:border-purple-500 focus:bg-white focus:outline-none`}
        />

        <button
          type="submit"
          className={` ${
            isInputOpen ? "right-6 rotate-180" : "right-9"
          } absolute top-0 mt-2 mr-4 transition-all`}
          onClick={() => {
            toggleInput(!isInputOpen);
          }}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="gray"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          type="submit"
          className="absolute right-0 top-0 mt-2 mr-4"
          onClick={() => {
            toggleInput(!isInputOpen);
          }}
        >
          <MagnifyingGlass stroke="gray" width={24} />
        </button>
      </div>
    </form>
  );
};

export default FindProducts;

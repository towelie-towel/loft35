import React from "react";
import { MagnifyingGlass } from "./Icons";

const FindProducts = () => {
  return (
    <div className="flex flex-wrap items-center">
      <input
        type="text"
        className="min-w-0 rounded-l-lg rounded-r-[0] border-[0.5px] border-r-[0px] border-[#f5f8fa] px-3"
        placeholder="Buscar"
      />
      <div className="flex h-[42px] w-10 items-center justify-center rounded-r-lg border-[0.5px] border-solid border-[#f5f8fa] bg-white">
        <MagnifyingGlass />
      </div>
    </div>
  );
};

export default FindProducts;

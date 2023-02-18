import React from "react";
import { MagnifyingGlass } from "./Icons";

const FindProducts = () => {
  return (
    <div className="flex flex-wrap items-center">
      <input
        type="text"
        className="rounded-l-lg rounded-r-[0] border-[0.5px] border-r-[0px] border-[#f5f8fa]"
        placeholder="Buscar"
      />
      <div className="flex items-center justify-center rounded-r-lg border-[0.5px] border-solid border-[#f5f8fa] bg-white px-2">
        <MagnifyingGlass stroke="#555555" width={25} />
      </div>
    </div>
  );
};

export default FindProducts;

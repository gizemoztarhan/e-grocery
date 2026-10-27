"use client";

import { FC } from "react";
import { CiSearch } from "react-icons/ci";

const SearchForm: FC = () => {
  return (
    <form
      onSubmit={() => {}}
      className="flex gap-3 py-2 px-4 mx-5 border border-zinc-300 md:w-1/2 rounded-full"
    >
      <button type="submit" className="text-xl text-zinc-700 cursor-pointer">
        <CiSearch />
      </button>

      <input
        type="text"
        placeholder="Ürün veya kategori ara..."
        className="outline-none text-zinc-800 w-full"
      />
    </form>
  );
};

export default SearchForm;

"use client";
import { addFavorite } from "@/store/cartSlice";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

interface Props {
  cocktails: {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strCategory: string;
  }[];
}

interface MapProps {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
}

const CockTail = ({ cocktails }: Props) => {
  const [search, setSearch] = useState("");
  const [newData, setNewData] = useState(5);

  const dispatch = useDispatch();

  const addedData = () => toast("Added to Favourites");

  const searchData = cocktails.filter((cocktail: MapProps) => {
    return cocktail.strDrink
      .trim()
      .toLowerCase()
      .includes(search.toLowerCase());
  });

  const handleAdd = (cocktail: MapProps) => {
    dispatch(addFavorite(cocktail));
  };

  const item = useSelector(
    (state: { cart: { favorites: MapProps[] } }) => state.cart.favorites
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        className="border text-black p-2 my-4  rounded-lg w-full"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {searchData.length > 0 ? (
          searchData.slice(0, newData).map((cocktail: MapProps) => (
            <div
              key={cocktail.idDrink}
              className="border rounded-lg p-4 text-center"
            >
              <Image
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                width={300}
                height={300}
                className="w-full h-32 object-fit rounded bg-contain bg-top"
              />
              <div className="flex w-full justify-between">
                <div>
                  <h2 className="font-semibold mt-2">{cocktail.strDrink}</h2>
                  <p className="text-sm text-gray-500">
                    {cocktail.strCategory}
                  </p>
                </div>

                <button
                  className={`{item.find(
                    (fav: { idDrink: string }) =>
                      fav.idDrink === cocktail.idDrink
                  )
                    ? "bg-red-500"
                    : " bg-blue-500 "}text-white rounded p-2 h-fit px-4 mt-3`}
                  onClick={() => {
                    handleAdd(cocktail);
                    addedData();
                  }}
                >
                  {item.find(
                    (fav: { idDrink: string }) =>
                      fav.idDrink === cocktail.idDrink
                  )
                    ? "❤️"
                    : "Add"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">No Data Found</h1>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => window.location.reload()}
            >
              Refresh The Page
            </button>
          </div>
        )}
      </div>

      {searchData.length > newData && (
        <button
          className="bg-blue-500 text-white rounded p-2 h-fit px-4 mt-3"
          onClick={() => setNewData(newData + 5)}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default CockTail;

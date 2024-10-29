"use client";
import React, { useEffect, useState } from "react";
import { removeFavorite } from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { toast } from "react-toastify";

const FavouriteComp = () => {
  const dispatch = useDispatch();
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const deleted = () => toast("Removed from Favourites");

  useEffect(() => {
    setIsClient(true);
  }, []);

  interface Cocktail {
    idDrink: string;
    strDrinkThumb: string;
    strDrink: string;
    strCategory: string;
  }

  const favorites = useSelector(
    (state: { cart: { favorites: Cocktail[] } }) => state.cart.favorites
  );

  if (!isClient) return null;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFavorites = favorites.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(favorites.length / itemsPerPage);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {currentFavorites.map(
          (cocktail: {
            idDrink: string;
            strDrinkThumb: string;
            strDrink: string;
            strCategory: string;
          }) => (
            <div
              key={cocktail.idDrink}
              className="border rounded-lg p-4 text-center"
            >
              <Image
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                draggable={false}
                width={300}
                height={300}
                className="w-full h-32 object-fit rounded bg-contain bg-top"
              />
              <div className="flex w-full justify-between">
                <div>
                  <h2 className="font-semibold mt-2">{cocktail.strDrink}</h2>
                </div>
                <button
                  className="bg-red-500 text-white rounded p-2 h-fit px-4 mt-3"
                  onClick={() => {
                    dispatch(removeFavorite(cocktail));
                    deleted();
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          )
        )}
      </div>

      {currentFavorites.length === 0 ? (
        <div className="flex  justify-center mt-4">
          <p>No favourites added yet</p>
        </div>
      ) : (
        <div className="flex items-center justify-center mt-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-gray-300 text-gray-700 rounded px-4 py-2 mr-2 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-gray-300 text-gray-700 rounded px-4 py-2 ml-2 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default FavouriteComp;

import FavouriteComp from "@/components/FavouriteComp";
import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Favourite Cocktails</h1>

      <FavouriteComp />
    </div>
  );
};

export default Page;

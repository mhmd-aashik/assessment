import React from "react";
import { fetchRandomCocktails } from "../lib/api";
import CockTail from "@/components/CockTail";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const cocktails = await fetchRandomCocktails();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Random Cocktails</h1>
      <CockTail cocktails={cocktails} />
    </div>
  );
}

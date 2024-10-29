const API_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const fetchRandomCocktails = async () => {
  try {
    const response = await fetch(`${API_URL}/search.php?s='`, {
      next: {
        revalidate: 0,
      },
    });
    const data = await response.json();
    return data.drinks || [];
  } catch (error) {
    console.error(error);
  }
};

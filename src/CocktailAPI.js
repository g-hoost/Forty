export const getAllCocktails = () => {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s"
  ).then((res) => res.json());
};

export const getRandomCocktail = () => {
  return fetch("www.thecocktaildb.com/api/json/v1/1/random.php").then((res) =>
    res.json()
  );
};

// Bild -> strDrinkThumb
// Name -> strDrink
// Zutaten -> strIngredient1 - 15
// Erklärung -> strInstructionsDE

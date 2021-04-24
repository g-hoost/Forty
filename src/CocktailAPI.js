export const getAllDrinksByCategory = (urlCategory) => {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${urlCategory}`
  ).then((res) => res.json());
};

export const getDrinkInfos = (id) => {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  ).then((res) => res.json());
};

export const getRandomCocktail = () => {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/random.php`
  ).then((res) => res.json());
};

export const searchCocktail = (searchTerm) => {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${searchTerm}`
  ).then((res) => res.json());
};

export const searchNonAlcoholiCocktail = () => {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
  ).then((res) => res.json());
};

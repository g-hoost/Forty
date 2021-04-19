export const getAllDrinksByCategory = (urlCategory) => {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${urlCategory}`
  ).then((res) => res.json());
};

// export const getAllGinCocktails = () => {
//   return fetch(
//     "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin"
//   ).then((res) => res.json());
// };

// export const getAllVodkaCocktails = () => {
//   return fetch(
//     "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka"
//   ).then((res) => res.json());
// };

// export const getAllRumCocktails = () => {
//   return fetch(
//     "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum"
//   ).then((res) => res.json());
// };

// export const getAllScotchCocktails = () => {
//   return fetch(
//     "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch"
//   ).then((res) => res.json());
// };

// export const getAllMocktails = () => {
//   return fetch(
//     "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
//   ).then((res) => res.json());
// };

// export const getRandomCocktail = () => {
//   return fetch(
//     "https://www.thecocktaildb.com/api/json/v1/1/random.php"
//   ).then((res) => res.json());
// };

// Bild -> strDrinkThumb
// Name -> strDrink
// Zutaten -> strIngredient1 - 15
// Erklärung -> strInstructionsDE

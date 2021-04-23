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

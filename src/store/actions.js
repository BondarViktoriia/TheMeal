import axiosClient from "../axiosClient";

export const searchMeals = async ({ commit }, keyWord) => {
  await axiosClient.get(`search.php?s=${keyWord}`).then(({ data }) => {
    commit("setSearchMeals", data.meals);
  });
};

export const mealDetails = async (id) => {
  await axiosClient.get(`lookup.php?i=${id}`).then(({ data }) => {
    mealDetails.value = data;
  });
};

export const searchMealsByLetter = async ({ commit }, letter) => {
  await axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setMealsByLetter", data.meals);
  });
};

export const searchMealsByIngredient = async ({ commit }, ingredient) => {
  await axiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
    commit("setMealsByIngredient", data.meals);
  });
};

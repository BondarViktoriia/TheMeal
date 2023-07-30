import axiosClient from "../axiosClient";

export const searchMeals = async ({ commit }, keyWord) => {
  await axiosClient.get(`search.php?s=${keyWord}`).then(({ data }) => {
    commit("setSearchMeals", data.meals);
  });
};

export const mealDetails = async (id) => {
  await axiosClient.get(`lookup.php?i=${id}`).then(({ data }) => {
    debugger;
    mealDetails.value = data;
  });
};

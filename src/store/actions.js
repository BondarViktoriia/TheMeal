import axiosClient from "../axiosClient";

export const searchMeals = async ({ commit }, keyWord) => {
  await axiosClient.get(`search.php?s=${keyWord}`).then(({ data }) => {
    commit("setSearchMeals", data.meals);
  });
};

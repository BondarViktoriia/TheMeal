export const setSearchMeals = (state, meals) => {
  state.searchMeals = meals || [];
};
export const setMealsByLetter = (state, meals) => {
  state.mealsByLetter = meals || [];
};

export const setMealsByIngredient = (state, meals) => {
  state.mealsByIngredient = meals || [];
};

export const setIngredient = (state, ingredient) => {
  state.ingredient = ingredient;
};

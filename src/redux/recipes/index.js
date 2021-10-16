import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  hasErrors: false,
  recipes: [],
};

// A slice for recipes with our 3 reducers
const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    // think in way to separate this reducers
    getRecipes: (state) => {
      state.isLoading = true;
    },
    getRecipesSuccess: (state, { payload }) => {
      state.recipes = payload;
      state.isLoading = false;
      state.hasErrors = false;
    },
    getRecipesFailure: (state, { payload }) => {
      state.isLoading = false;
      state.hasErrors = payload;
    },
  },
});

// The main reducer
export default recipesSlice.reducer;

// export actions-creators to use in async calls
export const { getRecipes, getRecipesSuccess, getRecipesFailure } = recipesSlice.actions;

// async calls (actions)
export function fetchRecipes() {
  return async (dispatch) => {
    dispatch(getRecipes());
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      dispatch(getRecipesSuccess(data.meals.slice(0, 10)));
    } catch (error) {
      dispatch(getRecipesFailure(error));
    }
  };
}

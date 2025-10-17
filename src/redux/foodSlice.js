import { createSlice } from '@reduxjs/toolkit'

export const foodSlice = createSlice({
  name: 'foods',
  initialState: {
    selectedCategory: 'All'
  },
  reducers: {
    filterCategory: (state, action) => {
        state.selectedCategory = action.payload;
    }
  },
})

export const getSelectedCategory = state => state.foods.selectedCategory;
export const {filterCategory} = foodSlice.actions;
export default foodSlice.reducer;
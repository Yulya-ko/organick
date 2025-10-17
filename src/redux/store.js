import { configureStore } from '@reduxjs/toolkit'
import foods from './foodSlice'
import cart from './cartSlice'

export const store = configureStore({
  reducer: {
    foods,
    cart
  },
})
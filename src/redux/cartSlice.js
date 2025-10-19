import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addItemToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItem = state.cartItems.find(item => item.productId === product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.quantity * product.price;
      } else {
        const timeId = new Date().getTime();
        state.cartItems.push({
          id: timeId,
          productId: product.id,
          quantity,
          totalPrice: quantity * product.price,
        });
      }
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.cartItemId);
    },
    updateQuantity: (state, action) => {
      const { cartItemId, quantity, productPrice } = action.payload;
      const item = state.cartItems.find(i => i.id === cartItemId);
      if (item) {
        item.quantity = quantity > 0 ? quantity : 1;
        item.totalPrice = item.quantity * productPrice;
      }
    }
  }
});

export const { addItemToCart, removeItemFromCart, updateQuantity } = cartSlice.actions;

export const getCartItems = state => state.cart.cartItems;
export const getTotalPrice = state =>
  state.cart.cartItems.reduce((total, item) => total + item.totalPrice, 0);

export default cartSlice.reducer;

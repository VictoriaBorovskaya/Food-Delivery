import { createSlice } from '@reduxjs/toolkit';
import { FoodType } from './foodSlice';

export interface CartState {
  cart: CartType[];
}

const initialState: CartState = {
  cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '') : [],
};

export type CartType = {
  item: FoodType;
  name: string;
  count: number;
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    // replaceCartItem: (state, action) => {
    //   state.cart = state.cart.filter((item) => item.item !== action.payload);
    // },
  },
});

export const { setCart } = CartSlice.actions;

export default CartSlice.reducer;

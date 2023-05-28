import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import RestaurantsReducer from './slices/restaurantsSlice';
import FoodReducer from './slices/foodSlice';
import CartReducer from './slices/cartSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    restaurants: RestaurantsReducer,
    food: FoodReducer,
    cart: CartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch; // Export

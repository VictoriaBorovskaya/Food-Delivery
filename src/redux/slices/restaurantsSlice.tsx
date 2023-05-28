import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRestaurants = createAsyncThunk('restaurants/fetchRestaurants', async () => {
  const { data } = await axios.get<RestaurantsType[]>(
    'https://www.bit-by-bit.ru/api/student-projects/restaurants',
  );
  return data;
});

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type RestaurantsType = {
  name: string;
  slug: string;
  phone: string;
  email: string;
  address: string;
  cuisine: string;
  image: string;
  openAt: string;
  closeAt: string;
  description: string;
  id: number;
};

interface RestaurantsState {
  restaurants: RestaurantsType[];
  status: Status;
}

const initialState: RestaurantsState = {
  restaurants: [],
  status: Status.LOADING,
};

const RestaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    setRestaurants: (state, action) => {
      state.restaurants = action.payload.restaurants;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.restaurants = action.payload;
    });
    builder.addCase(fetchRestaurants.pending, (state) => {
      state.status = Status.LOADING;
      state.restaurants = [];
    });
    builder.addCase(fetchRestaurants.rejected, (state) => {
      state.status = Status.ERROR;
      state.restaurants = [];
    });
  },
});

export const { setRestaurants } = RestaurantsSlice.actions;

export default RestaurantsSlice.reducer;

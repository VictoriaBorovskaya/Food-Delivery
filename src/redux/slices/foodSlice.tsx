import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFood = createAsyncThunk('food/fetchFood', async (slug: string) => {
  const { data } = await axios.get<FoodType[]>(
    `https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`,
  );
  return data;
});

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type FoodType = {
  id: string;
  restaurantId: string;
  name: string;
  image: string;
  description: string;
  price: string;
};

interface FoodState {
  food: FoodType[];
  status: Status;
}

const initialState: FoodState = {
  food: [],
  status: Status.LOADING,
};

const FoodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    setFood: (state, action) => {
      state.food = action.payload.food;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFood.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.food = action.payload;
    });
    builder.addCase(fetchFood.pending, (state) => {
      state.status = Status.LOADING;
      state.food = [];
    });
    builder.addCase(fetchFood.rejected, (state) => {
      state.status = Status.ERROR;
      state.food = [];
    });
  },
});

export const { setFood } = FoodSlice.actions;

export default FoodSlice.reducer;

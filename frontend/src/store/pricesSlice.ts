import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Item {
  id: string;
  price: number;
}

const pricesSlice = createSlice({
  name: 'prices',
  initialState: {} as { [key: string]: number },
  reducers: {
    updatePrice: (state, action: PayloadAction<Item>) => {
      state[action.payload.id] = action.payload.price;
    }
  }
});

export default pricesSlice;

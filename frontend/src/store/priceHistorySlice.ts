import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/index';

type historyEntry = {
  time: number;
  price: number;
};

type PriceHistoryResponse = {
  symbol: string | null;
  history: historyEntry[];
};

type PriceHistoryState = {
  symbol: string | null;
  history: historyEntry[];
  apiState: {
    loading: boolean | null;
    error: boolean;
  };
};

const initialState: PriceHistoryState = {
  symbol: null,
  history: [],
  apiState: {
    loading: null,
    error: false
  }
};

export const fetchPriceHistory = createAsyncThunk(
  'stocks/fetchPriceHistory',
  // if you type your function argument here
  async (symbolId: string, thunkAPI) => {
    const response = await fetch(`http://localhost:3100/api/stock/history/${symbolId}`, {
      signal: thunkAPI.signal
    });
    // await delayPromise(1000);
    return (await response.json()) as PriceHistoryResponse;
  }
);

const selectSymbolInfo = (state: RootState) => state.priceHistory.symbol;
const selectPriceHistory = (state: RootState) => state.priceHistory.history;
const apiState = (state: RootState) => state.priceHistory.apiState;

const priceHistorySlice = createSlice({
  name: 'priceHistory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPriceHistory.fulfilled, (state, action) => {
      // Add user to the state array
      const { symbol, history } = action.payload;
      state.apiState.error = false;
      state.apiState.loading = false;
      state.history = history;
      state.symbol = symbol;
    });

    builder.addCase(fetchPriceHistory.rejected, (state, action) => {
      state.apiState.error = true;
      state.apiState.loading = false;
    });

    builder.addCase(fetchPriceHistory.pending, (state, action) => {
      state.apiState.error = false;
      state.apiState.loading = true;
    });
  }
});

const selectors = {
  selectPriceHistory,
  selectSymbolInfo,
  apiState
};

export default priceHistorySlice;
export { selectors };

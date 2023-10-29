import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/index';

type Stock = {
  symbol: string;
  companyName: string;
  industry: string;
  marketCap: number;
  exchange: 'NASDAQ' | 'NYSE';
  trend: 'UP' | 'DOWN' | null;
};

type StockEntry = {
  [key: string]: Stock;
};

type StocksState = {
  entities: StockEntry;
  ids: string[];
  apiState: {
    loading: boolean | null;
    error: boolean;
  };
};

const initialState: StocksState = {
  entities: {},
  ids: [],
  apiState: {
    loading: null,
    error: false
  }
};

export const fetchAllStocks = createAsyncThunk(
  'stocks/fetchAllStocks',
  // if you type your function argument here
  async () => {
    const response = await fetch(`http://localhost:3100/api/stocks`);
    return (await response.json()) as Stock[];
  }
);

const selectStockIds = (state: RootState) => state.stocks.ids;
const selectStocks = (state: RootState) => state.stocks.entities;
const apiState = (state: RootState) => state.stocks.apiState;

const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllStocks.fulfilled, (state, action) => {
      // Add user to the state array
      const map: StockEntry = {};
      action.payload.forEach((e) => {
        map[e.symbol] = e;
      });
      const ids = Object.keys(map);
      const newState = { entities: map, ids };
      state.apiState.error = false;
      state.apiState.loading = false;
      Object.assign(state, newState);
    });

    builder.addCase(fetchAllStocks.rejected, (state, action) => {
      state.apiState.error = true;
      state.apiState.loading = false;
    });

    builder.addCase(fetchAllStocks.pending, (state, action) => {
      state.apiState.error = false;
      state.apiState.loading = true;
    });
  }
});

const selectors = {
  selectStockIds,
  selectStocks,
  apiState
};

export default stocksSlice;
export { selectors };

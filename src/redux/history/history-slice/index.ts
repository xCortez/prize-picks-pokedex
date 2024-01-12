import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HistoryEntry, HistoryState } from './schema';

const initialState: HistoryState = {
  searches: []
};

// create history slice
const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addSearch: (state, action: PayloadAction<HistoryEntry>) => {
      const { id, sprite, name, dateSearched } = action.payload;

      state.searches.unshift({ id, sprite, name, dateSearched });
    },
    clearHistory: (state) => {
      state.searches = [];
    },
  },
});

export const { addSearch, clearHistory } = historySlice.actions;
export default historySlice.reducer;

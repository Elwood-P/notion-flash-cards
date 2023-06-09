import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch cards from Notion API
export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  const response = await fetch('/.netlify/functions/notion-api');
  const data = await response.json();
  return data.results;
});

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cardsData: [],
    activeCardId: null,
  },
  reducers: {
    makeCardActive: (state, action) => {
      state.activeCardId = action.payload;
    },
    makeCardInActive: (state) => {
      state.activeCardId = null;
    },
    markDone: (state, action) => {
      // Mark as done - set studied date(now) and duration date(payload). Notion database also needs updating (with middleware)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cardsData = action.payload;
    });
  },
});

export const { markDone, makeCardActive, makeCardInActive } = cardsSlice.actions;

export default cardsSlice;

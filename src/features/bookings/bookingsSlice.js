import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import bookingsService from './bookingsService';

const initialState = {
  bookings: [],
  isLoading: false,
  booking: null,
};

export const createBooking = createAsyncThunk(
  "bookings/createBooking",
  async ({ id, token }) => {
    try {
      return await bookingsService.createBooking(id, token);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.booking = action.payload;
        state.isLoading = false;
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { reset } = bookingsSlice.actions;
export default bookingsSlice.reducer;

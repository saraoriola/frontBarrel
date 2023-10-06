import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import bookingsService from './bookingsService';

const initialState = {
  creating: false,
  error: null,
  userBookings: [], 
};


export const createBooking = createAsyncThunk("bookings/createBooking", async ({id}) => {
    try {
      return await bookingsService.createBooking(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const getMyBookings = createAsyncThunk("bookings/getMyBookings", async () => {
  try {
    return await bookingsService.getMyBookings();
  } catch (error) {
    console.error(error);
    throw error;
  }
});


const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(createBooking.pending, (state) => {
          state.creating = true;
          state.error = null;
        })
        .addCase(createBooking.fulfilled, (state, action) => {
          state.creating = false;
          state.error = null;
        })
        .addCase(createBooking.rejected, (state, action) => {
          state.creating = false;
          state.error = action.error.message; 
        })
        .addCase(getMyBookings.pending, (state) => {
          state.creating = true;
          state.error = null;
        })
        .addCase(getMyBookings.fulfilled, (state, action) => {
          state.creating = false;
          state.error = null;
          state.userBookings = action.payload; 
        })
        .addCase(getMyBookings.rejected, (state, action) => {
          state.creating = false;
          state.error = action.error.message;
        });
    },
  });

export const { reset } = bookingsSlice.actions;
export default bookingsSlice.reducer;

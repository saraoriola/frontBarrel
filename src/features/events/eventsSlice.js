import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import eventsService from './eventsService';

const initialState = {
  events: [],
  isLoading: false,
  event: null, 
};

export const getAllEvents = createAsyncThunk("events/getAllEvents", async () => {
  try {
    return await eventsService.getAllEvents();
  } catch (error) {
    console.error(error);
    throw error; 
  }
});

export const getEventById = createAsyncThunk("events/getEventById", async (id) => {
  try {
    return await eventsService.getEventById(id);
  } catch (error) {
    console.error(error);
  }
});

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllEvents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.events = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllEvents.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getEventById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEventById.fulfilled, (state, action) => {
        state.event = action.payload;
        state.isLoading = false;
      })
      .addCase(getEventById.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { reset } = eventsSlice.actions;
export default eventsSlice.reducer;

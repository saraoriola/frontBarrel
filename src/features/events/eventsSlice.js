import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import eventsService from './eventsService';

const initialState = {
    events:[],
    isLoading: false,
    event:{},
    };

    export const getAllEvents = createAsyncThunk("events/getAllEvents", async () => {
        try {
          return await eventsService.getAllEvents();
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
        },
      });
      
      export const { reset } = eventsSlice.actions;
      export default eventsSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user")) || null;
const token = JSON.parse(localStorage.getItem("token")) || null;

const initialState = {
  user: user,
  token: token,
  isError: false,
  isSuccess: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.message = action.payload.message;
        state.isSuccess = true
      })
      .addCase(login.rejected,(state,action)=>{
        state.isError =true;
        state.message = action.payload;
        state.token = action.payload.token;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      console.error(error);
      const message = error.response.data.messages[0];
      return thunkAPI.rejectWithValue(message); 
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user,thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    console.error(error);
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message); 
  }
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
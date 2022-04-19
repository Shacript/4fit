import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import UserService from "../../services/user.service";

import AuthService from "../../services/auth.service";

export const getUserInfomation = createAsyncThunk(
  "auth/getUserInfomation",
  async (thunkAPI) => {
    try {
      const response = await UserService.getUserInformation();
      return { user: response.data };
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const updateUserInfomation = createAsyncThunk(
  "auth/updateUserInfomation",
  async (updatedForm, thunkAPI) => {
    try {
      const response = await UserService.updateUserInformation(updatedForm);
      return { user: response.data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      await AuthService.login(username, password);
      const response = await UserService.getUserInformation();
      return { user: response.data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [updateUserInfomation.fulfilled]: (state, action) => {
      state.user = action.payload.user;
    },
    [getUserInfomation.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [getUserInfomation.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;

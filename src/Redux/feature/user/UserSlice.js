import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import { BAS_URL2 } from "../../Api/Api";

const initialState = {
  createUser: {},
  verifyEmail: {},
  login: {},
  status: "idle",
  error: null,
};

export const fetchCreateUser = createAsyncThunk(
  "user/fetchCreateUser",
  async (Value) => {
    console.log("Value", Value);
    const body = JSON.stringify(Value);
    const response = await fetch(`${BAS_URL2}user/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    const data = await response.json();
    return data;
  }
);

//cretae verifyEmail
export const fetchVerifyEmail = createAsyncThunk(
  "user/fetchVerifyEmail",
  async (Value) => {
    console.log("verify", Value.key);
    const body = JSON.stringify(Value);
    const response = await fetch(`${BAS_URL2}account-confirm-email/${Value.key}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    const data = await response.json();
    return data;
  }
);

//create login
export const fetchLogin = createAsyncThunk(
  "user/fetchLogin",
  async (Value) => {
    console.log("Value", Value);
    const body = JSON.stringify(Value);
    const response = await fetch(`${import.meta.env.VITE_BAS_URL2}user/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    const data = await response.json();
    return data;
  }
);

//Create Reducer and actions

export const userSlice = createSlice({
  name: "user", //name of the slice
  initialState, //initial state
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreateUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCreateUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.createUser = action.payload;
        console.log("action.payload", action.payload);
      })
      .addCase(fetchCreateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchVerifyEmail.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchVerifyEmail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.verifyEmail = action.payload;
        console.log("action.payload", action.payload);
      })
      .addCase(fetchVerifyEmail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchLogin.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.login = action.payload;
        console.log("action.payload", action.payload);
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;

export const selectUser = (state) => state.user.createUser;
export const selectUserVerify = (state) => state.user.verifyEmail;
export const selectUserLogin = (state) => state.user.login;

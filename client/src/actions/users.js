import { CREATE, ERROR } from "../constants/actionTypes";
import * as api from "../api/index";
import { useState } from "react";

export const register = (user) => async (dispatch) => {
  try {
    const { data } = await api.register(user);
    dispatch({ type: CREATE, data: data });
  } catch (error) {
    console.log(error.response.data.error);
  }
};

export const login = (user) => async (dispatch) => {
  try {
    const { data } = await api.login(user);
    dispatch({ type: CREATE, data: data });
    localStorage.setItem("authToken", data.token);
    console.log("success");
  } catch (error) {
    console.log(error.response.data.error);
  }
};

import { CREATE, AUTH, SAVECREDS } from "../constants/actionTypes";
import * as api from "../api/index";

export const register = (user, history, setError) => async (dispatch) => {
  try {
    const { data } = await api.register(user);
    dispatch({ type: CREATE, data: data });
    await history.push("/myhome");
  } catch (error) {
    setError(error.response.data.error);
    console.log(error.response.data.error);
  }
};

export const login = (user, history, setError) => async (dispatch) => {
  try {
    const { data } = await api.login(user);
    dispatch({ type: AUTH, data: data });
    await history.push("/myhome");
  } catch (error) {
    setError(error.response.data.error);
    setTimeout(() => {
      setError("");
    }, 5000);
  }
};

export const getUser = (data) => async (dispatch) => {
  try {
    const user = await JSON.parse(localStorage.getItem("profile"));
    dispatch({ type: SAVECREDS, data: user });
  } catch (error) {}
};

import { FETCHMENU, ADDTOMENU, DELETEITEM } from "../constants/actionTypes";
import * as api from "../api/index";

export const getMenu = (id) => async (dispatch) => {
  try {
    const { data } = await api.getMenu(id);
    dispatch({ type: FETCHMENU, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addToMenu = (item) => async (dispatch) => {
  try {
    const { data } = await api.addToMenu(item);
    dispatch({ type: ADDTOMENU, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteFromMenu = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteItem(id);
    dispatch({ type: DELETEITEM, payload: data });
  } catch (error) {
    console.log(error);
  }
};

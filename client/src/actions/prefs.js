import { GETPREFS, UPDATEPREFS } from "../constants/actionTypes";
import * as api from "../api/index";

export const getPrefs = (id) => async (dispatch) => {
  try {
    const { data } = await api.getPrefs(id);
    dispatch({ type: GETPREFS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePrefs = (id, prefs) => async (dispatch) => {
  console.log(id, prefs);
  try {
    const { data } = await api.updatePrefs(id, prefs);
    dispatch({ type: UPDATEPREFS, payload: data });
    dispatch(getPrefs(id));
  } catch (error) {
    console.log(error);
  }
};

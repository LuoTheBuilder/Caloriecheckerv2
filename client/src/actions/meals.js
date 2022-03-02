import { FETCH, CREATE, DELETE } from "../constants/actionTypes";
import * as api from "../api/index";

export const getMeals = (id, setError) => async (dispatch) => {
  try {
    const { data } = await api.getMeals(id);

    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addMeal = (meal) => async (dispatch) => {
  try {
    const { data } = await api.addMeal(meal);
    console.log(meal);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMeal = (id) => async (dispatch) => {
  try {
    await api.deleteMeal(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

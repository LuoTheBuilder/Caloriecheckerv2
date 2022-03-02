import { FETCH, CREATE, DELETE } from "../constants/actionTypes";
export default (meals = [], action, error) => {
  switch (action.type) {
    case FETCH:
      return action.payload;
    case CREATE:
      return [...meals, action.payload];
    case DELETE:
      return meals.filter((meal) => meal.id != action.payload);

    default:
      return meals;
  }
};

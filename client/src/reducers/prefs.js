import { GETPREFS, UPDATEPREFS } from "../constants/actionTypes";

export default (prefs = [], action, error) => {
  switch (action.type) {
    case GETPREFS:
      return action.payload;
    case UPDATEPREFS:
      console.log(action);
      return action.payload;
    default:
      return prefs;
  }
};

import { combineReducers } from "redux";

import users from "./users";
import meals from "./meals";

export default combineReducers({
  users,
  meals,
});

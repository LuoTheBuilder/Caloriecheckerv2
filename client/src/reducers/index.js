import { combineReducers } from "redux";

import users from "./users";
import meals from "./meals";
import menu from "./menu";

export default combineReducers({
  users,
  meals,
  menu,
});

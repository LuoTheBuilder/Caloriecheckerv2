import { combineReducers } from "redux";

import users from "./users";
import meals from "./meals";
import menu from "./menu";
import prefs from "./prefs";

export default combineReducers({
  users,
  meals,
  menu,
  prefs,
});

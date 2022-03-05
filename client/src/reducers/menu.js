import { ADDTOMENU, FETCHMENU, DELETEITEM } from "../constants/actionTypes";

export default (menu = [], action, error) => {
  switch (action.type) {
    case FETCHMENU:
      return action.payload;
    case ADDTOMENU:
      return [...menu, action.payload];
    case DELETEITEM:
      return menu.filter((item) => item.id != action.payload);
    default:
      return menu;
  }
};

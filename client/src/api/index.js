import axios from "axios";

//Authentication Routes
export const register = (newUser) => axios.post("/api/auth/register", newUser);
export const login = (user) => axios.post("/api/auth/login", user);

//Meal Calorie Counter Routes
export const getMeals = (id, config) => axios.get("/meals/" + id, config);
export const addMeal = (meal) => axios.post("/meals/", meal);
export const deleteMeal = (id) => axios.delete("/meals/" + id);

//Custom Menu Options Routes
export const getMenu = (id, config) => axios.get("/menu/" + id, config);
export const addToMenu = (item) => axios.post("/menu/", item);
export const deleteItem = (id) => axios.delete("/menu/" + id);

//Preferences Routes
export const getPrefs = (id) => axios.get("/prefs/" + id);
export const updatePrefs = (id, prefs) => axios.patch("/prefs/" + id, prefs);

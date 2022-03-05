import axios from "axios";

export const register = (newUser) => axios.post("/api/auth/register", newUser);
export const login = (user) => axios.post("/api/auth/login", user);

export const getMeals = (id) => axios.get("/meals/" + id);
export const addMeal = (meal) => axios.post("/meals/", meal);
export const deleteMeal = (id) => axios.delete("/meals/" + id);

export const getMenu = (id) => axios.get("/menu/" + id);
export const addToMenu = (item) => axios.post("/menu/", item);
export const deleteItem = (id) => axios.delete("/menu/" + id);

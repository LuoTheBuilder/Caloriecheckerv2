import axios from "axios";

const url = "/api/auth/";

export const register = (newUser) => axios.post(url + "register", newUser);

export const login = (user) => axios.post(url + "login", user);

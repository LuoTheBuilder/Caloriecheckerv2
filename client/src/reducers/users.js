export default (users = [], action, error) => {
  switch (action.type) {
    case "AUTH":
      if (action.data.user) {
        action.data.response = action.data.user;
      }
      localStorage.setItem(
        "profile",
        JSON.stringify({ ...action?.data.response })
      );
      localStorage.setItem("authToken", action.data.token);
      return { authData: action?.data };
    case "NEWUSER":
      return { data: action.data };

    case "LOGOUT":
      localStorage.clear();

    default:
      return users;
  }
};

export default (users = [], action, error) => {
  switch (action.type) {
    case "CREATE":
      return { data: action.data };
    default:
      return users;
  }
};

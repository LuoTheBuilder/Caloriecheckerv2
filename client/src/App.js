import { Switch, Route, Redirect } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import PrivateRoute from "./Routing/PrivateRoute";
import MyHome from "./Pages/MyHome";
import HeaderBar from "./components/NavBar/HeaderBar";
import AddMealPage from "./Pages/AddMeal";
import LayoutTest from "./Pages/LayoutTest";

function App() {
  const signup = true;
  return (
    <>
      <HeaderBar color="inherit" />
      <Switch>
        <Route path="/test" component={LayoutTest} exact />
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />

        <PrivateRoute path="/myhome" component={MyHome} />
        <Route component={Home} />
      </Switch>
    </>
  );
}

export default App;

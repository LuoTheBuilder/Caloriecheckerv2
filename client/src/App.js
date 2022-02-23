import { Switch, Route } from "react-router-dom";
import HeaderBar from "./components/UI/HeaderBar";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";

function App() {
  return (
    <>
      <HeaderBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" exact component={Login} />
        <Route path="/register" component={Signup} exact />
      </Switch>
    </>
  );
}

export default App;

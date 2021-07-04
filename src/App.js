import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Index from "./pages/index";
import Kalkulator from "./pages/Kalkulator";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/Kalkulator">
          <Kalkulator />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

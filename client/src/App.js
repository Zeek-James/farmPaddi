import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppNavbar } from "./components/AppNavbar";
import { CreateAccount } from "./components/CreateAccount";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Dashboard } from "./components/agent/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/createAccount" component={CreateAccount} />
          <Route path="/dashboard"  component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

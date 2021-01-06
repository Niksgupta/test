import './App.css';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/Login"
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route  exact path ="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/register" component={Register} />
    </Switch>

      
      </Router>
      
    </div>
  );
}

export default App;

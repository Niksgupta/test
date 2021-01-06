import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./components/Login"
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
          <Route  exact path ="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/register" component={Register} />


      
      </Router>
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Login from './components/login'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/friends'
import { axiosWithAuth } from "./utils/axiosWithAuth";

function App() {
  const logout = () => {
    localStorage.removeItem("token");
  }



  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to="/protected">Friends</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

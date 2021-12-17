import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from './components/Locations';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          <img 
            src="https://i.ibb.co/281cv4W/Screen-Shot-2021-12-17-at-3-54-32-PM.png" 
            alt="nav image" 
            height="50px"
            width="50px"
          />
        </Link>
        <Link to="/locations">Locations</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/people">People</Link>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/locations" component={Locations} />
        <Route path="/movies" component={Movies} />
        <Route path="/people" component={People} />
      </Switch>
    </Router>
  );
}

export default App;
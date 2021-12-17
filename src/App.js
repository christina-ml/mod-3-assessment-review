import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";

function App() {
  return (
    <Router>
      <div className="app">
        <main>
          <h1>Hello, world!</h1>
        </main>
      </div>

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
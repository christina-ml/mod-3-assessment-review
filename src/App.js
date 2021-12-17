import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <main>
          <h1>Hello, world!</h1>
        </main>
      </div>

      <Switch>
        <Route path="/" component={Home} />

      </Switch>


    </Router>
  );
}

export default App;
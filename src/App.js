import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CovidHome from './components/covidHome';
import CovidDetails from './components/CovidDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <CovidHome />
          </Route>
          <Route path="/details">
            <CovidDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

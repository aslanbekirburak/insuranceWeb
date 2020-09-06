import React from 'react';
import './App.css';
import SingUp from './pages/SignUp';
import Table from './components/Table'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/signUp">
            <SingUp />
          </Route>
          <Route path="/brokers">
            <Table />
          </Route>
          <Route path="/">
            <SingUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

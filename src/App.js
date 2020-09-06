import React from 'react';
import logo from './logo.svg';
import './App.css';
import SingUp from './pages/SignUp';
import Table from './components/Table'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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

import React from 'react';
import './App.css';

import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Slider from './components/Slider/Slider';
import HostPage from './components/HostPage/HostPage';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HostPage />
          </Route>
          <Route path="/game">
            <Slider />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

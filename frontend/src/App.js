import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import { Home } from './pages/home/Home';
import { Header } from './components/header/Header';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>

      </Router>
    </>
  );
};

export default App;

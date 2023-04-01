import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import { Home } from './pages/home/Home';
import { Header } from './components/header/Header';
import { Regsiter } from './pages/login/Regsiter';
import { Details } from './pages/details/Details';
import { Account } from "./pages/account/Account";
import { Login } from './pages/login/Login';
import { Create } from './components/create/Create';
import { Footer } from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Regsiter} />
          <Route exact path='/details/:id' component={Details} />
          <Route exact path='/account' component={Account} />
          <Route exact path='/create' component={Create} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;

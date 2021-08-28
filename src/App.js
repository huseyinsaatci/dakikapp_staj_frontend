import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterForm from './pages/RegisterPage';
import UserPage from './pages/UserPage';
import MainPage from './pages/MainPage';
import './assets/scss/style.scss'

function App() {
  return (
    <Switch>
      <Route path="/register" component={RegisterForm} />
      <Route exact path="/user" component={UserPage} />
      <Route exact path="/" component={MainPage} />
    </Switch>
  );
}

export default App;
import React from 'react';
//import { Counter } from './features/counter/Counter';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import SampleVideo from './components/SampleVideo';
import FooterNav from './components/FooterNav';

import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/sampleVideo">
            <SampleVideo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <FooterNav />
      </BrowserRouter>
    </div>
  );
}

export default App;

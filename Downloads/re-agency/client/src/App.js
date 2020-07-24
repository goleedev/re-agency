import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from '../src/components/LandingPage/LandingPage';
import Product from '../src/components/Product/Product';
import Error from '../src/components/Error/Error';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/product" component={Product}/>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

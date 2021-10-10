import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import './App.css'
import { Route, Switch } from 'react-router-dom'
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/shops' exact component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
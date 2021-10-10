import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import './App.css'
import { Route, Switch } from 'react-router-dom'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/hats' exact component={HatsPage} />
      </Switch>
    </div>
  )
}

export default App
import React from "react"
import { Switch, Route } from "react-router-dom"
import Cybe from "./pages/Cube/Cybe"
import About from "./pages/About/HomePage"

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Cybe} />
        <Route path="/About" component={About} />
      </Switch>
    </>
  )
}

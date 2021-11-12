import React from "react"
import { Switch, Route  } from "react-router-dom"
import Cybe from "./components/Cube"

function About() {
  return <h1>hello about cybe</h1>
}

export default function App() {
  return (
    <Switch>

      <Route exact path="/" component={About} />

      <Route path="/Cybe" component={Cybe} />

    </Switch>
  )
}

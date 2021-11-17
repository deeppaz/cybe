import ReactDOM from "react-dom"
import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import { Underlay, Overlay } from "./components/Figma"
import "./styles.css"
import "react-colorful/dist/index.css"
import App from "./App"

ReactDOM.render(
  <BrowserRouter>
    <Underlay />
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Overlay />
  </BrowserRouter>,
  document.getElementById("root"),
)

import {Routes,Route,BrowserRouter} from "react-router-dom"
import "./App.css"

import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={About} />
      <Route exact path="/projects" Component={Projects} />
      <Route exact path="/contact" Component={Contact} />
    </Routes>
  </BrowserRouter>
)

export default App
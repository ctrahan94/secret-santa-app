import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import createGroup from "./components/./createGroup/createGroup"
import findGroup from "./components/findGroup/findGroup"



function App() {
  return (
  <Router>
    <>
    <Route exact path="/" component={createGroup}></Route>
    <Route exact path="/" component={findGroup}></Route>

    </>
  </Router>
  )
}

export default App;


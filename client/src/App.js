import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import createGroup from "./components/./createGroup/createGroup"


function App() {
  return (
  <Router>
    <>
    <Route exact path="/" component={createGroup}></Route>
    </>
  </Router>
  )
}

export default App;


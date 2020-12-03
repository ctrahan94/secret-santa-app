import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateGroup from "./components/createGroup/CreateGroup"
import FindGroup from "./components/findGroup/FindGroup"
import AddMembers from "./components/add-displayMembers/AddMembers"




function App() {
  return (
  <Router>
    <>
    {/* <Route exact path="/" component={CreateGroup}></Route> */}
    {/* <Route exact path="/" component={FindGroup}></Route> */}
    <Route exact path="/" component={AddMembers}></Route>

    </>
  </Router>
  )
}

export default App;


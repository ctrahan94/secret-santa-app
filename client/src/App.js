import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateGroup from "./components/createGroup/CreateGroup"
import FindGroup from "./components/findGroup/FindGroup"
import AddMembers from "./components/add-displayMembers/AddMembers"
import DisplayMembers from "./components/add-displayMembers/DisplayMembers"
import MainGroupPage from "./pages/main-group-page/MainGroupPage"





function App() {
  return (
  <Router>
    <>
    <Route exact path="/" component={MainGroupPage}></Route>
  
    </>
  </Router>
  )
}

export default App;


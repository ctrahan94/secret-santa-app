import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
<<<<<<< HEAD
import MainGroupPage from "./pages/main-group-page/MainGroupPage"
import CreateGroup from "./components/createGroup/CreateGroup"
// import MainGroupPage from "./pages/main-group-page/MainGroupPage"




=======
import CreateGroup from "./components/createGroup/CreateGroup";
import AddMembers from "./components/add-displayMembers/AddMembers";
import DisplayMembers from "./components/add-displayMembers/DisplayMembers";
import MainGroupPage from "./pages/main-group-page/MainGroupPage";
>>>>>>> master

function App() {
  return (
  <Router>
    <>
<<<<<<< HEAD
    <Route exact path="/" component={CreateGroup}></Route>
    <Route exact path="/group-main-page/" component={MainGroupPage}></Route>

=======
    <Route exact path="/" component={MainGroupPage}></Route>
    <Route exact path="/" component={CreateGroup}></Route>
>>>>>>> master
  
    </>
  </Router>
  )
}

export default App;


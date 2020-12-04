import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateGroup from "./components/createGroup/CreateGroup";
import FindGroup from "./components/findGroup/FindGroup"
import MainGroupPage from "./pages/main-group-page/MainGroupPage";

function App() {
  return (
  <Router>
    <>
    {/* <Route exact path="/" component={FindGroup}></Route> */}
    <Route exact path="/" component={FindGroup}></Route>
    <Route exact path="/:_id/:name" component={MainGroupPage}></Route>
    </>
  </Router>
  )
}

export default App;


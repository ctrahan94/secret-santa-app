import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainGroupPage from "./pages/main-group-page/MainGroupPage"
import CreateGroup from "./components/createGroup/CreateGroup"
// import MainGroupPage from "./pages/main-group-page/MainGroupPage"





function App() {
  return (
  <Router>
    <>
    <Route exact path="/" component={CreateGroup}></Route>
    <Route exact path="/group-main-page/" component={MainGroupPage}></Route>

  
    </>
  </Router>
  )
}

export default App;


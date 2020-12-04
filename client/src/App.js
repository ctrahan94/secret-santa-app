import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateGroup from "./components/createGroup/CreateGroup";
import FindGroup from "./components/findGroup/FindGroup"
import MainGroupPage from "./pages/main-group-page/MainGroupPage";
import Yourwishlist from './components/Yourwishlist/Yourwishlist';

function App() {
  return (
  <Router>
    <>
    <Route exact path="/" component={FindGroup}></Route>
    <Route exact path="/" component={CreateGroup}></Route>
    <Route exact path="/wishlist" component={Yourwishlist}></Route>
    <Route exact path="/group/:_id" component={MainGroupPage}></Route>
  
    </>
  </Router>
  )
}

export default App;


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


/*
Inside handlbtn send testString to the back end to the /api/test/add
this post it to the database

we need a get route to post to the page
*/
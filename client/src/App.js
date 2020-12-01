import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import axios from "axios";

function App() {
  const [testString, setTestString] = useState("");
  const handleInputChange = (event) => {
    setTestString(event.target.value)
  }

  const handleBtnClick = (event) => {
    event.preventDefault();
  }
  return (
   <div>
     <input onChange={handleInputChange} />
     <button onClick={handleBtnClick}>
       Submit
     </button>
   </div>
  );
}

export default App;


/* 
Inside handlbtn send testString to the back end to the /api/test/add
this post it to the database 

we need a get route to post to the page
*/
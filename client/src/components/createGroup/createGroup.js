import { useState } from 'react'
import API from "../../utils/API"
<<<<<<< HEAD
import { useHistory } from 'react-router-dom';

=======
import { useHistory, Link } from "react-router-dom";
>>>>>>> master

function CreateGroup() {
   
   
 const history = useHistory();

const routeChange = () =>{ 
    let path = "/:name"; 
    history.push(path);
  }

    // Use State and Hooks Setting //

    const [GroupObject, setGroupObject] = useState({ name: "", password: "", membersName: [], membersNum: "" });

    const handleInputChange = (e) => {
        e.preventDefault()
        setGroupObject({ ...GroupObject, [e.target.name]: e.target.value })
    }

    // External JS functions //

    // Handle submit new group button + Posting to DB //

    const handleBtnClick = (e) => {
        e.preventDefault();
        console.log(GroupObject)
        API.createGroup(GroupObject)
            .catch(err => console.log(err));
    }

    function async RouteChange = () => {
        let path = "/group-main-page/";
        let history = useHistory();
        history.push(path);
    }



    // Visual Rendering //

    return (
        <div className="container">
            <div className="row create-group-modal">
                <div className="col-12">
                    <form>

                        {/* Group Name  */}

                        <h4>Group Name:</h4>
                        <input type="text" name="name" onChange={handleInputChange} />

                        {/* Group Password  */}

                        <h4>Group Password:</h4>
                        <input type="password" name="password" onChange={handleInputChange} />

                        {/* Group Members  */}

                        <h4>Group Members:</h4>
                        <input type="number" name="membersNum" onChange={handleInputChange} /><br></br>

<<<<<<< HEAD
                        <button className="create-group-button" onClick={handleBtnClick, RouteChange}>Submit</button>
=======
                        <button className="create-group-button" onClick={handleBtnClick, routeChange}>Submit</button>
>>>>>>> master
                    </form>
                </div>
            </div>
        </div>
    )

}

export default CreateGroup;
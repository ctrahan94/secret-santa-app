import { useState, useRef } from 'react'
import API from "../../utils/API"
import { useHistory, useParams } from "react-router-dom";

function CreateGroup() {

    // Use State and Hooks Setting //

    const passwordRef = useRef()
    const groupRef = useRef()

    const [GroupObject, setGroupObject] = useState({ name: "", password: "", membersName: [], membersNum: "" });

    const handleInputChange = (e) => {
        e.preventDefault()
        setGroupObject({ ...GroupObject, [e.target.name]: e.target.value })
    }

    // External JS functions //

    // Handle submit new group button + Posting to DB //

    const handleBtnClick = (e) => {
        e.preventDefault();
        API.createGroup(GroupObject)
            .catch(err => console.log(err))
            .then(RouteChange())
    }

    // Redirect Page to Main Group //

    const history = useHistory();
    // const {_id} = useParams

    const RouteChange = async () => {
        const {data} = await API.findGroup(groupRef.current.value, passwordRef.current.value)
        console.log(data);
        let path = "/group/" + data._id
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
                        <input type="text" name="name" ref={groupRef} onChange={handleInputChange} />

                        {/* Group Password  */}

                        <h4>Group Password:</h4>
                        <input type="password" name="password" ref={passwordRef} onChange={handleInputChange} />

                        {/* Group Members  */}

                        <h4>Group Members:</h4>
                        <input type="number" name="membersNum" onChange={handleInputChange} /><br></br>

                        <button className="create-group-button" onClick={handleBtnClick}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default CreateGroup;
import { useState } from 'react'

function CreateGroup() {

    // Use State and Hooks Setting //

    const [GroupObject, setGroupObject] = useState({ groupName: "", groupPassword: "", groupMembersNum: "" });

    const handleInputChange = (e) => {
        e.preventDefault()
        setGroupObject({ ...GroupObject, [e.target.name]: e.target.value })
    }

    // External JS functions //

    const handleBtnClick = (event) => {
        event.preventDefault();
        console.log(GroupObject);
    }

    // Visual Rendering //

    return (
        <div className="container">
            <div className="row create-group-modal">
                <div className="col-12">
                    <form>

                        {/* Group Name  */}

                        <h4>Group Name:</h4>
                        <input type="text" name="groupName" onChange={handleInputChange} />

                        {/* Group Password  */}

                        <h4>Group Password:</h4>
                        <input type="password" name="groupPassword" onChange={handleInputChange} />

                        {/* Group Members  */}

                        <h4>Group Members:</h4>
                        <input type="number" name="groupMembersNum" onChange={handleInputChange} /><br></br>

                        <button className="create-group-button" onClick={handleBtnClick}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default CreateGroup;
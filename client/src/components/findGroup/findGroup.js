import React, { useRef, useState, useEffect } from 'react';
import API from '../../utils/API';
import { useHistory } from "react-router-dom";

export default function FindGroup() {
    
    // Use State and Hooks Setting //
    const passwordRef = useRef()
    const groupRef = useRef()

    const [ groupData, setGroupData ] = useState({ groupName: "", password: ""})

    const handleInputChange = (e) => {
        setGroupData({...groupData, [e.target.name]: e.target.value})
    }

    // External JS functions //
    const findGroup = async (e) => {
        e.preventDefault()
        console.log(groupData.groupName + "|" + groupData.password)
        const { data } = await API.findGroup(groupData.groupName, groupData.password)

        let path = "/" + data._id + "/" + data.name
        history.push(path);

        //RouteChange(data)
    }

    // Redirect Page to Main Group Page//

    const history = useHistory();

    const RouteChange = async (data) => {
        console.log(groupRef.current.value, passwordRef.current.value);
        let path = "/" + data._id + "/" + data.name
        history.push(path);
    }

    // Visual Rendering //

    return (
        <div className="container">
            <div className="row find-group-modal">
                <div className="col-12">
                    <h4 className="find-title-main">Join Existing Group:</h4>

                    <form>

                        {/* Group Name  */}

                        <h4 className="find-title-name">Group Name:</h4>
                        <input type="text" ref={groupRef} name="groupName" placeholder="Group name" onChange={handleInputChange} />
                        <h4 className="find-title-password">Password:</h4>
                        <input type="text" ref={passwordRef} name="password" placeholder="Holly Jolly Christmas" onChange={handleInputChange} />
                        <button className="find-group-button" onClick={findGroup}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
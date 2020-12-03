import React, {useRef} from 'react';
import API from '../../utils/API';
export default function FindGroup() {

    // Use State and Hooks Setting //
<<<<<<< HEAD

    const 
=======
    const passwordRef = useRef()
    const groupRef = useRef()
    
>>>>>>> master




    // External JS functions //

    const findGroup = async (e) => {
        e.preventDefault()
        const {data} = await API.findGroup(groupRef.current.value, passwordRef.current.value)
        console.log(data);
    }




    // Visual Rendering //

    return (
        <div className="container">
        <div className="row find-group-modal">
            <div className="col-12">
            <h4 className="find-title-main">Join Existing Group:</h4>

                <form>

                    {/* Group Name  */}
                    <h4 className="find-group">Group:</h4>
                    <input type="text" ref={groupRef} name="join-group" placeholder="Group name" />
                    <h4 className="find-title">Password:</h4>
                    <input type="text"  ref={passwordRef} name="join-password" placeholder="Holly Jolly Christmas"/>

                    <button className="find-group-button" onClick={findGroup}>Submit</button>
                </form>
            </div>
        </div>
    </div>
    )
}

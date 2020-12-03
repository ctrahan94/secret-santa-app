import { useState } from 'react'
import API from "../../utils/API"


export default function AddMembers() {

    // Use State and Hooks Setting //

    const [MemberString, setMember] = useState({ name: "", email: "" })

    const handleInputChange = (e) => {
        e.preventDefault()
        setMember({ ...MemberString, [e.target.name]: e.target.value })
    }

    // External JS functions //

    // Pushing Member Name to the MemberNames Array in Group Database //

    const addMember = (e) => {
        e.preventDefault();
        console.log(MemberString)
        // API.addMembers(MemberString)
        // .catch(err => console.log(err));
    }

    // Visual Rendering //

    return (
        <div className="container">

            <div className="row add-members-modal">
                <div className="col-12">

                    <h4>Add members:</h4>

                    <form>

                        {/* Name  */}

                        <h5 className="members-add-title">Full Name:</h5>
                        <input type="text" name="name" onChange={handleInputChange}></input>

                        {/* Email  */}

                        <h5 className="members-add-title">Email:</h5>
                        <input type="email" name="email" onChange={handleInputChange}></input><br></br>

                        <button className="add-member-button" onClick={addMember}>Add Member</button>

                    </form>

                </div>
            </div>

        </div>
    )
}

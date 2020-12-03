import React from 'react'
import Addmembers from "./AddMembers"

export default function DisplayMembers(props) {


    // Use State and Hooks Setting //



    // External JS functions //



    // Visual Rendering //



    return (
        <div className="container">

            <div className="row members-display-modal">
                <div className="col-12">

                <h2>Members:</h2>

                <ol>
                    <li className="name-display">
                        {props.name}
                    </li>
                </ol>




                <Addmembers/>
                </div>
            </div>
        </div>
    )
}

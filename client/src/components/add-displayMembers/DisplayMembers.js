import React, { Component } from 'react'
import Addmembers from "./AddMembers"

class DisplayMembers extends React.Component {

    // Use State and Hooks Setting //

    state = {
        // members: 
    }



    // External JS functions //

    displayMembers = (id) => {
        console.log(this.state.members);
    }

    // Visual Rendering //

    render() {

        return (
            <div className="container">

                <div className="row members-display-modal">
                    <div className="col-12">

                        <h2>Members:</h2>

                        <ol>
                            <li className="name-display">
                                {/* {this.state} */}
                            </li>
                        </ol>
                        <Addmembers/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DisplayMembers;

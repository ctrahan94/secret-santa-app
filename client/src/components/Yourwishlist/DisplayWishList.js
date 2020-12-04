import React, { Component } from 'react'
import Yourwishlist from './Yourwishlist';


class DisplayWishList extends React.Component {

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

                        <h2>Wishlist:</h2>

                        <ol>
                            <li className="name-display">
                                {/* {this.state} */}
                            </li>
                        </ol>
                        <Yourwishlist/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DisplayWishList;

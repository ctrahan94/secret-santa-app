import React from 'react';
import DisplayMembers from "../../components/add-displayMembers/DisplayMembers";
import API from '../../utils/API';

export default function MainGroupPage(props) {

    // Use State and Hooks Setting //



    // External JS functions //







    

    // Visual Rendering //

    return (
        <div className="container">


            {/* Main Title Displaying Group Name And Password  */}

            <div className="row group-main-title">
                <div className="col-8">
                    <h1>Name:{props.name}</h1>
                </div>
            </div>


            {/* Component Row */}

            <div className="row group-main-title">

                {/* Add and Display Members Component */}

                <div className="col-3 members-component">
                    <DisplayMembers />
                </div>

                {/* YOUR wishlist Component */}

                <div className="col-3 your-wishlist-component">



                </div>


                {/* Description Component */}

                <div className="col-3 description-component">

                </div>



            </div>






        </div>
    )
}

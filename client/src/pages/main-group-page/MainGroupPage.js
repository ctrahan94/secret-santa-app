import React from 'react'
import DisplayMembers from "../../components/add-displayMembers/DisplayMembers"
import { useParams } from "react-router-dom";
import API from "../../utils/API"

export default function MainGroupPage() {

    // Use State and Hooks Setting //



    // External JS functions //

    // Dynamically Displaying Group Name For Title //

    const params = useParams();

    // Pushing Members to the Groups MemberNames Array //



    // Visual Rendering //

    return (
        <div className="container">


            {/* Main Title Displaying Group Name And Password  */}

            <div className="row group-main-title">
                <div className="col-6 offset-4 group-title">
                    <h1>Name: {params.name}</h1>
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
import React from 'react'
import DisplayMembers from "../../components/add-displayMembers/DisplayMembers"

export default function MainGroupPage() {






    
    return (
        <div className="container">


            {/* Main Title Displaying Group Name And Password  */}

            <div className="row group-main-title">
                <div className="col-12">

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

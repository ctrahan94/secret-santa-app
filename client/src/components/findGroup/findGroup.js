import React from 'react'

export default function findGroup() {

    // Use State and Hooks Setting //

    const 




    // External JS functions //

    const findGroup = (e) => {
        console.log();
    }




    // Visual Rendering //

    return (
        <div className="container">
        <div className="row find-group-modal">
            <div className="col-12">
            <h4 className="find-title-main">Join Existing Group:</h4>

                <form>

                    {/* Group Name  */}

                    <h4 className="find-title">Password:</h4>
                    <input type="text" name="join-password" placeholder="Holly Jolly Christmas"/>

                    <button className="find-group-button" onClick={findGroup}>Submit</button>
                </form>
            </div>
        </div>
    </div>
    )
}

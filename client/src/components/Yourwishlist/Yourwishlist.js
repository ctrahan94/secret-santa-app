import React from 'react'

export default function Yourwishlist() {


    

    return (
        <>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Add to wishlist
      </button>
      
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Wishlist:</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h3>Item:</h3>
              <input placeholder="Socks"></input>
              <h3>Description:</h3>
              <input placeholder="Size, color, etc"></input>
              <h3>URL:</h3>
              <input placeholder="socks.com"></input>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
    )

}

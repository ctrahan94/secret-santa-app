import axios from "axios";

export default {

  // Posting new group to Database //
  
  createGroup: function(groupData) {
    return axios.post("/api/groups", groupData);
  }



  
}

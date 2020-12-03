import axios from "axios";

export default {

  // Posting new group to Database //
  
  createGroup: function(groupData) {
    return axios.post("/api/groups", groupData);
  },

  findGroup: function(name, password) {
    return axios.get("/api/groups/group/" + name + "/" + password)
  .then(res => {
    return res
  }) 
  }
  
  
}

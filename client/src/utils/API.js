import axios from "axios";

export default {

  // Posting new group to Database //
  
  createGroup: function(groupData) {
    return axios.post("/api/groups", groupData);
  },

  findGroup: function(name, id) {
    return axios.get("/api/groups/group/" + name + "/" + id)
  .then(res => {
    return res
  }) 
  },

  findUser: function(name, id) {
    return axios.get("/api/groups/user/" + name + "/" + id)
    .then(res => {
      return res
    })
  }
  
  
}

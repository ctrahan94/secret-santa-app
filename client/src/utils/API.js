import axios from "axios";

export default {

  //////////////////////////////
  // Group Database API //
  //////////////////////////////

  // Posting new group to Database //

  createGroup: function (groupData) {
    return axios.post("/api/groups/", groupData);
  },

  // Finding group by Name and Password //

  findGroup: function (name, id) {
    return axios.get("/api/groups/group/" + name + "/" + id)
      .then(res => {
        return res
      })
  },

  // Adding members to the membersName array in Group Database //

  addMembers: function (memberName) {
    return axios.put("/api/members/add", memberName)
  },

  // Finding members to use as props for display component //

  findUser: function (name, id) {
    return axios.get("/api/groups/user/" + name + "/" + id)
      .then(res => {
        return res
      })
  }

  
}
import axios from "axios";

export default {

  //////////////////////////////
  // Group Database API //
  //////////////////////////////

  // Posting new group to Database - DONE //

  createGroup: function (groupData) {
    return axios.post("/api/groups/", groupData);
  },

  // Finding group by Name and Password - DONE //

  findGroup: function (name, _id) {
    return axios.get("/api/groups/group/" + name + "/" + _id)
      .then(res => {
        return res
      })
  },

  





  // Adding members to the membersName array in Group Database //

  addMembers: function (memberName) {
    return axios.post("/api/add/", memberName)
  },

  // Finding members to use as props for display component //

  findUser: function (name, id) {
    return axios.get("/api/groups/user/" + name + "/" + id)
      .then(dbGroup => {
        return dbGroup
      })
  }


}
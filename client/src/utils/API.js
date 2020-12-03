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

  addMembers: function (name) {
    return axios.put("/api/members/add" + name)
    .then(res => {
      return res
    })
  }


}

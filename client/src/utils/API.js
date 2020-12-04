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

  findGroup: function (name, password) {
    return axios.get("/api/groups/group/" + name + "/" + password)
      .then(res => {
        return res
      })
  },

  // Finding group by ID in Params // 

  getGroup: function (_id) {
    return axios.get("/api/groups/" + _id)
      .then(res => {
        return res
      })
  }



}
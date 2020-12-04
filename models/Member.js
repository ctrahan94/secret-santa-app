const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true},
  password: { type: String, required: true },
  groups: { type: String, required: true },
  membersName: {type: Array, required: false},
  date: { type: Date, default: Date.now },
  wishlist: { type: Object, required: false}
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;

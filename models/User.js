const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true},
  password: { type: String, required: true },
  groups: { type: String, required: true },
  membersName: {type: Array, required: false},
  date: { type: Date, default: Date.now },
  wishlist: { type: Object, required: false}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
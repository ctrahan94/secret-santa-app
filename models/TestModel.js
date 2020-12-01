const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TestSchema = new Schema({
  testString: String
});
const Test = mongoose.model("TestCollection", TestSchema);

module.exports = Test;
const router = require("express").Router();
const groupsController = require("../../controllers/groupController");

// Matches with "/api/group"
router.route("/")
  .post(groupsController.create);

module.exports = router;

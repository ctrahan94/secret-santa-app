const router = require("express").Router();
const groupRoutes = require("./groups");

// group routes
router.use("/groups", groupRoutes);

module.exports = router;

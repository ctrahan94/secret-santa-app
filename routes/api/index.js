const router = require("express").Router();
const groupRoutes = require("./groups");

// group routes
router.use("/groups", groupRoutes);
router.use("/add", groupRoutes);


module.exports = router;

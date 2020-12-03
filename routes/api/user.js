const router = require("express").Router();
const db = require("../../models");

router.get("/user/:name/:pw", (req, res)  => {
  console.log("line 5")
  db.User.findOne({
    name: req.params.name,
    password: req.params.pw
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(500).json(err);
    });
});

module.exports = router;

const router = require("express").Router();
const groupsController = require("../../controllers/groupController");
const db = require("../../models");

router.get("/group/:name/:pw", (req, res)  => {
  console.log("line 6")
  db.Group.findOne({
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

// Matches with "/api/group"
router.route("/").post(groupsController.create);

// router.post("/groups/:name"), (req, res) => {
//   db.Group.create({
//     name: req.body.name,
//     password: req.body.password,
//     membersNum: req.body.membersNum,
//     membersName: []
//   })
//   .then((data) => {
//     res.json(data)
//   })
//   .catch((err) => {
//     res.send(500).json(err);
//   });
// }





module.exports = router;

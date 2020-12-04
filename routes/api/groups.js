const router = require("express").Router();
const groupsController = require("../../controllers/groupController");
const db = require("../../models");

router.get("/group/:name/:pw", (req, res) => {
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

router.put("/add/:name", (req, res) => {
  db.Group.findOneandUpdate({ name: req.params.name }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});



// Matches with "/api/group"

router.route("/").post(groupsController.create);



module.exports = router;

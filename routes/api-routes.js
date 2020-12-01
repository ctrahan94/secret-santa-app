const DB = require("../models");
const router = require("express").Router();

router.post("/test/add", function(req, res) {
  DB.Test.create(req.body).then(dataResponse => {
    res.json(dataResponse);
  }).catch(err => {
    res.send(500).json(err);
  });
});

//DB.User.create (if you wanna create a user)

//Look at express activities 

/*router.post
router.add
*/

module.exports = router;
const db = require("../models");

// Defining methods for the Groups Controller //

module.exports = {

  create: function (req, res) {
    db.Group
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
};

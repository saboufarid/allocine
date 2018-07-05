let express = require("express");

let router = express.Router();

// GET route for reading data
router.get("/", function(req, res, next) {
  return res.sendFile(path.join(__dirname + "/templateLogReg/index.html"));
});

exports.router = router;

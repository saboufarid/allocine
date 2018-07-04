let express = require("express");

let router = express.Router();

function getJsonErr(err) {
  return {
    error: {
      message: err
    }
  };
}

// router.get("/api/search?q={recherche}&p={page}", function(req, res) {
//   let { id } = req.params;

//   User.findOne({ _id: id }).exec(function(err, user) {
//     if (err) {
//       res.json(getJsonErr(err));
//     } else if (user) {
//       const { _id, account } = user;
//       res.json({ _id, account });
//     } else {
//       res.json({
//         message: "User not found"
//       });
//     }
//   });
// });

module.exports = router;

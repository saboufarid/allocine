let express = require("express");
let axios = require("axios");

let router = express.Router();

function getJsonErr(err) {
  return {
    error: {
      message: err
    }
  };
}

router.get("/api/search", function(req, res) {
  let { q, p } = req.query;
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        process.env.THEMOVIEDB_KEY
      }&language=fr-FR&query=${q}&page=${p}&include_adult=false`
    )
    .then(function(response) {
      res.json(response.data);
    })
    .catch(function(error) {
      res.json(getJsonErr(error));
    });
});

router.get("/api/movies/:type", function(req, res) {
  let { type } = req.params;
  let { p } = req.query;
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${
        process.env.THEMOVIEDB_KEY
      }&language=fr-FR&page=${p}`
    )
    .then(function(response) {
      res.json(response.data);
    })
    .catch(function(error) {
      res.json(getJsonErr(error));
    });
});

module.exports = router;

let express = require("express");
let axios = require("axios");
let Lists = require("../models/Lists");
let Token = require("../models/Token");
let Movies = require("../models/Movies");

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
      encodeURI(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          process.env.THEMOVIEDB_KEY
        }&language=fr-FR&query=${q}&page=${p}&include_adult=false`
      )
    )
    .then(function(response) {
      res.json(response.data.results);
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
      res.json(response.data.result);
    })
    .catch(function(error) {
      res.json(getJsonErr(error));
    });
});

router.post("/api/lists/add", function(req, res) {
  let { name, description } = req.body;
  let authorization = req.headers.authorization;
  let token = authorization.substring("Bearer ".length);

  Token.findOne({ token })
    .populate("user")
    .exec(function(err, tokenObj) {
      if (err) {
        res.json(getJsonErr(err));
      } else {
        let newlists = new Lists({
          name,
          description,
          user: tokenObj.user
        });
        newlists.save(function(err, lists) {
          if (err) {
            res.json(getJsonErr("Cette liste existe déjà."));
          } else {
            let result = {
              _id: lists._id,
              name: lists.name,
              description: lists.description,
              movies: []
            };
            res.json(result);
          }
        });
      }
    });
});

router.post("/api/movies/add", function(req, res) {
  let { list_id, id, original_title, poster_path, release_date } = req.body;
  Lists.findOne({ _id: list_id }).exec(function(err, listsObj) {
    if (err) {
      res.json(getJsonErr(err));
    } else if (listsObj) {
      let newMovies = new Movies({
        id,
        original_title,
        poster_path,
        release_date,
        list: listsObj
      });
      newMovies.save(function(err) {
        if (err) {
          res.json(getJsonErr("Le film a déjà été ajouté dans cette liste."));
        } else {
          res.json({
            message: "Le film a bien été ajouté.",
            timestamp: new Date().valueOf()
          });
        }
      });
    } else {
      res.json(getJsonErr(`La liste id ${list_id} n'existe pas`));
    }
  });
});

router.get("/api/list/:list", function(req, res) {
  let { list } = req.params;

  Lists.findOne({ _id: list }).exec(function(err, objlist) {
    if (err) {
      res.json(getJsonErr(err));
    } else if (objlist) {
      Movies.find({ list }).exec(function(err, movies) {
        if (err) {
          res.json(getJsonErr(err));
        } else {
          let result = {
            _id: objlist._id,
            name: objlist.name,
            movies
          };
          res.json(result);
        }
      });
    } else {
      res.json(getJsonErr("Cette liste n'existe pas."));
    }
  });
});

module.exports = router;

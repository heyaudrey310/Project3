const axios = require("axios");
const router = require("express").Router();
const path = require("path");
require('dotenv').config({path: path.resolve(process.cwd(), '../.env')});

//console logging API keys

console.log("React Key: ", process.env.REACT_APP_RECIPE_API_KEY);
console.log("React Key: ", process.env.REACT_APP_MICROSOFT_AZURE_API_KEY);

router.get("/recipeData", (req, res) => {
  axios
    .get("https://www.food2fork.com/", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

router.get("/nutritionData", (req, res) => {
    axios
      .get("https://world.openfoodfacts.org/", { params: req.query })
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  });

  router.get("/analyzeData", (req, res) => {
    axios
      .get("https://eastus.api.cognitive.microsoft.com/", { params: req.query })
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  });
  

module.exports = router;

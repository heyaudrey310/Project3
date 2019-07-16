const axios = require("axios");
const router = require("express").Router();
const path = require("path");
require('dotenv').config({path: path.resolve(process.cwd(), '../.env')});

//console logging API keys

console.log("React Key: ", process.env.REACT_APP_RECIPE_API_KEY);
console.log("React Key: ", process.env.REACT_APP_MICROSOFT_AZURE_API_KEY);

const recipeKey = process.env.REACT_APP_RECIPE_API_KEY;
const imageKey = process.env.REACT_APP_MICROSOFT_AZURE_API_KEY;
const nutJson = "./assets/nutrition.json";
const input = [];

router.get("/recipeData", (req, res) => {
  axios
    .get("https://www.food2fork.com/api/get" + recipeKey, { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    // console.log(response);
    .catch(err => res.status(422).json(err));
});

router.get("/nutritionData", (req, res) => {
    axios
      .get("https://world.openfoodfacts.org/" + nutJson, { params: req.query })
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  });

  router.get("/analyzeData", (req, res) => {
    axios
      .get("https://eastus.api.cognitive.microsoft.com/" + imageKey, { params: req.query })
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  });
  

module.exports = router;

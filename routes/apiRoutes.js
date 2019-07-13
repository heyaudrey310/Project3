const axios = require("axios");
const router = require("express").Router();

router.get("/recipeData", (req, res) => {
  axios
    .get("https://www.food2fork.com/", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

router.get("/nutritionData", (req, res) => {
    axios
      .get("https://world.openfoodfacts.org/api/v0/product/[barcode].json", { params: req.query })
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  });

  router.get("/analyzeData", (req, res) => {
    axios
      .get("https://portal.azure.com/#home", { params: req.query })
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  });
  

module.exports = router;

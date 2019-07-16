const request = require("request");
require('dotenv').config()

module.exports = function(app) {
  app.get("/api/getImage", (req, res) => {
    console.log("In getImage")
    res.json({
      result: "getImage"
    })
  })


<<<<<<< HEAD
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
=======
  app.post("/api/storeImage", (req, res) => {
    console.log("In storeImage")
    const base64Data = req.body.imgBase64.replace(/^data:image\/jpeg;base64,/, "");
    // console.log(base64Data);

    const subscriptionKey = process.env.REACT_APP_MICROSOFT_AZURE_API_KEY;
    console.log(subscriptionKey)
const uriBase =
    'https://eastus.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Categories&language=en';

const imageUrl =
    'https://article.images.consumerreports.org/prod/content/dam/CRO%20Images%202018/Health/June/CR-Health-InlineHero-Foods-That-Are-Healthier-Cooked-09-17';

// Request parameters.
const params = {
    'visualFeatures': 'Categories,Description,Color',
    'details': '',
    'language': 'en'
};

const options = {
    uri: uriBase,
    qs: params,
    body: '{"url": ' + '"' + imageUrl + '"}',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
};

request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
  console.log('JSON Response\n');
  console.log(jsonResponse);
  res.json(jsonResponse)
>>>>>>> 4725b8e69a59078b4c1bc7cfa1084f57f25dd23b
});
    // const  path = "." + req.body.fileName;
    // fs.writeFile(path, base64Data, "base64", function(err) {
    // if (err) {
      // console.log(err);
    // } else {
      // res.send("success");
    // }


//npm pagckage uuid


  })
}



// router.get("/recipeData", (req, res) => {
//   axios
//     .get("https://www.food2fork.com/", { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

// router.get("/nutritionData", (req, res) => {
//     axios
//       .get("https://world.openfoodfacts.org/api/v0/product/[barcode].json", { params: req.query })
//       .then(({ data: { results } }) => res.json(results))
//       .catch(err => res.status(422).json(err));
//   });

//   router.get("/analyzeData", (req, res) => {
//     axios
//       .get("https://portal.azure.com/#home", { params: req.query })
//       .then(({ data: { results } }) => res.json(results))
//       .catch(err => res.status(422).json(err));
//   });

<<<<<<< HEAD
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
=======
>>>>>>> 4725b8e69a59078b4c1bc7cfa1084f57f25dd23b
  


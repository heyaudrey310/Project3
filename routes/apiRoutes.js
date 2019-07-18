const request = require("request");
require('dotenv').config()

module.exports = function(app) {
  app.get("/api/getImage", (req, res) => {
    console.log("In getImage")
    res.json({
      result: "getImage"
    })
  })


  app.post("/api/storeImage", (req, res) => {
    console.log("In storeImage")
    const base64Data = req.body.imgBase64.replace(/^data:image\/jpeg;base64,/, "");
    const buf = Buffer.from(base64Data, 'base64');
    const Blob = arrayBufferToBlob;
    const blob = new Blob([base64Data], {type: 'image/png'});
    const url = URL.createObjectURL(blob);
    console.log(url)
    // console.log(base64Data);

    const subscriptionKey = process.env.REACT_APP_MICROSOFT_AZURE_API_KEY;
    console.log(subscriptionKey)
    const uriBase =
    'https://eastus.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Categories&language=en';

    const imageUrl =
    'https://project003.blob.core.windows.net/wtf/lemons-and-limes.jpg?sp=r&st=2019-07-18T02:09:01Z&se=2019-07-18T10:09:01Z&spr=https&sv=2018-03-28&sig=rus7DEQW%2FCoY4U9YJxLCyEMbCQHtNYg2W0yoTjxbssw%3D&sr=b';    // Request parameters.
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
  console.log(req.body.url);
  res.json(jsonResponse)
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

  


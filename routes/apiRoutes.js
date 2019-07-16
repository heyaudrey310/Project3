

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
    console.log(base64Data);
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

  


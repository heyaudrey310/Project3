// Dependencies
// ***********************************
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const apiRoutes = require("./routes/apiRoutes");
const db = require("./models");

const mongoose = require("mongoose");
//const Schema = mongoose.Schema; 
const fs = require("fs");
const multer =require("multer");



// const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Define Middleware here
// ************************************
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors);

//Serve up static assets (usually on HEROKU)
// **********************************************
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
 app.use("/api", apiRoutes);

// Routes
// *************************************
//require("./routes/apiRoutes")(app);
//require("./routes/htmlRoutes")(app);

//API Routes
//**************************************** */
require('dotenv').config();

// Connect to the Mongo DB
// ****************************
 mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/whatthefruit");
  //  mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/fruitimage");
  //"mongodb://whatthefruit:Aa03101990*@ds249267.mlab.com:49267/heroku_3jw23km5");


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
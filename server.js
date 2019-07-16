// Dependencies
// ***********************************
const express = require("express");
const path = require("path");
const logger = require("morgan");
const request = require("request");

const mongoose = require("mongoose");
// const db = require("./models");



const app = express();
const PORT = process.env.PORT || 3001;
<<<<<<< HEAD
=======


>>>>>>> 4725b8e69a59078b4c1bc7cfa1084f57f25dd23b

// Define Middleware here
// ************************************
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({limit: '50mb'}));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
require("./routes/apiRoutes")(app);

// Routes
// *************************************

// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Remember, Ed typed this....
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

// Connect to the Mongo DB
// ****************************
<<<<<<< HEAD
 mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/whatthefruit");
  //  mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/fruitimage");
  //"mongodb://whatthefruit:Aa03101990*@ds249267.mlab.com:49267/heroku_3jw23km5");
=======

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://whatthefruit:Aa03101990*@ds249267.mlab.com:49267/heroku_3jw23km5"
);
>>>>>>> 4725b8e69a59078b4c1bc7cfa1084f57f25dd23b


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

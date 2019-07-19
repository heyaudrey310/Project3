// Dependencies
// ***********************************
require('dotenv').config();

const db = require("./models");

const path = require("path");
const express = require("express");

const app = express();

// const logger = require("morgan");
const bodyParser = require('body-parser');
const request = require("request");


const mongoose = require("mongoose");
// const db = require("./models");



// const app = express();
const PORT = process.env.PORT || 3001;



// Define Middleware here
// ************************************
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use(express.static("public"));

// app.use(express.json({limit: '50mb'}));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view

require("./routes/apiRoutes")(app);
require("./cors");
// Routes
// *************************************

// require("./routes/storeImages")(app);
require("./routes/htmlRoutes")(app);


// Remember, Ed typed this....
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

// Connect to the Mongo DB
// ****************************

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://whatthefruit:Aa03101990*@ds249267.mlab.com:49267/heroku_3jw23km5"
  , { useNewUrlParser: true})
mongoose.set('useFindAndModify', false)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '..', 'public'))) 

//cons(app)
//routes(app)


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  console.log(" TURBO!")
});

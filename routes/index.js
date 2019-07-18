'use strict';

module.exports = function(app){
  const apiRoutes = require('./apiRoutes');
  const fruit = require('../routes/api/fruit');

  apiRoutes(app)
  fruit(app)
}

// ====== most likely need this *
// const router = require("express").Router();
// const db = require("../models");
// const apiRoutes = require("./api");

// // API Routes
// router.use("/api", apiRoutes);

// //Models
// router.use("../models", db);

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });


// module.exports = router;

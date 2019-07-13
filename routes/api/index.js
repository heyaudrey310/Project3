const router = require("express").Router();
const fruitRoutes = require("./fruit");

// Fruit routes
router.use("/fruit", fruitRoutes);

module.exports = router;
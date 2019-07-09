const router = require("express").Router();
const fruitControllers = require("../../controllers/fruitControllers");

router
  .route("/")
  .get(fruitControllers.findAll)
  .post(fruitControllers.create);

router.route("/nutritionData").post(fruitControllers.findBynutritionData);
//.post(fruitControllers.create);

// Matches with "/api/fruit/:id"
router
  .route("/:id")
  .get(fruitControllers.findById)
  .put(fruitControllers.update)
  .delete(fruitControllers.remove);

module.exports = router;
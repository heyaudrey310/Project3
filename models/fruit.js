const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fruitSchema = new Schema({
  name: { type: String, required: true },
  nutrition: { type: String, required: true },
  recipe: String,
  date: { type: Date, default: Date.now }
});

const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;

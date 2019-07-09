const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fruitSchema = new Schema({
  product_name: { type: String, required: true },
  proteins_100g: { type: String, required: true },
  carbohydrates_100g: {type: String, required:true }, 
  "vitamin-a_100g": { type: String, required:true }, 
  "beta-carotene_100g": { type: String, required:true }, 
  "vitamin-d_100g": {type: String, required:true }, 
  "vitamin-e_100g": {type: String, required:true }, 
  "vitamin-k_100g":  {type: String, required:true }, 
  "vitamin-c_100g":  {type: String, required:true },
  "vitamin-b2_100g":  {type: String, required:true }, 
  "vitamin-b6_100g":  {type: String, required:true },
  "folates_100g":  {type: String, required:true }, 
  "vitamin-b12_100g":  {type: String, required:true }, 
  biotin_100g:  {type: String, required:true }, 
  potassium_100g:  {type: String, required:true }, 
  phosphorus_100g:  {type: String, required:true }, 
  calcium_100g:  {type: String, required:true }, 
  iron_100g:  {type: String, required:true }, 
  magnesium_100g:  {type: String, required:true }, 
  zinc_100g:  {type: String, required:true }, 
  copper_100g:  {type: String, required:true }, 
  manganese_100g:  {type: String, required:true }, 
  fluoride_100g:  {type: String, required:true }, 
  selenium_100g:  {type: String, required:true }, 
  iodine_100g:  {type: String, required:true }, 
  caffeine_100g:  {type: String, required:true }
  // recipe: String,
  // date: { type: Date, default: Date.now }
});

const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;

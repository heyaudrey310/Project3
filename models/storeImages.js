const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 

const imageSchema = new Schema ({
    
    storedImageID:  {
        type: mongoose.Schema.ObjectId, required:true },
    path: {
        type: String, required: true },
    // label: { type: String, required: true },
    createdAt: { type: Date, default: Date.now},
});


module.exports = mongoose.model('Image', imageSchema)

// const SearchImage = mongoose.model("Image", imageSchema );

// module.exports = SearchImage; 

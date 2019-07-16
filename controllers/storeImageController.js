

const storeImages = require('../models/storeImages')

exports.index = function(req, res) {
    storeImages.find({storeImagesId: req.params.storeImages_id}, function (err, image) {
        if (err) res.send(err)
        res.json(image)
    })
}


exports.show = function(req, res) {
    storeImages.findbyId(req.params.id)
        .populate('images')
        .exec(function (err, image) {
        if (err) res.send(err)
        res.json(image)
    })
}

// storeImages.find(req.params.id, function (err, image) {
 
// Multer get placed on req here in file
exports.create = function(req, res) {
    const path = require('path')
    const remove = path.join(__dirname, '..', '..', 'public')
    const relPath = req.file.path.replace(remove, '')
    const newImage = new Image(req.body)
    newImage.storeImagesId = req.params.storeImages_id
    newImage.path = relPath 
    newImage.save(function(err, image) {
        if (err) res.send(err)
        res.json(image)
    })
}
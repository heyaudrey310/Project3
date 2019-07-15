

const storeImages = require('../models/savedImage')

exports.index = function(req, res) {
    storeImages.find({storeImagesId: req.params.storeImages_id}, function (err, image) {
        if (err) res.send(err)
        res.json(image)
    })
}

exports.show = function(req, res) {
    storeImages.find(id, function (err, image) {
        if (err) res.send(err)
        res.json(image)
    })
}

// Multer get placed on req here in file
exports.create = function(req, res) {
    const path = require('path')
    const remove = path.join(__dirname, '..', '..', 'public')
    const relPath = req.file.path.replace(remove, '')
    const newImage = new Image(req.body)
    newImage.saveImageId = req.params.saveImage_id
    newImage.path = relPath 
    newImage.save(function(err, image) {
        if (err) res.send(err)
        res.json(image)
    })
}


const storeImages = require('../models/savedImage')

exports.index = function(req, res) {
    storeImages.find({storeImagesId: req.params.storeImages_id}, function (err, image) {
        if (err) res.send(err)
        res.json(image)
    })
      
}

exports.show = function(req,res) {

}
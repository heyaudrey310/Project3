
module.exports = function(app) {
    const fs = require('fs')
    const path = require('path')
    const multer = require('multer')
  
    const storage = multer.diskStorage({
      destination: function(req, file, cb) {
        const uploadsDir = path.join(__dirname, '..', '..', 'public', 'uploads', `${Date.now()}`)
        fs.mkdirSync(uploadsDir)
        cb(null, uploadsDir)
      },
      filename: function(req, file, cb) {
        cb(null, file.originalname)
      } 
    }) 
  
    const upload = multer({ storage })
    const controller = require('../controllers/storeImageController')
  
    // define routes images uploads in relation to entry
    app.route('/storeImages')
       .get(controller.index)
       .post(upload.single("data"), controller.create)
  
    app.route('/storeImages/:id')
       .get(controller.show)
      //  .put(controller.update)
      //  .delete(controller.destroy)
  }
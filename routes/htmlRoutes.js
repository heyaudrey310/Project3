// Sends users to different html pages 
// *****************************

// Dependencies
const path = require("path"); 

// Routes
module.exports = function(app) {

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../client/public/index.html"));
    });

    app.get("/freshlist", function(req, res) {
        res.sendFile(path.join(__dirname, "../client/public/freshlist.html"));
    });

    // app.get("/nutrition", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/log.html"));
    // });
};

const db = require("../models");



module.exports = function(app) {
    // GET ROUTE NUTRITION 
    app.get("/api/freshlist/", (req, res) => {
        console.log("")
        db.Fruit.find
    })
}

// Post 
app.post("/api/freshlist", function(req, res) {
    console.log(req.body);
    db.Fruit.create({

    }).then(function(dbFruit){
        res.json(dbStatues)
    });
});


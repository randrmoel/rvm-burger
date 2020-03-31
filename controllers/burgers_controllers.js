var express = require("express");
var router = express.Router();

//Import the database functions for burgers
var brgr = require("../models/bgr_model.js");

//Create routes and logic for routes
//display all eaten or available burgers
router.get("/", (req,res)=>{
    brgr.selectAll(function(data){
        var hbsObject = {
            brgrs: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//add a new burger
router.post("/api/brgrs", (req, res)=>{
    brgr.insertOne([
        "burger_name"
    ],[
        req.body.burger_name
    ], function(result){
        // send back new burger ack
        res.json({id: result.insertId});
    });
});

router.put("/api/brgrs/:id", (req,res)=>{
    var condition = "id = "+ req.params.id;
    console.log("condition", condition);

    brgr.updateOne({
        devoured:req.body.devoured
    }, condition, (result)=>{
        if(result.changedRows == 0){
            // if nothing changed, ID doesn't exist
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
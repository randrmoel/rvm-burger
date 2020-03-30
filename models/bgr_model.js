var orm = require("../config/orm.js");

var brgr = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    //make a burger
    create: function(cols, vals, cb){
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update:function(objColVals, condition, cb){
        orm.update("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }
};

module.exports = brgr;
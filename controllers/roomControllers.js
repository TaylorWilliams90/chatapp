const userModels = require("../models/roomModel.js");

function getRoomlist(req, res) {
    // get the users names
    console.log("Getting the users");
    userModels.getRoomlist(function(error, results){
        res.json(results);
    });
}

function postRoom(req, res) {
    // post user name
    console.log(" Post a user to database");
    var name = "School";

    userModels.insertRoom(name, function(error, results){
        res.json(results);
    });
}
module.exports = {
    getRoomlist: getRoomlist,
    postRoom: postRoom
}
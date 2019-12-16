const messageModels = require("../models/messagesModel.js");

function getMessages(req, res) {
    // get all of the messages
    console.log("Getting the messages");

    messageModels.getAllMessages(function(error, results){
        res.json(results);
    });


}

function search(req, res) {
    var room = req.query.room;

    messageModels.searchByRoom(room, function(error, results){
        res.json(results);
    });
}


function postMessages(req, res){

    var name = req.body.username;
    var content = req.body.content;
    var roomId = req.body.roomId;

    console.log("this is a message: " + content);

    messageModels.insertNewMessage(name, content, roomId);
}


module.exports = {
    search: search,
    getMessages: getMessages,
    postMessages: postMessages
};
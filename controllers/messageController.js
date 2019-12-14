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
    var name = req.query.username;
    var content = req.query.message;
    var roomId = req.query.roomid;

    messageModels.insertNewMessage(name, content, roomId, function(error, results){
        res.json(results);
    });

 console.log("this is a message: " + content);
 

}

function assignMessageToRoom(req, res){

    var messageId = 1;
    var roomId = 1;
    
    messageModels.insertNewMessage(messageId, roomId, function(error, results){
        res.json(results);
    });
}

module.exports = {
    search: search,
    getMessages: getMessages,
    postMessages: postMessages,
    assignMessageToRoom: assignMessageToRoom
};
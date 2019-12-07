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

function getMessageRoom(req, res){
    //This is going to get all of the messages by a room

    
    //TODO: get the room id that needs to be checked from the messages 

    console.log("getting the room")

    var roomId = req.query.roomId

    messageModels.getMessageByRoom(roomId, function(error, results){
        res.json(results);
    });
}

function postMessages(req, res){
    var name = "Taylor Williams";
    var roomId = 1;
    var content = "The Chat app is working";
    messageModels.insertNewMessage(name, roomId, content, function(error, results){
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
    getMessageRoom: getMessageRoom,
    assignMessageToRoom: assignMessageToRoom
};
function getAllMessages(callback){
    //Get all of the messages for the DB
    
    var results = {
        messages: [
        {id:1, user:"Taylor", room:1, content:"This class is awesome"},
        {id:2, user:"Jake", room:1, content:"What class are you taking"},
        {id:2, user:"Jake", room:2, content:"Hey man"},
        {id:3, user:"Taylor", room:1, content:"CIT 313"}
        ]
    }
    callback(null, results);

}

function searchByRoom(room, callback){

    console.log("Searching the DB for the room messages " + room);

    var results = {list:[{id:1, user:"Taylor", room:room, content:"This is the best."},
    {id:1, user:"Jake", room:room, content:"I need to get this"},
    {id:1, user:"Taylor", room:room, content:"We are killing it!"}]};

    callback(null, results);
}

function getMessageByRoom(roomId, callback){
    // get the messages from that match that room

    var results = {
        messages: [
        {id:1, user:"Taylor", roomId:roomId, content:"This class is awesome"},
        {id:2, user:"Jake", roomId:roomId, content:"This class is awesome"},
        {id:3, user:"Taylor", roomId:roomId, content:"This class is awesome"},
        ]
    }

    callback(null, results);
}

function insertNewMessage(user, roomId, content, callback){
    //create the new message in the DB with the user and content

    var results = {success:true,
                    message:{id:1, user:user, roomId:roomId, content:content}};

    callback(null, results);
}

function assignMessageToRoom(messageId, roomId) {
    var results = {};

    callback(null, results)
}

module.exports = {
    getAllMessages: getAllMessages,
    searchByRoom: searchByRoom,
    getMessageByRoom: getMessageByRoom,
    insertNewMessage: insertNewMessage,
    assignMessageToRoom: assignMessageToRoom
}

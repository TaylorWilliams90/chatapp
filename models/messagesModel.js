const { Pool } = require("pg");

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url});

function getAllMessages(callback){
    //Get all of the messages for the DB

    var sql = "SELECT id, userName, content FROM messages;";

    pool.query(sql, function(err, db_results){
        if (err){
            throw err;
        } else{
            //console.log("Back from the database: ");
            //console.log(db_results);
            var results = {
                seccess:true,
                list:db_results.rows
            };
            callback(null, results);
        }
    })
}

function searchByRoom(room, callback){

    console.log("Searching the DB for the room messages " + room);

    var sql = "select username, content from messages inner join rooms on messages.room = rooms.id where rooms.name=$1::text";
    var params = [room]
    pool.query(sql, params, function(err, db_results){
        if (err){
            throw err;
        } else{
            //console.log("Back from the database: ");
            //console.log(db_results);

        var results = {
            success:true,
            list:db_results.rows
        };

        callback(null, results);
        }
    });
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

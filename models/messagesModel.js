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


function insertNewMessage(username, content, roomId, callback){
    //create the new message in the DB with the user and content

    console.log("The Room is: " + roomId + " - " + username + ": " + content);

    var sql = "INSERT INTO messages (userName, content, room) VALUES ($1::text, $2::text, $3::int)";
    var params = [username, content, roomId]
    pool.query(sql, params);
}


module.exports = {
    getAllMessages: getAllMessages,
    searchByRoom: searchByRoom,
    insertNewMessage: insertNewMessage
}

const { Pool } = require("pg");

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url});

function getRoomlist(callback){
    //get all of the users from the DB
    var results = {
        Users: [
            {id:1, name:"General"},
            {id:2, name:"Gaming"}
        ]
    }
    callback(null, results);
}

function insertRoom(name, callback){
    //create the new user in the DB with the name


    var results = {success:true,
                    room:{id:1, name:name}};

    callback(null, results);
}

module.exports = {
    getRoomlist: getRoomlist,
    insertRoom: insertRoom
}
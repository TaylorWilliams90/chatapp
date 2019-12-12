const { Pool } = require("pg");

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url});

function getRoomlist(callback){
    //get all of the users from the DB
    var sql = "select name from rooms";
    pool.query(sql, function(err, db_results){
        if (err){
            throw err;
        } else{
            console.log("Back from the database: ");
            console.log(db_results);

        var results = {
            success:true,
            list:db_results.rows
        };

        callback(null, results);
        }
    });
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
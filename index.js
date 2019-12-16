const express = require("express");
const path = require("path");
require('dotenv').config();

const PORT = process.env.PORT || 5000;

var app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use(require('morgan')('dev'));
//var session = require('express-session');
//var FileStore = require('session-file-store')(session);
//app.use(session({
  //name: 'server-session-cookie-id',
  //secret: 'my express secret',
  //saveUninitialized: true,
  //resave: true,
  //store: new FileStore()
//}));

const messageController = require("./controllers/messageController.js");
const roomController = require("./controllers/roomControllers.js");

app.get("/message", messageController.getMessages);

app.post("/message", messageController.postMessages);

app.get("/search", messageController.search);

app.get("/room", roomController.getRoomlist);

app.post("/room", roomController.postRoom);

app.listen(PORT, function() {
    console.log("Server listening on port " + PORT);
});
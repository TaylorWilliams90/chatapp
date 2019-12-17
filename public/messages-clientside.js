function searchByRoom(){
    console.log("Searching by Room......");

    var room = $("#room").val();
    console.log("Room " + room);

    $.get("/search", {room:room}, function(data) {
        console.log("back from the server with: ");
        console.log(data);
        $('#ulMessages').empty();

        for (var i = 0; i < data.list.length; i++){
            var message = data.list[i];

            $("#ulMessages").append("<li class='list-group-item'> <p class='list-group-item-heading'>" + message.username + "<ul class=''> <li class='list-group-item'>" + message.content + "</li> </ul> </li>");
        }

    })
}

function clickRoom(room){
    var valRoom = $(room).val();
    console.log(valRoom);
    console.log("clicking on Room: ");
    $.get("/search", {room:valRoom}, function(data) {
        $('#ulMessages').empty();

        for (var i = 0; i < data.list.length; i++){
            var message = data.list[i];

            $("#ulMessages").append("<li class='list-group-item'> <p class='list-group-item-heading'>" + message.username + "<ul class=''> <li class='list-group-item'>" + message.content + "</li> </ul> </li>");
        }

    })

}

function messageRoom(room){
    console.log(room);
    console.log("clicking on Room: ");
    $.get("/search", {room:room}, function(data) {
        $('#ulMessages').empty();

        for (var i = 0; i < data.list.length; i++){
            var message = data.list[i];

            $("#ulMessages").append("<li class='list-group-item'> <p class='list-group-item-heading'>" + message.username + "<ul class=''> <li class='list-group-item'>" + message.content + "</li> </ul> </li>");
        }

    })

}

function inputMessage(username, message, roomid){

    var username = $("#username").val();
    var message = $("#message").val();
    var roomid = $("#roomList").val();
    var roomName = $("#roomList  option:selected").text();
    
    console.log(roomName);

    console.log("The Room is: " + roomid + " - " + username + ": " + message);

    $.post("/message",{username:username, content:message, roomId:roomid});

    location.reload();
    

}

function allMessages(){
    $.get("/message", function(data) {
        console.log("back from the server with: ");
        console.log(data);

        for (var i = 0; i < data.list.length; i++){
            var message = data.list[i];
            $("#ulMessages").append("<li class='list-group-item'> <p class='list-group-item-heading'>" + message.username + "<ul class=''> <li class='list-group-item'>" + message.content + "</li> </ul> </li>");
        }
});
}

function getRooms(){
    console.log("getting the rooms function")
    $.get("/room", function(data) {
        console.log("back from the db with room: ");
        console.log(data);
        for (var i = 0; i < data.list.length; i++){
            var room = data.list[i];
            $("#ulRooms").append("<input type='button' onclick='clickRoom(this)' class='roomBtn' value='" + room.name + "'/>");
            $("#roomList").append("<option id='roomIn' value='" + room.id + "'>" + room.name + "</option>")
        }
    });
}
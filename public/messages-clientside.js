function searchByRoom(){
    console.log("Searching by Room......");

    var room = $("#room").val();
    console.log("Room " + room);

    $.get("/search", {room:room}, function(data) {
        console.log("back from the server with: ");
        console.log(data);

        for (var i = 0; i < data.list.length; i++){
            var message = data.list[i];

            $("#ulMessages").append("<li class='list-group-item'> <p class='list-group-item-heading'>" + message.username + "<ul class=''> <li class='list-group-item'>" + message.content + "</li> </ul> </li>");
        }

    })
}

$( window ).load(function(){
    $.get("/message", function(data) {
        console.log("back from the server with: ");
        console.log(data);

        for (var i = 0; i < data.list.length; i++){
            var message = data.list[i];

            $("#ulMessages").append("<li class='list-group-item'> <p class='list-group-item-heading'>" + message.username + "<ul class=''> <li class='list-group-item'>" + message.content + "</li> </ul> </li>");
        }
})
});
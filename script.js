function message(msg){
    $("#chat-result").append(msg);
}

$(document).ready(function($){
    const socket = new WebSocket("ws://bushulyak.beget.tech:80/chat/server.php");
    socket.onopen = function(){
        message("<div>Соединение установлено</div>");
    }
    socket.onerror = function(err){
        message("<div>Ошибка при соединении " + (err.message ? err.message : "") + "</div>");
    }
    socket.onclose = function(event){
        console.log(event);
        message("<div>Соединение закрыто</div>");
    }
    socket.onmessage = function(event){
        let data = JSON.parse(event.data);
        message("<div>" + data.type + " - " + data.message + "</div>");
    }
});

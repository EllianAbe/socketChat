document.getElementById('message').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key == 13) {
        send_message();
    }
});

var socket = io();
var username = prompt("Qual seu nome?");
 
socket.emit('chat message', "Welcome! " + username);
document.getElementById('send_message').addEventListener("click", send_message);
function send_message() {
  msg = document.getElementById('message').value;
  if (msg.length > 0) {
      console.log(msg);
      socket.emit('mess', username + ": " + msg);
      document.getElementById('message').value = "";
  }
}
// Receiving message
socket.on('mess', function(msg){
    let ul = document.getElementById("messages");
    let li = document.createElement('li');
    let br = document.createElement('br');
    li.appendChild(document.createTextNode(msg));
    ul.appendChild(li);
});
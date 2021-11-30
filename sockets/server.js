var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);
 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket){
                        socket.on('mess', function(msg){
                        io.emit('mess', msg);});
});
 
http.listen(5656, function(){
  console.log('Server started in: http://localhost:5656');
});
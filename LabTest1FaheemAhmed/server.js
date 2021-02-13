var express = require('express');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//Declare MongoDB Schemas
var Message = mongoose.model('Messages',{
    name : String,
    message : String,
    room : String
  })


var dbUrl = "mongodb+srv://faheem:faheem@m0.jwrmy.mongodb.net/labtest1Faheem?retryWrites=true&w=majority"

app.get('/messages', (req, res) => {
  Message.find({room:'Index Room'},(err, messages)=> {
    res.send(messages);
  })
})

app.get('/sports', (req, res) => {
  Message.find({room:'Sports Room'},(err, messages)=> {
    res.send(messages);
  })
})


app.get('/covid', (req, res) => {
  Message.find({room:'Covid Room'},(err, messages)=> {
    res.send(messages);
  })
})

app.get('/news', (req, res) => {
  Message.find({room:'News Room'},(err, messages)=> {
    res.send(messages);
  })
})

app.get('/node', (req, res) => {
  Message.find({room:'NodeJS Room'},(err, messages)=> {
    res.send(messages);
  })
})

app.post('/messages', (req, res) => {
  var message = new Message(req.body);
  message.save((err) =>{ 
    if(err)
    {
      //sendStatus(500);
      console.log(err)
    }

    //Send Message to all users
    io.emit('message', req.body);
    res.sendStatus(200);
  })
})



io.on('connection', (socket) => {
  console.log(`A NEW user is connected: ${socket.id}`)
  socket.on('typing', (data)=>{
    if(data.typing==true)
       io.emit('display', data)
    else
       io.emit('display', data)
  })
  

  socket.on('join', function(data){
    console.log(`User ${socket.id} has joined `  + data.room); 
    socket.join(data.room);  

});

socket.on('leave', function(data){
socket.leave(data.room); 
});


});





mongoose.connect(dbUrl , { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('mongodb connected',err);
    }else{
        console.log('Successfully mongodb connected');
    }
})

var server = http.listen(3001, () => {
  console.log('server is running on port', server.address().port);
});
var express = require('express');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');

var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

const { isEmail } = require('validator') ;

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        minLength: [4]
    }, 
    name: {
        type:String,
        required: true
    },
    email:{
        type: String,
        validate: [isEmail, 'invalid Email'],
        required: true
    },
    city:{
        type: String,
        required: true,
        trim: true,
        validate : function (val) {
            const letters = /^[a-zA-Z ]*$/
            return letters.test(val)
        }
    },
    
    

})

const Users = mongoose.model('Users', userSchema)

var dbUrl = "mongodb+srv://faheem:faheem@m0.jwrmy.mongodb.net/labtest1Faheem?retryWrites=true&w=majority"

app.get('/users', (req, res) => {
    Users.find({},(err, users)=> {
      res.send(users);
    })
  })

  app.post('/users', (req, res) => {
    var users = new Users(req.body);
    users.save((err)=>{
        if (err) {
            res.send(err)
        } else {
            res.send(users)
        }
    })
 
  })

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
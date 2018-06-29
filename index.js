var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/pokemon";

const mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/pokemon');

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {
  console.log("db connected");
});

// body parser to read request params
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// create Schema
const Schema = mongoose.Schema

var Pokedex = mongoose.model('pokedex', new Schema({ name: String }));
var ContactForm = mongoose.model('contact_form', new Schema({ 
    first_name: String, 
    last_name: String, 
    gender: String, 
    email_address: String, 
    subject: String, 
    message: String 
}));


// Works
// Pokedex.find({}, function(error, result) { 
//     if (result) {
//         console.log(result)
//     }
//  });

// JS for contact form

// create Pokedex try #1

//  Pokedex.create({ name: 'Pikachu' }, function (err, awesome_instance) {
//     if (err) return handleError(err);
//     // saved!
//   });


// respond with "hello world" when a GET request is made to the homepage
app.use('/image', express.static(__dirname + '/image'));
app.get('/', function(req, res) {
  res.sendFile('home.html',{ root: __dirname });
});

// generate pokemon from db #1
//app.use(function findPokemon(){
    //MongoClient.connect(url, function(err, db) {
        //if (err) throw err;
      
   //var dbo = db.db("pokemon");
    //dbo.collection("pokedex").findOne({}, function(err, result) {
        //if (err) throw err;
        //console.log(result.name);
       // db.close();
      //});
    //});
//});


// router
app.get('/recrutement', function(req,res){
    res.sendFile('recrutement.html',{root:__dirname});
});
app.get('/test', function(req,res){
    res.sendFile('faire le test.html',{root:__dirname});
});
app.get('/team', function(req,res){
    res.sendFile('team.html',{root:__dirname});
});
app.get('/contact', function(req,res){
    res.sendFile('contact.html',{root:__dirname});
});
app.get('/news', function(req,res){
    res.sendFile('news.html',{root:__dirname});
});
app.get('/stylesheet.css', function(req, res) {
    res.sendFile(__dirname + "/" + "stylesheet.css");
  });

app.get('/pokedex', function(req, res) {    
    res.sendFile('pokedex.html',{root:__dirname});
});

app.post('/create_pokedex', function(req, res){
    var pokedex_name = req.body.pokedex_name
     Pokedex.create({ name: pokedex_name }, function (err, pokedex_name) {
    if (err) return handleError(err);
        // saved!
    });
    res.sendFile('team.html', {root:__dirname});
})

app.post('/create_contact', function(req, res){
    var new_contact = req.body

     ContactForm.create({ first_name: new_contact.first_name, last_name: new_contact.last_name, gender: new_contact.gender, email_address: new_contact.email_address, subject: new_contact.subject, message: new_contact.message }, function (err, pokedex_name) {
    if (err) return handleError(err);
        // saved!
    });
    res.sendFile('/home.html', {root:__dirname});
})

app.listen(3123, () => console.log('Example app listening on port 3123!'))

//console.log(query)
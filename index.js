var express = require('express');
var app = express();
// respond with "hello world" when a GET request is made to the homepage
app.use('/image', express.static(__dirname + '/image'));
app.get('/', function(req, res) {
  res.sendFile('home.html',{ root: __dirname });
});
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
app.get('/stylesheet.css', function(req, res) {
    res.sendFile(__dirname + "/" + "stylesheet.css");
  });
app.listen(3000, () => console.log('Example app listening on port 3000!'))
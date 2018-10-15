const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/Analytica";
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
//npm install express express-session body-parser node mongodb

var db;

app.use(session({ secret: 'example'}));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'ejs');

MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    db = client.database('test');
    app.listen(8080);
    console.log('listening on 8080');
});

app.get('/', function(req,res) {
  res.render('pages/website')
});

const MongoClient = require('mongodb').MongoClient;
const
const url = "mongodb://localhost:27017/Analytica";
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
//npm install express express-session body-parser node mongodb ejs

var db;

app.use(session({ secret: 'example'}));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'ejs');

MongoClient.connect(url, function(err, database) {
    if (err) throw err;
    db = database;
    app.listen(8080);
    console.log('listening on 8080');
});

app.get('/', function(req,res) {
  res.render('pages/website') //UNCOMMENT THIS LINE TO BE REDIRECTED TO THE MAIN PAGE;
  //res.render('pages/search')
});

// ----------------------------------------------------------------------------------------


var collection = db.collection('Clients');  // get reference to the collection
collection.find({Name: msg.Name}, {$exists: true}).toArray(function(err, doc) //find if a value exists
{
    if(doc) //if it does
    {
        console.log(doc); // print out what it sends back
    }
    else if(!doc) // if it does not
    {
        console.log("Not in docs");
    }
});

//            "key": "80",
//            "keyType": "Tambour Unit",
//            "allocatedTo": "E. Matheson",
//            "location": "Cupboard"

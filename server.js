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

<<<<<<< HEAD




//the dologin route deals with the data from the login screen.
//the post variables, username and password come from the form on the login page.
app.post('/dologin', function(req, res) {
  console.log(JSON.stringify(req.body))
  var uname = req.body.username;
  var pword = req.body.password;
  console.log(uname);
    console.log(pword);
  db.collection('users').findOne({"username":uname}, function(err, result) {
      
    if (err) throw err;//if there is an error, throw the error
    //if there is no result, redirect the user back to the login system as that username must not exist
    if(!result){
        console.log('1');
        res.redirect('/search');return}
    //if there is a result then check the password, if the password is correct set session loggedin to true and send the user to the index
    if(result.password == pword){ req.session.loggedin = true; req.session.currentuser = uname;
        console.log('2');
      res.redirect('https://www.facebook.com/') }
    //otherwise send them back to login
    else{
        console.log('3');
        res.redirect('pages/website')}
  });
});
=======
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
>>>>>>> 337b6c915512be74876d55a6da0235d6fb7c6d1e

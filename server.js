const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/Analytica";

const ALL_KEYS = "mongodb://localhost:27017/all_keys";
const MASTER_KEYS = "mongodb://localhost:27017/master_keys";
const DOOR_KEYS = "mongodb://localhost:27017/door_keys";
const PEDESTAL_KEYS = "mongodb://localhost:27017/pedestal_keys";
const FOB_KEYS = "mongodb://localhost:27017/fob_keys";
const UKNOWN_KEYS = "mongodb://localhost:27017/unknown_keys";
const USER_DOES_NOT_EXIST = 0;
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
//npm install express express-session body-parser node mongodb ejs

var db;

//THROWS AN ERROR, DOES NOT RECOGNISE DOCUMENT;
var searchField; //= document.getElementById('search').innerHTML;
var store;

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
  res.render('pages/Home') //UNCOMMENT THIS LINE TO BE REDIRECTED TO THE MAIN PAGE;
  //res.render('pages/search')
});






//the dologin route deals with the data from the login screen.
//the post variables, username and password come from the form on the login page.
app.post('/dologin', function(req, res) {
//  console.log(JSON.stringify(req.body))
  var uname = req.body.username;
  var pword = req.body.password;
  //console.log(uname);
  //  console.log(pword);
  db.collection('users').findOne({"username":uname}, function(err, result) {

    if (err) throw err;//if there is an error, throw the error
    //if there is no result, redirect the user back to the login system as that username must not exist
    if(!result){
      console.log("Error");
        //..console.log('1');
          res.render('pages/Home');return}
    //if there is a result then check the password, if the password is correct set session loggedin to true and send the user to the index
    if(result.password == pword){ req.session.loggedin = true; req.session.currentuser = uname;
        console.log("Correct");
        if(result.rights == "admin"){
          res.render('pages/LoggedIn') }
        }else if(result.rights == "Level 1"){
          res.render('pages/LoggedInLevelOne')
        }else{
          res.render('pages/LoggedInLevelTwo')
        }
    //otherwise send them back to login
    else{
        console.log('3');
        res.render('pages/Home')}
  //res.render('pages/homepage');
  });

})


//all keys is a table with all the keys;
function findData(){
dbo.collection("ALL_KEYS").find({ getParameter : '80'}, function(err, result) {
   // getParameter CHECKS ALL THE FIELDS, CHECK MONGO API FOR MORE INFO;
    if (err) throw err;
    store = result;
    console.log(store);
    db.close();
});
}// use store to update table

app.post('/registerDetails', function (req,res){
        db.collection('users').count({"username":req.body.username, "password": req.body.password}).then((occurences) => {
            if(occurences == USER_DOES_NOT_EXIST){

                var info = {
                  "username":req.body.username,
                  "password": req.body.password,
                  "rights": req.body.rights
                };
                db.collection('users').save(info, function(err, result) {
                  if (err) throw err;
                  console.log('Saved to database');
                  console.log("name " + req.body.username + "\npassword " + req.body.password  + "\nrights " + req.body.rights);
                  res.render('pages/LoggedIn');
                })


           }else{
             console.log("User already exists with that username!");
             res.redirect('/');
           }
         });
       });

// var collection = db.collection('Clients');  // get reference to the collection
// collection.find({Name: msg.Name}, {$exists: true}).toArray(function(err, doc) //find if a value exists
// {
//     if(doc) //if it does
//     {
//         console.log(doc); // print out what it sends back
//     }
//     else if(!doc) // if it does not
//     {
//         console.log("Not in docs");
//     }
// });

//            "key": "80",
//            "keyType": "Tambour Unit",
//            "allocatedTo": "E. Matheson",
//            "location": "Cupboard"

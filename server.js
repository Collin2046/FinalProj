const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// Establish a connection with the Mongo Database
// Get the username, password, host, and databse from the .env file
const mongoDB = ("mongodb+srv://"+
                 "keh229"+
                 ":"
                 +"19971225hkl"+
                 "@"
                 +"keh229.4ia5iox.mongodb.net"+
                 "/"
                 +"FinalProj");
mongoose.connect(mongoDB, {useNewUrlParser: true, retryWrites: true});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//const logInRouter = require("./routes/logIn.js");
const signupRouter = require("./routes/signUp.js");
const itemRouter = require("./routes/item.js");
//app.use("/login", logInRouter);
app.use("/signup", signupRouter);
app.use("/item", itemRouter);
app.use(function(req, res) {
  res.status(404).json({"Error":"Invilid api request!"});
});

// listen for requests :)

const listener = app.listen(9527, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
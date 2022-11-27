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

//app.use("/server/login", logInRouter);
app.use("/server/signup", signupRouter);
app.use(function(req, res) {
  res.status(404).json({"Error":"Invilid api request!"});
});

// listen for requests :)
app.listen(3001)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
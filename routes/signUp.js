const express = require('express');
const router = express.Router()

//import data models
const admin = require("../barf/userAdmin");


// RETRIEVE a specific user
//CREATE
router.post('/useradmin/', function(req, res){
  console.log("new admin", req.body);
  let Admin = new admin(req.body);
  Admin.save();
  res.status(201).send(Admin);
});
//CREATE

module.exports = router;
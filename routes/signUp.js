const express = require('express');
const router = express.Router()
const general = require("../barf/userGeneral");
//import data models
const admin = require("../barf/userAdmin");



//CREATE
router.post('/useradmin/', function(req, res){
  console.log("new admin", req.body);
  let Admin = new admin(req.body);
  Admin.save();
  res.status(201).send(Admin);
});
//CREATE
router.post('/usergeneral/', function(req, res){
  console.log("new general user", req.body);
  let General = new general(req.body);
  General.save();
  res.status(201).send(General);
});
module.exports = router;
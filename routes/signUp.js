const express = require('express');
const router = express.Router()
const general = require("../barf/userGeneral");
//import data models
const admin = require("../barf/userAdmin");



//CREATE
router.post('/useradmin/',async function(req, res){
  
  try {
    let find = await admin.find({account: req.body.account});
    console.log(find);
    if(find.length !=0)
    {
      res.status(200).json({"message":"account already exist"})
    }
    else
    {
      let Admin = new admin(req.body);
      Admin.save();
      console.log("new admin", req.body);
      res.status(200).json({"message":"adding successful"})
    }
  } catch (error) {
    res.status(200).json({"message":error.message})
  }
});
//CREATE
router.post('/usergeneral/',async function(req, res){
  
  try {
    let find = await general.find({account: req.body.account});
    console.log(find);
    if(find.length !=0)
    {
      res.status(200).json({"message":"account already exist"})
    }
    else
    {
      let General = new general(req.body);
      General.save();
      console.log("new general user", req.body);
      res.status(200).json({"message":"adding successful"})
    }
  } catch (error) {
    res.status(200).json({"message":error.message})
  }
});
module.exports = router;
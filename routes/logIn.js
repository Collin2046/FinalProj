const express = require('express');
const router = express.Router()

//import data models
const admin = require("../barf/userAdmin");
const general = require("../barf/userGeneral");



router.get('/useradmin/', function(req, res){
    admin.findById(req.body.account, function(err, user) {
        
     });
  
});

router.get('/usergeneral/', function(req, res){
    general.findById(req.body.account, function(err, user) {
        
    });
    
  });


module.exports = router;
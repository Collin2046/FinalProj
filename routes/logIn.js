const express = require('express');
const router = express.Router()

//import data models
const admin = require("../barf/userAdmin");
const general = require("../barf/userGeneral");



router.get('/useradmin/', async function(req, res){
    
     try {
      let find = await admin.find({account: req.body.account});
      //console.log(find);
      
      if(find[0].password == req.body.password)
      {
        res.status(200).json({"message":"successful"})
      }
      else{
        res.status(200).json({"message":"wrong password"})
      }
     } catch (error) {
      res.status(404).json({message:"No such account"})
     }
});

router.get('/usergeneral/', function(req, res){
   
      general.find({account: req.body.account}, function(err, user) {
       
        if(user.length!=0)
        {
          
          console.log(user);
          if(user[0].password == req.body.password)
          {
            res.status(200).json({"message":"successful"})
          }
          else{
            res.status(200).json({"message":"wrong password"})
          }
        }
        else{
          res.status(404).json({"message":"No such account"})
        } 
     });
    
    
  });


module.exports = router;
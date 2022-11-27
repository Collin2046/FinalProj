const express = require('express');
const router = express.Router()

//import data models
const item = require("../barf/item");




router.get('/getAll', function(req, res){
    item.find({},function (err, item_list){
        res.json(item_list);
      });
   
      
    

});

router.get('/finditem/:id',async function(req, res){
    try {
        let Item = await item.findById(req.params.id);
        if(Item ==null)
        {
            return res.status(404).json({message:"can not find such item"});
        }
        return res.status(200).json(Item);
      } catch (error) {
        return res.send(error);
      }
});
//admin 
router.put('/changeitem/:id',async function(req, res){
    try {
        
        let Item = await item.findById(req.params.id);
        if(Item ==null)
        {
            console.log("check");
            return res.status(404).json({message:"can not find such item"});
        }
        
        Item.name = req.body.name;
        Item.price = req.body.price;
        Item.quatity = req.body.quatity;
        Item.category = req.body.category;
        Item.save();
        return res.status(200).json(Item);
      } catch (error) {
        return res.send(error);
      }
});
router.delete('/deleteitem/:id',async function(req, res){
    try {
        let Item = await item.findById(req.params.id);
        if(Item ==null)
        {
            return res.status(404).json({message:"can not find such item"});
        }
        Item.remove();
        return res.status(200).json({"message":"removed!" });
      } catch (error) {
        return res.send(error);
      }
});

module.exports = router;
/**
 * Created by kavuri on 2/8/2017.
 */
var express = require('express');
var router = express.Router();
var CeoModel = require('../model/ceoModel');

router.get('/ceo',function(req,res,next){
    CeoModel.find({},function(err,ceodata){
        if(err){
            console.log("error occured "+ err);
            res.send(err);
        }
        else{
            res.json(ceodata);
        }
    })
})
module.exports = router;
/**
 * Created by kavuri on 2/5/2017.
 */
var express= require('express');
var router= express.Router();
var CompanyModel = require('../model/companyModel');


router.get('/company', function(req,res,next){
    CompanyModel.find({},function(err,companydata){
        if (err) {
            console.log("error occured "+ err);
            res.send(err);
        }
        else{
            res.json(companydata);
        }

    });


});
module.exports = router;
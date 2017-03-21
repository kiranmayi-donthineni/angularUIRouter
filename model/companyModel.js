/**
 * Created by kavuri on 2/5/2017.
 */
var mongoose=require('mongoose');
    Schema = mongoose.Schema;

mongoose.models = {};
mongoose.modelSchemas = {};
var CompanySchema = new mongoose.Schema({
    name:{type:String, required:true},
    headquarters:{type:String},
    phone:{type:String}

});

var CompanyModel = mongoose.model('classroom', CompanySchema,'company' );
module.exports=CompanyModel;
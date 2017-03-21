/**
 * Created by kavuri on 2/8/2017.
 */
var mongoose=require('mongoose');
Schema = mongoose.Schema;

mongoose.models = {};
mongoose.modelSchemas = {};
var CeoSchema = new mongoose.Schema({
    name:{type:String, required:true},
    ceo:{type:String}
});

var CeoModel = mongoose.model('classroom', CeoSchema,'ceo');
module.exports=CeoModel;
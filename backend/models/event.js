const mongoose = require('mongoose');
const Schema = mongoose.Schema

const eventSchema = new Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true},
    verified:{type:Boolean,default: false},
    creator:{type:mongoose.Types.ObjectId,required:true,ref:'User'}
})

module.exports = mongoose.model('Event',eventSchema);
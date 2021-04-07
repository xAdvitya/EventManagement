const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    creatorName:{type:String,required:true},
    image:{type:String,required:true},
    verified:{type:Boolean,default: false},
})

module.exports = mongoose.model('Event',eventSchema);
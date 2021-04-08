const HttpError = require('../models/http-error');
const { v4: uuidv4 } = require('uuid');
const Event = require('../models/event')
const User = require('../models/user')

const getEventsById = async (req,res,next)=>{
    const eventId = req.params.eid;
    let event;
    try{
        event = await Event.findById(eventId);
    } 
    catch{
        const error = new HttpError('something went wrong ,could not find place',500);
        return next(error);
    }
    if(!event){
        const error = new HttpError('could not find place for id',404);
        return next(error);
    }
    res.json({event:event.toObject({getters:true})})
};

const getEventsByUserId = async (req,res,next)=>{

    const userId = req.params.uid;
    let events;

    try{
    events = await Event.find({creatorName:userId});
    }catch(err){
        const error = new HttpError(
            'finding places failed',500
        );
        return next(error);
    }
    
    if(!events || events.length === 0){
        throw next(new HttpError('cannot find events for uid',404));
    }

    res.json({events:events.map(e=>e.toObject({getters:true}))})
};

const createEvent = async (req,res,next)=>{
    const {name,description,creator} = req.body;
    const createdEvent=new Event({
        name,
        description,
        image:'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib= \
        rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        creator
    })
    let user;  
    try{
        user = await User.findById(creator)
    }catch(err){
        const error = new HttpError('Creating place failed,please try again',500)
        return next(error)
    }

    if(!user){
        const error = new HttpError('Cannot find user for id',404)
        return next(error)
    }

    try{
    await createdEvent.save();
    }
    catch(err){
        const error = new HttpError('creating place failed',500);
        return next(error);
    }
    res.status(201).json({event:createdEvent})
};

const deleteEvent = async (req,res,next)=>{
    const eventId = req.params.eid;
    let event;
    try{
        event = await Event.findById(eventId);
    }catch(err){
        const error = new HttpError('could not delete place and find',500);
        return next(error);
    }

    try{
        await event.remove()
    }catch(err){
        const error = new HttpError('could not delete place',500);
        return next(error);
    }

    res.status(200).json({message:'deleted place'})
}

const ex = (req,res,next)=>{
    console.log("hit")
    res.status(200)
    res.json({A:'1'})
}

exports.getEventsById = getEventsById;
exports.getEventsByUserId = getEventsByUserId;
exports.createEvent = createEvent;
exports.deleteEvent = deleteEvent;
exports.ex = ex;
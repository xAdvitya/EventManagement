const HttpError = require('../models/http-error');
const { v4: uuidv4 } = require('uuid');
const Event = require('../models/event')
const DUMMY_PLACES =[
    {
                id:'e1',
                image:'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                images:['https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib= \
                        rb-1.2.1&auto=format&fit=crop&w=1050&q=80',

                'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib= \
                        rb-1.2.1&auto=format&fit=crop&w=1050&q=80',

                'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib= \
                        rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                ],
                name:'diwali event',
                verified:true,
                joinCount:50,
                creatorId:'u1',
                creatorName:'Bikaraj',
                description:'this event is organized by bikaraj to celebrate holi'
        },
]

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

const getEventsByUserId = (req,res,next)=>{

    const userId = req.params.uid;
    const events = DUMMY_PLACES.filter(p=>{
        return p.creatorId === userId;
    });

    if(!events || events.length === 0){
        throw next(new HttpError('cannot find events for uid',404));
    }
    res.json({events})
};

const createEvent = async (req,res,next)=>{
    const {id,name,description,creatorId,creatorName} = req.body;
    const createdEvent=new Event({
        name,
        description,
        image:'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib= \
        rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        creatorName
    })
    try{
    await createdEvent.save();
    }
    catch{
        const error = new HttpError('creating place failed',500);
        return next(error);
    }
    res.status(201).json({event:createdEvent})
};

const deleteEvent = (req,res,next)=>{
    const eventId = req.params.id;
    DUMMY_PLACES = DUMMY_PLACES.filter(e=> p.id !== eventId);
    res.status(200).json({message:"event deleted"});
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
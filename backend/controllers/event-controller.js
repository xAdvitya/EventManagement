const HttpError = require('../models/http-error');
const { v4: uuidv4 } = require('uuid');

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

const getPlaceById = (req,res,next)=>{
    const eventId = req.params.eid;
    console.log(eventId)
    const event = DUMMY_PLACES.find(e=>{
        return e.id == eventId;
    });
    if(!event){
        throw new HttpError('cannot find event for eid',404);
    }
    res.json({event})
};

const getPlaceByUserId = (req,res,next)=>{

    const userId = req.params.uid;
    const event = DUMMY_PLACES.find(p=>{
    return p.creatorId == userId;
});

if(!event){
    return next(new HttpError('cannot find event for uid',404));
}

res.json({place})
};

const createEvent = (req,res,next)=>{
    const {id,name,description,creatorId,creatorName} = req.body;
    const createdEvent={
        id:uuidv4(),
        name,
        description,
        creatorId,
        creatorName,
    };

    DUMMY_PLACES.push(createdEvent);
    res.status(201).json({event:createdEvent})
};


exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createEvent = createEvent;
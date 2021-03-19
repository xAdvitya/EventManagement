const { Router } = require('express');
const express = require('express')
const router = express.Router();

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

router.get('/:eid',(req,res,next)=>{
    const eventId = req.params.eid;
    console.log(eventId)
    const event = DUMMY_PLACES.find(e=>{
        return e.id == eventId;
    });
    res.json({event})
});

module.exports = router;

import React from 'react'
// import { useParams } from 'react-router-dom';
import EventDetails from '../components/EventDetails';

const DUMMY_EVENTS = [
        {
                id:'e1',
                image:'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                name:'diwali event',
                verified:true,
                joinCount:50,
                creatorId:'u1',
                creatorName:'Bikaraj',
                description:'this event is organized by bikaraj to celebrate holi'
        },
        {
                id:'e2',
                image:'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                name:'holi event',
                verified:false,
                joinCount:40,
                creatorId:'u2',
                creatorName:'Akash',
                description:'this event is organized by Akash to celebrate holi'
        },
];

const Details = () => {
    // const eventId = useParams().eventId;
    const eventId = 'e1';
    var loadedPlaces = DUMMY_EVENTS.filter(event =>event.id === eventId);

    return (
        <EventDetails event={loadedPlaces[0]}/>
    );
}

export default Details;

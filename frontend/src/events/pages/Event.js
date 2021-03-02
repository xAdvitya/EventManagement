import EventList from '../components/EventList'
import React, { Component } from 'react'
import Selector from '../components/Selector';
import Navbar from '../../shared/components/navigation/Navbar';
export class Event extends Component {

constructor(props) {
    super(props);
    this.state = {
        eventType:'ALLEVENTS',
    };
    this.handelChange = this.handelChange.bind(this)
}

    DUMMY_EVENTS = [
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
        {
                id:'e2',
                image:'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                 images:['https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib= \
                        rb-1.2.1&auto=format&fit=crop&w=1050&q=80',

                'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib= \
                        rb-1.2.1&auto=format&fit=crop&w=1050&q=80',

                'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib= \
                        rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                ],
                name:'holi event',
                verified:false,
                joinCount:40,
                creatorId:'u2',
                creatorName:'Akash',    
                description:'this event is organized by Akash to celebrate holi'
        },
    ];

    handelChange = (e)=>{
        this.setState({eventType:e.target.value})
    }
    
    render() {
        
    const currentEventType = this.state.eventType;
    const filteredEvents=''

    if(currentEventType === 'VERIFIED'){
        this.filteredEvents = this.DUMMY_EVENTS.filter(event =>event.verified === true);
    }
    else if(currentEventType === 'UNVERIFIED'){
        this.filteredEvents = this.DUMMY_EVENTS.filter(event =>event.verified === false);
    }
    else{
        this.filteredEvents = this.DUMMY_EVENTS;
    }

    return (
        <React.Fragment>
            <Navbar/>
            <Selector handelChange={this.handelChange}/>
            <div>
            <EventList events={this.filteredEvents} />
            </div>
        </React.Fragment>
        )
    }
}

export default Event

import React ,{useState,useEffect}from 'react'
import Navbar from '../../shared/components/navigation/Navbar';
import EventComments from '../components/EventComments';
import { useParams } from 'react-router-dom';
import EventDetails from '../components/EventDetails';


const DUMMY_EVENTS = [
        {
                id:'60773db007d18d31701e3c0a',
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
                image:
                'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib= \
                        rb-1.2.1&auto=format&fit=crop&w=1050&q=80',

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

const Details = () => {
    
    const eventId = useParams().eventId;
    const [event,setevent] = useState([]);
    const [isLoading,setisLoading] = useState(true);
    var loadedPlaces = DUMMY_EVENTS.filter(event =>event.id === eventId);

    useEffect(() => {
        const sendRequest = async () => {
            try {
                
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/events/${eventId}`); 

              const responseData = await response.json();
              
              console.log(responseData)
              console.log("responseData")
    
              if (!response.ok) {
                console.log("error")
              }
            console.log(responseData)
            setevent(responseData)
            setisLoading(false)
        
            } catch (err) {
              console.log("errorxx");
              console.log(err);
            }
          };
          sendRequest();
        },[]);


    return (
        <React.Fragment>
                <Navbar/>
                {!isLoading &&<EventDetails event={event}/>}
                {/* <EventForm/> */}
                {/* <EventComments/> */}
        </React.Fragment>
    );
}
export default Details;

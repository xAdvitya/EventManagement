import EventList from '../components/EventList'
import React, { Component ,useEffect,useState} from 'react'
import Navbar from '../../shared/components/navigation/Navbar';

const Event = () => {

    const [eventType,seteventType] = useState('UNVERIFIED');
    const [events,setevents] = useState([]);
    const [isLoading,setisLoading] = useState(true);

    const handelChange = (e)=>{
        seteventType(e.target.value)
    }

    useEffect(() => {
    const sendRequest = async () => {

        if(isLoading === false){
            if(eventType === 'VERIFIED'){
                console.log("verified")
                console.log(events['events'])
                setevents(Array.isArray(events['events']) ? events['events'].filter(event =>event.verified === true) : []);
            }
    }
        else if(eventType === 'UNVERIFIED'){
            console.log('UNVERIFIED')
            seteventType('UNVERIFIED')
            console.log(events.filter(event =>event.verified === false))
            setevents(events.filter(event =>event.verified === false));
        }
        else{
            console.log(events)
            // setfilteredEvents(events);
        }

        try {
          const response = await fetch(process.env.REACT_APP_BACKEND_URL+'/events');
    
          const responseData = await response.json();
          
          console.log(responseData)
          console.log("responseData")

          if (!response.ok) {
            console.log("error")
          }
        console.log(responseData)
        setevents(responseData)
        setisLoading(false)
    
        } catch (err) {
          console.log("errrrrrroooooooorrrrrrr");
          console.log(err);
        }
      };
      sendRequest();
    },[]);
  


    return (
        <React.Fragment>
            <Navbar/>
            <div className="container justify-content-start">
                {!isLoading &&  
            <EventList events={events} />}
            </div>
        </React.Fragment>
    )
}

export default Event

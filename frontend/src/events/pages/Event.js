import EventList from '../components/EventList'
import React, { Component ,useEffect,useState} from 'react'
import Selector from '../components/Selector';
import Navbar from '../../shared/components/navigation/Navbar';

// export class Event extends Component {

// constructor(props) {
//     super(props);
//     this.state = {
//         eventType:'ALLEVENTS',
//         events:{},
//     };
//     this.handelChange = this.handelChange.bind(this)
// }
//     handelChange = (e)=>{
//         this.setState({eventType:e.target.value})
//     }

//     filteredEvents=[]

//     render() {

//             const sendRequest = async () => {
//               try {
//                 const response = await fetch('http://localhost:5000/api/events');
          
//                 const responseData = await response.json();
//                 this.setState({events:responseData})

//                 if (!response.ok) {
//                   console.log("error")
//                 }
          
//               } catch (err) {
//                 console.log(err);
//               }
//             };

//             sendRequest();
        
//     const currentEventType = this.state.eventType;


//     if(currentEventType === 'VERIFIED'){
//         this.filteredEvents = this.state.events.filter(event =>event.verified === true);
//     }
//     else if(currentEventType === 'UNVERIFIED'){
//         this.filteredEvents = this.state.events.filter(event =>event.verified === false);
//     }
//     else{
//         this.filteredEvents = this.state.events;
//         console.log(this.state.events)
//         console.log("hhiiiiiiiiiiii")
//     }

//     return (
//         <React.Fragment>
//             <Navbar/>
//             <Selector handelChange={this.handelChange}/>
//             <div>
//             <EventList events={this.state.events} />
//             </div>
//         </React.Fragment>
//         )
//     }
// }

// export default Event

// import React from 'react'

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
            <div className="mr-4 container justify-content-start">
                {!isLoading &&  
            <EventList events={events} />}
            </div>
        </React.Fragment>
    )
}

export default Event

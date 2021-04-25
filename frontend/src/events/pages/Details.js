import React ,{useState,useEffect}from 'react'
import Navbar from '../../shared/components/navigation/Navbar';
import EventComments from '../components/EventComments';
import { useParams } from 'react-router-dom';
import EventDetails from '../components/EventDetails';


const Details = () => {
    
    const eventId = useParams().eventId;
    const [event,setevent] = useState([]);
    const [isLoading,setisLoading] = useState(true);


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
        </React.Fragment>
    );
}
export default Details;

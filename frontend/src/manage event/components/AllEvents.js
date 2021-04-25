import React ,{useEffect,useState,useContext,useCallback}from 'react'
import Navbar from '../../shared/components/navigation/Navbar';
import { AuthContext } from '../../shared/context/auth-context';


const AllEvents = (props) => {

  const auth = useContext(AuthContext)
  const userId = auth.userId;
  console.log(userId)
  const [events,setevents] = useState([]);
  const [isLoading,setisLoading] = useState(true);
  
  const sendRequest = useCallback(async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/events/user/${userId}`); 
      // const response = await fetch(`${userId}`); 

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
      console.log(err);
    }
  }, []);

useEffect(() => {
  sendRequest();
},[sendRequest]);


const handleDelete = async(id)=>{
      try{
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/events/${id}`, {
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json'
      },
      });
      setisLoading(true)
      sendRequest();
        }catch (err) {
          console.log(err);
        }
    }


    return (
      <React.Fragment>
      <Navbar/>

        <div className="row mx-auto container justify-content-start mt-5">

              {!isLoading && events['events'] &&
                (events['events'].map(event=>{
                return (
                <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                <div className="card event-card" >

                    <img className="card-img-top" src="https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg" alt="Card image cap" />

                    <div className="card-body card-event-head">
                      <h3>{event.name}</h3>
                      {/* <h5>{event.description}</h5> */}

                      <button onClick={() => handleDelete(event.id)} className="btn btn-danger mr-3">delete</button>
                    
                    </div>

                </div>
                </div>
                )})
                )
              }
              {!events['events'] &&
              <h3>no event</h3>
              }
              
              </div>


      </React.Fragment>
    )
}

export default AllEvents

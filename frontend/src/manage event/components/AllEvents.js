import React ,{useEffect,useState,useContext,useCallback}from 'react'
import Navbar from '../../shared/components/navigation/Navbar';
import { AuthContext } from '../../shared/context/auth-context';


const AllEvents = (props) => {

  const auth = useContext(AuthContext)
  const userId = auth.userId;
  // const userId='http://localhost:5000/api/events/user/60769bb551b95b12e865e913'
  console.log(userId)
  const [events,setevents] = useState([]);
  const [isLoading,setisLoading] = useState(true);
  
  const sendRequest = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/events/user/${userId}`); 
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
      const response = await fetch(`http://localhost:5000/api/events/${id}`, {
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
                <div className="card" >

                    <img className="card-img-top" src={event.image} alt="Card image cap" />

                    <div className="card-body">
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

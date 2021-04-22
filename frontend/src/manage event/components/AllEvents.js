import React ,{useEffect,useState,useContext}from 'react'
import Navbar from '../../shared/components/navigation/Navbar';
import { AuthContext } from '../../shared/context/auth-context';
// import ManageEvents from '../pages/ManageEvents'
const AllEvents = (props) => {

  const auth = useContext(AuthContext)
  // const userId = auth.userId;
  const userId='http://localhost:5000/api/events/user/60769bb551b95b12e865e913'
  console.log(userId)
  const [events,setevents] = useState([]);
  const [isLoading,setisLoading] = useState(true);
  
  useEffect(() => {
    const sendRequest = async () => {
        try {
          // const response = await fetch(`http://localhost:5000/api/events/user/${userId}`); 
          const response = await fetch(`${userId}`); 
    
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
      };
      sendRequest();
    },[]);
  

    return (
      <React.Fragment>
      <Navbar/>

        <div className="row mx-auto container justify-content-start mt-5">

              {!isLoading &&
                (events['events'].map(event=>{
                return (
                <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                <div className="card" >

                    <img className="card-img-top" src={event.image} alt="Card image cap" />

                    <div className="card-body">
                      <h3>{event.name}</h3>
                      {/* <h5>{event.description}</h5> */}
                      
                    <button className="btn btn-danger mr-3">delete</button>
                    <button className="btn btn-primary">edit</button>
                    </div>

                </div>
                </div>
                )})
                )
              }</div>


      </React.Fragment>
    )
}

export default AllEvents

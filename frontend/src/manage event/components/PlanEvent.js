import React ,{useContext}from 'react'
import Navbar from '../../shared/components/navigation/Navbar'
import { AuthContext } from '../../shared/context/auth-context'

const PlanEvent = () => {

    const auth = useContext(AuthContext);

    const formSubmitHandler = async(event)=>{
        
        event.preventDefault();
        const data = new FormData(event.target);
        
    try{
        console.log(data)
       const response = await fetch(process.env.REACT_APP_BACKEND_URL+'/events',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name: data.get('title'),
                description: data.get('description'),
                creator:auth.userId
              })
        });
        const responseData = await response.json();
        document.getElementById("myForm").reset();

        
    }
    catch(err){
        console.log(err);
    }
}

    return (
        <React.Fragment>
        <Navbar/>

        <div className="container mt-4">
            <form id="myForm" onSubmit={formSubmitHandler} >
                
                <label htmlFor="1" className="form-label" >Event Name</label>
                <input className="form-control" name="title" type="text" id="1"/>

                  <label htmlFor="2" className="form-label" >Event Description</label>
                  <textarea name="description" className="form-control" id="2"></textarea>
{/* 
                  <label htmlFor="3" className="form-label">Add Pictures</label>
                  <input name="images" className="form-control"type="file" multiple id="3"/> */}

                  {/* <label htmlFor="last_date">Event Time</label>
                  <input name="date" type="date" id="last_date"/> */}
                  <button type="submit" className="mt-3 btn btn-primary float-right">
                      submit
                  </button>
            </form>

        <div className="mt-5 container justify-content-center">
            <h4>verify your event at </h4>
            <span class="badge badge-success">advityasharma9858@gmail.com</span>
        </div>
        </div>
        </React.Fragment>

    )
}

export default PlanEvent

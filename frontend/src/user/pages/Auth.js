import React,{useState,useContext,Component} from 'react'
import Navbar from '../../shared/components/navigation/Navbar';
import {AuthContext} from '../../shared/context/auth-context'
import { BrowserRouter, Route, Redirect} from 'react-router-dom'
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { ImageUpload } from '../../shared/components/image/ImageUpload';


const Auth = () => {

    const auth = useContext(AuthContext);
    const [isLogin, setisLogin] = useState(true);
    let history = useHistory();

    const authSubmitHandler = async event=>{

        event.preventDefault();
        
        const data = new FormData(event.target);
        console.log(event.target)
        if(isLogin){
            try{
                console.log(22222)
                
                console.log(process.env.REACT_APP_BACKEND_URL)
               const response = await fetch(process.env.REACT_APP_BACKEND_URL+'/users/login',{
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        email: data.get('email'),
                        password: data.get('password')
                      })
                });
                    const responseData = await response.json();
                    
                    auth.login(responseData.user.id);

                    if(response.ok){

                        history.push('/')
                    }
                    
            }
            catch(err){
                console.log(err);
            } 
        }
        else{
        try{
         
           const response = await fetch(process.env.REACT_APP_BACKEND_URL+'/users/signup',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    name: data.get('name'),
                    email: data.get('email'),
                    password: data.get('password')
                    // image:data.get('image')
                  })
            });
                const responseData = await response.json();
                auth.login(responseData.user.id);
                
                if(response.ok){
                    history.push('/')
                }
        }
        catch(err){
            console.log(err);

        } 
    }
}

    const switchModeHandler = (event)=>{
        
        setisLogin(!isLogin)
    }

    return (
        <React.Fragment>
        <Navbar/>
    <div className="container mt-4">
        <form encType="multipart/form-data" onSubmit={authSubmitHandler}>

            {!isLogin &&
            (<><label className="form-label">username</label>
            <input className="form-control" name="name" type="text" id="name" label="your name"/></>)
            }
            {/* <div>

            {!isLogin && <ImageUpload id="image"/>}
            
            </div> */}

            <label className="form-label">email</label>
            <input className="form-control" type="email" name="email" id="email" label="email" />

           <label className="form-label">password</label> 
            <input  className="form-control" name="password" type="password" id="password" label="password" />

            <button className="mt-3 btn btn-primary float-right" type="submit">submit</button>
        </form>
        <button className="mt-3 mr-3 btn btn-secondary float-right" onClick={switchModeHandler}>switch to {isLogin?'SIGNUP':"LOGIN"}</button>
    </div>
    </React.Fragment>
    )
}

export default Auth

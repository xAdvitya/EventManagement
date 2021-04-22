import React,{useState,useContext,Component} from 'react'
import Navbar from '../../shared/components/navigation/Navbar';
import {AuthContext} from '../../shared/context/auth-context'
import { BrowserRouter, Route, Redirect} from 'react-router-dom'
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";


// export class Auth extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             isLogin : true,
//             name:'',
//             email:'',
//             password:''
//         };
//       }
    
//     render() {

//         const authSubmitHandler = async event=>{
//             event.preventDefault();
//             AuthContext.login();
//             const data = new FormData(event.target);
//             // console.log(data.get('email'));
//             // console.log(data.get('name'));
//             // console.log(data.get('password'));
//             if(this.state.isLogin){
//                 try{
//                     console.log(data)
//                    const response = await fetch('http://localhost:5000/api/users/login',{
//                         method:'POST',
//                         headers:{
//                             'Content-Type': 'application/json'
//                         },
//                         body:JSON.stringify({
//                             email: data.get('email'),
//                             password: data.get('password')
//                           })
//                     });
//                         const responseData = await response.json();
//                         console.log(responseData);
    
//                         if(response.ok){
//                             const { match, location, history } = this.props
//                             history.push('/')
//                         }
//                 }
//                 catch(err){
//                     console.log(err);
//                 } 
//             }
//             else{
//             try{
//                 console.log(data)
//                const response = await fetch('http://localhost:5000/api/users/signup',{
//                     method:'POST',
//                     headers:{
//                         'Content-Type': 'application/json'
//                     },
//                     body:JSON.stringify({
//                         name: data.get('name'),
//                         email: data.get('email'),
//                         password: data.get('password')
//                       })
//                 });
//                     const responseData = await response.json();
//                     console.log(responseData);

//                     if(response.ok){
//                         return <Redirect to='/' />
//                     }
//             }
//             catch(err){
//                 console.log(err);

//             } 
//         }
//     }

//         const switchModeHandler = (event)=>{
//             this.setState({isLogin:!this.state.isLogin})
//             // this.state.isLogin =!this.state.isLogin;
//         }


//         return (
//         <React.Fragment>
//             <Navbar/>
//         <div>
//             <form onSubmit={authSubmitHandler}>

//                 {!this.state.isLogin &&
//                 <label>
//                 username
//                 <input name="name" type="text" id="name" label="your name"/>
//                 </label>
//                 }

//                 email
//                 <input type="email" name="email" id="email" label="email" />

//                 password
//                 <input  name="password" type="password" id="password" label="password" />

//                 <button type="submit">submit</button>
//             </form>
//             <button onClick={switchModeHandler}>switch to {this.state.isLogin?'SIGNUP':"LOGIN"}</button>
//         </div>
//         </React.Fragment>
//         )
//     }
// }

// export default withRouter(Auth);

const Auth = () => {

    const auth = useContext(AuthContext);
    const [isLogin, setisLogin] = useState(true);
    let history = useHistory();

    const authSubmitHandler = async event=>{

        event.preventDefault();
        
        const data = new FormData(event.target);
        if(isLogin){
            try{
                console.log(data)
               const response = await fetch('http://localhost:5000/api/users/login',{
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
            console.log(data)
           const response = await fetch('http://localhost:5000/api/users/signup',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    name: data.get('name'),
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
}

    const switchModeHandler = (event)=>{
        setisLogin(!isLogin)
    }

    return (
        <React.Fragment>
        <Navbar/>
    <div className="container mt-4">
        <form onSubmit={authSubmitHandler}>

            {!isLogin &&
            (<><label className="form-label">username</label>
            <input className="form-control" name="name" type="text" id="name" label="your name"/></>)
            
            }

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

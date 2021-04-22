import './App.css';
import React,{useState,useCallback,useContext} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Navbar from './shared/components/navigation/Navbar';
import Event from './events/pages/Event'
import Details from './events/pages/Details';
import MakeEvents from './manage event/pages/ManageEvents';
import PlanEvent from './manage event/components/PlanEvent';
import Login from './shared/components/login/pages/Login';
import Auth from './user/pages/Auth';
import { AuthContext } from './shared/context/auth-context';
import AllEvents from './manage event/components/AllEvents';


function App() {
  const [isLoggedIn,setLoggedIn] = useState(false);
  const [userId,setuserId] = useState(false);
  
  const login = useCallback(uid=>{
    setLoggedIn(true);
    setuserId(uid);
  },[]);

  const logout = useCallback(()=>{
    setLoggedIn(false);
    setuserId(null);
  },[]);
 
  return (
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn,userId:userId,login:login,logout:logout}} >
      <Router>
        <main>
         <Switch>
          <Route path='/' exact>
             <Event/>
          </Route>
          
          <Route path="/test" exact>
            <Details/>
          </Route>

          <Route path="/:eventId/events" exact>
                <Details/>
          </Route>

          <Route exact path="/manageevent/planevent" >
                <PlanEvent/>
          </Route>

          <Route exact path="/manageevent/allevents" >
                <AllEvents/>
          </Route>

          <Route path="/auth" exact>
                <Auth/>
          </Route>
{/*             
          <Redirect to={isLoggedIn ? "/" : "/auth"}/> */}
         </Switch>
        </main>
      </Router>
    </AuthContext.Provider> 
  );
}

export default App;
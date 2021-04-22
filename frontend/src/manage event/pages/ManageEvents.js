import React, { Component ,useState} from 'react'
import Navbar from '../../shared/components/navigation/Navbar'
import SideBar from '../components/SideBar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import PlanEvent from '../components/PlanEvent';
import AllEvents from '../components/AllEvents';
import Comments from '../components/Comments'
import Stats from '../components/Stats';


const ManageEvents = () => {
    
    return (
        <div>
            <React.Fragment>
            <Navbar/>
            <div className="manage_buttons">
            <button className="btn btn-info"><Link to="/manageevent/planevent">Plan event</Link></button>
            <button className="btn btn-info"><Link to="/manageevent/allevents">All events</Link></button>
            </div>
            </React.Fragment>
        </div>
    )
        }

export default ManageEvents;

// export class MakeEvents extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {component: <PlanEvent/>};
//       }
//     render() {
//     let component;
//     {
//     if(window.location.pathname === '/manageevent/planevent'){
//         this.state.component = <PlanEvent/>;
//     }

//     else if(window.location.pathname === '/manageevent/allevents'){
//         this.state.component =  <AllEvents/>;
//     }

//     else if(window.location.pathname === '/manageevent/comments'){
//         component = <Comments/>
//     }
//     else if(window.location.pathname === '/manageevent/stats'){
//         component = <Stats/>
//     }
// }
//         return (
//             <React.Fragment>
//             <Navbar/>
//              <div>   
//                 <SideBar/>
//             </div>
//             {this.state.component}
//             </React.Fragment>
//         )
//     }
// }

// export default MakeEvents

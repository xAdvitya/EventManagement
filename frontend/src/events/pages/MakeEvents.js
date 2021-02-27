import React, { Component } from 'react'
import Navbar from '../../shared/components/navigation/Navbar'
import SideBar from '../components/SideBar'

export class MakeEvents extends Component {
    render() {
        return (
            <React.Fragment>
            <Navbar/>
            <div>
                <SideBar/>
            </div>

            </React.Fragment>
        )
    }
}

export default MakeEvents

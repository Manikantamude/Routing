import React from 'react'
import {Link} from 'react-router-dom'
import "../App.css"

class Navigation extends React.Component{
    render(){
        return(
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        )
    }
}
export default Navigation;
import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
    let token = localStorage.getItem("access-token");
  return (
    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
    <ul className="navbar-nav">
                        <li className="nav-item"><NavLink className="text-uppercase nav-link font-weight-bold my-2 mx-3" style={{fontSize : "16px", color : "#000"}} to="/">home</NavLink></li>
                        <li className="nav-item"><NavLink className="text-uppercase nav-link font-weight-bold my-2 mx-3" style={{fontSize : "16px", color : "#000"}} to="/about">about</NavLink></li>
                        {
                            token
                            ?
                            <>
                            <li className="nav-item"><NavLink className="text-uppercase nav-link font-weight-bold my-2 mx-3" style={{fontSize : "16px", color : "#000"}} to="/my-account">{localStorage.getItem("name")}</NavLink></li>
                            <li className="nav-item"><NavLink className="text-uppercase nav-link font-weight-bold my-2 mx-3" style={{fontSize : "16px", color : "#000"}} to="/logout">logout</NavLink></li>
                            </>
                            :
                            <>
                            <li className="nav-item"><NavLink className="text-uppercase nav-link font-weight-bold my-2 mx-3" style={{fontSize : "16px", color : "#000"}} to="/login">login</NavLink></li>
                            <li className="nav-item"><NavLink className="text-uppercase nav-link font-weight-bold my-2 mx-3" style={{fontSize : "16px", color : "#000"}} to="/signup">signup</NavLink></li>

                            {
                                localStorage.getItem("business-access-token")
                                ?
                                <>
                                    <li className="nav-item"><NavLink  className="text-uppercase nav-link font-weight-bold my-2 mx-3 bg-info" style={{fontSize : "16px", color : "#000"}} to="/business/manage">{localStorage.getItem("business-name")}</NavLink></li>
                                    

                                </>
                                :
                                <li className="nav-item"><NavLink className="text-uppercase nav-link font-weight-bold my-2 mx-3" style={{fontSize : "16px", color : "#000"}} to="/business/signup">business register</NavLink></li>

                            }
                            </>

                        }
                        


                        
                        
                    </ul>
  </div>
  )
}

export default Nav

/*
<div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link font-weight-bold my-2 mx-3" style={{fontSize : "16px", color : "#000"}} href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link font-weight-bold my-2 mx-3" style={{fontSize : "16px", color : "#000"}} href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link font-weight-bold my-2 mx-3" style={{fontSize : "16px", color : "#000"}} href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link font-weight-bold my-2 mx-3" style={{fontSize : "16px", color : "#000"}} href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link font-weight-bold my-2 mx-3" style={{fontSize : "16px", color : "#000"}} href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link font-weight-bold my-2 mx-3" style={{fontSize : "16px", color : "#000"}} href="#">Home</a>
                </li>
            
            
            </ul>
        </div>
*/
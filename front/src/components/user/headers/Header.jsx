import React, {useState, useEffect} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Nav from './Nav'
import TopSection from '../../TopSection'

const Header = () => {
    let location = useLocation()
    let [pathName, setPathName] = useState("");
    useEffect(()=>{
        if(location.pathname=="/about"){
            setPathName("About");
        }
        if(location.pathname=="/login"){
            setPathName("User Login");
        }
        if(location.pathname=="/signup"){
            setPathName("User Registration");
        }
        if(location.pathname=="/business/signup"){
            setPathName("Business Registration");
        }
        if(location.pathname=="/business/login"){
            setPathName("Login Registration");
        }
        if(location.pathname=="/booktable"){
            setPathName("Table Booking");
        }
    },[])

  return (
    
  <>

    <header className='header-area header-area2'>
    <div className="container" style={{backgroundColor : "#fff"}}>
        <nav className="navbar navbar-expand-md navbar-light">
        <NavLink to="/"><img src="/assets/images/logo/logo.png" alt="logo" /></NavLink>
        <button style={{backgroundColor : "#FFB606"}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <Nav />
    </nav>
    </div>
    </header>
    <TopSection name={pathName} />
    </>

  )
}

export default Header
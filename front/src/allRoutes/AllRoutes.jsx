import React, { useEffect } from 'react'
import {Routes, Route, Outlet, useNavigate, NavLink} from 'react-router-dom'
import Header from '../components/user/headers/Header'
import {
  Home,
  About, 
  Login,
  Signup,
  BusinessLogin, 
  BusinessSignup,
  Signup2,
  Logout,
  MyAccout,
  BusinessLogout,
  BookingDetail,
  Manage,
  MyBooking
} from '../pages'
import Dashboard from '../pages/business/Dashboard'
import ViewHotels from '../pages/business/ViewHotels'
import ViewBooking from '../pages/business/ViewBooking'
import AddHotels from '../pages/business/AddHotels'
import BookTable from '../pages/user/BookTable'


const AllRoutes = () => {
  return (
    <>

    <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='booktable/:id' element={<BookTable />} />
        <Route path='signup2' element={<Signup2 />} />

        <Route path='' element={<UserProtactedRoutes />}>

          <Route path='logout' element={<Logout />} />
          <Route path='my-account' element={<MyAccout />} />
          <Route path='bookingdetail' element={<BookingDetail />} />
          <Route path='my-booking' element={<MyBooking />} />

        </Route>

        

        <Route path='business/manage' element={<Manage />}>
          <Route path='' element={<Dashboard />} />
          <Route path='viewhotels' element={<ViewHotels />} />
          <Route path='viewbooking' element={<ViewBooking />} />
          <Route path='addhotels' element={<AddHotels />} />
        </Route>


        <Route path='business/signup' element={<BusinessSignup />} />
        <Route path='business/login' element={<BusinessLogin />} />
        <Route path='business/logout' element={<BusinessLogout />} />
    </Routes>
    </>
    // /business/manage
    // /business/manage/
    // /business/manage/viewhotels
    // /business/manage/viewbooking
    // /business/manage/addhotels
  )
}

export default AllRoutes

let UserProtactedRoutes = ()=>{
  let navigate = useNavigate();
  useEffect(()=>{
    if(! localStorage.getItem("access-token")){
      navigate("/login");
    }

  },[]);

  return(
    <>
    
    <Header />
    <section className="welcome-area my-4" style={{minHeight : "600px"}}>
        <div className="container">
            <ul className='nav bg-dark p-2'>
              <li className='nav-item'>
                <NavLink className='nav-link text-light p-3' to='/my-account'>My Account</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link text-light p-3' to='/my-booking'>My Booking</NavLink>
              </li>
              
              <li className='nav-item'>
                <NavLink className='nav-link text-light p-3' to='/logout'>Logout</NavLink>
              </li>
            </ul>
      <Outlet />
        </div>
    </section>
    </>
  )
}



/*
  let arr = craeteRouter();

  arr = [
  {
    route : "",
    path : ""
  }
  ]


*/
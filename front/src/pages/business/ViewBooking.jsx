import React, {useEffect} from 'react'
import {API_URL} from '../../constants/API_URL'
import axios from 'axios'

const ViewBooking = () => {
  useEffect(()=>{
    axios.get(`${API_URL}/hotelbooking/list/owner`, {
      headers : {
         Authorization : localStorage.getItem("business-access-token")
      }
    })
    .then(response=>{
      console.log(response.data)
    })
  },[])


  return (
    <div>ViewBooking</div>
  )
}

export default ViewBooking
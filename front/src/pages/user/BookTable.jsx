import React, { useEffect, useState } from 'react'
import Modal  from 'react-bootstrap/Modal'
import Button  from 'react-bootstrap/Button'
import Header2 from '../../components/user/headers/Header'
import dayjs from 'dayjs'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../constants/API_URL'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useFormik } from 'formik'

import * as YUP from 'yup'
import HotelSchema from '../../schemas/HotelSchema'
import BookingSchema from '../../schemas/BookingSchema'



let today = dayjs();
const start = dayjs().set('hour', 11).startOf('hour');
const end = dayjs().set('hour', 22).startOf('hour');

const BookTable = () => {
  let navigate = useNavigate();
  let param = useParams();
  let [hotelInfo, setHoteInfo] = useState({});
  let [preloader, setPreloader] = useState(false);
  let [price, setPrice] = useState(0)
  let [totalPrice, setTotalPrice] = useState(0)
  let [businessId, setBusinessId] = useState()


  let [showModal, setShowModal] = useState(false)
  
  useEffect(()=>{
    axios.get(`${API_URL}/hotels/${param.id}`).then(response=>{
      console.log(response.data);
      setHoteInfo(response.data);
      setPrice(response.data.price);
      setBusinessId(response.data.businessId._id)
    })
  },[])

  let bookFrm = useFormik({
    validationSchema : BookingSchema ,
    initialValues : {
      date : "",
      time : "",
      tables : ""
    },
    onSubmit : (formData)=>{
      if(localStorage.getItem("access-token")){
        setPreloader(true);
        formData.hotelId = param.id;
        formData.businessId = businessId;
        axios.post(`${API_URL}/hotelbooking`, formData, {
          headers : { Authorization : localStorage.getItem("access-token")}
        })
        .then(response=>{
          console.log(response.data);
        })
      }else{
        setShowModal(true)
      }

    }
  })

  let goToLogin = ()=>{
    setShowModal(false);
    navigate("/login")
  }

  let calcPrice = (event)=>{
    let numOftable = event.target.value;
    setTotalPrice(numOftable*price);
  }

  return (
    <>
        <Header2 />
        <Modal show={showModal} data-bs-theme="dark">
        <Modal.Header>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>You are not logged in.... Please Login First then book the table</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShowModal(false)}>Close</Button>
          <Button onClick={goToLogin} variant="primary">Go To Login</Button>
        </Modal.Footer>
        </Modal>





        <section className="welcome-area my-3" style={{minHeight : "600px"}}>
        <div className="container">
            <div className="row">
              <div className="col-md-8">
              <img src="/assets/images/hotel1.jpg" className="img-fluid" style={{height : "600px", width : "100%"}} alt="" />
              <h3 className='my-2'>{hotelInfo.hotelname}</h3>
              <p className="pt-3">
                <i class="fa fa-users" aria-hidden="true"></i> {hotelInfo.businessId ? hotelInfo.businessId.business_name   : ''}
                <br />
                <i class="fa fa-map-marker" aria-hidden="true"></i> {hotelInfo.address}
              </p>
              
              <p>Timing : 11:00AM - 10:00PM</p>
              <h5 className='badge bg-info text-light'>4.3</h5>
              <h5 className='text-dark'>Menu</h5>
                <div className="row">
                  <div className="col-md-6">
                    <img src="/assets/images/menu.jpg" className="img-fluid" style={{height : "300px", width : "100%"}} alt="" />
                  </div>
                </div>

              </div>
              <div className="col-md-4">
                <form onSubmit={bookFrm.handleSubmit}>
                <div className="card">
                  <div className="card-header"  style={{backgroundColor : "#131230"}}>
                    <h5 className='text-light'>Select an Offer or Deal</h5>
                    
                  </div>
                  <div className="card-body">
                    <div className="my-2 ">

                    <label>Select Date</label><br />
                    <div style={{width : "80%"}}>

                      <DatePicker className='form-control' name='date'  onChange={(value)=>bookFrm.setFieldValue("date", (value.$D+"-"+(value.$M+1)+"-"+value.$y))} 
                      label="Select Date" minDate={today}  />
                      </div>
                      <br/>
                    
                    {
                      bookFrm.errors.date && bookFrm.touched.date
                      ?
                      <small className='text-danger'>{bookFrm.errors.date}</small>
                      :
                      ''
                    }
                   
                    
                    <div className="my-2">

                    <label>Select Time</label>
                    <div style={{width : "80%"}}>

                    <DemoContainer components={['TimePicker']}>
                    <TimePicker   name='time' onChange={(value)=>bookFrm.setFieldValue("time", (value.$H+":"+value.$m))} maxTime={end} minTime={start} />
                    </DemoContainer>
                    </div>
                    {
                      bookFrm.errors.time && bookFrm.touched.time
                      ?
                      <small className='text-danger'>{bookFrm.errors.time}</small>
                      :
                      ''
                    }
                    </div>
                    <div className="my-2">

                    <label>Select Table</label>
                     <div >
                     <input style={{width : "79%", height : "50px"}} placeholder='Table Number' name='tables' onChange={(e)=>{ bookFrm.handleChange(e); calcPrice(e)}} type='text' className='form-control' />
                     <small>6 person/table</small>
                     </div>
                    
                    {
                      bookFrm.errors.tables && bookFrm.touched.tables
                      ?
                      <small className='text-danger'>{bookFrm.errors.tables}</small>
                      :
                      ''
                    }
                    </div>
                     <div className='my-2'>
                    <label>Price/Table</label>
                     <input disabled style={{width : "79%", height : "50px"}} type='text' value={hotelInfo.price} className='form-control' />
                     
                     </div>
                     <div className='my-2'>
                      <label>Total Price</label>
                     <input style={{width : "79%", height : "50px"}} disabled value={totalPrice} type='text' className='form-control' />
                     
                     </div>
                    
                    </div>
                    
                  

                    <button type='submit' className='btn-block btn btn-success'>Book Table { preloader ? <span className='spinner-border spinner-border-sm'></span> : '' }</button>

                    

                  </div>
                </div>
                </form>
              </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default BookTable
import React,{useState} from 'react'
import {useFormik} from 'formik'
import HotelSchema from '../../schemas/HotelSchema'
import axios from 'axios'
import {API_URL} from '../../constants/API_URL'
import {useNavigate} from 'react-router-dom'

const AddHotels = () => {
    let navigate = useNavigate();
    let [preloader, setPreloader] = useState(false);
    
    let addFrm = useFormik({
        validationSchema : HotelSchema,
        initialValues : {
        hotelname : "",
        hotelimage : "",
        menuimage : "",
        address : "",
        tables : "",
        price : ""
        },
        onSubmit : (formData)=>{
           setPreloader(true);

            axios.post(`${API_URL}/businessmanage/hotels`, formData, {
                headers : {
                    Authorization : localStorage.getItem("business-access-token")
                }
            }).then(response=>{
                if(response.data.success==true){
                    setPreloader(false);
                    navigate("/business/manage/viewhotels");
                }
            })
        }
    })


  return (
    <div className="row">
        <div className="col-md-10 offset-md-1">
            <form onSubmit={addFrm.handleSubmit}>
            <h4 className='text-dark'>Add New Hotel for Your Business</h4>
            <div className="my-3">
                <label>Hotel Name</label>
                <input type='text' name='hotelname' onChange={addFrm.handleChange}  className={'form-control ' + (addFrm.errors.hotelname && addFrm.touched.hotelname ? 'is-invalid' : '')} />
                {
                      addFrm.errors.hotelname && addFrm.touched.hotelname
                      ?
                      <small className='text-danger'>{addFrm.errors.hotelname}</small>
                      :
                      ''
                   }
            </div>
            <div className="my-3">
                <label>Hotel Image</label>
                <input type='file' name='hotelimage' onChange={addFrm.handleChange} className={'form-control ' + (addFrm.errors.hotelimage && addFrm.touched.hotelimage ? 'is-invalid' : '')} />
                {
                      addFrm.errors.hotelimage && addFrm.touched.hotelimage
                      ?
                      <small className='text-danger'>{addFrm.errors.hotelimage}</small>
                      :
                      ''
                   }
            </div>
            <div className="my-3">
                <label>Menu Image</label>
                <input type='file' name='menuimage' onChange={addFrm.handleChange} className={'form-control ' + (addFrm.errors.menuimage && addFrm.touched.menuimage ? 'is-invalid' : '')} />
                {
                      addFrm.errors.menuimage && addFrm.touched.menuimage
                      ?
                      <small className='text-danger'>{addFrm.errors.menuimage}</small>
                      :
                      ''
                   }
            </div>
            <div className="my-3">
                <label>Hotel Address</label>
                <textarea name='address' onChange={addFrm.handleChange} className={'form-control ' + (addFrm.errors.address && addFrm.touched.address ? 'is-invalid' : '')} ></textarea>
                {
                      addFrm.errors.address && addFrm.touched.address
                      ?
                      <small className='text-danger'>{addFrm.errors.address}</small>
                      :
                      ''
                   }
            </div>
            <div className="my-3">
                <label>Number of Tables</label>
                <input name='tables' onChange={addFrm.handleChange} type='text' className={'form-control ' + (addFrm.errors.tables && addFrm.touched.tables ? 'is-invalid' : '')} />
                {
                      addFrm.errors.tables && addFrm.touched.tables
                      ?
                      <small className='text-danger'>{addFrm.errors.tables}</small>
                      :
                      ''
                   }
            </div>
            <div className="my-3">
                <label>Per Table Price</label>
                <input name='price' onChange={addFrm.handleChange} type='text' className={'form-control ' + (addFrm.errors.price && addFrm.touched.price ? 'is-invalid' : '')} />
                {
                      addFrm.errors.price && addFrm.touched.price
                      ?
                      <small className='text-danger'>{addFrm.errors.price}</small>
                      :
                      ''
                   }
            </div>
            
            <div className="my-3">
                
                <button type='submit' className='btn btn-success'>Add Hotel { preloader ? <img src='/assets/images/preloader3.gif' style={{height : "20px"}} /> : '' }</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default AddHotels
/*
    hotel name
    address
    menu - image
    hotel - image
    number of table - 
    price - 
*/
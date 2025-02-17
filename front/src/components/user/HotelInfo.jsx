import React from 'react'
import {NavLink} from 'react-router-dom'

const HotelInfo = (props) => {
  return (
    <div className="col-md-3 col-sm-6">
                                <div className="single-food mt-5 mt-sm-0">
                                    <div className="food-img">
                                        <img src="assets/images/food2.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="food-content">
                                        <div className="d-flex justify-content-between">
                                            <h5>{props.hotel.hotelname}</h5>
                                        </div>
                                        
                                        <p className="pt-3">
                                        <i class="fa fa-users" aria-hidden="true"></i> {props.hotel.businessId.business_name}
                                        <br />
                                            <i class="fa fa-map-marker" aria-hidden="true"></i> {props.hotel.address}
                                        </p>
                                            <NavLink to={`/booktable/${props.hotel._id}`} className=' template-btn btn-sm'>Book Table</NavLink>
                                    </div>
                                </div>
                            </div>
  )
}

export default HotelInfo
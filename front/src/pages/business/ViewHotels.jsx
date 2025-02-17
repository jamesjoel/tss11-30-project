import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { API_URL } from '../../constants/API_URL'
import {Button, Modal} from 'react-bootstrap'


const ViewHotels = () => {
  let [showAskDelete, setShowAskDelete] = useState(false); 
  let [allHotel, setAllHotel] = useState([]);
  let [hotel, setHotel] = useState({});

  useEffect(()=>{
    axios.get(`${API_URL}/businessmanage/hotels`, {
      headers : { Authorization : localStorage.getItem("business-access-token")}
    }).then(response=>{
      setAllHotel(response.data);
    })
  },[])

  let askDelete = (obj)=>{
    setHotel(obj);
    setShowAskDelete(true);
  }

  let confDelete = ()=>{
    
    // 1. call the delete api
    // 2. delete from behind
    // 3. close the popup

    axios.delete(`${API_URL}/businessmanage/hotels/${hotel._id}`, {
      headers : { Authorization : localStorage.getItem("business-access-token")}
    }).then(response=>{
      // console.log(response.data);
      setAllHotel((x)=>{
        let arr = x.filter(item=> item._id != hotel._id );
        return arr;
      });

      setShowAskDelete(false);
    })

  }


  return (
    <>
    <div className="row">
      <div className="col-md-12">
        <h4 className='text-dark'>List of All Hotels</h4>
        <table className="table table-dark table-hover table-striped table-boredered">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Address</th>
              <th>Tables</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {
              allHotel.map((item, index)=><tr key={index}>
                <td>{index+1}</td>
                <td>{item.hotelname}</td>
                <td>{item.address}</td>
                <td>{item.tables}</td>
                <td>{item.price}</td>
                <td><button onClick={()=>askDelete(item)} className='btn btn-danger btn-sm'>
                      <i className='fa fa-trash'></i>
                  </button></td>
                
                  <td><button className='btn btn-info btn-sm'>
                      <i className='fa fa-pencil'></i>
                  </button></td>
              </tr>)
            }
          </tbody>
        </table>

      </div>
    </div>





      {/* ASK DELETE POPUP START */}
      <Modal show={showAskDelete} >
        <Modal.Header>
          <Modal.Title>Delete Hotels</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure want to detele <b>{ hotel ? hotel.hotelname : ''}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>setShowAskDelete(false)} variant="secondary">
            Close
          </Button>
          <Button onClick={confDelete} variant="danger">
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      {/* ASK DELETE POPUP END */}


  </>

  )
}

export default ViewHotels
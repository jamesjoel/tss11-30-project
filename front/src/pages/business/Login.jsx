import React, { useState } from 'react'
import Header2 from '../../components/user/headers/Header'
import {useFormik} from 'formik'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {API_URL} from '../../constants/API_URL'
import LoginFrmSchema from '../../schemas/LoginSchema'


const Login = () => {
    let navigate = useNavigate();
    let [errMsg, setErrMsg] = useState("")
    let [preloader, setPreloader] = useState(false);
    
    let loginFrm = useFormik({
        validationSchema : LoginFrmSchema,
        initialValues : {
            username : "",
            password : ""
        },
        onSubmit : (formData)=>{
           setPreloader(true);

           axios
           .post(`${API_URL}/businessauth`, formData)
           .then(response=>{
            

             if(response.data.success==true){
                setPreloader(false);
                localStorage.setItem("business-access-token", response.data.token)
                localStorage.setItem("business-name", response.data.business)
                navigate("/business/manage");
             }
             else{
                if(response.data.errType==1){
                    setPreloader(false);
                    setErrMsg("This Username/Email and Password is Incorrect");
                }
                if(response.data.errType==2){
                    setPreloader(false);
                    setErrMsg("This Password is Incorrect");
                }
             }
           })
        }
    })

  return (
    <>
    <Header2 />
    <section className="welcome-area section-padding2" style={{minHeight : "600px"}}>
        <div className="container-fluid">
            <form onSubmit={loginFrm.handleSubmit}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card border border-1">
                        <div className="card-header footer-widget">
                            <h4>Business Login</h4>
                        </div>
                        <div className="card-body">
                            <div className="my-2">
                                <label>Username</label>
                                <input type='text' name='username' onChange={loginFrm.handleChange} className={'form-control ' + (loginFrm.errors.username && loginFrm.touched.username ? 'is-invalid' : '')} />
                                {
                                            loginFrm.errors.username && loginFrm.touched.username
                                            ?
                                            <small className='text-danger'>{loginFrm.errors.username}</small>
                                            :
                                            ''
                                        }
                            </div>
                            <div className="my-2">
                                <label>Password</label>
                                <input type='password' name='password' onChange={loginFrm.handleChange} className={'form-control ' + (loginFrm.errors.password && loginFrm.touched.password ? 'is-invalid' : '')} />
                                {
                                            loginFrm.errors.password && loginFrm.touched.password
                                            ?
                                            <small className='text-danger'>{loginFrm.errors.password}</small>
                                            :
                                            ''
                                        }
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type='submit' className='template-btn'>Login { preloader ? <img src='/assets/images/preloader3.gif' style={{height : "20px"}} /> : '' }</button>
                            <p className='text-danger text-center'>
                                {
                                    errMsg
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
    </section>
    </>
  )
}

export default Login
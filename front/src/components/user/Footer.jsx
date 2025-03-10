import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-area">
        <div className="footer-widget section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="single-widget single-widget1">
                            <a href="index.html"><img src="assets/images/logo/logo2.png" alt="" /></a>
                            <p className="mt-3">Welcome to FOODFUN – the ultimate destination for food lovers! Whether you're a seasoned foodie or someone just looking for your next great meal, we're here to make dining out easier and more enjoyable. Our goal is simple: connect you with the best restaurants, exclusive deals, and unforgettable dining experiences..</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single-widget single-widget2 my-5 my-md-0">
                            <h5 className="mb-4">contact us</h5>
                            <div className="d-flex">
                                <div className="into-icon">
                                    <i className="fa fa-map-marker"></i>
                                </div>
                                <div className="info-text">
                                    <p>303, Goldstar Building, M.G. Road, Opposite Treasure Island Mall, Indore, Madhya Pradesh 452001 </p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="into-icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="info-text">
                                    <p>+91 9893006633</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="into-icon">
                                    <i className="fa fa-envelope-o"></i>
                                </div>
                                <div className="info-text">
                                    <p>steppingstone.indore@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single-widget single-widget3">
                            <h5 className="mb-4">opening hours</h5>

                            
                            <p>sun-sat ............... 11 am - 11 pm</p>
                            <p>Holidays ............. 11 am - 11 pm</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer
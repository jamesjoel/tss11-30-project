import React from 'react'
import Header2 from '../../components/user/headers/Header2'
import Header from '../../components/user/headers/Header'

const About = () => {

      

  return (
    <>
    <Header />
    <section className="welcome-area section-padding2">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 align-self-center">
                    
                    <div className="welcome-img">
                        
                        <img src="assets/images/welcome-bg.png" className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 align-self-center">
                    <div className="welcome-text mt-5 mt-md-0">
                        <h3><span className="style-change">welcome</span> <br/>to food fun</h3>
                        <p className="pt-3">Welcome to FOODFUN – the ultimate destination for food lovers! Whether you're a seasoned foodie or someone just looking for your next great meal, we're here to make dining out easier and more enjoyable. Our goal is simple: connect you with the best restaurants, exclusive deals, and unforgettable dining experiences..</p>
                        <p>From discovering hidden gems to booking your table in advance, we’ve got you covered. Explore a variety of cuisines, read reviews from fellow diners, and make reservations at your favorite spots – all in one place. Because we believe that eating out should always be about more than just food, it should be about the experience!</p>
                        <a href="#" className="template-btn mt-3">book a table</a>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
    </>
  )
}

export default About
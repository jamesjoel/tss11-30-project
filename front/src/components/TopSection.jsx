import React from 'react'
import { useLocation } from 'react-router-dom'

const TopSection = (props) => {
  let location = useLocation();
  
  return (
    <section className="banner-area banner-area2 text-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                  {
                    location.pathname == "/"
                    ?
                    <>
                    <h6>best online table booking website in indore</h6>
                    <h1>Discover the <span className="prime-color">flavors</span><br/>  
                    <span className="style-change">of <span className="prime-color">food</span>fun</span></h1>
                    </>
                    :
                    <>
                    <h1><i>{props.name}</i></h1>
                    <p className="pt-2"><i>Beast kind form divide night above let moveth bearing darkness.</i></p>
                    </>
                  }
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopSection
import React from 'react'
import "./Banner.css";
import bannerbg  from "../../assets/images/banner.png";
import { GrSearch } from "react-icons/gr";
import { GrLocation } from "react-icons/gr";



function Banner() {
  return (
    <section id='banner'style={{backgroundImage:`url(${bannerbg})`}}>
        <div className="container">
            <div className="banner_content">
                <h1 className='bannerheading'>
                  CHOOSE <br />THE PERFECT DESTINATIONS.
                </h1>
                <p className='bannerpara'>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
                  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi 
                  enim ad minim veniam, quis nostrud exerci tation.
                </p>
                <div className="searchloaction">
                    <input 
                      type="text"
                      placeholder='Enter Your Location' />
                      <div className="serahicon"><GrSearch/></div>
                
                    <div className="locationicon">
                        <GrLocation />
                    </div>
                </div>
                </div>
            </div>
    
    </section>
  )
}

export default Banner
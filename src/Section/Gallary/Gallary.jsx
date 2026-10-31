import React from 'react'
import './Gallary.css'
import gallaryimgone from "../../assets/images/gallarypic1.png"
import gallaryimgtwo from "../../assets/images/gallarypic2.png"
import gallaryimgthree from "../../assets/images/gallarypic3.png"
import gallaryimgfour from "../../assets/images/gallarypic4.png"
import gallaryimgfive from "../../assets/images/gallarypic5.png"
import gallaryimgsix from "../../assets/images/gallarypic6.png"
import gallaryimgseven from "../../assets/images/gallarypic7.png"
import gallaryimgeight from "../../assets/images/gallarypic8.png"
import gallarybg from "../../assets/images/gallarybg.png"
function Gallary() {
  return (
   <section id="gallary">
      <div className="container">
        <div className="gallarybg"><img src={gallarybg} alt="bg" /></div>
        <div className="gallaryheadingwrapper">
            <h2>Most Destinations</h2>
            <p className='gallarypara'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        <div className="gallaryimgwrape">
            <div className="gallarypc">
               <div className="longpic">
                 <div className="longoverlay">
                    <span className='address'>North America</span>
                    <span className='compliment'>Nice Place.</span>
                </div>
                 <img src={gallaryimgone} alt="img" />
               </div>
               <div className="shortpic">
                <div className="shortoverlay">
                    <span className='address'>Cambodia</span>
                    <span className='compliment'>Nice Place.</span>
                </div> 
                <img src={gallaryimgfive} alt="img" />
               </div>
            </div>

            <div className="gallarypc">
               <div className="shortpic">
                <div className="shortoverlay">
                    <span className='address'>South America</span>
                    <span className='compliment'>Nice Place.</span>
                </div> 
                 <img src={gallaryimgtwo} alt="img" />
               </div>
               <div className="longpic">
                <div className="longoverlay">
                    <span className='address'>Cape Town</span>
                    <span className='compliment'>Nice Place.</span>
                </div>
                <img src={gallaryimgsix} alt="img" />
               </div>
            </div>

                 <div className="gallarypc">
               <div className="longpic"> 
                <div className="longoverlay">
                    <span className='address'>Europe</span>
                    <span className='compliment'>Nice Place.</span>
                </div> 
                 <img src={gallaryimgthree} alt="img" />
               </div>
               <div className="shortpic">
                <div className="shortoverlay">
                    <span className='address'>South Africa</span>
                    <span className='compliment'>Nice Place.</span>
                </div> 
                <img src={gallaryimgseven} alt="img" />
               </div>
            </div>

            <div className="gallarypc">
               <div className="shortpic">
                <div className="shortoverlay">
                    <span className='address'>New York</span>
                    <span className='compliment'>Nice Place.</span>
                </div> 
                 <img src={gallaryimgfour} alt="img" />
               </div>
               <div className="longpic">
                <div className="longoverlay">
                    <span className='address'>Australia</span>
                    <span className='compliment'>Nice Place.</span>
                </div> 
                <img src={gallaryimgeight} alt="img" />
               </div>
            </div>
            
        </div>
        </div>
      </div>
   </section>
  )
}

export default Gallary
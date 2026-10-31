import React from 'react'
import "./Destination.css";
import destinationvideo from "../../assets/images/destination.png";
import { FaPlay } from "react-icons/fa";
import { IoStar } from "react-icons/io5";


function Destination() {
  return (
   <section id='destination'>
      <div className="container">
        <div className="destination_section_wrapper">
            <div className="des_textcontent">
                <h5>FEATURED DESTINATION</h5>
                <h3>CHOOSE <br />THE PERFECT ACCOMMODATION.</h3>
                 <p className='destinationrpara'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
            <div className="des_videocontent">
                 <div className="playbtn">
                    <FaPlay />
                </div>
                <img src={destinationvideo} alt="img"/>
            </div>
        </div>
               <div className="ticketbookwrapper">
                <div className="travellocation">
                    <h5 className='ticketbookheading'>TRAVEL LOCATION</h5>
                     <div className="destinationicon">
                        <IoStar /><IoStar /><IoStar /><IoStar /><IoStar />
                    </div>
                 </div>
                <div className="borderline"></div>
                <div className="tourprice">
                    <span className='packamountheading'>Tour Price</span>
                    <span className='packageamount'>$125,99</span>

                </div>
                <div className="destibtn"><button className='bookbtn'>BOOK NOW</button></div>
            </div>
      </div>
   </section>
  )
}

export default Destination
import React from 'react'
import"./Package.css";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import destibg from "../../assets/images/packagedestinationbg.png"


function Package() {
  return (
   <section className='package'>
    <div className="container">
        <div className="destipackagebg"><img src={destibg} alt="img" /></div>
        <div className="packageheadinwraper">
            <h2 className='packageheading'>Special Package</h2>
            <p className='packagepara'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        </div>
        <div className="packagecard_wrapper">
                 {/* 1st card start */}
            <div className="package_card">
              <div className="packcarduppercontent">
                <h4 className='packagecardheading'>STARTER</h4>
                  <div className="cardamount">
                    <span className='packagemoney'>$9</span>
                  </div>
                <span className='packageduration'>Per Month</span>
                <ul className='packagemenu'>
                    <li>
                       <IoCheckmarkCircleSharp />
                       <span className='packlist'> International Air Ticket.</span>
                    </li>
                     <li>
                        <IoCheckmarkCircleSharp />
                       <span className='packlist'>Daily Continental Breakfast.</span>
                    </li>
                    <li>
                        <IoCheckmarkCircleSharp />
                         <span className='packlist'>  Lunch And Dinner</span>
                    </li>
                    <li>
                        <IoCheckmarkCircleSharp />
                         <span className='packlist'> City Tour with Guide</span>
                    </li>
                    <li>
                        <IoCheckmarkCircleSharp />
                         <span className='packlist'> 09 Nights Hotel</span>
                    
                    </li>
                    <li>
                        <IoCheckmarkCircleSharp />
                         <span className='packlist'> Desert Safari & BBQ Dinner</span>
                    </li>
                </ul>
                </div>
                <button className='packagebtn'>GET STARTED</button>
               <div className="packlowercontentwrape">
                  <span className='packlowercontent'>4 Days Trial Available</span>
               </div>
            </div>

              {/* 1st card end */}
              {/* 2nd card start */}
            
            <div className="package_card">
              <div className="packcarduppercontent">
                <h4 className='packagecardheading'>STARTER</h4>
                  <div className="cardamount">
                    <span className='packagemoney'>$199</span>
                  </div>
                <span className='packageduration'>Per Month</span>
                <ul className='packagemenu'>
                    <li>
                       <IoCheckmarkCircleSharp />
                       <span className='packlist'> International Air Ticket.</span>
                    </li>
                     <li>
                        <IoCheckmarkCircleSharp />
                       <span className='packlist'>Daily Continental Breakfast.</span>
                    </li>
                    <li>
                        <IoCheckmarkCircleSharp />
                         <span className='packlist'>  Lunch And Dinner</span>
                    </li>
                    <li>
                        <IoCheckmarkCircleSharp />
                         <span className='packlist'> City Tour with Guide</span>
                    </li>
                    <li>
                        <IoCheckmarkCircleSharp />
                         <span className='packlist'> 09 Nights Hotel</span>
                    
                    </li>
                    <li>
                        <IoCheckmarkCircleSharp />
                         <span className='packlist'> Desert Safari & BBQ Dinner</span>
                    </li>
                </ul>
                </div>
                <button className='packagebtn'>GET STARTED</button>
               <div className="packlowercontentwrape">
                  <span className='packlowercontent'>4 Days Trial Available</span>
               </div>
            </div>

              {/* 2nd card end */}
               
               {/* 3rd card start */}

            
            <div className="package_card">
              <div className="packcarduppercontent">
                <h4 className='packagecardheading'>STARTER</h4>
                  <div className="cardamount">
                    <span className='packagemoney'>$499</span>
                  </div>
                <span className='packageduration'>Per Month</span>
                <ul className='packagemenu'>
                    <li>
                       <IoCheckmarkCircleSharp />
                       <span className='packlist'> International Air Ticket.</span>
                    </li>
                     <li>
                        <IoCheckmarkCircleSharp />
                       <span className='packlist'>Daily Continental Breakfast.</span>
                    </li>
                    <li>
                        <IoCheckmarkCircleSharp />
                         <span className='packlist'>  Lunch And Dinner</span>
                    </li>
                    <li>
                        <IoCheckmarkCircleSharp />
                         <span className='packlist'> City Tour with Guide</span>
                    </li>
                    <li>
                        <IoCheckmarkCircleSharp />
                         <span className='packlist'> 09 Nights Hotel</span>
                    
                    </li>
                    <li>
                        <IoCheckmarkCircleSharp />
                         <span className='packlist'> Desert Safari & BBQ Dinner</span>
                    </li>
                </ul>
                </div>
                <button className='packagebtn'>GET STARTED</button>
               <div className="packlowercontentwrape">
                  <span className='packlowercontent'>4 Days Trial Available</span>
               </div>
            </div>

            {/* 3rd card end */}
        </div>
    </div>
   </section>
  )
}

export default Package
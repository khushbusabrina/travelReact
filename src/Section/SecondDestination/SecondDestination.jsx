import React from 'react'
import "./SecondDestination.css"
import secdestpic from "../../assets/images/seconddesinationpic.png"
import seconddesbg from "../../assets/images/seconddestibg.png"

function SecondDestination() {
  return (
    <section id='seconddestination'>
        <div className="container">
            <div className="seconddestibg">
                <img src={seconddesbg} alt="bg" />
            </div>
            <div className="seconddestinationwraper">
                <div className="seconddestinationpic">
                    <img src={secdestpic} alt="img" />
                </div>
                <div className="seconddesticontent">
                     <h5 >FEATURED DESTINATIONS</h5>
                     <h3>TAKE ONLY <br />MEMORIES, LEAVE ONLY FOOTPRINTS.</h3>
                     <p className='seconddestipara'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SecondDestination
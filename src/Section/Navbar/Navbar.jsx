import React from 'react'
import logo from "../../assets/images/logo.png"
import "./Navbar.css"
import { MdMessage } from "react-icons/md";
import { TbLocationShare } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";




function Navbar() {
  return (
    <nav>
        <div className="container">
            <div className="navbar_wrapper">
                <div className="logo"><img src={logo} alt="logo" /></div>
                <div className="menu">
                    <ul>
                         <li><a href=''>HOME</a></li>
                         <li><a href=''>PAGES</a></li>
                         <li><a href=''>TRAVEL</a></li>
                         <li><a href=''>BLOG</a></li>
                         <li><a href=''>SHOP</a></li>
                         <li><a href=''>LEMENTS</a></li>
                    </ul>
                </div>
                <div className="icon_btn_wrapper">
                    <div className="icon">
                        <MdMessage />
                    </div>
                    <div className="icon">
                        <TbLocationShare />

                    </div>
                    <div className="icon">
                        <FaHeart />


                    </div>
                    <div className="icon">
                        <FiPlus />

                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
